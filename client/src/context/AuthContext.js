import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";


const INITIAL_STATE = {
    user: {
      "_id":"64f1bde2b6001b98032261cf",
      "username":"hopago123456",
      "email":"ghwns1324@gmail.com",
      "profilePicture":"",
      "coverPicture":"",
      "followers":[],
      "followings":[],
      "isAdmin":false,
      "createdAt":"1693564386978",
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
          }}
        >
            {children}
        </AuthContext.Provider>
    )

};