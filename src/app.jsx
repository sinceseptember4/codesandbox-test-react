import React from "react";
import "./style.css";

export const App = () => {
  return (
    <div>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <div>
            <li>ううう</li>
            <button>戻す</button>
          </div>
          <div>
            <li>えええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </div>
  );
};
