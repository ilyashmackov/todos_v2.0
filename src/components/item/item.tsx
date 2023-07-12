import React, {Component} from 'react';
import ChangeData from '../changeData/changeData';

const Item = (props:any) => {
    const {Delete} = ChangeData();
    const {label, id} = props;

    return (
        <div className="item">
            <span>
                <input type="checkbox" className="check"/>
                {label}
            </span>
            <button onClick={() => Delete({id})}>Удалить</button>
            <button>Изменить </button>
            
        </div>
    )}
    
export default Item
    


