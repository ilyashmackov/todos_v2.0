import React from 'react';
import TaskAddingForm from '../taskAddingForm/taskAddingForm';
import ItemList from '../itemList/itemList';


const App = () => {
    return (
        <div className="component">
            <TaskAddingForm/>
            <ItemList  />
        </div>          
    )
}

export default App;