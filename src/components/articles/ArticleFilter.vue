<template>
  <section>
    <h1>Filtered Articles:</h1>
    <div>
      <input
        type="text"
        :value="sortInput"
        @input="$emit('update:sortInput', $event.target.value)"
      />
      <ul>
        <li>
          <input
            type="radio"
            id="sort-title"
            name="sort"
            value="title"
            @input="$emit('update:sortMethod', $event.target.value)"
            :checked="sortMethod === 'title'"
          />
          <label for="sort-title">Sort By Title</label>
        </li>
        <li>
          <input
            type="radio"
            id="sort-description"
            name="sort"
            value="description"
            @input="$emit('update:sortMethod', $event.target.value)"
          />
          <label for="sort-description">Sort By Description</label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sortMethod: {
      type: String,
      required: true,
      default: "title",
    },
    sortInput: {
      type: String,
      required: true,
    },
  },
  emits: ["update:sortInput", "update:sortMethod"],
};
</script>

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
