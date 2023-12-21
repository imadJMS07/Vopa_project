import axios from 'axios';

export const getProduct = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/products');
    return data;
};


export const getProductByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/filterByCategoryy/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};