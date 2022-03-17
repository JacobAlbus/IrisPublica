import axios from "axios";

export default axios.create({
    baseURL: "https://cors-everywhere-me.herokuapp.com/http://iris-publica-backend-env.eba-m8xnkvz4.us-east-2.elasticbeanstalk.com/api/v1/text-generation",
    headers: {
        "Content-type": "application/json"
    }
});