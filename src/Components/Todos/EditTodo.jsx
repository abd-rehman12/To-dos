import React, { useContext, useState, useRef } from "react";
import { contextTodo } from "./Home";

function EditTodo() {
  const [editor, setEditor] = useState({ isOpen: false, index: null });
  const newVal = useRef();
  const { allTodo, setAllTodo } = useContext(contextTodo);

  const handleEditClick = (index) => {
    setEditor({ isOpen: true, index });
    newVal.current.value = allTodo[index];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = newVal.current.value;
    if (temp) {
      const tempTodo = [...allTodo];
      tempTodo[editor.index] = temp;
      setAllTodo(tempTodo);
      localStorage.setItem("todos", JSON.stringify(tempTodo));
      alert("Todo edited successfully");
    }
    setEditor({ isOpen: false, index: null });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl">
        <table className="table-auto w-full text-left border border-blue">
          <thead>
            <tr className="bg-blue">
              <th className=" h-10"> </th>
            </tr>
          </thead>
          <tbody>
            {allTodo && allTodo.length > 0 ? (
              allTodo.map((todo, index) => (
                <tr key={index} className="border flex justify-between">
                  <td className="px-4 py-2 font-bold">{index + 1}</td>
                  <td className="px-4 py-2 font-bold">{todo}</td>
                  <div className="mx-4">
                    <button
                      className="m-4 px-4 rounded-2xl font-bold bg-green"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                  </div>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center">No Data found</td>
              </tr>
            )}
            {editor.isOpen && (
              <form
                className="max-w-sm mx-auto align-middle m-7"
                onSubmit={handleSubmit}
              >
                <div className="mb-5">
                  <label className="mb-2 text-lg font-bold">Edit Todo</label>
                  <input
                    type="text"
                    id="text"
                    ref={newVal}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                    placeholder="Edit your todo"
                    required
                  />
                </div>
                <button type="submit" className="bg-blue px-4 rounded-2xl">
                  Submit
                </button>
              </form>
            )}
          </tbody>
        </table>
      </div>
      {editor.isOpen && (
          <form
            className="max-w-sm mx-auto align-middle m-7"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label className="mb-2 text-lg font-bold">Edit Todo</label>
              <input
                type="text"
                id="text"
                ref={newVal}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                placeholder="Edit your todo"
                required
              />
            </div>
            <button type="submit" className="bg-blue px-4 rounded-2xl">
              Submit
            </button>
          </form>
        )}
    </div>
  );
}

export default EditTodo;
