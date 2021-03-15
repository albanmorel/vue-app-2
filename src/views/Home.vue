<template>
  <div class="home">
    <itemsList title="Ad News Aeternam" :newsList="updatedNewsList"></itemsList>
    <span class="fav-btn" @click="goToFav()">My favorites</span>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsList from '@/components/itemsList.vue'

//const axios = require('axios');

export default {
  name: 'Home',
  components: {
    itemsList
  },  
  created : function () {
    this.fetchData();
  },
  data() {
    return {
      news : [
        {
          source: {
            id : "sourceId1",
            name : "sourceName"
          },
          author: "David GoodEnough",
          title: "Tout va bien",
          descritpion: "Même si tout va mal, tout va bien",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          urlToImage: "../assets/noimgjpg.jpg",
          publishedAt: "2021-02-26T00:40:52Z",
          content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then",
        },
        {
          source: {
            id : "sourceId2",
            name : "sourceName"
          },
          author: "MV",
          title: "Speedons",
          descritpion: "SpeeDons est un marathon de speedrun caritatif au profit de Médecins du Monde.",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          urlToImage: "../assets/noimgjpg.jpg",
          publishedAt: "2021-02-26T00:40:52Z",
          content: "Lorem ipsum dolor sit amet, Speedon consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          source: {
            id : "sourceId3",
            name : "sourceName"
          },
          author: "Zerator",
          title: "Zevent 2020",
          descritpion: "La quatrième édition de ce marathon caritatif a vu défiler pendant tout le week-end une trentaine de stars de Twitch, de YouTube et de l'e-sport.",
          url: "https://fr.wikipedia.org/wiki/Z_Event",
          urlToImage: "../assets/noimgjpg.jpg",
          publishedAt: "2021-02-26T00:40:52Z",
          content: "Le Z Event est un projet caritatif créé par Adrien Nougaret et Alexandre Dachary (respectivement connus sous les pseudonymes ZeratoR et Dach) ayant pour objectif de réunir des streameurs francophones afin de récolter des dons qui permettront de soutenir une association caritative. Il est organisé sur le site de streaming Twitch. La première édition a eu lieu en 2016 sous le nom Projet Avengers. L'événement se fait au profit, successivement, de Save the Children, la Croix-Rouge française, Médecins sans Frontières, l'institut Pasteur et Amnesty International France. Au cours de ses diverses éditions, le Z Event a collecté plus de 10 millions d'euros.",
        },
        {
          source: {
            id : "sourceId4",
            name : "sourceName"
          },
          author: "Doge",
          title: "Much code",
          descritpion: "Much Code! Surch WoW! Many html! ",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          urlToImage: "../assets/noimgjpg.jpg",
          publishedAt: "2021-02-26T00:40:52Z",
          content: "Wouaf",
        },
      ],
      favs: [
        "sourceId1",
        "sourceId3",
      ],
    };
  },
  computed: {
      updatedNewsList: function () {
          
          let favs = this.favs;
          this.news.forEach(item => {
            if(favs.includes(item.source.id)){
                item.isFav = true;
            }
            else{
              item.isFav = false;
            }
          });

          console.log(this.news)

          return this.news;
      }
  },
    methods: {      
        fetchData: async function () {
            /*try {
                const response = await axios.get(
                  this.apiURL + 
                  'q=Apple&' +
                  'from=2021-03-15&' +
                  'sortBy=popularity&' +
                  this.apiKey
                  )
                  console.log(response)
            } catch (error) {
                console.log(error);
            }*/

            return 0
        },
        goToFav: function(){

          let favoriteNewsList = [];
          this.news.forEach(item => {
            if(item.isFav){
              favoriteNewsList.push(item);
            }
          });

          console.log(favoriteNewsList)
          this.$router.push({
            name: 'myFavorite',
            params: { newsList: favoriteNewsList }
          })          
        }
    },
}
</script>
