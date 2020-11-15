import { FETCH_REGULAR_FAILURE, FETCH_REGULAR_REQUEST, FETCH_REGULAR_SUCCESS } from "./regularTypes"

export const fetchRegularRequest = () => {
    return {
        type: FETCH_REGULAR_REQUEST
    }
}
export const fetchRegularSuccess = news => {
    return {
        type: FETCH_REGULAR_SUCCESS,
        payload: news
    }
}
export const fetchRegularFailure = error => {
    return {
        type: FETCH_REGULAR_FAILURE,
        payload: error
    }
}