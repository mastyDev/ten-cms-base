import { createSlice } from '@reduxjs/toolkit'
export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
})
export const { enterRoom } = chatSlice.actions;
export const selectRoomId = (state) => state.chat.roomId;
export default chatSlice.reducer;