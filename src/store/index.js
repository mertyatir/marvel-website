import { createStore } from "vuex"

import { public_key, private_key } from "@/marvel"
import axios from "axios"
import md5 from "md5"

export default createStore({
  state: {
    comics: [],
    comic: [],
  },
  getters: {},
  mutations: {
    getComics(state, payload) {
      state.comics = []

      const publicKey = public_key
      const privateKey = private_key

      function generateTimestamp() {
        // Get the current timestamp in milliseconds
        const timestamp = new Date().getTime()
        return timestamp.toString()
      }

      function generateHash(timestamp, privateKey, publicKey) {
        // Concatenate the timestamp, privateKey, and publicKey
        const hashString = timestamp + privateKey + publicKey

        // Generate the MD5 hash of the concatenated string
        const hash = md5(hashString)
        return hash
      }

      const timestamp = generateTimestamp()
      const hash = generateHash(timestamp, privateKey, publicKey)

      const limit = 30

      // Use the timestamp, publicKey, and hash in your API request
      const apiUrl = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`

      // Make your API request using Axios
      axios
        .get(apiUrl)
        .then((response) => {
          console.log("response", response)
          response.data.data.results.forEach((item) => {
            state.comics.push(item)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getComic(state, id) {
      state.comic = []

      const publicKey = public_key
      const privateKey = private_key

      function generateTimestamp() {
        // Get the current timestamp in milliseconds
        const timestamp = new Date().getTime()
        return timestamp.toString()
      }
      function generateHash(timestamp, privateKey, publicKey) {
        // Concatenate the timestamp, privateKey, and publicKey
        const hashString = timestamp + privateKey + publicKey

        // Generate the MD5 hash of the concatenated string
        const hash = md5(hashString)
        return hash
      }

      const timestamp = generateTimestamp()
      const hash = generateHash(timestamp, privateKey, publicKey)

      var comicId = id

      // Use the timestamp, publicKey, and hash in your API request
      const apiUrl = `http://gateway.marvel.com/v1/public/comics/${comicId}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

      // Make your API request using Axios
      axios
        .get(apiUrl)
        .then((response) => {
          console.log("response", response)
          state.comic = response.data.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  actions: {
    getComics({ commit }) {
      commit("getComics")
    },
    getComic({ commit }, id) {
      commit("getComic", id)
    },
  },
  modules: {},
})
