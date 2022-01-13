import axios from "axios";

export default function callAPI(url, method, data) {

    return axios({
            method: method,
            url: `http://localhost:8081/${url}`,
            data: data
        });
}