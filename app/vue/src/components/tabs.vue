<template lang="pug">
  .tabs-cont
    ul.list
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).tabs {{tab.name}}
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {name: 'TAB 1', href: "/"},
        {name: 'TAB 2', href: "/blog"},
        {name: 'TAB 3', href: "/works"},
      ]
    }
  }
}
</script>
<style src="styles/tabs.scss" lang="scss" scoped></style>
