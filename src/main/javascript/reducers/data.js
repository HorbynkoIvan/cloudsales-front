import {
    FETCH_DATA_SUCCESS,
} from '../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_DATA_SUCCESS:
            return [
                ...state,
                payload
            ];
    }
    return state;
}