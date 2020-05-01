<template>
  <div class="bip39-key-container">
      <p>
        <span>
          GNY Secret
          <!-- Font awesome licence https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt -->
          <svg v-on:click="recalculate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-redo fa-w-16 fa-2x"><path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z" class=""></path></svg>
        </span></p>

    <textarea type="text" v-model="newBip39"></textarea>


  </div>
</template>


<script>
import * as bip39 from '../../lib/bip39';

export default {
  name: 'GNYSecret',
  methods: {
    recalculate() {
      this.newBip39 = bip39.generateMnemonic();
    },
  },
  data: function() {
    return {
      newBip39: '',
    };
  },
  beforeMount() {
    console.log(bip39.generateMnemonic()); 
    this.newBip39 = bip39.generateMnemonic();
  }
}
</script>


<style scoped>

.bip39-key-container {
  background-color: #f3f5f7;
  padding: 0.1rem 1.5rem;
  margin: 1rem 0;
  border-left-width: 0.5rem;
  border-left-style: solid;
  border-left-color: darkturquoise;
}

.bip39-key-container p {
  font-weight: 600;
  line-height: 1.7;
}

.bip39-key-container > input {
  line-height: 1.7rem;
}

textarea {
  width: 100%;
  margin-bottom: 0.8rem;
  resize: vertical;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-radius: 0.1rem;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);;
}

textarea:hover {
  border-color: #c0c4cc;
}

svg {
  width: 0.7rem;
  margin-left: 0.5rem;
}

svg:hover {
  color: darkturquoise;
}
</style>
