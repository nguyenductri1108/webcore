import { useEffect, useState } from "react"

function useScrollHandle() {

    const [pageYoffset, setPageYoffset] = useState(null)

    const setPageScroll = ()=>setPageYoffset(window.pageYOffset)

    useEffect(()=>{
        window.addEventListener('scroll', setPageScroll)

        return ()=>window.removeEventListener('scroll', setPageScroll)
    },[])

    return  pageYoffset;
}

export default useScrollHandle;