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
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>



      <v-toolbar-title>BIENVENIDO PEQUEÑO LECTOR</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
              height="200px"
            >
              
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn>
                RECOMENDAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '0-5 AÑOS', src: 'https://i.pinimg.com/originals/53/d5/6c/53d56c027aada941b25496a1db3dd3fa.jpg', flex: 6 },
        { title: '6-8 AÑOS', src: 'http://lalupa3.webcindario.com/clasicos/imagenes/conejos.jpg', flex: 6 },
        { title: '9-10 AÑOS', src: 'http://haciendoelindio.com/wp-content/uploads/abcd.jpg', flex: 6 },
        { title: '11-15 AÑOS', src: 'https://i.pinimg.com/originals/78/8f/a4/788fa4ffac9b4b1dcb42be19aff821dd.jpg', flex: 6 },
        { title: '+15 AÑOS', src: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2017/11/SUPERHEROES_1-696x398.jpg', flex: 12}
      ],
    }),
      data1: () => ({
      drawer: false,
      group: null,
    }),
  }  
  
</script>

