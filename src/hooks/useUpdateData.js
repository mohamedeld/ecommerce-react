import baseUrl from "../Api/baseURL"

export const useUpdateDataWithImage = async (url,params)=>{
    const config = {
      headers: {
        ContentType: "multipart/data",
      },
    };
    const response = await baseUrl.put(url,params,config);
    return response;
}

export const useUpdateData = async (url,params)=>{
    const response = await baseUrl.put(url,params);
    return response;
}