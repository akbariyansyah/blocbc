import axios from "axios"
// import { apiKey } from '../../../shared/apiKey'
import { FETCH_SOURCE_FAILURE, FETCH_SOURCE_REQUEST, FETCH_SOURCE_SUCCESS } from "./sourceTypes"

export const fetchSourceRequest = () => {
    return {
        type: FETCH_SOURCE_REQUEST
    }
}
export const fetchSourceSuccess = news => {
    return {
        type: FETCH_SOURCE_SUCCESS,
        payload: news
    }
}
export const fetchSourceFailure = error => {
    return {
        type: FETCH_SOURCE_FAILURE,
        payload: error
    }
}
export const fetchSource = () => {
    return (dispatch) => {
        dispatch(fetchSourceRequest())
        // axios.get(`https://newsapi.org/v2/sources?apiKey=0b7c491410404660a0e1370086c2fa3a`)
        //     .then(response => {
        //         dispatch(fetchSourceSuccess(response.data.sources))
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
}
