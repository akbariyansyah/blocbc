import { FETCH_HEADLINE_FAILURE, FETCH_HEADLINE_REQUEST, FETCH_HEADLINE_SUCCESS } from "./headlineTypes"

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const headlineReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HEADLINE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_HEADLINE_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ""
            }
        case FETCH_HEADLINE_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}
export default headlineReducer