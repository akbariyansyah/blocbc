import { FETCH_REGULAR_FAILURE, FETCH_REGULAR_REQUEST, FETCH_REGULAR_SUCCESS } from "./regularTypes"

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const regularReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGULAR_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_REGULAR_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ""
            }
        case FETCH_REGULAR_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}
export default regularReducer