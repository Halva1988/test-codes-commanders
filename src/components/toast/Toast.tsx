import { useEffect, useRef } from "react";
import { ToastProps } from "../../types/type";
import styles from "./Toast.module.css"


const Toast = ({ message, onClose }: ToastProps): JSX.Element => {
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timer.current = setTimeout(onClose, 3000);
    return () => clearTimeout(timer.current);
  }, [onClose]);

  return (
    <div className={styles.toast}>
      <span>{message}</span>
      <button className={styles.button} onClick={onClose}>×</button>
    </div>
  );
};


export default Toast;