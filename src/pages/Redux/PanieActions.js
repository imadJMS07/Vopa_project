import { addPanier, removePanier, updatePanier, selectPanier, updatePanierMoins } from '../Redux/PanieRreducers';
// Add Panier Action
export const addPanierAction = (Panier) => {
    return (dispatch) => {
        dispatch(addPanier(Panier));
    };
};
// Remove Panier Action
export const removePanierAction = (PanierId) => {
    return (dispatch) => {
        dispatch(removePanier(PanierId));
    };
};
// Update Panier Action
export const updatePanierAction = (PanierId) => {
    return (dispatch) => {
        dispatch(updatePanier(PanierId));
    };
};

export const updatePanierMoinsActions = (PanierId) => {
    return (dispatch) => {
        dispatch(updatePanierMoins(PanierId));
    };
};


// Select Panier Action
export const selectPanierAction = (Panier) => {
    return (dispatch) => {
        dispatch(selectPanier(Panier));
    };
};