import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    };

    return (
        <form className="todo" onSubmit={handleFormSubmit}>

            <div className="wrapper">
                <input type="text" id="task" className="input" value={task} onInput={(e) => setTask(e.target.value)} required autoFocus maxLength={60} placeholder="Enter a new task" />
                <label htmlFor="task" className="label">Enter a new task</label>
            </div>
            <button className="btn" aria-label="Add task" type="submit">
                <PlusIcon />
            </button>
        </form>
    )
}
export default CustomForm;