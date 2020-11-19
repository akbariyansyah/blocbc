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
        axios.get(`https://gnews.io/api/v4/top-headlines?token=7840c54a8e113ef87c10db06f663f641&lang=en0`)
            .then(response => {
                console.log(response.data)

                dispatch(fetchHeadlineSuccess(response.data.articles))
            })
            .catch(error => {
                console.log(error)
                // 7840c54a8e113ef87c10db06f663f641
            })
    }
}