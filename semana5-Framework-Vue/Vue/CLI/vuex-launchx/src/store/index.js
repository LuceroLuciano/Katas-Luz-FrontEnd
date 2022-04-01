import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: { // recuperar todos los datos del estado
    cuadrado (state) {
      return state.contador * state.contador;
    }
  },
  mutations: { // modificar el estado, aqui no se puede tener codigo asincrono
    subirContador(state, random) {
      //state.contador++;
      state.contador += random;
    },
      bajarContador(state, random){
        state.contador -= random;
      }
  },
  // dentro de las acciones pueden ir los formularios
  actions: { // modificar el estado, aqui si se puede tener codigo asincrono, se puede mandar a allaar de los componentes
    // consuta una api
    async subirContador({ commit }){
      const rest = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await rest.json();
      console.log(results);
      commit("subirContador", results)
    },
    async bajarContador({ commit }){
      const rest = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await rest.json();
      console.log(results);
      commit("bajarContador", results)
    }
  },
  modules: { // 
  }
})
