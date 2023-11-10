<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          {{ headerStore.pageTitle }}
        </q-toolbar-title>
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
