import { configureStore } from "@reduxjs/toolkit/"
import appReducer from "./tenStore"
export default configureStore({ reducer: { chat: appReducer}})