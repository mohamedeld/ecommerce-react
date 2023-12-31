import baseUrl from "../Api/baseURL"

const useDeleteData = async (url,params)=>{
    const response = await baseUrl.delete(url,params);
    return response;
}

export default useDeleteData;