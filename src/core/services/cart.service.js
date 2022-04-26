const base = `https://front-test-api.herokuapp.com/api/cart`;

export const addMobileToCart = async ({ colorCode, mobileId, storageCode }) => {
    const url = `${ base }`;
    const request = await fetch(url, {
        body: JSON.stringify({
            colorCode,
            id: mobileId,
            storageCode
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    });
    const data = await request.json();
    return data ? data : { count: 0 };
}