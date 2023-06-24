import { toast } from "react-toastify"

const notify = (message,type)=>{
    if(type ==="warn"){
        toast.warn(message)
    }else if(type === "success"){
        toast.success(message)
    }else if(type === "error"){
        toast.error(message)
    }
};
export default notify;