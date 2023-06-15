<template>
  <img class="marvel_logo" src="../assets/marvel-logo.png" alt="marvel-logo" />

  <header class="marvel-banner">
    <div class="fade_bottom"></div>
  </header>
  <h2 class="marvel-headline">Marvel Comics</h2>
  <div class="row_comics">
    <div class="comic_container" v-for="comic in comics" :key="comic.id">
      <router-link
        style="text-decoration: none; color: inherit"
        :to="{ name: 'comic', params: { id: comic.id } }"
      >
        <img
          class="row_comic_img"
          :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
          alt="comic.title"
        />
      </router-link>

      <!--

      <h2 class="comic_title">
        {{ comic.title }}
      </h2>

      <p class="comic_description">{{ comic.description }}</p>

      <p>Creators:</p>

      <div
        class="creator_names"
        v-for="creator in comic.creators.items"
        :key="creator.id"
      >
        {{ creator.name }}
      </div>
      -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Comics",

  mounted() {
    this.$store.dispatch("getComics")
    console.log("this.comics", this.comics)
  },
  computed: {
    ...mapState({
      comics: (state) => state.comics,
    }),
  },
  methods: {},
}
</script>

<style lang="sass">
.row_comics
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))
  grid-gap: 2rem
  margin: 1rem

.row_comic_img
  height: 100%
  width: 100%
  object-fit: contain
  transition: transform 450ms
  &:hover
    transform: scale(1.08)

.comic_title
  font-size: 1rem
  font-weight: bold
  margin: 0.5rem 0

.comic_description
  font-size: 0.8rem
  margin: 0.5rem 0
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical

.creator_names
  font-size: 0.8rem
  margin: 0.5rem 0
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical

.marvel-headline
  font-size: 2rem
  font-weight: bold
  margin: 1rem 0 0 1rem


.marvel-banner
  width: 100%
  background-size: cover
  background-position: center center
  color: white
  object-fit: contain
  height: 448px
  background-image: url(../assets/marvel-banner.jpeg)

.fade_bottom
  width: 100%
  position: absolute
  margin-top: 330px
  height: 7.4rem
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)


.marvel_logo
  height: 50px
  object-fit: contain
  position: absolute
  margin-top: 20px
  margin-left: 20px
  transition: all 0.5s
  &:hover
    transform: scale(1.08)
</style>
