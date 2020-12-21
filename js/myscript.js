var app = new Vue({
  el: '#app',
  data: {
    // CREO DATA PER IL VALUE DEL INPUT
    message:"",
    // CREO ARRAY DI APPOGGIO PER API
    films: [],
    // languages:
    // [
    //   {
    //     it: "https://images.emojiterra.com/openmoji/v12.2/512px/1f1ec-1f1e7.png"
    //   },
    //   {
    //     en: "https://images.emojiterra.com/openmoji/v12.2/512px/1f1ee-1f1f9.png"
    //   }
    // ],
  },
  methods: {
    // CREO METODO(FUNZIONE)
    search: function () {
      // CHIAMO L'API E CONCATENO LA VALUE DEL MIO INPUT
      axios.get("https://api.themoviedb.org/3/search/multi?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48" + "&query=" + this.message)
      // OTTENGO LA MIA RISPOSTA
      .then((response) => {
        // ASSEGNO IL MIO ARRAY CON L'ARRAY DELL'API
        this.films = response.data.results;
        console.log(this.films);
        // SVUOTO LA VALUE DEL MIO INPUT
        this.message = "";
      });
    }
  }
})
