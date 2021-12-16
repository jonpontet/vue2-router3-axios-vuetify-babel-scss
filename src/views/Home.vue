<template>
  <v-container grid-list-md>
    <Toolbar></Toolbar>
    <v-layout row wrap>
      <v-flex v-for="item in data" :key="item.id" xs6 sm4 md3 xl2>
        <v-card :id="`item${item.id}`">
          <a :href="`/view/${item.id}`">
            <v-img
              :src="item.image"
              :alt="item.name"
              height="200"
              lazy-src="data:image/png;base64,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"
          /></a>

          <v-card-title>
            <h2>
              <a :href="`/view/${item.id}`" :style="`color:${item.color}`">{{
                item.name
              }}</a>
            </h2>
          </v-card-title>

          <v-card-subtitle>${{ item.price }}</v-card-subtitle>

          <v-card-text>
            {{ item.shortDesc }}
          </v-card-text>

          <v-card-actions>
            <ItemActions
              :id="item.id"
              :deleteCallback="deleteCallback"
            ></ItemActions>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DataService from "@/services/DataService";
import ItemActions from "@/components/ItemActions";

export default {
  components: { ItemActions },
  name: "Home",
  props: ["data"],
  methods: {
    deleteCallback() {
      this.getAllData();
    },

    getAllData() {
      DataService.getAll()
        .then((response) => {
          this.data = this.findTheFruit(response.data.data);
          // Create a short description property
          this.data = this.data.map((item) => {
            item["shortDesc"] =
              item["description"].length > 130
                ? item["description"].substring(0, 130) + "..."
                : item["description"];
            return item;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editItem(id) {
      this.$router.push({ name: "EditItem", params: { id: id } });
    },

    deleteItem(id) {
      let item = this.data.find((obj) => {
        return obj.id === id;
      });
      if (confirm("Are you sure you want to delete the " + item.name + "?")) {
        DataService.delete(id)
          .then(() => {
            this.getAllData();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    findTheFruit(obj, item = []) {
      if (obj != null && typeof obj == "object") {
        Object.keys(obj).forEach((key) => {
          if (
            key === "isFruit" &&
            obj[key] === true &&
            Object.prototype.hasOwnProperty.call(obj, "id")
          ) {
            item.push(obj);
          } else {
            this.findTheFruit(obj[key], item);
          }
        });
      }
      return item;
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
