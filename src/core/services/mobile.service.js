import { getStorage, setStorage } from "./localStorage.service";

const base = `https://front-test-api.herokuapp.com/api/product/`;

export const getAllMobiles = async ({ searchText = '' }) => {
    const keyStorage = 'allMobiles';
    let mobileList = getStorage({ key: keyStorage });
    if (!mobileList) {
        const url = `${ base }`;
        const request = await fetch(url);
        mobileList = await request.json();
        setStorage({ key: keyStorage, value: mobileList });
    }
    return mobileList;
}

export const getMobileById = async ({ mobileId }) => {
    const keyStorage = `mobile-${ mobileId }`;
    let mobile = getStorage({ key: keyStorage });
    if (!mobile) {
        const url = `${ base }${ mobileId }`;
        const request = await fetch(url);
        mobile = await request.json();
        setStorage({ key: keyStorage, value: mobile });
    }
    return mobile;
}