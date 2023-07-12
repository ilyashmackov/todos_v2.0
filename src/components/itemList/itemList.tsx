import '../../index.css'
import React from 'react';
import Item from '../item/item';
import GetLocalData from '../changeData/changeData';

const ItemList = () => {
    const {items} = GetLocalData();
    
    const elements = items.map((element:any) => {
        //const {id, ...elementProps} = element;
        return ( 
            <div key={element.id}>
                <Item {...element} />
            </div>
        )
    })
    
    return (
        <div className="item-list">
            {elements}
        </div>   
    )}

export default ItemList;