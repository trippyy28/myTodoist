import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./TodoContext";
import { useState, useContext } from "react";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  };
  return (
    <TodoContext.Provider value={{ showAlert }}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
