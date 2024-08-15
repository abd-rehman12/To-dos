import React from "react";
import { NavLink } from "react-router-dom";
import CreateTodo from "../Todos/CreateTodo";
import EditTodo from "../Todos/EditTodo";
import DeleteTodo from "../Todos/DeleteTodo";

function Header() {
  return (
    <div>
      <ul className="flex space-x-8 justify-end p-4 bg-purple">
        <NavLink to="">
          <li className="bg-yellow-400 rounded-xl p-4  mx-2 font-bold text-slate-700 ">
            Create Todo
          </li>
        </NavLink>

        <NavLink to={"/edit"}>
          <li className="bg-blue rounded-lg p-4 mx-2 font-bold text-slate-700    ">
            Edit Todo
          </li>
        </NavLink>

        <NavLink to={"/delete"}>
          <li className="bg-white rounded-lg p-4  mx-2 font-bold text-slate-700  ">
            Delete Todo
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
