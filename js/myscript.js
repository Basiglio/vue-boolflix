var app = new Vue({
  el: '#app',
  data: {
    // CREO DATA PER IL VALUE DEL INPUT
    message:"",
    // CREO UN MESSAGGIO VUOTO NEL CASO LA RICERCA FALLISCA
    messageNotFound: "",
    // CREO MESSAGGIO INIZIALE
    startMessage:"Cerca tramite preset oppure scrivi il titolo, clicca su Vai o premi Invio.",
    // CREO ARRAY DI APPOGGIO PER API
    films: [],
    // CREO CONTENITORE PER IL VALUE DELLA LINGUA
    language: "",
  },
  methods: {
    // CREO METODO(FUNZIONE)
    search: function () {
      // CHIAMO L'API E CONCATENO LA VALUE DEL MIO INPUT
      axios.get("https://api.themoviedb.org/3/search/multi?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48" + "&language=" + this.language + "&query="  + this.message)
      // OTTENGO LA MIA RISPOSTA
      .then((response) => {
        // PER OGNI FILM MODIFICA LA CHIAVE VOTE_AVERAGE VOTO IN INTERO e DIVIDILO PER 2
        response.data.results.forEach((film) => {
          film.vote_average = Math.ceil(film.vote_average / 2);
        });
        // ASSEGNO IL MIO ARRAY CON L'ARRAY DELL'API
        this.films = response.data.results;
        // SVUOTO LA VALUE DEL MIO INPUT
        this.message = "";
        // CANCELLO MESSAGIO INIZIALE
        this.startMessage = "";
        // NEL CASO IL MIO ARRAY ABBIA LUNGHEZZA 0 VISUALIZZO QUESTO MESSAGGIO
        this.messageNotFound = "Il film cercato non esiste, effettua un' altra ricerca.";
      });
    },
    mostPopular: function () {
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48&language=" + this.language)
      .then((response) => {
        response.data.results.forEach((film) => {
          film.vote_average = Math.ceil(film.vote_average / 2);
        });
        this.films = response.data.results;
        this.startMessage = "";
      });
    },
    upcoming: function() {
      axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48&language=" + this.language)
      .then((response) => {
        response.data.results.forEach((film) => {
          film.vote_average = Math.ceil(film.vote_average / 2);
        });
        this.films = response.data.results;
        this.startMessage = "";
      });
    },
    mostPopularTvShow: function() {
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=cfdd37ec50ecc36f0abe0f17a31c2b48&language=" + this.language)
      .then((response) => {
        response.data.results.forEach((film) => {
          film.vote_average = Math.ceil(film.vote_average / 2);
        });
        this.films = response.data.results;
        this.startMessage = "";
      });
    },
  }
})
