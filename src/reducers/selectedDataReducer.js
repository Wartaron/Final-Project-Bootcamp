import SET_DEFAULT_SELECTED_DATA from '../actionTypes/actionTypes.js';
import SET_FACT_SELECTED from '../actionTypes/actionTypes.js';
import SET_MARKET_SELECTED from '../actionTypes/actionTypes.js';
import SET_CATEGORY_SELECTED from '../actionTypes/actionTypes.js';
import SET_LAST_PERIOD from '../actionTypes/actionTypes.js';
import SELECTED_DATA_SUCCESS from '../actionTypes/actionTypes.js';
import SELECTED_DATA_ERROR from '../actionTypes/actionTypes.js';

const initialState = {
    selectedData: {
        factSelected: '',
        marketSelected: '',
        lastPeriod: '',
        categorySelected: ''
    },
    error: null
}

const selectedDataReducer =  function(state=initialState, action){
    switch (action.type) {
        case SET_DEFAULT_SELECTED_DATA:
            return{
                ...state,
                selectedData: action.payload
            }
        case SET_FACT_SELECTED:
            return {
                ...state,
                selectedData: {
                    ...state.factSelected,
                    factSelected: action.payload
                }
            }

        case SET_MARKET_SELECTED:
            return{
                ...state,
                selectedData: {
                    ...state.marketSelected,
                    marketSelected: action.payload
                }
            }

        case SET_CATEGORY_SELECTED:
            return{
                ...state,
                selectedData: {
                    ...state.categorySelected,
                    categorySelected: action.payload
                }
            }

        case SET_LAST_PERIOD:
            return {
                ...state,
                selectedData: {
                    ...state.lastPeriod,
                    lastPeriod: action.payload
                }
            }

        case SELECTED_DATA_SUCCESS:
            return{
                ...state,
                error: null
            }

        case SELECTED_DATA_ERROR:
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

export default selectedDataReducer;
