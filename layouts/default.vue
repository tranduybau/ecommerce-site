<template>
  <div>
    <Navbar />hoppers &mdash; Colorlib e-Commerce Template
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from './v-base/Navbar'
import Header from './v-base/Header'
import Footer from './v-base/Footer'

export default {
  components: {
    Navbar,
    Header,
    Footer
  },
  head () {}
}
</script>
