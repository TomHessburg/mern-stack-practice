import React from "react";

export default function EditTodo(props) {
  return (
    <div>
      <p>{`edit todo #${props.match.params.id}`}</p>
    </div>
  );
}
