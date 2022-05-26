<template>
  <li>
    <h1>
      <router-link :to="articleLink">{{ title }}</router-link>
    </h1>
    <p>
      {{ description }}
    </p>
    <div>
      <div class="actions">
        <button>
          <svg
            width="51"
            height="47"
            viewBox="0 0 51 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_201_24" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.3476 4.34202C52.137 10.1314 52.137 19.5178 46.3476 25.3071L46.2901 25.3647L46.3206 25.3951L25.3555 46.3603L4.34202 25.3468C-1.44734 19.5574 -1.44734 10.171 4.34202 4.38169C10.1314 -1.40767 19.5178 -1.40766 25.3071 4.38169L25.325 4.39955L25.3825 4.34202C31.1719 -1.44734 40.5583 -1.44734 46.3476 4.34202Z"
              />
            </mask>
            <path
              d="M46.3476 4.34202L45.6405 5.04912L45.6405 5.04912L46.3476 4.34202ZM46.2901 25.3647L45.583 24.6576L44.8759 25.3647L45.583 26.0718L46.2901 25.3647ZM46.3206 25.3951L47.0277 26.1022L47.7348 25.3951L47.0277 24.688L46.3206 25.3951ZM25.3555 46.3603L24.6484 47.0674L25.3555 47.7745L26.0626 47.0674L25.3555 46.3603ZM4.34202 25.3468L5.04912 24.6397L5.04912 24.6397L4.34202 25.3468ZM4.34202 4.38169L3.63491 3.67458L4.34202 4.38169ZM25.3071 4.38169L26.0143 3.6746L26.0142 3.67459L25.3071 4.38169ZM25.325 4.39955L24.6179 5.10664L25.325 5.81378L26.0321 5.10666L25.325 4.39955ZM25.3825 4.34202L26.0896 5.04913L26.0896 5.04913L25.3825 4.34202ZM47.0547 26.0142C53.2346 19.8344 53.2346 9.81479 47.0547 3.63491L45.6405 5.04912C51.0394 10.448 51.0394 19.2012 45.6405 24.6L47.0547 26.0142ZM46.9972 26.0718L47.0547 26.0142L45.6405 24.6L45.583 24.6576L46.9972 26.0718ZM45.583 26.0718L45.6135 26.1023L47.0277 24.688L46.9972 24.6575L45.583 26.0718ZM45.6135 24.688L24.6484 45.6531L26.0626 47.0674L47.0277 26.1022L45.6135 24.688ZM26.0626 45.6531L5.04912 24.6397L3.63491 26.0539L24.6484 47.0674L26.0626 45.6531ZM5.04912 24.6397C-0.349709 19.2409 -0.349707 10.4876 5.04913 5.0888L3.63491 3.67458C-2.54497 9.85446 -2.54497 19.874 3.63491 26.0539L5.04912 24.6397ZM5.04913 5.0888C10.448 -0.310037 19.2012 -0.310034 24.6 5.0888L26.0142 3.67459C19.8344 -2.5053 9.81479 -2.5053 3.63491 3.67458L5.04913 5.0888ZM24.6 5.08878L24.6179 5.10664L26.0321 3.69246L26.0143 3.6746L24.6 5.08878ZM24.6754 3.63491L24.6179 3.69244L26.0321 5.10666L26.0896 5.04913L24.6754 3.63491ZM47.0547 3.63491C40.8749 -2.54497 30.8553 -2.54497 24.6754 3.63491L26.0896 5.04913C31.4885 -0.349707 40.2417 -0.34971 45.6405 5.04912L47.0547 3.63491Z"
              fill="black"
              mask="url(#path-1-inside-1_201_24)"
            />
          </svg>
        </button>
        <strong>Likes: 203</strong>
      </div>
      <div class="info">
        <span>Author: {{ author }}</span>
        <base-button link :to="articleLink">Go</base-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    author: String,
  },
  computed: {
    articleLink() {
      return `/articles/${this.id}`;
    },
  },
};
</script>

<style scoped>
h1 > a {
  color: #0b0e1b;
  text-decoration: none;
}

li {
  border: 1px solid #0b0e1b;
  padding: 1em;
  border-radius: 12px;
  margin: 1em 0;
}

p {
  padding: 1em 0;
  border-top: 1px solid #0b0e1b;
  border-bottom: 1px solid #0b0e1b;
  color: hsl(0, 0%, 30%);
}

div {
  display: flex;
  justify-content: space-between;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.actions {
  display: flex;
  align-items: center;
}

button > svg {
  width: 20px;
  height: 20px;
}

.info {
  display: flex;
  align-items: center;
}

.info > span {
  margin-right: 1em;
}
</style>
