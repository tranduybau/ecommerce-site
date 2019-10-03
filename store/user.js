export const state = () => ({
  isLogined: false,
  isOpenLoginBox: false,
  isRequireAuthen: false,
  userInfo: {},
  response: {
    isFailed: false,
    messenge: "",
    type: "",
  },
});

export const actions = {
  async action_checkUser({ commit }, userInfo) {
    try {
      const { email, password } = userInfo;
      const userResponse = await this.$fireAuth.signInWithEmailAndPassword(email, password);
      console.log(userResponse);

      commit("actions_closerequireAuthenImmediatelySuccessed");
      commit("action_checkUserSuccessed", userResponse);
    } catch (error) {
      commit("action_checkUserFailed", error);
    }
  },
  action_openLoginBox({ commit }) {
    commit("action_openLoginBoxSuccessed");
  },
  action_closeLoginBox({ commit }) {
    commit("action_closeLoginBoxSuccessed");
  },
  actions_requireAuthenImmediately({ commit }) {
    commit("actions_requireAuthenImmediatelySuccessed");
  },
  actions_closerequireAuthenImmediately({ commit }) {
    commit("actions_closerequireAuthenImmediatelySuccessed");
  },
};

export const mutations = {
  action_checkUserSuccessed(state, userExisted) {
    state = {
      response: {
        messenge: "Login successed",
        type: "success",
      },
      isLogined: true,
      userInfo: userExisted,
    };
  },
  action_checkUserFailed(state, error) {
    state = {
      response: {
        type: "danger",
        messenge: error,
        isFailed: true,
      },
    };
  },
  action_openLoginBoxSuccessed(state) {
    state.isOpenLoginBox = true;
  },
  action_closeLoginBoxSuccessed(state) {
    state.isOpenLoginBox = false;
  },
  actions_requireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = true;
  },
  actions_closerequireAuthenImmediatelySuccessed(state) {
    state.isRequireAuthen = false;
  },
};
