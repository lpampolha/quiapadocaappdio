import { message } from "../../util";


import { deleteCategory, getCategories } from "../../services/admin";

export const CATEGORY_LIST = "CATEGORY_LIST"
export const CATEGORY_CREATE = "CATEGORY_CREATE"
export const CATEGORY_UPDATE = "CATEGORY_UPDATE"
export const CATEGORY_LOADING = "CATEGORY_LOADING"

export const categorySave = (props, id = null) => {

    return (dispatch) => {
        if (id !== null) {
            console.log('xxx')
            // const { data } = await updateCategory(id, props)
            // dispatch({ type: CATEGORY_UPDATE, { name: 1}, id });
        } else {
            // const { data } = await createCategory(props)
            // dispatch({ type: CATEGORY_CREATE, { name: 1 } });
        }
    };
};

export const categoryList = props => {
    return async (dispatch) => {
        dispatch({ type: CATEGORY_LOADING })
        const { data } = await getCategories()
        dispatch({ type: CATEGORY_LIST, data })
        dispatch({ type: CATEGORY_LOADING })
    };
}

export const categoryDrop = props => {
    return async (dispatch) => {

        const { category } = props
        dispatch({ type: CATEGORY_LOADING })

        deleteCategory(category._id)
            .then(res => {
                if (res.status === 200) {
                    dispatch(categoryList())
                    dispatch({ type: CATEGORY_LOADING })
                    message('success', `Categoria excluída com sucesso.`)
                }
            }).catch(error => {
                message('error', ` ${error.response.data.error}`)
            })

    };
}
