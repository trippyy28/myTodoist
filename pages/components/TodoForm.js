import { useState, useContext } from "react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import styles from "../../styles/TodoForm.module.css";
function TodoForm() {
  const [todo, setTodo] = useState({ title: "", detail: "" });
  const onSubmit = async () => {
    const collectionRef = collection(db, "todos");
    const docRef = await addDoc(collectionRef, {
      ...todo,
      timestamp: serverTimestamp(),
    });
    setTodo({ title: "", detail: "" });
    // showAlert("success", `Todo with id ${docRef.id} is added successfully`);
  };
  return (
    <div className={styles.container}>
      <label>Title</label>
      <input
        className={styles.input}
        value={todo.title}
        type="text"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <label>Details</label>
      <input
        className={styles.inpt}
        value={todo.detail}
        type="text"
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <button className={styles.btn} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default TodoForm;
