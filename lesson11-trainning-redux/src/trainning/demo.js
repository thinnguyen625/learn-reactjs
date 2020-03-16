import { createStore } from 'redux';
import { status, sort } from './action/index';

var initialState = {
    status : false,
    sort : {
        by :'name',
        value : 1 // 1 : tăng, -1 : giảm
    }
}
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
        return state;
    }
    if(action.type === 'SORT'){
        var { by, value } = action.sort; // by = action.sort.by
        var { status } = state; //status = state.status
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        }

        state.sort = {
            by : action.sort.by,
            value : action.sort.value
        }
    }
    return state;
}

const store = createStore(myReducer);

console.log("Default : ", store.getState()); 
//Thực hiện công việc thay đổi status
var action = { type : 'TOGGLE_STATUS' }
store.dispatch(status());

console.log('TOGGLE_STATUS: ',store.getState());
// Thực hiện công việc từ z -> a

var sortAction = {
    type : 'SORT',
    sort : {
        by : 'name',
        value : -1
    }
}
store.dispatch(sort({
    by : 'name',
    value : -1
}));
console.log('SORT :', store.getState());
