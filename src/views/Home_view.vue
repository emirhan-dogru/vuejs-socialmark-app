<template>
  <app-header />
  <div class="flex flex-row">
    <sidebar @category-changed="updateBookmarkList" />

    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bu kategoride bookmark bulunamadı</div>
  </div>
</template>

<script>
import sidebar from "@/components/Home/h_sidebar";

export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  mounted() {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_res) => {
      this.bookmarkList = bookmark_list_res?.data || [];
    });
  },
  components: {
    sidebar,
  },
  methods: {
    updateBookmarkList(categoryId) {
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
      this.$appAxios.get(url).then((bookmark_list_res) => {
        this.bookmarkList = bookmark_list_res?.data || [];
      });
    },
  },
};
</script>
