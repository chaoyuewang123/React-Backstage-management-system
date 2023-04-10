import handleNumber from './index'


const defaultState = {
    ...handleNumber.state
}
let reducer = (state = defaultState, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state))

/*     switch (action.type) {
        case handleNumber.add1:
            handleNumber.actions['add1'](newState, action)
            break;
        case handleNumber.add2:
            handleNumber.actions['add2'](newState, action)
            break;
        default:
            break;
    } */


    for(let key in handleNumber.actionNames){
        if(action.type===handleNumber.actionNames[key]){
            handleNumber.actions[handleNumber.actionNames[key]](newState, action);
            break;
        }
    }

    return newState
}

export default reducer