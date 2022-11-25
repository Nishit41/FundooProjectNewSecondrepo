import axios from "axios";
export const signupApi = (signUpObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",signUpObj)
     return response;
}
export const signinApi = (signInObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login ",signInObj)
     return response;
}