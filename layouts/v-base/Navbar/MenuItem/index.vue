<template>
  <li :class="`${data.hasChildren ? 'has-children' : ''}`">
    <nuxt-link to="#">
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
import MenuWrap from '../MenuWrap'

export default {
  name: 'MenuItem',
  components: {
    MenuWrap
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
  mounted () {
  }
}
</script>

<style>

</style>
