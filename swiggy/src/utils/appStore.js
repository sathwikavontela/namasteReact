import { configureStore } from "@reduxjs/toolkit";
import cartReduder from "./cartSlice";

const appStore = configureStore({
  //it is responsible to modify the app store
  reducer: {
    cart: cartReduder,
  },
});

export default appStore;
