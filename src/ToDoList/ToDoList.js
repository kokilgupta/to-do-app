import React from 'react';
import './ToDoList.css';
const ToDoList=(props)=>{
    return (
        <div className="ToDoList">
            <div className="tick-list">
                <i className="fa fa-check"
                   onClick={()=>{
                       props.onSelectTick(props.tick)
                   }}/>
                <li className={props.status ? 'strike-through' : 'non-strike'}>{props.val}</li>
            </div>
            <i className="fa fa-trash"
               onClick={() => {
                   props.onSelect(props.deleted)
               }
               }/>
        </div>
    );
};
export default ToDoList;