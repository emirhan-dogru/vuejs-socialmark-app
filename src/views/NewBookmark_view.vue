<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
    <input ref="title" v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select v-model="userData.category_id" class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
    <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({ name: 'homePage' })" class="secondary-button">İptal</button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        categoryId: null,
        description: null,
      },
    };
  },
  mounted() {
    this.$appAxios.get("/categories").then((res) => {
      this.categoryList = res?.data || [];
      this.$refs.title.focus();
    });
  },
  methods: {
    onSave() {
      const saveData = {
        ...this.userData,
        userId: this._getCurrentUser?.id,
        created_at: new Date(),
      };
      this.$appAxios.post("/bookmarks", saveData).then((save) => {
        console.log(save);
        this.userData = {
          title: null,
          url: null,
          categoryId: null,
          description: null,
        };
        this.$router.push({ name: "homePage" });
      });
    },
  },
  computed: {
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>
