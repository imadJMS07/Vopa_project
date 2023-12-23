import { configureStore } from '@reduxjs/toolkit';
import panierReducer from '../Redux/PanieRreducers';

const store = configureStore({
    reducer: {
        paniers: panierReducer,
    },
});

export default store;