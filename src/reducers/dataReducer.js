import SET_DATA from '../actionTypes/actionTypes.js';
import DATA_FILLED_SUCCESS from '../actionTypes/actionTypes.js';
import DATA_FILLED_ERROR from '../actionTypes/actionTypes.js';

const initialState = {
    data: [],
    error: null
}

const dataReducer =  function(state=initialState, action){
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case DATA_FILLED_SUCCESS:
            return{
                ...state,
                error: null
            }

        case DATA_FILLED_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default dataReducer;
