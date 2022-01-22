import Swal from "sweetalert2";

export const message = (type, message) => {
    Swal.fire({
        position: 'top-end',
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 2500
    })
}