import { StudentServices } from "../services/StudentServices";

const TOKEN = "JWTtoken";
const MESSAGE = "message";

const state = {
  JWTtoken: localStorage.getItem(TOKEN),
  message: localStorage.getItem(MESSAGE) || "",
};

const getters = {
  getToken: (state) => state.JWTtoken,
  getMessage: (state) => state.message,
};

const actions = {
  async login({ commit }, data) {

    const response = await StudentServices.facultyLogin(data);

    console.log("Store Response : ", response);

    if (response.data.status == 200) {
      const {
        message,
        Faculty: { JWTtoken },
      } = response.data;

      localStorage.setItem(TOKEN, JWTtoken);
      localStorage.setItem(MESSAGE, message);

      commit("setToken", JWTtoken);
      return response;
    }
  },
};

const mutations = {

    setToken( state , JWTtoken ){
        state.JWTtoken = JWTtoken
    },
    setMessage( state , message ){
        state.message = message;
    },
}

export default {
    state ,
    getters , 
    actions , 
    mutations ,
};