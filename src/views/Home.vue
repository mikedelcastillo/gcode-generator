<template lang="pug">
  .view-container
    ul
      li(v-for='(generator, generator_id) in $store.state.generators')
        router-link(:to="{name:'generate',params:{generator_id}}") {{generator_id}}
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
