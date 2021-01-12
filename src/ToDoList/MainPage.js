import React, {useState} from 'react';
import './MainPage.css';
import ToDoDiv from "./ToDoDiv";
import ToDoList from "./ToDoList";
const MainPage=()=>{
    const[listName,setListName]=useState("");
    const[toDoDiv,setToDoDiv]=useState([]);

    const listEvent=(event)=>{
        setListName(event.target.value)
    };

    const listAdd=()=>{
        setToDoDiv((oldItems)=>{
            if(listName.length===0) {
                alert("Please Enter Valid List Name");
                return [...oldItems];
            }
            else
                return [...oldItems,listName];
        });
        setListName("");
    }

    const pressEnterHandler=(k)=>{
        if(k.keyCode === 13){
            {listAdd()}
        }
    }
    const deleteList=(i)=>{
        setToDoDiv((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==i;
            });
        });
    };
    return(
            <div className="main_page" >
                <div className="add_list">
                    <input type="text"
                           placeholder="Enter List Name"
                           className="input_list"
                           value={listName}
                           onChange={listEvent}
                           onKeyDown={pressEnterHandler}
                    />
                    <button className="add_list_button" onClick={listAdd}>Add</button>

                </div >
                <div className="to_do_divs">
                    {toDoDiv.map( (itemVal,index)=> (
                            <ToDoDiv
                                key={index}
                                value={itemVal}
                                cross={index}
                                onSelectCross={deleteList}
                            />
                        )
                    )}
                </div>
            </div>
    );
};
export default MainPage;