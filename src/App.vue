<template>
  <div id="nav">

  </div>
  <router-view/>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('updateCartFromLocalStorage');
    }
  }
</script>

