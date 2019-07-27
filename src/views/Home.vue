<template>
  <div class="home columns is-vcentered">
    <div class="column container is-four-fifths">
      <h1 class="title is-spaced">{{ $t("welcome") }}</h1>
      <h2 class="subtitle is-spaced">{{ $t("whoami.header") }}</h2>
      <p class="is-spaced">
        {{ $t("whoami.paragraph[0]") }}
      </p>
      <p class="is-spaced">
        {{ $t("whoami.paragraph[1]") }}
      </p>
      <h2 class="subtitle is-spaced">{{ $t("whathere.header") }}</h2>
      <p class="is-spaced">
        {{ $t("whathere.paragraph") }}
      </p>
      <h2 class="subtitle is-spaced">{{ $t("howorder.header") }}</h2>
      <p class="is-spaced">
        {{ $t("howorder.paragraph[0]") }}
        <a href="mailto:a.fiedotow@gmail.com">a.fiedotow@gmail.com</a
        >{{ $t("howorder.paragraph[1]") }}
        <a href="https://m.me/fiedotow.mrdecal">Mr. Decal</a
        >{{ $t("howorder.paragraph[2]") }}
      </p>
      <h2 class="subtitle is-spaced">{{ $t("greeting") }}</h2>
      <p class="is-spaced">Bogdan Żołnierowicz – Mr. Decal vel Fiedotow</p>
    </div>
    <div class="column container">
      <figure class="image is-square">
        <img src="../assets/bogdan.jpg" class="is-rounded" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
p.is-spaced {
  margin-bottom: 1.5rem;
}
</style>
