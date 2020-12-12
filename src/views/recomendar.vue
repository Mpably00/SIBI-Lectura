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
    max-width="300000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[this.aleatorio]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(this.aleatorio)"></v-list-item-subtitle>
      </v-list-item-content>

    <div class="v-avatar ma-3 rounded-0">
        <v-img  
        :src=" devolverImagen(this.aleatorio)"
        
        
        height="300px"
        weight="150px">

        </v-img>
    </div>
      
    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="300000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[this.aleatorio1]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(this.aleatorio1)"></v-list-item-subtitle>
      </v-list-item-content>

   <div class="v-avatar ma-3 rounded-0">
        <v-img  
        :src=" devolverImagen(this.aleatorio1)"
        class="white--text align-end"
        
        height="500px"
        weight="300px">
        </v-img>
   </div>
    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="300000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[this.aleatorio2]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(this.aleatorio2)"></v-list-item-subtitle>
      </v-list-item-content>

   <div class="v-avatar ma-3 rounded-0">
        <v-img  
        :src=" devolverImagen(this.aleatorio2)"
    
      
        height="500px"
        weight="300px">

        </v-img>
   </div>

    </v-list-item>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="300000"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <v-card-title v-text="this.titulos[this.aleatorio3]">
            </v-card-title>
        </v-list-item-title>
        <v-list-item-subtitle v-text="devolverText(this.aleatorio3)"></v-list-item-subtitle>
      </v-list-item-content>

   <div class="v-avatar ma-3 rounded-0">
        <v-img  
        :src=" devolverImagen(this.aleatorio3)"
        class="white--text align-end"
       
        height="500px"
        weight="300px">

        </v-img>
   </div>
      
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
        axios.get("http://localhost:3000/real", {
          params: {
            edad: edadA,
          }
          }) .then(response => {
        this.titulo=response.data.precio;
        this.recogerDatos(response);
        this.generaAleatorio(response);
        this.generaAleatorio1(response);
        this.generaAleatorio2(response);
        this.generaAleatorio3(response);
        
      });
    
    },
    methods: {
      clicar: function(){
        alert("Has pulsado este boton");
      },
       recogerDatos(respuesta){

         
         for(var i =0; i<respuesta.data.length;i++){
           
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

      generaAleatorio(respuesta){
        this.aleatorio=Math.floor((Math.random()*(respuesta.data.length-0)));
        
        while(this.aleatorio==this.aleatorio1||this.aleatorio==this.aleatorio2||this.aleatorio==this.aleatorio3){
          this.aleatorio=Math.floor(Math.random()*(respuesta.data.length-0));
        }
      },
      generaAleatorio1(respuesta){
        this.aleatorio1=Math.floor(Math.random()*(respuesta.data.length-0));
        
         while(this.aleatorio1==this.aleatorio||this.aleatorio1==this.aleatorio2||this.aleatorio1==this.aleatorio3){
          this.aleatorio1=Math.floor(Math.random()*(respuesta.data.length-0));
        }
      },
      generaAleatorio2(respuesta){
        this.aleatorio2=Math.floor(Math.random()*(respuesta.data.length-0));
         while(this.aleatorio2==this.aleatorio||this.aleatorio2==this.aleatorio1||this.aleatorio2==this.aleatorio3){
          this.aleatorio2=Math.floor(Math.random()*(respuesta.data.length-0));
        }
      },
      generaAleatorio3(respuesta){
        this.aleatorio3=Math.floor(Math.random()*(respuesta.data.length-0));
        
         while(this.aleatorio3==this.aleatorio||this.aleatorio3==this.aleatorio2||this.aleatorio3==this.aleatorio1){
          this.aleatorio3=Math.floor(Math.random()*(respuesta.data.length-0));
        
        }
      },


      devolverCarta(){
  
           this.Carta=this.$route.query.edad;
      
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
       
        texto="El autor de este libro es,"+ this.autores[j]+ ", el precio es "+this.precios[j]+ " euros, la puntuacion de este libro es, "+this.puntuaciones[j];
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
      aleatorio:2,
      aleatorio1:3,
      aleatorio2:5,
      aleatorio3:4,
    

      titulos: [],
      autores: [],
      precios: [],
      puntuaciones: [],
      edades: [],
      imagenes: []

    
    }),
    
    
  }
  
</script>
