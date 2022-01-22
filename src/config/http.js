import axios from 'axios'
import { getToken, removeToken } from './auth';
import history from './history'

const localUrlApi = `http://localhost:3001`


const http = axios.create({
    baseURL: process.env.REACT_APP_API || localUrlApi
})



http.defaults.headers['Content-type'] = 'application/json'

if (getToken()) {
    http.defaults.headers["x-auth-token"] = getToken();
}


http.interceptors.response.use(
    response => response,
    error => {

        // const status = error.response.status
        const { response: { status } } = error

        if (error.message === 'Network Error' && !error.message) {
            alert('você está sem internet...reconecte !!!!!')
        }

        switch (status) {
            case 401:
                console.log('Token inválido...')
                removeToken()
                history.push('/login')
                break;
            default:
                console.log(status, `aconteceu um erro ${status}`)
                break;
        }

        // axios.interceptors.response.eject(interceptors) // global
        return Promise.reject(error)
    }
)

export default http;