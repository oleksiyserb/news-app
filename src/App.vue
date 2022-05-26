<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
:root {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: Arial, serif;
  margin: 0;
  padding: 0;
}

section {
  max-width: 768px;
  margin: 0 auto;
}

h1 {
  margin: 1rem auto;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
}
</style>
