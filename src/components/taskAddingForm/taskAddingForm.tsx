import '../../index.css'
import React, {useState} from 'react';
import GetLocalData from '../changeData/changeData';
import { v4 as uuidv4 } from 'uuid';

const TaskAddingForm = () => {
  const [task, setTask] = useState('');
  //const [storageId, setStorageId] = useState(localStorage.length);

  const {GetData} = GetLocalData();

  const HandleChange = (event:any) => {
    const input = event.target;
    const value = input.value;
    setTask(value);
  }

  const AddTask = () => {
    if (task) {
      //console.log(storageId);
      //setStorageId((prevState) => prevState +1);
      const storageId = uuidv4();
      localStorage.setItem(String(storageId), task);
      setTask('');
      GetData();
    }
  }

  return (
    <div className="controls">
      <input
        id="input"
        name="task"
        type="text"
        value={task}
        onChange={HandleChange}
        className="form-control"
      />
      <button onClick={AddTask} >Add</button>
    </div>
    )}

export default TaskAddingForm;