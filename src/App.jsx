import React from "react";
import Route from "./router";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/app/layout/Loader";
import "./index.css";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <Loader />
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
