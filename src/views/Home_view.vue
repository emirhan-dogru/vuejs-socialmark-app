<template>
  <app-header />
  <div class="flex flex-row">
    <sidebar />

    <app-bookmark-list />
  </div>
</template>

<script>
import sidebar from "@/components/Home/h_sidebar";

export default {
  components: {
    sidebar,
  },
};
</script>
