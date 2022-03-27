// función de fetch para consultar la PokéAPI
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();  // todo el valor que tiene lo pasa a minusculas
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    //fectch es para la consulta de la api
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikachuSad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

// fetchPokemon();

// función para cambiar la imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");

/* const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value; // value es lo que tiene adentro el imput
    console.log("Hola " + pokeInput);
} */



/* sincrono
se lee lo de forma secuencial

    asincrono
lee varias formas a la vez
   promesas 
   
DOM Document Object Model
   */
