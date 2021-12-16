<template>
  <v-container grid-list-md>
    <Toolbar></Toolbar>
    <v-sheet elevation="1">
      <div class="pa-4 mx-md-auto">
        <h1 class="text-h4 text--primary">Edit</h1>
        <p v-if="submitted" id="editResponseText">{{ responseText }}</p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            id="name"
            v-model="item.name"
            :rules="[(v) => !!v || 'Name is required']"
            label="Name"
            required
          ></v-text-field>

          <v-textarea
            id="image"
            v-model="item.image"
            :rules="[(v) => !!v || 'Image URL is required']"
            label="Image URL"
            required
            rows="2"
          ></v-textarea>

          <v-textarea
            id="description"
            v-model="item.description"
            :rules="[(v) => !!v || 'Description is required']"
            label="Description"
            required
          ></v-textarea>

          <v-text-field
            id="price"
            v-model="item.price"
            :rules="[(v) => !!v || 'Price is required']"
            label="Price"
            required
          ></v-text-field>

          <v-text-field
            id="color"
            v-model="item.color"
            :rules="[(v) => !!v || 'Color is required']"
            label="Color"
            required
          ></v-text-field>

          <v-text-field
            id="taste"
            v-model="item.taste"
            :rules="[(v) => !!v || 'Taste is required']"
            label="Taste"
            required
          ></v-text-field>
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                id="expiryDate"
                v-model="item.expiresDate"
                label="Expiry Date"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="item.expiresDate"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                id="expiryTime"
                v-model="item.expiresTime"
                label="Expiry Time"
                persistent-hint
                prepend-icon="mdi-clock"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-model="item.expiresTime"
              format="24hr"
              use-seconds
              no-title
              @input="menu2 = false"
            ></v-time-picker>
          </v-menu>
          <v-btn
            id="submit"
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="updateItem"
            ><v-icon>mdi-save</v-icon> Update</v-btn
          >
          <v-btn to="/">Cancel</v-btn>
        </v-form>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: "EditItem",
  data() {
    return {
      responseText: "",
      valid: true,
      item: {},
      submitted: false,
      menu1: false,
      menu2: false,
    };
  },
  methods: {
    getItem(id) {
      DataService.get(id)
        .then((response) => {
          this.item = response.data;
          this.item.expiresDate = this.item.expires.substr(0, 10);
          this.item.expiresTime = this.item.expires.substr(11, 8);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateItem() {
      if (this.$refs.form.validate()) {
        // Create ISO 8601 format e.g. 2021-12-08T13:51:47.100Z
        this.item.expires = `${this.item.expiresDate}T${this.item.expiresTime}.100Z`;

        DataService.update(this.item.id, this.item)
          .then((response) => {
            this.submitted = true;
            this.responseText = response.statusText;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.message = "";
    this.getItem(this.$route.params.id);
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
