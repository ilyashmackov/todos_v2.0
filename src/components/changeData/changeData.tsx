import '../../index.css'
import React, {useState, useEffect} from 'react';

const ChangeData = () => {

    const [items, setItems] = useState([{}]);

    const Delete = (id:any) => {
        console.log(id);
        localStorage.removeItem(id);
    }
    
    const GetData = () => {
        let array = [];
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) continue; 
            array.push({label: localStorage.getItem(key), id: key });
            //console.log(`${key}: ${localStorage.getItem(key)}`);
        }
        setItems(array);
    }
    useEffect(() => {
        
        GetData();
        },[]);
    
    
    return {items, GetData, Delete}
    }

    export default ChangeData;