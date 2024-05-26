import React, { useReducer, useEffect } from 'react'
import { createContext } from 'react'
import api from '../../AxiosConfig';

export const AuthContext = createContext();

function Reducer (state, action) {
    switch(action.type) {
        case "LOGIN" :
            return {...state, user: action.payload};
        case "LOGOUT" :
            return {...state, user: null};
        default :
        return state;        
    }
};

const InitialState = { user: null }

const AuthContextComponent = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, InitialState);

    function LOGIN(data) {
        dispatch({ type: "LOGIN", payload: data})
    }

    function LOGOUT() {
        dispatch({ type: "LOGOUT"})
    }

    async function getUserData() {
      try {
        const response = await api.get("/api/v1/user/validate-token", { withCredentials: true});
        // const response = { data: { success: true, userData: { name: 'Awdiz', email: "awdiz@gmail.com" } } }
        if (response.data.success) {
          LOGIN(response.data.user);
          console.log(response.data.user, "user")
        }
      } catch (error) {
        console.log(error);
      }
    }
    
      useEffect(() => {
        getUserData();
      }, []);

  return (
    <AuthContext.Provider value={{state, LOGIN, LOGOUT}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextComponent
