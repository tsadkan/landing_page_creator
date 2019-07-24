<template>
  <div class="card add-card">
    <b-button type="is-info" outlined
            class="add-btn"
            icon-left="plus" @click="$emit('onAdd');">
            Add New {{ title }}
    </b-button>
  </div>
</template>
<script>
export default {
  name: 'AddComponent',
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.add-card {
    background: rgba(24,139,246,0.1) !important;
    border: 1px solid rgba(24,139,246,0.2);
    padding: 10px !important;
    margin-bottom: 20px;
}
.add-btn {
    text-transform: uppercase;
}
</style>
