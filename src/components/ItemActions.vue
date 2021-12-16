<template>
  <div>
    <v-icon :id="`editItem-id${id}`" @click="editItem(id)">mdi-pencil</v-icon>
    <v-icon :id="`deleteItem-id${id}`" @click="deleteItem(id)"
      >mdi-delete</v-icon
    >
  </div>
</template>
<script>
import DataService from "@/services/DataService";
export default {
  name: "ItemActions",
  props: ["id", "deleteCallback"],
  methods: {
    editItem(id) {
      this.$router.push({ name: "EditItem", params: { id: id } });
    },

    deleteItem(id) {
      if (confirm("Are you sure you want to delete this?")) {
        DataService.delete(id)
          .then(() => {
            this.deleteCallback();
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
  },
};
</script>
<style></style>
