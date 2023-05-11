import axios from "axios";
export class AccessAPI {
    static serverURL = `https://6451419aa3221969115f2e5e.mockapi.io/api/v1/users/`;
    static getAll(){
        let dataURL= `${this.serverURL}`;
        return axios.get(dataURL);
    }
    static getUser(UserId){
        let dataURL= `${this.serverURL}${UserId}`;
        return axios.get(dataURL);
    }
    static createUser(){
        let dataURL= `${this.serverURL}`;
        return axios.post(dataURL);
    }
    static deleteUser(Id){
        let dataURL= `${this.serverURL}${Id}`;
        return axios.delete(dataURL);
    }
}