<template>
  <div class="about">
    <h1>This is an about page</h1>
    <counter/>
    <amount/>
  </div>
</template>
<script>
import counter from "@/components/counter.vue";
import amount from "@/components/amount.vue";
export default {
  components: {
    counter,
    amount
  }
};
</script>
