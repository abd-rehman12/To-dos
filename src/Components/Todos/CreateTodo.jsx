import { Alert } from "@magiclabs/ui";
import React, { useContext, useRef, useState } from "react";
import { contextTodo } from "./Home";

function CreateTodo() {
  const { allTodo, setAllTodo } = useContext(contextTodo);

  const textFromUser = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = textFromUser.current.value;
    if (temp) {
      setAllTodo((prev) => {
        const newTemp = [...prev, temp];
        // console.log(allTodo);
        localStorage.setItem("todos", JSON.stringify(newTemp));
        return newTemp;
      });
    }

    textFromUser.current.value = "";
    alert("todo added successfully")
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto align-middle m-7"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className=" mb-2 text-lg font-bold ">Your Todo</label>
          <input
            type="text"
            id="text"
            ref={textFromUser}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500  w-full p-2.5"
            placeholder="your Todo here"
            required
          />
        </div>
        <button type="submit" className="bg-blue px-4 rounded-2xl">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateTodo;
