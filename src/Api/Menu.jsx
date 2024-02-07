import axios from 'axios';

export const getProduct = async () => {
    const { data } = await axios.get('https://api.vopa.ma/api/products');
    return data;
};


export const getProductByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`https://api.vopa.ma/api/filterByCategoryy/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};


export const getDetailsProduct = async (id) => {
    try {
        const response = await axios.get(`https://api.chocolatpatis.shop/api/showDetails/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};



export const lastProduct = async (id) => {
    try {

        const response = await axios.get('https://api.chocolatpatis.shop/api/lastproducts');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};





export const orderByDate = async (id) => {
    try {

        const response = await axios.get(`https://api.vopa.ma/api/orderByDate/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};


export const orderProductsCheapestToMostExpensive = async (id) => {
    try {

        const response = await axios.get(`https://api.vopa.ma/api/orderProductsCheapestToMostExpensive/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};



export const orderProductsMostExpensiveToCheapest = async (id) => {
    try {

        const response = await axios.get(`https://api.vopa.ma/api/orderProductsMostExpensiveToCheapest/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};