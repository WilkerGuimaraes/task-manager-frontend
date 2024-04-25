import { ToastContainer } from "react-toastify";

import { Tasks } from "../../components/tasks_/tasks";
import { Header } from "../../components/header_/header";

export function Home() {
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
      <Header />
      <Tasks />
    </div>
  );
}
