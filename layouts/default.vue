<template>
  <div>
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
      return 0;
    },
  },
  watch: {
    isRequireAuthen(newValue, oldValue) {
      this.$router.push("/auth/login");
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
