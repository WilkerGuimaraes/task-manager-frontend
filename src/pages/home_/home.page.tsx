import { SideBar } from "../../components/sidebar_/sidebar";
import { Tasks } from "../../components/tasks_/tasks";

import { ToastContainer } from "react-toastify";
import { HomeContainer } from "./home.page.style";

export function Home() {
  return (
    <HomeContainer>
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
      <SideBar />
      <Tasks />
    </HomeContainer>
  );
}
