<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>


<script>
import messages from '@/utils/messages'
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fberror) {
      console.log(fberror)
      this.$error(messages[fberror.code] || 'что-то нет так')
    }
  }
}
</script>
