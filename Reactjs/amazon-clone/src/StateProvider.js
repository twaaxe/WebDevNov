//setup data layer
//needed to track the basket

import { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();


//build a provider. we'll wrap the enire app inside provider. data layer can access those data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
// has to be linked with Reducer.js and get it's const(in index.js)

export const useStateValue = () => useContext(StateContext);

















