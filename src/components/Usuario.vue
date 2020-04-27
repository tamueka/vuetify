
<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <v-card>
          <v-img :src="user.avatar">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem ipsum dolor sit amet consectetur.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title>
            <h2>{{user.first_name | ponerGuion}} {{user.last_name}}</h2>
          </v-card-title>

          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae nisi ex, rerum recusandae deserunt? Odit illum doloremque harum magnam?</v-card-text>

          <v-card-actions>
            <v-btn color="primary" text>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
            <v-flex xs12 sm4>
        <v-card>
          <v-img :src="user.avatar">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem ipsum dolor sit amet consectetur.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title>
            <h2>{{user.first_name | ponerGuion}} {{user.last_name}}</h2>
          </v-card-title>

          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae nisi ex, rerum recusandae deserunt? Odit illum doloremque harum magnam?</v-card-text>

          <v-card-actions>
            <v-btn color="primary" text>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
            <v-flex xs12 sm4>
        <v-card>
          <v-img :src="user.avatar">
            <v-container>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem ipsum dolor sit amet consectetur.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title>
            <h2>{{user.first_name | ponerGuion}} {{user.last_name}}</h2>
          </v-card-title>

          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae nisi ex, rerum recusandae deserunt? Odit illum doloremque harum magnam?</v-card-text>

          <v-card-actions>
            <v-btn color="primary" text>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Usuario",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
