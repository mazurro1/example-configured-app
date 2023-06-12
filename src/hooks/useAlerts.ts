type T_HandleAddAlert = {
  variant: "info" | "success" | "warning" | "error" | "default";
  message?: string;
};
import { toast } from "react-toastify";

export const useAlerts = () => {
  const handleAddAlert = ({ variant, message }: T_HandleAddAlert) => {
    if (variant === "error") {
      toast.error(message);
    } else if (variant === "info") {
      toast.info(message);
    } else if (variant === "success") {
      toast.success(message);
    } else if (variant === "warning") {
      toast.warning(message);
    } else {
      toast(message);
    }
  };

  return { handleAddAlert };
};
