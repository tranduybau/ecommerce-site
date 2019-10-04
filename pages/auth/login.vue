<template>
  <div
    class="site-wrap vh-100 vw-100 d-flex align-items-center justify-content-center position-relative"
    style="background: #a6f3ed"
  >
    <img src="/images/hero_1.jpg" alt="" class="w-100 h-100 position-absolute top-0 left-0 img-contain">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-8 offset-xl-7 offset-md-6 offset-sm-2">
          <form @submit.prevent="handleSubmit">
            <div class="p-3 p-lg-5 border bg-white">
              <div class="text-center site-navbar mb-4">
                <div class="site-logo">
                  <nuxt-link to="/" class="js-logo-clone nuxt-link-active">
                    Shoppers
                  </nuxt-link>
                </div>
              </div>
              <div v-if="loginResponse.isFailed" class="alert alert-danger" role="alert">
                {{ loginResponse.message }}
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_email" class="text-black">
                    Email
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    v-model="emailUser"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_subject" class="text-black">
                    Password
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    v-model="passwordUser"
                    type="password"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-12">
                  <input
                    type="submit"
                    value="LOGIN NOW"
                    class="btn btn-primary btn-lg btn-block"
                  >
                </div>
              </div>
              <hr>
              <span>
                Or you can <nuxt-link to="/auth/register" class="text-capitalize">Register Now!</nuxt-link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      emailUser: "",
      passwordUser: "",
    };
  },
  computed: mapState({
    isLoginFailed: state => state.user.response.isFailed,
    loginResponse: state => state.user.response,
  }),
  watch: {
    loginResponse(to, from) {
      if (to.isFailed) {
        setTimeout(() => {
          this.$nuxt.$loading.finish();
        }, 500);
      } else if (this.$store.state.user.isLogined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    handleSubmit() {
      if (this.passwordUser && this.emailUser) {
        this.$nuxt.$loading.start();
        this.$store.dispatch("user/action_checkUser", { email: this.emailUser, password: this.passwordUser });
      }
    },
  },
};
</script>

<style>

</style>
