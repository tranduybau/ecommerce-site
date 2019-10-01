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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$nuxt.$loading.finish(1000);
    });
  },
};
</script>
