import axios from "axios";
import { Endpoints } from "./apiEndPoint";

function authHeader() {
  //   const content_type = "application/json";
  return {
    "Content-Type": "application/json",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
  };
}

// api handler
export const getService = async(url, { thenCB, catchCB, finallyCB }) => {
  const requestHeader = authHeader();

  axios.get(Endpoints.base + url,{
    withCredentials:true,
    
  })
    .then((res) => thenCB(res))
    .catch((err) => catchCB(err))
    .finally(() => finallyCB());
};
