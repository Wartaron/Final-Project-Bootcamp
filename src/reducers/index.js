import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import selectedDataReducer from './selectedDataReducer';

const reducers = combineReducers({
    data: dataReducer,
    selectedData: selectedDataReducer
});

export default reducers;
