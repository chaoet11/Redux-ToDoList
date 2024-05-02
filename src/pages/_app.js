import { Provider } from "react-redux";
import store from "../redux/store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    // Redux 的 store
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
