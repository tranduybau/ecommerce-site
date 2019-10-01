<template>
  <div v-if="$route.path === '/'" class="site-blocks-cover" style="background-image: url(images/hero_1.jpg);">
    <div class="container">
      <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
          <h1 class="mb-2">
            Finding Your Perfect Shoes
          </h1>
          <div class="intro-text text-center text-md-left">
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
              Integer accumsan tincidunt fringilla.
            </p>
            <p>
              <nuxt-link to="#" class="btn btn-sm btn-primary">
                Shop Now
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="bg-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-0">
          <nuxt-link to="/">
            Home
          </nuxt-link>
          <span class="mx-2 mb-0">/</span>
          <strong class="text-black text-capitalize">{{ formatRoute }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    formatRoute() {
      const placeOfForwardSlash = this.$route.path.substring(1, this.$route.path.length).indexOf("/");

      if (placeOfForwardSlash !== -1) {
        return this.$route.path.substring(1, placeOfForwardSlash + 1);
      } else {
        return this.$route.path.substring(1, this.$route.path.length);
      }
    },
  },
};
</script>

<style>

</style>
