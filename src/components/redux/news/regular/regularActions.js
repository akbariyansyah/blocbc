import axios from "axios"
// import { apiKey } from '../../../shared/apiKey'
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
export const fetchRegular = (keyword = "nation") => {
    return (dispatch) => {
        dispatch(fetchRegularRequest())
            axios.get(`https://gnews.io/api/v4/top-headlines?token=7840c54a8e113ef87c10db06f663f641&lang=en&topic=${keyword}`)
            .then(response => {
                dispatch(fetchRegularSuccess(response.data.articles))
            })
            .catch(error => {
                console.log(error)
            })
    }
}