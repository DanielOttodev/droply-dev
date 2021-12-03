<template>
  <div>
    <v-container d-flex justify-center>
      <v-card elevation="2" class="pa-5 shaped d-inline-flex">
        <NuxtLogo />
      </v-card>
      <v-card elevation="2" class="pa-5 shaped d-inline-flex">
        <h1>Login</h1>
        <v-btn v-on:click="test()" elevation="2">Click</v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
export default {
  components: { NuxtLogo },
  methods: {
    test: function () {
      this.$nuxt.setLayout("test");
    },
    some: function () {
      alert("hello");
    },
  },
};
</script>

<style></style>
