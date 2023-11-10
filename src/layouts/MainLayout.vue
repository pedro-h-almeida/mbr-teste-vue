<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Página Inicial" to="/" />
          <q-breadcrumbs-el
            v-for="(element, index) in headerStore.currentPath"
            v-bind:key="index"
            :label="element[0].toUpperCase() + element.slice(1, element.length)"
            :to="`/${headerStore.currentPath.slice(0, index + 1).join('/')}`"
          />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div>
        <!-- <div class="q-pa-md"> -->
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useHeaderStore } from "stores/header-store";

const router = useRouter();
const headerStore = useHeaderStore();
</script>
