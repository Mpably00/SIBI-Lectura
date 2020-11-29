<template>

  <v-card
    class="mx-auto"
    max-width="1344"
  >

    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="http://www.atochabetanzos.com/wp-content/uploads/2019/05/nenes-leyendo_0.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

    
       <router-link to="/">
                      VOLVER A INICIO
              </router-link>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="150"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
              
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>

            <v-card-text >"aergerugeurgeiurgvierugvqierugviqeurgviqeurgviqerugvqeiur"</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
        
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import Vue from "vue";
import VueRouter from "vue-router";
const axios = require("axios");
Vue.use(VueRouter);

  export default {
    data: () => ({
      drawer: false,
      group: null,
      titulo: "",
      edad: "",
      precio:"",
      autor:"",
      puntuacion:"",

      cards: [
        { title: 'El jardín secreto', src: 'https://static.fnac-static.com/multimedia/Images/ES/NR/13/0c/55/5573651/1540-1.jpg', flex: 6 },
        { title: 'TITULO TITULO', src: 'https://d.gr-assets.com/books/1347634104l/231815.jpg', flex: 6 },
        { title: 'Siempre te querré pequeñín', src: 'https://i.ytimg.com/vi/Y12U1mEMgC8/mqdefault.jpg', flex: 6 },
        { title: 'La pequeña oruga glotona', src: 'https://kangurines.com/wp-content/uploads/2018/03/ORUGAGLOTONA.jpg', flex: 6 },
      ],
    
    }),

    mounted() {
        axios.get("http://localhost:3000/real") .then(response => {
          if (
            response.body &&
            response.body.length &&
            response.body[0].message != "Error"

          ){
            alert("ERRORRRRRRRR");
          }

        this.titulo=response.data.precio;
        alert(this.titulo);
        this.recogerDatos(response);
        
      });
    
    },
    methods: {
      clicar: function(){
        alert("Has pulsado este boton");
      },
       recogerDatos(respuesta){
          this.title=respuesta.titulo;
          this.edad=respuesta.edad;
          this.puntuacion=respuesta.puntuacion;
          this.precio=respuesta.precio;
          this.autor=respuesta.autor;
      },
    }
  }
  
</script>