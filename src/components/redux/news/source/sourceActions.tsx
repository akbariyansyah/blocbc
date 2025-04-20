import axios from "axios"
import { apiKey } from '../../../shared/apiKey'
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
        axios.get(`https://gnews.io/api/v4/search?q=trending&token=${apiKey}`)
            .then(response => {
                dispatch(fetchSourceSuccess(response.data.articles))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
