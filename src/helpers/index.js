const mapStatus = (code, message = false) => {
    switch (code) {
        case 0:
            return {
                code: code,
                type: '',
                message: message ? message : ''
            }
        case 1:
            return {
                code: code,
                type: 'loading',
                message: message ? message : 'Carregando...'
            }
        case 2:
            return {
                code: code,
                type: 'success',
                message: message ? message : 'Processado com sucesso.'
            }
        case 3:
            return {
                code: code,
                type: 'error',
                message: message ? message : 'Error ao processar, tente novamente!'
            }
        case 4:
            return {
                code: code,
                type: 'warning',
                message: message ? message : 'Existe algum problema no processamento, verifique !'
            }

        default:
            return {
                code: code,
                type: '',
                message: message ? message : ''
            }
    }
}

export {
    mapStatus
}
