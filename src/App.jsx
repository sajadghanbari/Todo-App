import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';


function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [PreviousFocusElement, setPreviousFocusElement] = useState(null)
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  };
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id == id ? { ...t, checked: !t.checked } : t)))
  }
  const updatedTask = (task) => {
    setTasks(prevState => prevState.map(t => (t.id == task.id ? { ...t, name: task.name } : t)))
    closeEditMode();
  }
  const closeEditMode = () => {
    setIsEditing(false)
    PreviousFocusElement.focus();
  }
  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusElement(document.activeElement);
  }
  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updatedTask={updatedTask}
          />
        )

      }

      <CustomForm addTask={addTask} />
      {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} enterEditMode={enterEditMode} />)}

    </div>
  )
}

export default App
