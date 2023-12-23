import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
const initialState = {
    Paniers: JSON.parse(localStorage.getItem('paniers')) || [],
};


const PanierSlice = createSlice({
    name: 'paniers',
    initialState,
    reducers: {
        addPanier: (state, action) => {
            state.Paniers.push(action.payload);
            localStorage.setItem('paniers', JSON.stringify(state.Paniers));
        },

        removePanier: (state, action) => {
            state.Paniers = state.Paniers.filter(
                (Panier) => Panier.id !== action.payload
            );
            localStorage.setItem('paniers', JSON.stringify(state.Paniers));
        },

        clearLocalStorage: (state) => {
            state.Paniers = [];
            localStorage.removeItem('paniers');
        },

        updatePanier: (state, action) => {
            const id = action.payload;
            const panier = state.Paniers.find((panier) => panier.id === id);
            if (panier) {
                panier.quantity = panier.quantity + 1;
                panier.total = panier.prix * panier.quantity;
                localStorage.setItem('paniers', JSON.stringify(state.Paniers));

            }
        },

        updatePanierMoins: (state, action) => {
            const id = action.payload;
            const panier = state.Paniers.find((panier) => panier.id === id);
            if (panier) {
                panier.quantity = panier.quantity - 1;
                panier.total = panier.prix * panier.quantity;
                localStorage.setItem('paniers', JSON.stringify(state.Paniers));

            }
        },

        selectPanier: (state, action) => {
            state.selectedPanier = action.payload;
        },
    },
});
export const {
    addPanier,
    removePanier,
    updatePanier,
    clearLocalStorage,
    selectPanier,
    updatePanierMoins,
} = PanierSlice.actions;
export default PanierSlice.reducer;