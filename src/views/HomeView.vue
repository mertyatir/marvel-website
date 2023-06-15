<template>
  <div class="home">
    <Comics />
  </div>
</template>

<script>
// @ is an alias to /src

import Comics from "@/components/Comics.vue"

export default {
  name: "HomeView",
  components: {
    Comics,
  },
}
</script>
