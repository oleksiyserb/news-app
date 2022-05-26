<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: true,
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0295db;
  border: 1px solid #0295db;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}
</style>
