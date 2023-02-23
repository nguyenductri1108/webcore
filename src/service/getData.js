import * as request from "src/utils/httpRequest";

export const getBanners = async () => {
    try {
        const res = await request.get("collections/homebanners/items");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getMenuImg = async () => {
    try {
        const res = await request.get("collections/menu/items");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getNews = async (params) => {
    try {
        const res = await request.get("news", {
            params: { offset: "0", limit: "3" },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getNewsNpageUrl = async (path) => {
    try {
        const res = await request.get(path);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
