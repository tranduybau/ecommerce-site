<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9 order-2">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="float-md-left mb-4">
                <h2 class="text-black h5">
                  Shop All
                </h2>
              </div>
              <div class="d-flex">
                <div class="dropdown mr-1 ml-md-auto">
                  <button
                    id="dropdownMenuOffset"
                    type="button"
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Latest
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <nuxt-link to="/" class="dropdown-item">
                      Men
                    </nuxt-link>
                    <nuxt-link to="/" class="dropdown-item">
                      Women
                    </nuxt-link>
                    <nuxt-link to="/" class="dropdown-item">
                      Children
                    </nuxt-link>
                  </div>
                </div>
                <div class="btn-group">
                  <button id="dropdownMenuReference" type="button" class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">
                    Reference
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <nuxt-link to="/" class="dropdown-item">
                      Relevance
                    </nuxt-link>
                    <nuxt-link to="/" class="dropdown-item">
                      Name, A to Z
                    </nuxt-link>
                    <nuxt-link to="/" class="dropdown-item">
                      Name, Z to A
                    </nuxt-link>
                    <div class="dropdown-divider" />
                    <nuxt-link to="/" class="dropdown-item">
                      Price, low to high
                    </nuxt-link>
                    <nuxt-link to="/" class="dropdown-item">
                      Price, high to low
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Tank Top
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect t-shirt
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Corater
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init aos-animate">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_2.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Polo Shirt
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_3.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      T-Shirt Mockup
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Corater
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Tank Top
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect t-shirt
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Corater
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_2.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Polo Shirt
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_3.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      T-Shirt Mockup
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Corater
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_1.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Tank Top
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect t-shirt
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 aos-init">
              <div class="block-4 text-center border">
                <figure class="block-4-image">
                  <nuxt-link to="/productdetail">
                    <img src="/images/cloth_2.jpg" alt="Image placeholder" class="img-fluid">
                  </nuxt-link>
                </figure>
                <div class="block-4-text p-4">
                  <h3>
                    <nuxt-link to="/productdetail">
                      Polo Shirt
                    </nuxt-link>
                  </h3>
                  <p class="mb-0">
                    Finding perfect products
                  </p>
                  <p class="text-primary font-weight-bold">
                    $50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row aos-init">
            <div class="col-md-12 text-center">
              <div class="site-block-27">
                <ul>
                  <li>
                    <nuxt-link to="">
                      &lt;
                    </nuxt-link>
                  </li>
                  <li class="active">
                    <span>1</span>
                  </li>
                  <li>
                    <nuxt-link to="">
                      2
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      3
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      4
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      5
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="">
                      &gt;
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 order-1 mb-5 mb-md-0">
          <div class="border p-4 rounded mb-4">
            <h3 class="mb-3 h6 text-uppercase text-black d-block">
              Categories
            </h3>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <nuxt-link to="" class="d-flex">
                  <span>Men</span> <span class="text-black ml-auto">(2,220)</span>
                </nuxt-link>
              </li>
              <li class="mb-1">
                <nuxt-link to="" class="d-flex">
                  <span>Women</span> <span class="text-black ml-auto">(2,550)</span>
                </nuxt-link>
              </li>
              <li class="mb-1">
                <nuxt-link to="" class="d-flex">
                  <span>Children</span> <span class="text-black ml-auto">(2,124)</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="border p-4 rounded mb-4">
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Filter by Price
              </h3>
              <div id="slider-range" class="border-primary ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;" /><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;" /><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;" />
              </div>
              <input id="amount" type="text" name="text" class="form-control border-0 pl-0 bg-white" disabled="">
            </div>
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Size
              </h3>
              <label for="s_sm" class="d-flex">
                <input id="s_sm" type="checkbox" class="mr-2 mt-1"> <span class="text-black">Small (2,319)</span>
              </label>
              <label for="s_md" class="d-flex">
                <input id="s_md" type="checkbox" class="mr-2 mt-1"> <span class="text-black">Medium (1,282)</span>
              </label>
              <label for="s_lg" class="d-flex">
                <input id="s_lg" type="checkbox" class="mr-2 mt-1"> <span class="text-black">Large (1,392)</span>
              </label>
            </div>
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Color
              </h3>
              <nuxt-link to="" class="d-flex color-item align-items-center">
                <span class="bg-danger color d-inline-block rounded-circle mr-2" /> <span class="text-black">Red (2,429)</span>
              </nuxt-link>
              <nuxt-link to="" class="d-flex color-item align-items-center">
                <span class="bg-success color d-inline-block rounded-circle mr-2" /> <span class="text-black">Green (2,298)</span>
              </nuxt-link>
              <nuxt-link to="" class="d-flex color-item align-items-center">
                <span class="bg-info color d-inline-block rounded-circle mr-2" /> <span class="text-black">Blue (1,075)</span>
              </nuxt-link>
              <nuxt-link to="" class="d-flex color-item align-items-center">
                <span class="bg-primary color d-inline-block rounded-circle mr-2" /> <span class="text-black">Purple (1,075)</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="site-section site-blocks-2 mb-0 pb-0">
            <div class="row justify-content-center text-center">
              <div class="col-md-7 site-section-heading pt-4">
                <h2>Categories</h2>
              </div>
            </div>
          </div>
          <CategoriesBlock />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesBlock from "../../components/CategoriesBlock";

export default {
  components: {
    CategoriesBlock,
  },
};
</script>

<style>

</style>
