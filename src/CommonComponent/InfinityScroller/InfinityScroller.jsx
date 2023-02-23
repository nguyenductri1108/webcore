import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useCommonPageFetch from "../../utils/CustomHooks/useCommonPageFetch";

const InfinityScroller = ({ url, arrayKey, _params, Item, itemCb, ItemSkeleton, NoItemText }) => {
    const [params, setParams] = useState({});

    const { items, error, hasMore, loading } = useCommonPageFetch(url, arrayKey, params);
    const [lastElementRef, inView] = useInView({});

    useEffect(() => {
        setParams(_params);
    }, [_params]);

    useEffect(() => {
        if (inView && !loading) setParams((prev) => ({ ...prev, offset: prev.offset + 1 }));
    }, [inView, loading]);

    return (
        <>
            {items.map((item, index) => (
                <Item key={item._id + item.status} _id={item._id} cb={itemCb} />
            ))}
            {hasMore && <ItemSkeleton lastElementRef={lastElementRef} />}
            {!loading && items.length === 0 && NoItemText}
        </>
    );
};

export default InfinityScroller;
