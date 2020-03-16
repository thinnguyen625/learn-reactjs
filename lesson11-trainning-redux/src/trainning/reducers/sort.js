var initialState = {
    by :'status',
    value : 1 // 1 : tăng, -1 : giảm
}

var myReducer = (state = initialState, action) => {
    if(action.type === 'SORT'){
        var { by, value } = action.sort; // by = action.sort.by
        return {
            sort : { //new state
                by : by,
                value : value
            }
        }
    }
    return state;
}

export default myReducer;