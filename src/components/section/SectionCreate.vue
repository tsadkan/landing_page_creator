<template>
  <div>
    <div class="title-card">
        <header class="card-header">
            <p class="card-header-title">
              Add Sections
            </p>
        </header>
    </div>
    <div class="container" style="padding:20px">
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createSection('full_width_section')">
                  <header class="card-content">
                      <p>
                        FULL WIDTH
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card">
                  <header class="card-content">
                      <p>
                        WIDE
                      </p>
                  </header>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card">
                  <header class="card-content">
                      <p>
                        MEDIUM
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card">
                  <header class="card-content">
                      <p>
                        SMALL
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
  name: 'SectionCreate',
  data() {
    return {};
  },
  methods: {
    createSection(name) {
      this.$emit('value-updated', {
        name,
        content: '',
      });
    },
  },
};
</script>
<style>
.title-card {
    background: #b8e2cb;
}
.pointer-card {
  cursor: pointer;
}
</style>
