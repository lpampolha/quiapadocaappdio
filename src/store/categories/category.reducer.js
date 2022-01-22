import {
    CATEGORY_LIST,
    CATEGORY_LOADING
} from './category.actions'

const INITIAL_STATE = {
    categories: [],
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case CATEGORY_LOADING:
            state.loading = !state.loading
            return state
        case CATEGORY_LIST:
            state.categories = action.data
            return state
        default:
            return state
    }

}

export default reducer