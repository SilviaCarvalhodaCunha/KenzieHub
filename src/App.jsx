import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
