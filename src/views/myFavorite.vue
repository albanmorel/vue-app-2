<template>
  <div class="about">
    <itemsList title="Ad News Aeternam (Favorites)" :newsList="newsList"></itemsList>
  </div>
</template>

<script>
import itemsList from '@/components/itemsList.vue'


export default {
  name: 'myFavorite',
  props: {newsList: Array},  
  components: {
    itemsList
  },
  created : function () {},
  data() {
    return {
    };
  },
}
</script>