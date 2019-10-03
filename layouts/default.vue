<template>
  <div v-if="isAuthenRoute || isRequireAuthen">
    <nuxt />
  </div>
  <div v-else>
    <Navbar />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./v-base/Navbar";
import Header from "./v-base/Header";
import Footer from "./v-base/Footer";

export default {
  components: {
    Navbar,
    Header,
    Footer,
  },
  computed: {
    isRequireAuthen() {
      return this.$store.state.user.isRequireAuthen;
    },
    isAuthenRoute() {
      return this.$route.path.includes("auth");
    },
  },
  watch: {
    $route(to, from) {
      // this.isAuthenRoute = to.path.includes("auth");
      console.log(this.isAuthenRoute);
    },
    isRequireAuthen(to, from) {
      if (to) {
        this.$router.push("/auth/login");
      } else {
        this.$store.dispatch("user/actions_requireAuthenimmediately");
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$nuxt.$loading.finish(1000);
    });
  },
};
</script>
