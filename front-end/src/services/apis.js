import axios from 'axios';

const PORT = 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const fetchUser = async () => {
  const result = await api.get('/users');
  return result.data;
};

export const fetchProduct = async () => {
  const result = await api.get('/products');
  return result.data;
};

export const fetchSale = async () => {
  const result = await api.get('/sales');
  return result.data;
};

export const fetchSaleProduct = async () => {
  const result = await api.get('/salesproducts');
  return result.data;
};

export const setLogin = async (email, password) => {
  const result = await api.post('/login', { email, password });
  return result.data;
};

export const createUser = async (name, email, password) => {
  const result = await api.post('/users', { name, email, password });
  return result.data;
};

export const createUserByAdmin = async (obj) => {
  const { name, email, password, role, token } = obj;
  console.log(obj);
  const result = await api.post('/users/admin',
    { name, email, password, role },
    { headers: { authorization: token } });
  return result.data;
};

export const createSale = async (object) => {
  const { totalPrice, deliveryAddress,
    deliveryNumber, status, products, token, sellerId } = object;
  const result = await api.post('/sales',
    { totalPrice, deliveryAddress, deliveryNumber, status, products, sellerId },
    { headers: { authorization: token } });
  return result.data;
};

export const getUserById = async (id) => {
  const result = await api.get('/users/:id', { id });
  return result.data;
};

export const updateSale = async (id, status) => {
  await api.put(`/sales/${id}`, { status });
};
