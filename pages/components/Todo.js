import styles from "../../styles/Todo.module.css";
import moment from "moment";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../lib/firebase";
function Todo({ id, timestamp, title, detail }) {
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    // showAlert("error", `Todo with id ${id} deleted successfully`);
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{moment(timestamp).format("MMM dd, yyy")}</p>
      <p>{detail}</p>
      <button className={styles.btn} onClick={(e) => deleteTodo(id, e)}>
        delete
      </button>
    </div>
  );
}

export default Todo;
