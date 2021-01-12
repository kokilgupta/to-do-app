import React , {useState}from 'react';
import ToDoList from "./ToDoList";
import './ToDoDiv.css';
import MainPage from "./MainPage";
const ToDoDiv=(props)=>{
    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value)
        /*console.log(event.target.value);*/
    };

    const itemAdd=()=>{
        setItems((oldItems)=>{
            if(inputList.length===0) {
                alert("Please Enter Valid Item");
                return [...oldItems];
            }
            else
                return [...oldItems,{title: inputList, status: false}];
        });
        setInputList("");
    };

    const deleteItem=(deleted)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==deleted;
            });
        });
    };

    const strikeItem=(tick)=>{
        setItems((item) => {
            return item.filter((a, index) => {
                if(index === tick) {
                    if(item[index].status===false)
                        return item[index].status=true;
                }
                return item;
            });
        });
    };
    const pressEnterHandler=(k)=>{
        if(k.keyCode === 13){
            {itemAdd()}
        }
    }
    return (
        <div className="to_do_div">
            <i className="fa fa-times"
               onClick={()=>{
                   props.onSelectCross(props.cross);
               }}
            />
            <h1><span className="heading"> {props.value}</span></h1>
            <br/>
            <input type="text" placeholder="Add your items"
                   className="input_item"
                   value={inputList}
                   onChange={itemEvent}
                   onKeyDown={pressEnterHandler}
            />
            <button onClick={itemAdd} className="add_item_button">+</button>
            <ol>
                {items.map( (itemVal,index)=> (
                        <ToDoList
                            tick={index}
                            status={itemVal.status}
                            deleted={index}
                            key={index}
                            val={itemVal.title}
                            onSelect={deleteItem}
                            onSelectTick={strikeItem}
                        />
                    )
                )}
            </ol>
        </div>
    );
}
export default ToDoDiv;