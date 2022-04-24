const base = `https://front-test-api.herokuapp.com/api/product/`;

export const getAllMobiles = async ({ searchText = '' }) => {
    const url = `${ base }`;
    const request = await fetch(url);
    const data = await request.json();
    return data ? data : [];
}

export const getMobileById = async ({ mobileId }) => {
    const url = `${ base }${ mobileId }`;
    const request = await fetch(url);
    const data = await request.json();
    return data;
}