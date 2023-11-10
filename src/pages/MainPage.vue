<template>
  <q-page class="flex flex-center">
    <div
      v-ripple.early
      class="relative-position container flex flex-center"
      :onclick="bntClick_Aluno"
    >
      <div class="containerText">Aluno</div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 20px;
  cursor: pointer;
  transition: background 1.5s;
  height: 200px;
  width: 80%;
  max-width: 500px;
  background-image: url("https://cdn.e-konomista.pt/uploads/2018/09/aproveitamento-escolar-aula.jpg");
  background-size: cover;
  background-position: center;
}
.containerText {
  font-size: 2.5rem;
  user-select: none;
  color: yellow;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function bntClick_Aluno() {
  router.push("/aluno");
}
</script>
