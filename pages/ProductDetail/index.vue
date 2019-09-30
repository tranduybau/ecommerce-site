<template>
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="/images/cloth_1.jpg" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 class="text-black">
              Tank Top T-Shirt
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
            <p class="mb-4">
              Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.
            </p>
            <p><strong class="text-primary h4">$50.00</strong></p>
            <div class="mb-1 d-flex">
              <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input id="option-sm" type="radio" name="shop-sizes"></span> <span class="d-inline-block text-black">Small</span>
              </label>
              <label for="option-md" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input id="option-md" type="radio" name="shop-sizes"></span> <span class="d-inline-block text-black">Medium</span>
              </label>
              <label for="option-lg" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input id="option-lg" type="radio" name="shop-sizes"></span> <span class="d-inline-block text-black">Large</span>
              </label>
              <label for="option-xl" class="d-flex mr-3 mb-3">
                <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input id="option-xl" type="radio" name="shop-sizes"></span> <span class="d-inline-block text-black"> Extra Large</span>
              </label>
            </div>
            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px;">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-primary js-btn-minus" type="button">
                    −
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control text-center"
                  value="1"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                >
                <div class="input-group-append">
                  <button class="btn btn-outline-primary js-btn-plus" type="button">
                    +
                  </button>
                </div>
              </div>
            </div>
            <p>
              <nuxt-link to="cart.html" class="buy-now btn btn-sm btn-primary">
                Add To Cart
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section block-3 site-blocks-2 bg-light d-none">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="nonloop-block-3 owl-carousel owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 1864px; padding-left: 15px; padding-right: 15px;">
                  <div class="owl-item active" style="width: 346.667px; margin-right: 20px;">
                    <div class="item">
                      <div class="block-4 text-center">
                        <figure class="block-4-image">
                          <img src="/images/cloth_1.jpg" alt="Image placeholder" class="img-fluid">
                        </figure>
                        <div class="block-4-text p-4">
                          <h3>
                            <nuxt-link to="#">
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
                  </div><div class="owl-item active" style="width: 346.667px; margin-right: 20px;">
                    <div class="item">
                      <div class="block-4 text-center">
                        <figure class="block-4-image">
                          <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                        </figure>
                        <div class="block-4-text p-4">
                          <h3>
                            <nuxt-link to="#">
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
                  </div><div class="owl-item active" style="width: 346.667px; margin-right: 20px;">
                    <div class="item">
                      <div class="block-4 text-center">
                        <figure class="block-4-image">
                          <img src="/images/cloth_2.jpg" alt="Image placeholder" class="img-fluid">
                        </figure>
                        <div class="block-4-text p-4">
                          <h3>
                            <nuxt-link to="#">
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
                  </div><div class="owl-item" style="width: 346.667px; margin-right: 20px;">
                    <div class="item">
                      <div class="block-4 text-center">
                        <figure class="block-4-image">
                          <img src="/images/cloth_3.jpg" alt="Image placeholder" class="img-fluid">
                        </figure>
                        <div class="block-4-text p-4">
                          <h3>
                            <nuxt-link to="#">
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
                  </div><div class="owl-item" style="width: 346.667px; margin-right: 20px;">
                    <div class="item">
                      <div class="block-4 text-center">
                        <figure class="block-4-image">
                          <img src="/images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
                        </figure>
                        <div class="block-4-text p-4">
                          <h3>
                            <nuxt-link to="#">
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
                  </div>
                </div>
              </div><div class="owl-nav">
                <div class="owl-prev disabled">
                  <span class="icon-arrow_back" />
                </div><div class="owl-next">
                  <span class="icon-arrow_forward" />
                </div>
              </div><div class="owl-dots">
                <div class="owl-dot active">
                  <span />
                </div><div class="owl-dot">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
