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

      commit("action_checkUserSuccessed", this.$fireAuth.currentUser);
    } catch (error) {
      commit("action_checkUserFailed");
    }
  },
  actions_requireAuthenImmediately({ commit }) {
    commit("actions_requireAuthenImmediatelySuccessed");
  },
  actions_closerequireAuthenImmediately({ commit }) {
    commit("actions_closerequireAuthenImmediatelySuccessed");
  },
};

export const mutations = {
  action_checkUserPending(state) {
    state = {
      isLogined: false,
      userInfo: {},
      response: {
        isFailed: false,
        message: "",
        type: "",
      },
    };
  },
  action_checkUserSuccessed(state, userExisted) {
    state = {
      response: {
        message: "Login successed",
        type: "success",
      },
      isLogined: true,
      userInfo: userExisted,
    };
  },
  action_checkUserFailed(state) {
    state.response = {
      type: "danger",
      message: "Wrong email or password",
      isFailed: true,
    };

    state.isLogined = false;
  },
  actions_requireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = true;
  },
  actions_closerequireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = false;
  },
};
