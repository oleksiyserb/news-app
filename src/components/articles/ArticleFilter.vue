<template>
  <section>
    <h1>Filtered Articles:</h1>
    <div>
      <input type="text" />
      <ul>
        <li>
          <input type="radio" id="sort-title" name="sort" />
          <label for="sort-title">Sort By Title</label>
        </li>
        <li>
          <input type="radio" id="sort-description" name="sort" />
          <label for="sort-description">Sort By Description</label>
        </li>
        <li>
          <input type="radio" id="sort-author" name="sort" />
          <label for="sort-author">Sort By Author</label>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
ul {
  display: flex;
}

li {
  display: flex;
}

li + li {
  margin-left: 1em;
}

input[type="text"] {
  border-radius: 12px;
  border: 1px solid #0b0e1b;
  font-size: 1rem;
  padding: 0.3em;
  width: 25rem;
}
</style>
