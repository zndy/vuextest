<template>
    <div>
        <input type="button" value="minus" @click="minus">
        <input type="button" value="plus" @click="add">
        <br>
        <input type="text" v-model="$store.state.count">
    </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("increment");
    },
    minus() {
      this.$store.commit("decrement", 3);
    }
  }
};
</script>
