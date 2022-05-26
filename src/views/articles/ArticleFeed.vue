<template>
  <section>
    <base-card>
      <article-filter></article-filter>
    </base-card>
    <base-card>
      <ul>
        <article-item
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :description="article.description"
          :author="article.author"
        ></article-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import ArticleFilter from "../../components/articles/ArticleFilter.vue";
import ArticleItem from "../../components/articles/ArticleItem.vue";

export default {
  components: {
    ArticleFilter,
    ArticleItem,
  },
  computed: {
    articles() {
      return this.$store.getters.articles;
    },
  },
};
</script>
