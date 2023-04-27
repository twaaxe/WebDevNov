export const initialState = {
    basket: [],
    user: null,
    //i guesse there are the datas from the data layer
};


function reducer(state, action) {
    //state of data layer
    //manipulate the DL through action

    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],

            };
            break;

        case "REMOVE_FROM_BASKET":
            return { state };

            break;

        default:
            return state;//return the state of DL, so just leave it as it was

    }
}

export default reducer;