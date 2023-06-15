<template>
  <div class="comic" v-for="item in comic" :key="comic.id">
    <img
      class="comic_image"
      :src="item.thumbnail.path + '.' + item.thumbnail.extension"
    />

    <h2>{{ item.title }}</h2>

    <p class="comic_description">{{ item.description }}</p>

    <h3>Creators</h3>

    <div v-for="creator in item.creators.items" :key="creator.id">
      {{ creator.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Comic",

  mounted() {
    this.$store.dispatch("getComic", this.$route.params.id)
    console.log("this.comic", this.comic)
  },
  methods: {},
  computed: {
    ...mapState({
      comic: (state) => state.comic,
    }),
  },
}
</script>

<style lang="sass">
.comic_image
  width: 300px
  height: 500px

.comic
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  margin: 0 auto
  width: 100%
  height: 100vh

.comic_description
  margin: 0 auto
  padding: 1rem
  margin-bottom: 1rem
  text-align: center
</style>
