import { createContext, useContext, useState } from "react";
const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(2);
  const addNotif = () => setCount(count + 1);
  const clearNotif = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, addNotif, clearNotif }}>
      {children}
    </NotificationContext.Provider>
  );
}
export function useNotification() {
  return useContext(NotificationContext);
}
