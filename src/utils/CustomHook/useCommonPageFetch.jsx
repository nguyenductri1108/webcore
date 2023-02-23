import { useState, useRef, useEffect } from "react"
import axios from 'axios'
import { BASE_API } from '../../constants'

const useCommonPageFetch = (
  url,
  arrayKey,
  params = {}
) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [items, setItems] = useState([])
  const npage_url = useRef('')

  const doneLoading = () => {
    return setTimeout(() => setLoading(false), 200)
  }

  useEffect(() => {
    if (params.offset !== 0) return
    setItems([])
    setError(false)
    setLoading(true)
    setHasMore(true)
    let doneLoadingTimeout
    let cancel
    axios({
      method: 'get',
      url: url,
      params: params,
      cancelToken: new axios.CancelToken(c => cancel = c),
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("shop_access_token")}`
      }
    }).then(response => {
      // setLoading(false)
      doneLoadingTimeout = doneLoading()
      const { data, code } = response.data
      if (code !== 200) {
        setError(true)
        return
      }
      setItems(data[arrayKey])
      setHasMore(!data.meta.end)
      npage_url.current = data.meta.npage_url
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
      // setLoading(false)
      doneLoadingTimeout = doneLoading()
    })

    return () => {
      cancel()
      clearTimeout(doneLoadingTimeout)
    }
  }, [url, params, arrayKey])

  useEffect(() => {
    if (params.offset === 0 || !hasMore) return
    setLoading(true)
    setError(false)
    let doneLoadingTimeout
    let cancel
    axios({
      method: 'get',
      url: `${BASE_API}/${npage_url.current}`,
      cancelToken: new axios.CancelToken(c => cancel = c),
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("shop_access_token")}`
      }
    }).then(response => {
      // setLoading(false)
      doneLoadingTimeout = doneLoading()
      const { data, code } = response.data
      if (code !== 200) {
        setError(true)
        return
      }
      setItems(prev => [...prev, ...data[arrayKey]])
      setHasMore(!data.meta.end)
      npage_url.current = data.meta.npage_url
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
      // setLoading(false)
      doneLoadingTimeout = doneLoading()
    })

    return () => {
      cancel()
      clearTimeout(doneLoadingTimeout)
    }
  }, [params])

  return { loading, error, hasMore, items }
}

export default useCommonPageFetch