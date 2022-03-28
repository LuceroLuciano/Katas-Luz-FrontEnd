// crea una función de Vue que crea la APP
const app = Vue.createApp({
    data() {
        return {
            nombre: 'Lucero',
            apellido: 'Luxiano',
            email: 'luxiano@gmail.com',
            genero: 'female',
            foto: 'https://randomuser.me/api/portraits/women/62.jpg'
        }
    },
    // metodos, son las funciones que tengauna app
    methods: {
        // funcion asicrona imprimirNombre
        async cambiarUsuario(){
            //console.log(this.nombre)
            const res = await fetch('https://randomuser.me/api');
            // constante objeto
            const { results } = await res.json();

            //console.log(results);

            this.nombre = results[0].name.first,
            this.apellido = results[0].name.last,
            this.email = results[0].email,
            this.genero = results[0].gender,
            this.foto = results[0].picture.large
        }
    }
})

// monta la app en el selector #app
app.mount('#app');