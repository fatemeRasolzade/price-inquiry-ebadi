import toast from "react-hot-toast";

export const errorHandler = (error) => {
  if (error.response) {
    toast.error("خطایی رخ داده است");
    if (error.response.status === 401) {
    }
  }

  return Promise.reject(error);
};
