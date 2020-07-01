import axios from "axios";

const getAuthorizationHeader = () => {
  const token: string | null = window.localStorage.getItem("token");

  if(token !== null){
    return `Bearer ${token}`;
  }

  return null;
};

export default {
  post: async (url: string, args: Object | null = null) => {
    let data = await axios.post(url, args, {
      headers: {
        authorization: getAuthorizationHeader(),
      },
    });

    return data;
  },
  get: async (url: string) => {
    let data = await axios.get(url, {
      headers: {
        authorization: getAuthorizationHeader(),
      },
    });

    return data;
  },
};
