<template>
  <nav id="jsStickyMenu" class="site-navigation text-right text-md-center top-0 left-0 w-100 bg-white transition-normal" role="navigation">
    <div class="container">
      <ul class="site-menu js-clone-nav d-none d-md-block">
        <template v-for="(item, index) in menuList">
          <MenuWrap :key="index" :data="item" />
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import MenuWrap from "../MenuWrap";
export default {
  name: "StickyMenu",
  components: {
    MenuWrap,
  },
  data() {
    return {
      menuList: [
        {
          title: "home",
          linkTo: "/",
          hasChildren: true,
          childrenList: [
            {
              title: "Menu One",
              linkTo: "/",
              hasChildren: false,
            },
            {
              title: "Menu Two",
              linkTo: "/",
              hasChildren: false,
            },
            {
              title: "Menu Three",
              linkTo: "/",
              hasChildren: false,
            },
            {
              title: "Sub Menu",
              linkTo: "/",
              hasChildren: true,
              childrenList: [
                {
                  title: "Menu One",
                  linkTo: "/",
                  hasChildren: false,
                },
                {
                  title: "Menu Two",
                  linkTo: "/",
                  hasChildren: false,
                },
                {
                  title: "Menu Three",
                  linkTo: "/",
                  hasChildren: false,
                },
                {
                  title: "Sub Menu",
                  linkTo: "/",
                  hasChildren: true,
                  listPosition: "left-100",
                  childrenList: [
                    {
                      title: "Menu One",
                      linkTo: "/",
                      hasChildren: false,
                    },
                    {
                      title: "Menu Two",
                      linkTo: "/",
                      hasChildren: false,
                    },
                    {
                      title: "Menu Three",
                      linkTo: "/",
                      hasChildren: false,
                    },
                  ],
                },
              ],
            },
          ],
        }, {
          title: "about",
          linkTo: "/about",
          hasChildren: false,
        }, {
          title: "shop",
          linkTo: "/shop",
          hasChildren: false,
        }, {
          title: "contact",
          linkTo: "/contact",
          hasChildren: false,
        },
      ],
    };
  },
  mounted() {
    const navbar = document.getElementById("jsStickyMenu");
    const sticky = navbar.offsetTop;

    window.onscroll = function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("position-fixed");
        document.getElementById("jsSiteNavbarTop").classList.add("site-navbar-top--fixed-margin-bottom");
      } else {
        navbar.classList.remove("position-fixed");
        document.getElementById("jsSiteNavbarTop").classList.remove("site-navbar-top--fixed-margin-bottom");
      }
    };
  },
};
</script>

<style>

</style>
