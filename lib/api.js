const BASE_URL = 'https://6121021d24d11c001762eefb.mockapi.io/api/v1';

export const getProducts = async () => await fetch(`${BASE_URL}/prods`).then(res => res.json());

export const getProductById = async (id) => await fetch(`${BASE_URL}/prods/${id}`).then(res => res.json());