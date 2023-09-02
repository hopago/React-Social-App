export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                isFetching: true,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }

};