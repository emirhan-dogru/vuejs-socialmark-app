import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    saltKey: "bookmark123!123",
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _saltKey: (state) => state.saltKey,
  },
});