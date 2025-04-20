import { FETCH_SOURCE_FAILURE, FETCH_SOURCE_REQUEST, FETCH_SOURCE_SUCCESS } from "./sourceTypes"

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const sourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SOURCE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SOURCE_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ""
            }
        case FETCH_SOURCE_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}
export default sourceReducer