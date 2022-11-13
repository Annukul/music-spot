import { createSlice } from '@reduxjs/toolkit';

interface UserProfileSliceState {
  token: string;
}

const initialState: UserProfileSliceState = {
  token: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export default userSlice;
