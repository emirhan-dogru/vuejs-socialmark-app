<template>
  <app-header />
  <div class="flex flex-row">
    <sidebar @category-changed="updateBookmarkList" />
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bu kategoride bookmark bulunamadı</div>
  </div>
</template>

<script>
import sideBar from "@/components/Account/a_sidebar.vue";
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  components: {
    sidebar: sideBar,
  },
  mounted() {
    // this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_res) => {
    //   this.bookmarkList = bookmark_list_res?.data || [];
    // });
  },
};
</script>
