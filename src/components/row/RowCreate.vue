<template>
  <div>
    <div class="title-card">
        <header class="card-header">
            <p class="card-header-title">
              Add Row
            </p>
        </header>
    </div>
    <div class="container" style="padding:20px">
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createRow('one_column')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="border-vertical"
                        ></b-icon>
                         COLUMN
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card" @click="createRow('two_column')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="border-vertical"
                        ></b-icon>
                        2 COLUMN
                      </p>
                  </header>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createRow('three_column')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="border-vertical"
                        ></b-icon>
                        3 COLUMN
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card" @click="createRow('four_column')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="border-vertical"
                        ></b-icon>
                        4 COLUMN
                      </p>
                  </header>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RowCreate',
  data() {
    return {};
  },
  methods: {
    createRow(name) {
      this.$emit('value-updated', {
        name,
        content: '',
      });
    },
  },
};
</script>
<style>
</style>
