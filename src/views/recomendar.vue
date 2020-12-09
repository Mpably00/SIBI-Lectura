<template>

  <v-card
    class="mx-auto"
    max-width="13446666"
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
    <v-btn-toggle>
      Introduzca la edad:
    </v-btn-toggle>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="150"
    >
      <v-container style="height: 10000px;"></v-container>
    </v-sheet>
  </v-card>
  <v-spacer></v-spacer>
  <v-card
    class="mx-auto"
    max-width="30000000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[1]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(1)"></v-list-item-subtitle>
      </v-list-item-content>

   
        <v-img  
        :src=" devolverImagen(1)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="500px"
        weight="300px">

        </v-img>
      
    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="30000000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulo">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(3)"></v-list-item-subtitle>
      </v-list-item-content>

   <div center>
        <v-img  
        :src=" devolverImagen(3)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"
        height="500px"
        weight="300px">
        </v-img>
   </div>
    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="30000000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[2]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(2)"></v-list-item-subtitle>
      </v-list-item-content>

   
        <v-img  
        :src=" devolverImagen(2)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="500px"
        weight="300px">

        </v-img>
      
    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="30000000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[0]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(0)"></v-list-item-subtitle>
      </v-list-item-content>

   
        <v-img  
        :src=" devolverImagen(0)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="500px"
        weight="300px">

        </v-img>
      
    </v-list-item>
  </v-card>
  </v-card>
</template>

<script>

import Vue from "vue";
import VueRouter from "vue-router";
/*import HomeVue from './Home.vue';*/
const axios = require("axios");
Vue.use(VueRouter);

  export default {



     mounted() {
       var edadA;
       edadA=this.devolverCarta();
       alert("La edad es : "+edadA);
        axios.get("http://localhost:3000/real", {
          params: {
            edad: edadA,
          }
          }) .then(response => {
        this.titulo=response.data.precio;
        this.recogerDatos(response);
        
      });
    
    },
    methods: {
      clicar: function(){
        alert("Has pulsado este boton");
      },
       recogerDatos(respuesta){
         for(var i =0; i<4;i++){
          this.titulo=respuesta.data[i].nombre;
          this.titulos[i]=this.titulo;
          this.edad=respuesta.data[i].edad;
          this.edades[i]=this.edad;
          this.puntuacion=respuesta.data[i].puntuacion;
          this.puntuaciones[i]=this.puntuacion;
          this.precio=respuesta.data[i].precio;
          this.precios[i]=this.precio;
          this.autor=respuesta.data[i].autor;
          this.autores[i]=this.autor;
          this.imagen=respuesta.data[i].imagen;
          this.imagenes[i]=this.imagen;
         }
      },

      devolverCarta(){
  
          alert("La carta es: " + this.$route.query.edad);
      
          if(this.Carta==1){
            this.edad_carta=0;
          }else if(this.Carta==2){
            this.edad_carta=5;
          }else if(this.Carta==3){
            this.edad_carta=8;
          }else if (this.Carta==4){
            this.edad_carta=12;
          }
          else{
            this.edad_carta=15;
          }

          return this.edad_carta;
          
      },
      
      devolverText(j){
        var texto;
       
        texto="El autor de este libro es,"+ this.autores[j]+ ", el precio es "+this.precios[j]+ " euros, la puntuacion de este libro es, "+this.puntuaciones[j]+ "y este es el resumen del libro: ";
        
        return texto;
      },
      devolverImagen(j){
        var texto;
        texto=this.imagenes[j]
        return texto;
      }
    },
    data: () => ({
      drawer: false,
      group: null,
      titulo: "",
      precio:"",
      autor:"",
      edad_carta:"",
      puntuacion:"",
      imagen:"",
      Carta: 1,
      prueba: 2,

      titulos: [],
      autores: [],
      precios: [],
      puntuaciones: [],
      edades: [],
      imagenes: []

    
    }),
    
    
  }
  
</script>