<template>
  <q-page padding>
    <div
      class="text-h4 text-center full-width"
      style="margin-top: 5rem; margin-bottom: 20%"
    >
      Olá, precisamos de algumas informações antes de prosseguir!
    </div>
    <div class="q-pa-md full-width">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <!-- Step 1 /=/ Input field simples que pega o nome do usuario -->
        <q-step :name="1" title="Nome" :done="step > 1">
          <div class="row">
            <div class="col-8">
              <div class="text-h5 q-pb-md">Qual o seu nome?</div>
            </div>
            <div class="col-6">
              <q-input outlined v-model="nome" label="Nome" />
            </div>
          </div>
        </q-step>

        <!-- Step 2 /=/ Um Btn Toggle que o usuario seleciona o livro que eles tá cursando -->
        <q-step :name="2" title="Livro" :done="step > 2">
          <div class="row">
            <div class="col-8">
              <div class="text-h5 q-pb-md">Qual livro você está cursando?</div>
            </div>
            <div class="col-6">
              <q-btn-toggle v-model="livro" :options="livrosData">
                <template
                  v-for="element in livrosData"
                  v-bind:key="element.value"
                  v-slot:[element.slot]
                >
                  <div class="row items-center">
                    <q-avatar size="42px">
                      <img
                        :src="
                          element.img === '' ? 'icone-mundo.png' : element.img
                        "
                      />
                    </q-avatar>
                    <div class="text-center q-pa-sm">{{ element.text }}</div>
                  </div>
                </template>
              </q-btn-toggle>
            </div>
          </div>
        </q-step>

        <!-- Step 3 /=/ Select a serie em que o usuario está -->
        <q-step :name="3" title="Série">
          <div class="row">
            <div class="col-10">
              <div class="text-h5 q-pb-md">Em que série você está?</div>
            </div>
            <div class="col-4">
              <q-select
                outlined
                v-model="serie"
                :options="seriesData"
                label="Série"
              />
            </div>
          </div>
        </q-step>

        <!-- Step 4 /=/ Tela para confirmar os dados -->
        <q-step :name="4" title="Confirmar Dados">
          <div class="row">
            <div class="col-10">
              <div class="text-h5 q-pb-md">Seus dados estão corretos?</div>
            </div>
            <div class="col-4">
              <q-list bordered class="rounded-borders">
                <q-item>
                  <q-item-section>
                    <q-item-label>Nome: {{ nome }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item>
                  <q-item-section>
                    <q-item-label>Livro: {{ getLivroLabel() }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset />
                <q-item>
                  <q-item-section>
                    <q-item-label>Serie: {{ serie.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-step>

        <!-- Controle de navegação do stepper -->
        <template v-slot:navigation>
          <q-stepper-navigation style="padding: 0px 16px !important">
            <q-separator />
            <div class="row q-py-lg">
              <div class="col-6 flex justify-start">
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Voltar"
                  class="q-ml-sm"
                />
              </div>
              <div class="col-6 flex justify-end">
                <q-btn
                  @click="btnClick_AdvanceStepper"
                  color="primary"
                  :label="step === 4 ? 'Confirmar' : 'Continuar'"
                  :disabled="btnContinuarStep_CheckStatus()"
                />
              </div>
            </div>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const stepper = ref(null);
const step = ref(1);

const nome = ref("");
const livro = ref("");
const serie = ref("");

const livrosData = ref([
  {
    value: 1,
    text: "Português",
    img: "/brasil.png",
    slot: 1,
  },
  {
    value: 2,
    text: "Inglês",
    img: "/estados-unidos.png",
    slot: 2,
  },
  {
    value: 3,
    text: "Espanhol",
    img: "/espanha.png",
    slot: 3,
  },
]);
const seriesData = ref([
  {
    value: 1,
    label: "1ª Serie",
  },
  {
    value: 2,
    label: "2ª Serie",
  },
  {
    value: 3,
    label: "3ª Serie",
  },
  {
    value: 4,
    label: "4ª Serie",
  },
  {
    value: 5,
    label: "5ª Serie",
  },
]);

function getLivroLabel() {
  const livroObj = livrosData.value.find((x) => x.value === livro.value);
  console.log(livroObj);
  if (livroObj) {
    return livroObj.text;
  }
  return livro;
}

function btnContinuarStep_CheckStatus() {
  if (step.value === 1 && nome.value === "") {
    return true;
  }
  if (step.value === 2 && livro.value === "") {
    return true;
  }
  if (step.value === 3 && serie.value === "") {
    return true;
  }
  return false;
}

function btnClick_AdvanceStepper() {
  if (step.value === 4) {
    confirmarDados();
  } else {
    stepper.value.next();
  }
}

function confirmarDados() {
  router.push("/aluno/questionario");
}
</script>
