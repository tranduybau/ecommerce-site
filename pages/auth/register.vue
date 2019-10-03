<template>
  <div
    class="site-wrap vh-100 vw-100 d-flex align-items-center justify-content-center position-relative"
    style="background: #a6f3ed"
  >
    <img src="/images/hero_1.jpg" alt="" class="w-100 h-100 position-absolute top-0 left-0 img-contain">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-8 offset-xl-7 offset-md-6 offset-sm-2">
          <form action="" method="post">
            <div class="p-3 p-lg-5 border bg-white">
              <div class="text-center site-navbar mb-4">
                <div class="site-logo">
                  <a href="/" class="js-logo-clone nuxt-link-active">
                    Shoppers
                  </a>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_email" class="text-black">
                    Email
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    id="c_email"
                    type="email"
                    name="c_email"
                    placeholder=""
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
                    id="c_subject"
                    type="text"
                    name="c_subject"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-12">
                  <label for="c_subject" class="text-black">
                    Re-Password
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    id="c_subject"
                    type="text"
                    name="c_subject"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-12">
                  <input
                    type="submit"
                    value="Sign In"
                    class="btn btn-primary btn-lg btn-block"
                  >
                </div>
              </div>
              <hr>
              <span>
                Or you can <nuxt-link to="/auth/login" class="text-capitalize">Login Now!</nuxt-link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
