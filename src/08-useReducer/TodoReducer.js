



export const todoReducer = (initialState = [] , action)=>{

switch (action.type) {
    case '[add] add Todo':
        return [...initialState, action.payload]
    


    default:
    return initialState
        break;
}


}