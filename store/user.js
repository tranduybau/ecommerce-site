export const state = () => ({
  isLogined: false,
  isRequireAuthen: false,
  userInfo: {},
  response: {
    isFailed: false,
    message: "",
    type: "",
  },
});

export const actions = {
  async action_checkUser({ commit }, userInfo) {
    commit("action_checkUserPending");

    try {
      const { email, password } = userInfo;
      await this.$fireAuth.signInWithEmailAndPassword(email, password);

      commit("action_closerequireAuthenImmediatelySuccessed");
      commit("action_checkUserSuccessed", this.$fireAuth.currentUser);
    } catch (error) {
      commit("action_checkUserFailed");
    }
  },
  action_requireAuthenImmediately({ commit }) {
    commit("action_requireAuthenImmediatelySuccessed");
  },
  action_closerequireAuthenImmediately({ commit }) {
    commit("action_closerequireAuthenImmediatelySuccessed");
  },
  action_logout({ commit }) {
    commit("action_logout");
  },
};

export const mutations = {
  action_checkUserPending(state) {
    state.isLogined = false;
    state.userInfo = {};
    state.response = {
      isFailed: false,
      message: "",
      type: "",
    };
  },
  action_checkUserSuccessed(state, userExisted) {
    state.response = {
      message: "Login successed",
      isFailed: false,
      type: "success",
    };
    state.isLogined = true;
    state.userInfo = userExisted;
    state.isRequireAuthen = false;
  },
  action_checkUserFailed(state) {
    state.response = {
      type: "danger",
      message: "Wrong email or password",
      isFailed: true,
    };

    state.isLogined = false;
  },
  action_requireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = true;
  },
  action_closerequireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = false;
  },
  action_logout(state) {
    state.isLogined = false;
    state.isRequireAuthen = true;
    state.userInfo = {};
    state.response = {
      isFailed: false,
      message: "",
      type: "",
    };
  },
};
