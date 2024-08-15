import React, { useContext, useEffect } from "react";
import { contextTodo } from "./Home";

function DeleteTodo() {
  const { allTodo, setAllTodo } = useContext(contextTodo);

  const handleDelete = (index) => {
    const newTodo = [...allTodo];
    newTodo.splice(index, 1);
    console.log("deleted value ", allTodo[index]);
    setAllTodo(newTodo);
    // localStorage.setItem("todos", JSON.stringify(allTodo));
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodo));
  }, [allTodo]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl">
        <table className="table-fixed w-full text-left border border-red">
          <thead>
            <tr className="bg-red">
              <th className="h-10"></th>
            </tr>
          </thead>
          <tbody>
            {allTodo && allTodo.length > 0 ? (
              allTodo.map((todo, index) => (
                <tr key={index} className="border flex justify-between">
                  <td  className="px-4 py-2 font-bold">{index + 1}</td>
                  <td className="px-4 py-2 font-bold">{todo}</td>
                  <div className="mx-4">
                    <button
                      className="m-4 px-4 rounded-2xl font-bold bg-red"
                      onClick={() => handleDelete(index)}
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center">No Data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteTodo;
