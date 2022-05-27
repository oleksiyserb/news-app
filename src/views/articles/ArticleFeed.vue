<template>
  <section>
    <base-card>
      <article-filter
        v-model:sort-input="sortInput"
        v-model:sort-method="sortMethod"
      ></article-filter>
    </base-card>
    <base-card>
      <ul>
        <article-item
          v-for="article in filteredArticles"
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
  data() {
    return {
      sortInput: "",
      sortMethod: "title",
    };
  },
  computed: {
    articles() {
      return this.$store.getters.articles;
    },
    filteredArticles() {
      if (this.sortMethod === "description") {
        return this.articles.filter((article) =>
          article.description.includes(this.sortInput)
        );
      }
      return this.articles.filter((article) =>
        article.title.includes(this.sortInput)
      );
    },
  },
};
</script>
