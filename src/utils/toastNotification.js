import { toast } from "react-toastify";

const toastConfiguration = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const toastNotification = (message, status) => {
  switch (status) {
    case "error":
      toast.error(`${message}`, toastConfiguration);
      break;
    case "warning":
      toast.warn(`${message}`, toastConfiguration);
      break;
    case "info":
      toast.info(`${message}`, toastConfiguration);
      break;
    case "success":
      toast.success(`${message}`, toastConfiguration);
      break;
    default:
      toast(`${message}`, toastConfiguration);
  }
};

export default toastNotification;
