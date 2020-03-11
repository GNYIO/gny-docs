<template>
  <p class="demo">
    {{ id }}
  </p>
    <!-- <el-button type="info" @click="p2pkey">Generate P2P Key</el-button>

    <el-container direction="vertical">
      <label for="id" v-if="!!id">ID</label>
      <el-input v-model="id" readonly="" v-if="!!id"></el-input>

      <label for="passphrase" v-if="!!privKey">Private Key</label>
      <el-input type="textarea" v-model="privKey" readonly="" v-if="!!privKey"></el-input>
    </el-container> -->
</template>

<script>
import * as PeerInfo from 'peer-info';

export default {
  data() {
    return {
      id: '',
      privKey: ''
    }
  },

  mounted() {
    try {
        PeerInfo.create((err, peerInfo) => {
          const jsonId = peerInfo.id.toJSON();
          this.id = jsonId.id;
          this.privKey = jsonId.privKey;
        });
    } catch (error) {
        console.log(error);
    } 
  }
}
</script>
