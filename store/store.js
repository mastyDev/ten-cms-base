import { configureStore } from "@reduxjs/toolkit/"
import chatReducer from "./chatStore"
export default configureStore({ reducer: { chat: chatReducer }})