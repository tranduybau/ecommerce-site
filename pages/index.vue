<template>
  <main>
    <FeaturesIntro />
    <CategoriesBlock />
    <div class="site-section block-3 site-blocks-2 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 position-relative home__slick-carousel">
            <client-only>
              <Slick :options="slickOptions" class="mx-n2">
                <template v-for="(item, index) in dataList">
                  <div :key="index" class="item px-2">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                        <img :src="item.image" alt="Image placeholder" class="img-fluid">
                      </figure>
                      <div class="block-4-text p-4">
                        <h3>
                          <nuxt-link to="/product-detail" class="text-capitalize">
                            {{ item.title }}
                          </nuxt-link>
                        </h3>
                        <p class="mb-0">
                          {{ item.text }}
                        </p>
                        <p class="text-primary font-weight-bold">
                          ${{ item.price }}
                        </p>
                      </div>
                    </div>
                  </div>
                </template>
              </Slick>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section block-8">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Big Sale!</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-7 mb-5">
            <nuxt-link to="/shop">
              <img src="/images/blog_1.jpg" alt="Image placeholder" class="img-fluid rounded">
            </nuxt-link>
          </div>
          <div class="col-md-12 col-lg-5 text-center pl-md-5">
            <h2>
              <nuxt-link to="/shop">
                50% less in all items
              </nuxt-link>
            </h2>
            <p class="post-meta mb-4">
              By <nuxt-link to="">
                Carl Smith
              </nuxt-link> <span class="block-8-sep">&bullet;</span> September
              3, 2018
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis
              ipsum animi deleniti fugiat. Ex, veniam?
            </p>
            <p>
              <nuxt-link to="/shop" class="btn btn-primary btn-sm">
                Shop Now
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>

<script>
import CategoriesBlock from "../components/CategoriesBlock";
import FeaturesIntro from "~/components/FeaturesIntro";

export default {
  components: {
    CategoriesBlock,
    FeaturesIntro,
  },
  data() {
    return {
      dataList: [
        {
          title: "tank top",
          text: "Finding perfect t-shirt",
          price: 50,
          image: "/images/cloth_1.jpg",
        }, {
          title: "Corater",
          text: "Finding perfect t-shirt",
          price: 50,
          image: "/images/shoe_1.jpg",
        }, {
          title: "Polo Shirt",
          text: "Finding perfect t-shirt",
          price: 50,
          image: "/images/cloth_2.jpg",
        }, {
          title: "T-Shirt Mockup",
          text: "Finding perfect t-shirt",
          price: 50,
          image: "/images/cloth_3.jpg",
        }, {
          title: "tank top",
          text: "Finding perfect t-shirt",
          price: 50,
          image: "/images/cloth_1.jpg",
        },
      ],
      slickOptions: {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        nextArrow: `<span class="icon-arrow_forward left-50"/>`,
        prevArrow: `<span class="icon-arrow_back right-50"/>`,
        swipeToSlide: true,
      },
    };
  },
  methods: {
  },
};

</script>
