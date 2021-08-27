import React from "react";
import "./style.css";

export const App = () => {
  return (
    <div>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </div>
  );
};
