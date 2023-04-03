import Environment from "./Environment";
const Api = async (method, url = "", data = {}, params = {}) => {
    const methods = method.toString().toLowerCase();
    const baseUrl = Environment.base_url + url;
    const headers = {
        "Content-Type": "application/json",
    };
    const queryString = new URLSearchParams(params).toString();
    if (methods === "get" || methods === "delete" || methods === "put") {
        const response = await fetch(baseUrl + `?${queryString}`, {
            method: method,
            headers: headers,
        });
        const reponseJson = await response.json();
        return reponseJson?.data;
    } else {    /** 'post'  */
        const response = await fetch(baseUrl + `?${queryString}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(data),
        });
        const reponseJson = await response.json();
        return reponseJson?.data;
    }
};
export default {
    insertUser: (data) => Api("post", "/todo/signup", data),
    userLogin: (data) => Api("post", "/todo/login", data),
    listUpdate: (params) => Api("put", "/todo/list/update", params),
    listDelete: (params) => Api("delete", `/todo/list/delete/{id}`, params),
    listAdd: (data) => Api("post", "/todo/list/add", data),
    postList: (params) => Api("get", "/todo/list/{userid}", params)
};
