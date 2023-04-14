import { useState } from "react";
import useTodo from '../src/useTodoHooks/useHooks'
import { useSelector } from "react-redux";
import App from "./App";

const MyApp=()=> {
  const { input, setinput, setvalue,settoggle, addvaluemy,deletehandler,selecteditemid,editinput,toggle,
    updatehandler,edit,setedit } = useTodo();
  // console.log("input is:",input);

  const data = useSelector((store) => store.mytodo.Todo);
  // console.log("data is :",data);
  // console.log("data text is :",data.Todo);
  const mydata = data.todo;
  //  for(let i=0;i<mydata.length;i++){
  //     console.log("my data is :",mydata[i]);
  //  }

  return (
    <div style={{marginLeft: 300, marginTop: 100}}>
      {/* {console.log("todos length :",mydata.length)} */}
     
      <input
        type="text"
        placeholder="Enter any value"
        value={input}
        onChange={setvalue}
        style={{ justifyContent: "center" }}
      />

      <button onClick={addvaluemy}>Add me</button>
      <h2>{mydata.length===0?"add some values":"Todos are"}</h2>
      {mydata.map((item,index) => {
        // console.log("index is :",item.text);
        return <div key={index}>
        <h2>{item.id}   '=item is =' {item.text}
        
         <button   onClick={() => deletehandler(item)}>delete</button>
    
    <button  onClick={()=>updatehandler(item)}>update</button>
   {/* { console.log("item is :",item.id)} */}
    {
      selecteditemid ===item.id && toggle && (
        <div>
      <input  value={edit.text} onChange={(e)=>setedit({...edit,text:e.target.value})}/>
      
      <button onClick={()=>{editinput(edit);settoggle(false)}}>submit</button>
      <button onClick={()=>settoggle(false)}>cancel</button>
      </div>
      
      
      )
    }
  
          
        </h2>
       </div>
      })}
    </div>
  );
}
export default MyApp