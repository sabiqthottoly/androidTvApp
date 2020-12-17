import {CHANGE_IMAGE} from '../constants/index'

export const changeImageURL = (value)=>{
    console.log("value",value)
return{
    type : CHANGE_IMAGE,
    payload :value
}
}