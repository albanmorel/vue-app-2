<template>
  <div class="itemsList">
    <h1><a class="pasdutoutunrickroll" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{{title}}</a></h1>
    <div class="mainWrapper">
        <span v-html="retour" @click="goToPreviousPage"></span>
        <select v-model="filterValue">
          <option disabled value="title">Filter by..</option>
          <option>Title</option>
          <option>Author</option>
          <option>Descritpion</option> 
          <option>Content</option>                  
        </select>
        <input type="text" v-model="searchString" placeholder="Enter your search terms" />
        <ul>
            <li v-for="news in filteredNews" :key="news.source.id" class="itemsWrapper">
              <img class="newsImg" src="../assets/doge.jpg">
              <span class="toArticle" @click="redirectToNews(news.url)" v-tooltip.bottom-start=" {content : 'To Article', classes: 'tooltiptext'}">></span>
              <h3 class="newsTitle">
                {{news.title}} 
                <h5>
                  by {{news.author}}
                </h5>
              </h3>
              <p class="newsDesc" @click="OpenDetailedNews(news.urlToImage, news.url, news.title, news.author, news.content)">
                {{news.descritpion}}
              </p>
            </li>
        </ul>
        <div class="detailedNews" :class="{'active' : detailedNewsToggeled}">
            <img class="detailedNewsImg" src="../assets/doge.jpg">
            <span class="close-cross" @click="CloseDetailedNews()"> X </span>
            <span class="detailedNewsToArticle" @click="redirectToNews(detailedNews.newsURL)">Go to article</span>
            <h3 class="detailedNewsTitle">{{detailedNews.title}}
              <h5>
                by {{detailedNews.author}}
              </h5>
            </h3>
            <p class="detailedNewsContent">{{detailedNews.content}}</p>
          <div>

          </div>
        </div>


    </div>
  </div>
</template>

<script>
//const axios = require('axios');

export default {
  name: 'itemsList',
  props: {title: String, newsList: Array},
  data() {
    return {
      retour : "< retour",
      detailedNewsToggeled: false,
      searchString: "",
      filterValue: "title",
      detailedNews: {
        imgUrl: "",
        newsURL: "",
        title: "",
        author: "",
        content: ""
      }
    }
  },  
  computed: {
      filteredNews: function () {
          var news_array = this.newsList,
          searchString = this.searchString,
          filterValue = this.filterValue.toLowerCase();

          if(!searchString){
              return news_array;
          }

          searchString = searchString.trim().toLowerCase();

          news_array = news_array.filter(function(item){
              if(item[filterValue].toLowerCase().indexOf(searchString) !== -1){
                  return item;
              }
          })
          return news_array;
      }
  },
  created : function () {}, 
  methods: {
    redirectToNews: function (url){
      window.location = url;    
    },
    goToPreviousPage: function() {
      this.$router.go(-1);
    },
    OpenDetailedNews: function(newImgUrl, newNewsUrl, newTitle, newAuthor, newContent) {
      this.detailedNews.imgUrl = newImgUrl,
      this.detailedNews.newsURL = newNewsUrl,
      this.detailedNews.title = newTitle,
      this.detailedNews.author = newAuthor,
      this.detailedNews.content = newContent,

      this.detailedNewsToggeled = !this.detailedNewsToggeled
      console.log(this.filterValue)
    },
    CloseDetailedNews: function() {
      this.detailedNewsToggeled = !this.detailedNewsToggeled
    },
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addItemWrapper{    
      display: grid;
      grid-template-columns: auto;
      grid-auto-rows: 2.5em 7rem ;
      margin-top: 0.6rem;
      padding: 0.6rem;
      border-radius: 10px;
      color: #dadada;
      background-color: #3f5873;
  }
  .addItemWrapper.inactive{
    display: none;
  }  
  .addItemWrapper > .addItem {
    grid-column: 1/1;
    justify-self: center;
  }
  .addItem{
    user-select: none;
    cursor: pointer;
  }
  .itemsWrapper.inactive{
    display: none;
  }
  .close-gameform-btn{
    user-select: none;
    cursor: pointer;
  }
  .gamedesc > textarea{
    width: 90%;
    height: 90%;
  }
  .gamedesc{
    width: 100%;
    height: 100%;
  }
  .createItem-btn{    
    border-radius: 7px;
    border: solid 1px transparent;
    padding: 0.5rem;
    user-select: none;
    font-weight: bold;
    background-color: #dadada;
    grid-column: 2/2;
    grid-row: 2/2;
    width: 100%;
    height: 50%;
    align-self: center;
  }
  .isOnline-checkbox{
    justify-self: end;
  }
  .detailedNews{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 80%;
    height: 80%;
    z-index: 10;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-auto-rows: 25% 25% 25% 25% ;
    padding: 0.6rem;
    border-radius: 10px;
    color: #dadada;
    background-color: #3f5873;
    transition: 0.5s;
  }
  .detailedNews.active{
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }
  .itemsWrapper {
      grid-column: 2/3;
      display: grid;
      grid-template-columns: 30% 60% 10%;
      grid-auto-rows: 2.5em 7rem ;
      margin-top: 0.6rem;
      padding: 0.6rem;
      border-radius: 10px;
      color: #dadada;
      background-color: #3f5873;
  }
  .mainWrapper{
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
  }
  .mainWrapper > span{
    grid-column: 2/2;
    grid-row: 1/1;
    justify-self: start;
      cursor: pointer;
      user-select: none;
  }
  .mainWrapper > input{
    grid-column: 3/3;
    grid-row: 1/1;
    justify-self: end;
    border-radius: 0 5px 5px 0;
    border: none;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    font-weight: bold;
    width: 70%;
  }
  .mainWrapper > select{
    grid-column: 3/3;
    grid-row: 1/1;
    justify-self: start;
    border-radius: 5px 0 0 5px;
    border: none;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    font-weight: bold;
    width: 30%;
  }
  .mainWrapper > ul {
      grid-column: 2 / 4;
      grid-row: 2 / 2;
  }
  .newsTitle{
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      justify-self: start;
  }
  .detailedNewsTitle{   
      grid-column: 2 / 4;
      grid-row: 1 / 1;
      justify-self: center;
      padding-top: 1rem;
      font-size: 3rem;
  }
  .newsImg{
      grid-column: 1 / 1;
      grid-row: 1 / 3;
      width: 95%;
      height: 100%;
  }
  .detailedNewsImg{
      grid-column: 1 / 1;
      grid-row: 1 / 2;
      width: 100%;
      height: 100%;
  }
  .itemsScore{
      display: inline-block;
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      justify-self: end;
  }
  .itemsScore > span{
    cursor: pointer;
    user-select: none;
  }
  .newsDesc{
      grid-column: 2 / 4;
      grid-row: 2 / 2;
      align-self: center;
      justify-self: start;
      max-height: 85%;
      overflow: auto;
      text-align: justify;
      cursor: pointer; 
  }
  .detailedNewsContent{    
      grid-column: 1 / 5;
      grid-row: 2 / 5;
      align-self: start;
      justify-self: start;
      max-height: 85%;
      overflow: auto;
      text-align: justify;
      font-size: 1.5rem;
      margin-top: 1rem;
  }
  .toArticle{
      grid-column: 3 / 3;
      grid-row: 1 / 1;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.5s;
  }
  .toArticle:hover{
    color: red;
    transition: 0.5s;
  }
  .detailedNewsToArticle{    
      grid-column: 4 / 4;
      grid-row: 4 / 4;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      justify-self: end;
      align-self: end;
      text-decoration: underline;
      transition: 0.5s;
  }
  .detailedNewsToArticle:hover{
    color: rgb(163, 42, 163);
    transition: 0.5s;
  }
  .close-cross{ 
    grid-column: 4 / 4;
    grid-row: 1 / 1;
    font-size: 2rem;
    justify-self: end;
    align-self: start;
    padding-right: 0.3rem;
    cursor: pointer;
    transition: 0.5s;
  }
  .close-cross:hover{
    color: red;
    transition: 0.5s;
  }
</style>
