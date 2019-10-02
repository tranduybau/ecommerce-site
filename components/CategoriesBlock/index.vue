<template>
  <div class="site-section site-blocks-2">
    <div class="container">
      <div class="row">
        <template v-for="(item, index) in listFigure">
          <div :key="index" class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
            <nuxt-link class="block-2-item" :to="item.linkTo">
              <figure class="image">
                <img :src="item.image" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">{{ item.text }}</span>
                <h3>{{ item.title }}</h3>
              </div>
            </nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFigure: [
        {
          title: "Women",
          text: "Collections",
          image: "/images/women.jpg",
          linkTo: "",
        }, {
          title: "Children",
          text: "Collections",
          image: "/images/children.jpg",
          linkTo: "",
        }, {
          title: "Men",
          text: "Collections",
          image: "/images/men.jpg",
          linkTo: "",
        },
      ],
    };
  },
};
</script>

<style>

</style>
