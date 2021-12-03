import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todotext, setTodoText] = useState("")
  const [incompleteTodos, setIncompleteTodos] = useState(['aaaa'])
  const [comleteTodos, setcompleteTodos] = useState(['aaaa'])
  console.log(todotext);
  const onChangeTodoText = (event) =>setTodoText(event.target.value);
  const onClickadd =() => {
    if(todotext==="") return;
    const newTodos = [...incompleteTodos, todotext];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <div>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todotext} onChange={onChangeTodoText}/>
        <button onClick ={onClickadd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo)=> {
            return(
              <div key ={todo}className="list-row">
            <li>{todo}</li>
            <button>完了</button>
            <button>削除</button>
          </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
        {comleteTodos.map((todo)=> {
            return(
              <div className="list-row">
            <li>{todo}</li>
            <button>戻す</button>
          </div>
            )
          })}
          <div>
            <li>えええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </div>
  );
};
