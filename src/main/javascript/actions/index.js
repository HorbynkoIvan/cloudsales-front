import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actionTypes';

import {
    fetchData as fetchDataApi,
} from '../api'

export const fetchData = () => async dispatch => {
    dispatch({type: FETCH_DATA_START})
    try {
        const data = await fetchDataApi()
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: err,
            error: true
        })
    }
}




