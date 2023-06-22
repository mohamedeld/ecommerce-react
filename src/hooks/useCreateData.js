import baseUrl from "../Api/baseURL"

const useCreateDataWithImage = async (url, params) => {
    const config = {
        headers:{
            "Content-Type":"multipart/form-data"
        }
    } 
  const response = await baseUrl.post(url, params,config);
  return response;
};

const useCreateData =async (url,params)=>{
    const response = await baseUrl.post(url,params);
    return response;
}
export { useCreateDataWithImage, useCreateData };