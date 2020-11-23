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

      <router-link to ="/App">VOLVER</router-link>
      
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
      libros: [],

      cards: [
        { title: '0-5 AÑOS', src: 'https://i.pinimg.com/originals/53/d5/6c/53d56c027aada941b25496a1db3dd3fa.jpg', flex: 6 },
        { title: '6-8 AÑOS', src: 'https://s-media-cache-ak0.pinimg.com/originals/45/4d/74/454d743a2d82f69a253bb5dbf54fee5d.jpg', flex: 6 },
        { title: '9-10 AÑOS', src: 'http://haciendoelindio.com/wp-content/uploads/abcd.jpg', flex: 6 },
        { title: '11-15 AÑOS', src: 'https://i.ebayimg.com/images/g/XooAAOSwjONdl~wY/s-l300.jpg', flex: 6 },
        { title: '+15 AÑOS', src: 'https://i.ytimg.com/vi/A3EvA_Zjh1s/hqdefault.jpg', flex: 12}
      ],
    
    }),
    
    methods: {
      clicar: function(){
        alert("Has pulsado este boton");

        /*axios.get("http://localhost:3000/real").then(respuesta=>{
            console.log(respuesta);
        });*/

      },
      recogerDatos(respuesta){
          this.title=respuesta.titulo;
          this.edad=respuesta.edad;
          this.puntuacion=respuesta.puntuacion;
          this.precio=respuesta.precio;
          this.autor=respuesta.autor;
      },
      send: function (){
        /*var respuesta = {
          Edad: this.Edad,
          autor: this.autor,
          puntuacion: this.puntuacion,
          precio: this.precio
      };*/
      
      axios.get("http://localhost:3000/real").then(respuesta=>{
            console.log(respuesta);
        });
        
      },
    }
  }
  
</script>