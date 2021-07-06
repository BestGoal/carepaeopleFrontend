import { CLIENT_PREVIEW_SHIFT, CLIENT_EDIT_SHIFT } from "../../type"

const preState = {
    shiftData: {},
    shiftEditData: {}
}

const shift = ( state = preState, action) => {
    switch(action.type) {
        case CLIENT_PREVIEW_SHIFT:
            return { ...state, shiftData: action.data };
        case CLIENT_EDIT_SHIFT:
            return { ...state, shiftEditData: action.data };
        default: 
            return state
    }
}

export default shift;