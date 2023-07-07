import baseUrl from "../Api/baseURL"

export const useGetData = async (url,params)=>{
        const response = await baseUrl.get(url,params);
        return response.data;   
}

export const useGetDataWithToken = async (url,params)=>{
        const config = {
                headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                }
        }

        const response = await baseUrl.get(url,config);
        return response;
}