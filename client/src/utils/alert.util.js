import Swal from "sweetalert2"

export const showSuccessDialog = (title, message) => {
    return Swal.fire({
        icon: "success",
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 1500,
    })
}

export const showErrorDialog = (title, message) => {
    return Swal.fire({
        icon: "error",
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 1500,
    })
}
