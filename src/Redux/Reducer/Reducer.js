import { MEGA_PRODUCT_LIST, MEGA_PRODUCT_SUCCESS } from "../Constants/Constants";

export const megaProductReducer = (state = {megaStore: []}, action) => {
switch(action.type) {

    case MEGA_PRODUCT_LIST:
    return{
        megaStore: action.payload
    }
    default:
        return state;
}


}