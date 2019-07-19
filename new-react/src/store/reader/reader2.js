let reader2 =function(state=0,action){
    switch(action.type){
        case "DD":
        state=action.list;
        return state;
        default:
        return state;
    }
}
export default reader2;