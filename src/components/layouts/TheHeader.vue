<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Article App</router-link>
      </h1>
      <ul class="actions">
        <li><router-link to="/articles">All Articles</router-link></li>
        <li><router-link to="/create-article">Create Article</router-link></li>
        <li><router-link class="auth" to="/auth">Login</router-link></li>
        <li><router-link class="auth" to="/logout">Logout</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #0b0e1b;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  border-radius: 10px;
  text-decoration: none;
  color: #0295db;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #0295db;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.auth {
  color: #ffffff;
  background-color: #0295db;
}
</style>
