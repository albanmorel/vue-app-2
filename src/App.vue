<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
    };
  },
    created : function () {
    },
    computed :{},

    methods: {},
};

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  [v-cloak] {
      display: none;
  }

  *{
      margin:0;
      padding:0;
  }

  body{
      font:15px/1.3 'Open Sans', sans-serif;
      color: #adbfd2;
      text-align:center;
      background-color: #242424;
  }

  section, footer, header, aside, nav{
      display: block;
  }

  .dot {
      height: 1.4em;
      width: 1.4em;
      background-color: darkorange;
      border-radius: 50%;
      display: inline-block;
      color: white;
  }
  .greendot {
      background-color: limegreen;
  }
  .reddot {
      background-color: red;
  }

  .pasdutoutunrickroll{
      text-decoration: none;
      color: inherit;
      cursor: default;
  }
  img{
    height: 20px;
    width: 20px;
  }
  .fav-btn{
    position: absolute;
    right: 25%;
    border-radius: 7px;
    padding: 0.3rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    color: #dadada;
    background-color: #3f5873;
  }
  .tooltiptext.tooltip {
    background-color: #242424;
    width: 5rem;
    border-radius: 6px;
    animation: fadeIn ease 0.5s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>
