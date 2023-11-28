async function fetchUserLogin(phone) {
    const url = new URL(`https://6549dd1de182221f8d52037f.mockapi.io/user/`);
    url.searchParams.append('phone', phone);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Fetch request failed');
        }
    } catch (error) {
        throw new Error('Error fetching data');
    }
}

export { fetchUserLogin };

