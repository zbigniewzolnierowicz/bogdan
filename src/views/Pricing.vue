<template>
  <div class="wrapper">
    <Model
      v-for="model in models"
      :key="model['.key']"
      :id="model.id"
      :description="model.desc"
      :prices="model.price"
      :category="$route.params.category"
      :image="model.image"
    />
  </div>
</template>

<script>
import Model from "../components/Model";

function sortModels(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

export default {
  name: "Pricing",
  components: {
    Model
  },
  computed: {
    models: function() {
      const models = this.$store.state[this.$route.params.category];
      models.sort(sortModels);
      return models;
    }
  }
};
</script>

<style></style>
