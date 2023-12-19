import axios from 'axios';

export const getProduct = async () => {
    const { data } = await axios.get(import.meta.env.REACT_APP_API_URL + '/api/products');
    return data;
};