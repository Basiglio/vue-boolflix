var app = new Vue({
  el: '#app',
  data: {
    message:"",
    films: [],
  },
  methods: {
    search: function () {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48" + "&query=" + this.message)
      .then((response) => {
        this.films = response.data.results;
        console.log(this.films);
        this.message = "";
      });
    }
  }
})
