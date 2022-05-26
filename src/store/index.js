import { createStore } from "vuex";
import articleModule from "./modules/article";

export default createStore({
  modules: {
    article: articleModule,
  },
});
