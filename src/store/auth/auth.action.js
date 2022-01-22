// import { message } from "../../util";

import { saveToken } from "../../config/auth";
import history from "../../config/history";
import http from "../../config/http";
import { authentication as serviceAuth } from "../../services/auth";


export const LOGIN = "LOGIN"
export const LOGIN_STATUS = "LOGIN_STATUS"


export const login = (props) => {
    return async (dispatch) => { // react thunk
        try {
            dispatch({ type: LOGIN_STATUS, status: 1 })
            const { data } = await serviceAuth(props);
            saveToken(data)
            http.defaults.headers["x-auth-token"] = data.token;
            dispatch({ type: LOGIN, data })
            history.push('/admin')
        } catch (error) {
            console.log(error)
            dispatch({ type: LOGIN_STATUS, status: 3 })
        }

    };
}
