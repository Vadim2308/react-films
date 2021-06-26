import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginState',
  initialState: {
    username: '',
    password: '',
    errors: {},
    buttonDisable: false,
  },
  reducers: {
    changeInput(state, action) {
      state.errors = {};
      state[action.payload.name] = action.payload.value;
    },
    setActiveButtonLogin(state) {
      state.buttonDisable = true;
    },
    setErrorsInState(state, action) {
      state.errors.username = action.payload.username;
      state.errors.password = action.payload.password;
    },
    setErrorAfterInvalidLogin(state) {
      state.buttonDisable = false;
      state.errors.invalid = 'Неверный логин и/или пароль.';
    },
  },
});

export default loginSlice.reducer;
export const { changeInput, setActiveButtonLogin, setErrorsInState, setErrorAfterInvalidLogin } =
  loginSlice.actions;
