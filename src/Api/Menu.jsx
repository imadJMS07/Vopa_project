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
        throw error;
    }
};


export const getDetailsProduct = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/showDetails/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};



export const lastProduct = async (id) => {
    try {

        const response = await axios.get('http://127.0.0.1:8000/api/lastproducts');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};