import { Tasks } from "./components/tasks_/tasks";

import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Tasks />
    </div>
  );
}
