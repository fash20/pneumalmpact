import toast from "react-hot-toast";

export const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    toast.error(error);
    return error
}