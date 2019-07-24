<template>
  <div class="model box columns">
    <div class="column is-four-fifths">
      <h1 class="title">{{ id }}</h1>
      <h2 class="subtitle">{{ description }}</h2>
      <img :src="image" :alt="description" />
    </div>
    <div class="column">
      <table class="table">
        <thead v-if="category === 'kolej'">
          <th>TT</th>
          <th>H0</th>
          <th>1:35</th>
        </thead>
        <thead v-else>
          <th>1:144</th>
          <th>1:72</th>
          <th>1:48</th>
          <th>1:32</th>
        </thead>
        <tbody>
          <tr>
            <td v-for="(price, index) in prices" :key="index">
              <span v-if="price === 0"> - </span>
              <span v-else>{{ `${price} zł` }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Model",
  props: ["category", "description", "id", "prices", "image"],
  data() {
    return {
      imageLink: ""
    };
  },
  mounted() {}
};
</script>

<style lang="scss"></style>
