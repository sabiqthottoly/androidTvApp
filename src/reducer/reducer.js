import {CHANGE_IMAGE} from '../constants/index'

const initialState = {
    count : 10,
    imageURL:require('../assets/images/mainBackground.png'),
    car:'name'
};


const imageReducer = (state = initialState,action)=>{
    console.log(action)
    switch(action.type){
        case CHANGE_IMAGE : 
          return{
              ...state,
              imageURL:action.payload
          }
            
        
        default : return state;
    }
}

export default imageReducer 