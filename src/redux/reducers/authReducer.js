import { CREATE_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER } from "../type"

const initialState = {
  newuser: [],
  userlogin: [],
  currentuser:[],
  forgetpassword:[],
  loading: true,
};

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_USER:
            return {
              ...state,
              newuser: action.payload,
            }
        case LOGIN_USER:
            return {
              ...state,
              userlogin:action.payload,
            }
        case GET_CURRENT_USER:
            return {
              ...state,
              currentuser: action.payload,
            };
        case FORGET_PASSWORD:
            return {
              ...state,
              forgetpassword:action.payload,
            };
        default:
            return state
    }
}
export default authReducer;

