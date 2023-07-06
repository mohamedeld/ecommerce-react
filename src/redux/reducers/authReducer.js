import { CREATE_USER } from "../type"

const initialState = {
    createUser:[],
    loading:true
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            };
        default:
            return state
    }
}
export default authReducer;