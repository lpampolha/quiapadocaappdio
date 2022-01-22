import http from '../config/http'

//GET
const getCategories = () => http.get('/category')
const getProducts = () => http.get('/product')

// DElELE
const deleteCategory = (id) => http.delete(`/category/${id}`)
const deleteProduct = (id) => http.delete(`/product/${id}`)

// CREATE
const createCategory = (data) => http.post(`/category`, data)
const createProduct = (data, config = {}) => http.post(`/product`, data, config)
// UPDATE
const updateCategory = (id, data) => http.patch(`/category/${id}`, data)
const updateProduct = (id, data) => http.patch(`/product/${id}`, data)


export {
    getProducts,
    getCategories,
    deleteCategory,
    deleteProduct,
    createCategory,
    createProduct,
    updateCategory,
    updateProduct
}