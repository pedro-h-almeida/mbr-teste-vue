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

        <q-step :name="2" title="Livro" :done="step > 2">
          An ad group contains one or more ads which target a shared set of
          keywords.
        </q-step>

        <q-step :name="3" title="Série">
          This step won't show up because it is disabled.
        </q-step>
        <template v-slot:navigation>
          <q-stepper-navigation style="padding: 0px 16px !important">
            <q-separator />
            <div class="row q-py-lg">
              <!-- 
                Botão Voltar
              -->
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
              <!-- 
                Botão Proximo/Finalizar
              -->
              <div class="col-6 flex justify-end">
                <q-btn
                  @click="$refs.stepper.next()"
                  color="primary"
                  :label="step === 3 ? 'Confirmar' : 'Continuar'"
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

const step = ref(1);

const nome = ref("");
</script>
