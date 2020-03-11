<template>
  <p class="demo">
    <!-- <button type="info" @click="newAccount">Generate Account</button> -->
    {{ secret }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Mnemonic from "bitcore-mnemonic";

export default Vue.extend({
  data() {
    return {
      secret: '',
    }
  },

  // mothods: {
  //   async newAccount() {
  //     this.secret = new Mnemonic(Mnemonic.Words.ENGLISH).toString();
  //   }
  // },

  mounted() {
    try {
      this.secret = new Mnemonic(Mnemonic.Words.ENGLISH).toString();
    } catch (error) {
      console.log(error);
    }
  }
})
</script>
