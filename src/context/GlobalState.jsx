import React, {createContext, useReducer, useEffect} from 'react';
import {AppReducer} from './AppReducer'

// initial state
const initialState = {
  watchlist: [],
  watched: [] 
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
}

// actions
const addMovieToWatchlist = movie => {
  dispatch({type: "ADD_MOVIE_TO_wATCHLIST", payload: movie})
}

return (
  <GlobalContext.Provider 
    value={{watchlist: state.watchlist, watched: state.watched}}>
      {props.children}
  </GlobalContext.Provider>
)