<template>
  <div>
    <div class="title-card">
        <header class="card-header">
            <p class="card-header-title">
              Add Element
            </p>
        </header>
    </div>
    <p class='section-title'>Text</p>
    <div class="container" style="padding:20px">
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('heading')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="format-header-1"></b-icon>
                        HEADING
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('paragraph')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="format-pilcrow"></b-icon>
                        PARAGRAPH
                      </p>
                  </header>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('anchor')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="link-variant"></b-icon>
                        ANCHOR
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('bullet list')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="format-list-bulleted"></b-icon>
                        BULLET LIST
                      </p>
                  </header>
                </div>
            </div>
        </div>
    </div>

    <p class='section-title'>Media</p>
    <div class="container" style="padding:20px">
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('image')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="image"></b-icon>
                        IMAGE
                      </p>
                  </header>
                </div>
            </div>
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('audio')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="speaker-wireless"></b-icon>
                        AUDIO
                      </p>
                  </header>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <div class="card pointer-card" @click="createElement('video')">
                  <header class="card-content">
                      <p>
                        <b-icon class="menu-icon" icon="video"></b-icon>
                        VIDEO
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
  name: 'ElementCreate',
  data() {
    return {};
  },
  methods: {
    createElement(name) {
      this.$emit('value-updated', {
        name,
        group: 'element',
        content: '',
      });
    },
  },
};
</script>
<style>
.section-title {
  text-align: left;
  padding-left:20px;
  padding-top:5px;
  font-weight:600
}
</style>
