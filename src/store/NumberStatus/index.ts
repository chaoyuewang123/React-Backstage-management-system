interface ActionNames {
    [key: string]: string;
}
const store = {
    state: {
        num: 20
    },
    actions: {
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        },
        add3(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        }
    },
    /*   add1:"add1",
      add2:"add2" */

    /*       actionNames: {
            add1: "add1",
            add2: "add2"
        } */

    asyncActions: {
        asyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({ type: "add1" })
            }, 1000)
        }

    },

    actionNames: {}
}

let actionNames: ActionNames = {};

for (let key in store.actions) {
    actionNames[key] = key

}

store.actionNames = actionNames

export default store