//setup data layer
//needed to track the basket

import { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();


//build a provider. we'll wrap the enire app inside provider. data layer can access those data
export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}


//in amazon clone projet (1st use of state provider), it wrap the entire <App /> in index.js
//----> so App is the children of state provider 