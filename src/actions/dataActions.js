import SET_DATA from '../actionTypes/actionTypes';

export function setData(data = []){
    return {
        type: SET_DATA,
        payload: data
    };
}
