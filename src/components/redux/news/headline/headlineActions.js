import axios from "axios"
import { FETCH_HEADLINE_FAILURE, FETCH_HEADLINE_REQUEST, FETCH_HEADLINE_SUCCESS } from "./headlineTypes"
// import { apiKey } from '../../../shared/apiKey'
export const fetchHeadlineRequest = () => {
    return {
        type: FETCH_HEADLINE_REQUEST
    }
}
export const fetchHeadlineSuccess = news => {
    return {
        type: FETCH_HEADLINE_SUCCESS,
        payload: news
    }
}
export const fetchHeadlineFailure = error => {
    return {
        type: FETCH_HEADLINE_FAILURE,
        payload: error
    }
}

export const fetchHeadline = () => {
    return (dispatch) => {
        dispatch(fetchHeadlineRequest())
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0b7c491410404660a0e1370086c2fa3a`)
            .then(response => {
                dispatch(fetchHeadlineSuccess(response.data.articles))
            })
            .catch(error => {
                console.log(error)
            })
    }
}