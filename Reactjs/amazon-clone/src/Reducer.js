export const initialState = {
    basket: [
        {
            id: "idproduct1",
            image: "https://picsum.photos/200/300",
            price: 50,
            rating: 5,
            title: "ThisIsTheProducTitle"
        },
        {
            id: "iDoductA",
            image: "https://picsum.photos/200/300",
            price: 30,
            rating: 5,
            title: "ThisProducTitle"
        },
        {
            id: "IdpA",
            image: "https://picsum.photos/200/300",
            price: 30,
            rating: 5,
            title: "ThisProducTitle"
        }
    ],
    user: null,
    //i guesse there are the datas from the data layer
};


function reducer(state, action) {
    //state of data layer
    //manipulate the DL through action
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic for adding item to basket

            return {
                ...state,
                basket: [...state.basket, action.item],

            };
            break;

        case "REMOVE_FROM_BASKET":

            let newBasket = [...state.basket];


            const index = state.basket.findIndex((item) => item.id === action.item.id);

            if (index >= 0) {
                //it existe
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in the basket`
                )

            }


            return { ...state, basket: newBasket };



        default:
            return state;//return the state of DL, so just leave it as it was

    }
}


export const getBasketTotal = (basket) => (
    basket.reduce((amount, item) => item.price + amount, 0)
)




export default reducer;