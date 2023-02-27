import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
