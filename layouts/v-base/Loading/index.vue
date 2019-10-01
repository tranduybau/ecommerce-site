<template>
  <div :class="`position-fixed top-0 left-0 w-100 h-100 bg-white ${loading ? 'z-index-high' : 'z-index-low opacity-0'}`">
    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
      <img src="/images/40-loading.gif" alt="" class="img-contain">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  watch: {
    loading: (newValue) => {
      if (newValue) {
        document.getElementById("__layout").classList.add("opacity-0");
        document.body.classList.add("overflow-hidden");
      } else {
        document.getElementById("__layout").classList.remove("opacity-0");
        document.body.classList.remove("overflow-hidden");
      }
    }
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish(countdown = 1000) {
      setTimeout(() => {
        this.loading = false;
      }, countdown);
    }
  }
};
</script>

<style scoped>
.z-index-low {
  z-index: -100;
}
.z-index-high {
  z-index: 99999;
}
</style>
