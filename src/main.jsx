import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Header from "./Components/Header/Header";
import CreateTodo from "./Components/Todos/CreateTodo";
import EditTodo from "./Components/Todos/EditTodo";
import DeleteTodo from "./Components/Todos/DeleteTodo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      <Route path="" element={<CreateTodo />} />
      <Route path="/edit" element={<EditTodo />} />
      <Route path="/delete" element={<DeleteTodo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
