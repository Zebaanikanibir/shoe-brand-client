import Axios from "axios"
import { MEGA_PRODUCT_LIST, MEGA_PRODUCT_SUCCESS } from "../Constants/Constants"

export const megaList = () => async (dispatch) =>{
   
    const {data} = await Axios.get('/api/megaStore')
    dispatch({type: MEGA_PRODUCT_LIST, payload: data})

}