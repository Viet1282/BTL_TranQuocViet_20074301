async function fetchUsers() {
    const response = await fetch('https://6549dd1de182221f8d52037f.mockapi.io/user/');
    const data = await response.json();
    return data;
  }
  export { fetchUsers };