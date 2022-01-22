import http from '../config/http'

const authentication = (data) => http.post('/auth', data)

export {
    authentication
}