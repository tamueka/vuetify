<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <!-- LEFT CARDS -->
        <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <h2 class="ml-3 pt-5">{{ item.titulo }}</h2>
          <v-card-text>
            <v-chip class="ml-0 mb-3" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>
              Titulo de la tarea #{{ item.id }}
            </v-chip>
            <p>{{ item.descripcion }}</p>
            <v-btn @click="editar(index)" color="warning" class="mr-3">Editar</v-btn>
            <v-btn @click="eliminarTarea(item.id)" color="error">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- RIGHT CARDS -->
      <v-flex v-if="formAgregar" md6>
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn color="success" type="submit">Agregar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex v-if="!formAgregar" md6>
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
            <v-btn color="warning" type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- ALERT SNACKBAR -->
    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <v-btn dark text @click="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo tarea 1",
          descripcion: `Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Odio soluta 
                    quasi sit incidunt eveniet omnis architecto modi, 
                    rerum explicabo optio.`
        },
        {
          id: 2,
          titulo: "Titulo tarea 2",
          descripcion: `Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Odio soluta 
                    quasi sit incidunt eveniet omnis architecto modi, 
                    rerum explicabo optio.`
        }
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensaje: "",
      formAgregar: true,
      indexTarea: ""
    };
  },
  methods: {
    agregarTarea(titulo, descripcion) {
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Error: Introduzca datos";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion
        });
        this.titulo = "";
        this.descripcion = "";
        this.snackbar = true;
        this.mensaje = "Tarea Agregada";
      }
    },
    eliminarTarea(id) {
      this.listaTareas = this.listaTareas.filter(e => e.id != id);
      this.snackbar = true;
      this.mensaje = "Tarea Eliminada";
    },
    editar(index) {
      this.formAgregar = false;
      this.titulo = this.listaTareas[index].titulo;
      this.descripcion = this.listaTareas[index].descripcion;
      this.indexTarea = index;
    },
    editarTarea() {
      this.listaTareas[this.indexTarea].titulo = this.titulo;
      this.listaTareas[this.indexTarea].descripcion = this.descripcion;
      this.formAgregar = true;
      this.titulo = "";
      this.descripcion = "";
      this.snackbar = true;
      this.mensaje = "Tarea Editada";
    }
  }
};
</script>

<style scoped>
</style>