const onClickAdd = () => {

  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  // テキストボックスクリア
  textEl.value = "";

  // テキストと削除ボタン作成
  const p = document.createElement("p");
  p.textContent = text;

  const button = document.createElement("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  const div = document.createElement("div");
  div.appendChild(p);
  div.appendChild(button);

  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
