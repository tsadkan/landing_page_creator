<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify" expanded></b-input>
            <p class="control">
                <button class="button is-primary">Search</button>
            </p>
            <b-button type="is-info" outlined
                class="new-btn"
                icon-left="plus" @click="$router.push({ name: 'new-page' });">
                New

            </b-button>
        </b-field>

      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="page in pageList" :key="page.id"
      class="column is-one-third">
        <PageCard :page='page' @delete="deletePage(page.id)"/>
      </div>
    </div>
    <div v-if="pageList.length === 0 && !isLoading" class="columns is-multiline">
     <h2>No page found</h2>
    </div>
    <div v-if="isLoading" class="columns is-centered spinner">
      <!-- add spinner -->
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { PageAPI } from '@/api';
import PageCard from '@/components/pages/PageCard.vue';

export default {
  name: 'PageList',
  components: {
    PageCard,
  },
  data() {
    return {
      isLoading: false,
      pageList: [],
    };
  },
  methods: {
    async loadPages() {
      this.isLoading = true;
      this.pageList = await PageAPI.all();
      this.pageList = this.pageList.reverse();
      this.isLoading = false;
    },
    async deletePage(id) {
      await PageAPI.remove(id);
      this.loadPages();
    },
  },
  created() {
    this.loadPages();
  },
};
</script>

<style>
.new-btn {
  margin-left: 10px
}
.container {
  padding-top: 10px;
}
</style>
