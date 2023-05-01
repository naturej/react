import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/todo/:todoId",
    element: <TodoPage />,
  },
]);
export default router;
