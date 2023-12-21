import { configureStore } from '@reduxjs/toolkit';
// import etudiantReducer from './etudiantSlice';
const store = configureStore({
    reducer: {
        // etudiants: etudiantReducer,
    },
});
export default store;