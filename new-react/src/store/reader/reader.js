let reader =function(state=[],action){
    switch(action.type){
        case "XX":
        // state=action.data;
        state.push(action.data)
        return state;
        case "ZZ":
        state=action.data;
        return state;
        default:
        return state;
    }
}
export default reader;