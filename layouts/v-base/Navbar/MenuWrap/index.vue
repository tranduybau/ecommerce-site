<template>
  <li class=" active" :class="`${data.hasChildren ? 'has-children' : ''}`">
    <nuxt-link to="index.html">
      {{ data.title }}
    </nuxt-link>
    <ul v-if="data.hasChildren" class="dropdown">
      <template v-for="(item, index) in data.childrenList">
        <MenuWrap :key="index" :data="item" />
      </template>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuWrap',
  components: {
  },
  props: {
    data: {
      type: Object,
      default () {
        return {
          title: '',
          linkTo: '',
          hasChildren: false,
          childrenList: []
        }
      }
    }
  },
  mounted  () {
  }
}
</script>

<style>

</style>
