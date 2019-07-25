<template>
  <div>
    <div class="title-card">
        <header class="card-header">
            <p class="card-header-title">
              Add {{ elementName }}
            </p>
        </header>
    </div>
    <div class="container" style="padding:20px">
        <form @submit.prevent="add" novalidate>
            <b-field
                :type="{'is-danger': errors.has('element')}"
                :message="errors.first('element')"
            >
                <b-input
                type="text"
                v-model="content"
                :placeholder="placeholder"
                name="element"
                v-validate="'required'"
                data-vv-validate-on="none"
                ></b-input>
                <button v-if="type==='bullet list'"
                style="margin-left: 10px" @click.prevent="addToList()">
                    <b-icon class="menu-icon" icon="plus"></b-icon>
                </button>
            </b-field>
            <ul>
                <li style="list-style: square" v-for="(l, i) in list" :key="i">{{l}}</li>
            </ul>
            <b-field
                v-if="type === 'anchor'"
                :type="{'is-danger': errors.has('link')}"
                :message="errors.first('link')"
            >
                <b-input
                type="text"
                v-model="link"
                placeholder="add link"
                name="link"
                v-validate="'required'"
                data-vv-validate-on="none"
                ></b-input>
            </b-field>

            <button
            class="button login-button
            is-block is-primary is-medium is-fullwidth">Add</button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElementForm',
  props: {
    type: {
      type: String,
      default: 'element',
    },
    elementName: {
      type: String,
      default: 'Element',
    },
    placeholder: {
      type: String,
      default: 'Add Element',
    },
  },
  data() {
    return {
      content: '',
      link: null,
      list: [],
    };
  },
  methods: {
    async add() {
      const valid = await this.$validator.validateAll();
      if (valid || this.list.length > 0) {
        this.$emit('onElementAdd', {
          name: this.type,
          content: this.content,
          link: this.link,
          list: this.list,
        });
      }
    },
    addToList() {
      this.list.push(this.content);
      this.content = '';
    },
  },
};
</script>
