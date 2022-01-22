import { LOGIN, LOGIN_STATUS } from "./auth.action"
import { mapStatus } from '../../helpers'
import { getToken, getUser } from "../../config/auth"

const INITIAL_STATE = {
    token: getToken() || "",
    profile: getUser() || {},
    status: mapStatus(0)
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_STATUS:
            state.status = mapStatus(action.status)
            return state
        case LOGIN:
            const { token, user } = action.data
            state.token = token
            state.profile = user
            state.status = mapStatus(2)
            return state
        default:
            return state
    }
}

export default reducer