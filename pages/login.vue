<template>
  <div>
    <v-container class="justify-centre">
      <h1>
        Welcome <span v-if="currentUser">{{ currentUser.displayName }}</span>
      </h1>
      <v-card elevation="2" class="pa-5 shaped d-inline-flex">
        <SignIn />
      </v-card>
      <v-btn v-on:click="test()"> Click me</v-btn>
    </v-container>
  </div>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
import SignIn from "../components/SiginIn.vue";
export default {
  components: { NuxtLogo, SignIn },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    test() {
      console.log(this.$store.state.user);
      //this.$nuxt.setLayout("test");
    },
    some() {
      alert("hello");
    },
    signOut() {
      console.log("Signed Out");
      this.$fire.auth.signOut();
    },
  },
};
</script>

<style></style>
