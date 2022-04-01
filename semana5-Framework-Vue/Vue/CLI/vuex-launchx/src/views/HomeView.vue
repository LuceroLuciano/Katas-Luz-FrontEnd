<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <contador/>
    <Cuadrado/>
    <Botones/>
    
    <!--<div class="contador">-->
      <!-- {{ contador } }-->
      <!--{{ $store.state.contador }}--> <!-- va por el estadp y trae especificamente al contador -->
    <!--</div> -->

    <!--<div class="cuadrado">
      {{ $store.state.contador }} <sup>2</sup> = {{ $store.getters.cuadrado }} 
    </div> -->  <!-- sup de superindice -->

    <!--<div class="botones">-->
      <!-- para las mutaciones se usa commit -->
     <!-- <button @click="$store.commit('bajarContador')">-</button>
      <button @click="$store.commit('subirContador')">+</button> -->
    
     <!-- para las acciones se usa dispatch -->
     <!-- <button @click="$store.dispatch('bajarContador')">-</button>
      <button @click="$store.dispatch('subirContador')">+</button>
    </div> -->

  </div>
</template>

<script>

import contador from "../components/contador";
import Cuadrado from "../components/Cuadrado";
import Botones from "../components/Botones";

export default {
  name: 'HomeView',
  components: {
    contador,
    Cuadrado,
    Botones
  }
 /* data(){ // objeto data
    return {
       contador:0
    }
  }, */
  /*methods: {
    bajarContador(){
      this.contador--;
    },
    subirContador(){
      this.contador++;
    }
  } */
}
</script>

<style>

  div {
    margin-bottom: 10px;
  }

  .contador {
    font-size: 80px;
  }

  .botones button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }

  .cuadrado {
    font-size: 25px;
  }
</style>