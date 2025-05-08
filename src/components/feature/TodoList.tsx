"use client";
import React from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, { label: action.label, id: crypto.randomUUID() }];
    }
  }
};

const TodoList = () => {
  const [tentativeTodo, setTentativeTodo] = React.useState<any>();
  const [state, dispatch] = React.useReducer(reducer, []);

  function handleSubmitForm(event: any) {
    event.preventDefault();

    dispatch({
      type: "ADD_TODO",
      label: tentativeTodo,
    });
    setTentativeTodo("");
  }

  console.log(state);
  return (
    <main>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="todo-input">What needs to be done?</label>
        <input
          id="todo-input"
          value={tentativeTodo}
          onChange={(event: any) => {
            // console.log(event.target.value);
            setTentativeTodo(event.target.value);
          }}
        />
      </form>
      <ol>
        {state?.map(({ label, id }) => (
          <li key={id}>
            <input type="checkbox" id={id} />
            <label htmlFor="todo-1">{label}</label>
          </li>
        ))}

        {/* <li>
          <input type="checkbox" id="todo-1" />
          <label htmlFor="todo-1">Invite classmates</label>
        </li>
        <li>
          <input type="checkbox" id="todo-2" />
          <label htmlFor="todo-2">Hire clown</label>
        </li>
        <li>
          <input type="checkbox" id="todo-3" />
          <label htmlFor="todo-3">Order bouncy castle</label>
        </li> */}
      </ol>
    </main>
  );
};

export default TodoList;
