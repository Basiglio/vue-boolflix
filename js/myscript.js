var app = new Vue({
  el: '#app',
  data: {
    // CREO DATA PER IL VALUE DEL INPUT
    message:"",
    // CREO UN MESSAGGIO VUOTO NEL CASO LA RICERCA FALLISCA
    messageNotFound: "",
    startMessage:"Scrivi il titolo, clicca su Vai o premi Invio",
    // CREO ARRAY DI APPOGGIO PER API
    films: [],
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
        this.startMessage = "";
        // NEL CASO IL MIO ARRAY ABBIA LUNGHEZZA 0 ASSEGNO AL MESSAGGIO VUOTO UNA STRINGA
        this.messageNotFound = "Il film cercato non esiste, effettua un' altra ricerca";
      });
    },
  }
})
