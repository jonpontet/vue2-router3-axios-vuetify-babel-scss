<template>
  <v-container grid-list-md>
    <Toolbar></Toolbar>
    <v-sheet elevation="1">
      <div class="pa-4 mx-md-auto">
        <h1 class="text-h4 text--primary">Add</h1>
        <p v-if="submitted" id="addResponseText">{{ responseText }}</p>
        <div v-else>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="item.name"
              :rules="[(v) => !!v || 'Name is required']"
              label="Name"
              required
            ></v-text-field>

            <v-textarea
              v-model="item.image"
              :rules="[(v) => !!v || 'Image URL is required']"
              label="Image URL"
              required
              rows="2"
            ></v-textarea>

            <v-textarea
              v-model="item.description"
              :rules="[(v) => !!v || 'Description is required']"
              label="Description"
              required
            ></v-textarea>

            <v-text-field
              v-model="item.price"
              :rules="[(v) => !!v || 'Price is required']"
              label="Price"
              required
            ></v-text-field>

            <v-text-field
              v-model="item.color"
              :rules="[(v) => !!v || 'Color is required']"
              label="Color"
              required
            ></v-text-field>

            <v-text-field
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
                  v-model="item.expiresDate"
                  label="Expiry Date"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  required
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
                  v-model="item.expiresTime"
                  label="Expiry Time"
                  persistent-hint
                  prepend-icon="mdi-clock"
                  v-bind="attrs"
                  v-on="on"
                  required
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
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="addItem"
              ><v-icon>mdi-save</v-icon> Add</v-btn
            >
            <v-btn to="/">Cancel</v-btn>
          </v-form>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: "AddItem",
  data() {
    return {
      valid: true,
      item: {},
      submitted: false,
      responseText: "",
      menu1: false,
      menu2: false,
    };
  },
  methods: {
    addItem() {
      if (this.$refs.form.validate()) {
        let data = {
          name: this.item.name,
          description: this.item.description,
          price: this.item.price,
          color: this.item.color,
          taste: this.item.taste,
        };
        // Create ISO 8601 format e.g. 2021-12-08T13:51:47.100Z
        data.expires = `${this.item.expiresDate}T${this.item.expiresTime}.100Z`;

        DataService.create(data)
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
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
