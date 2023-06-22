import baseUrl from "../Api/baseURL"

export const useGetData = async (url,params)=>{
        const response = await baseUrl.get(url,params);
        return response.data;
    
}