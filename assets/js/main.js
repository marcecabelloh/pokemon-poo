function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre
	this.color = color

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque

	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon("Charmander", "rojo", 20)

Pikachu.atacar(Charmander)

console.log(Charmander.vida)


function botonAtacar(){
	var pokemon1 = document.getElementById("elegir").value;
	var pokemon2 = document.getElementById("escoger").value;
	
	if(pokemon1 == pokemon2){
		alert("No se peleen!!! (No pueden pelear dos Pókemon iguales)");
		return;
	}
	
	var ataqueUno = prompt("Ingresa poder de ataque del primer Pokemon");
	var ataqueDos = prompt("Ingresa poder de ataque del segundo Pokemon");

	var pikachu = new Pokemon (pokemon1,"amarillo",ataqueUno);
	var charmander = new Pokemon(pokemon2,"rojo",ataqueDos);

	var ataque = pikachu.atacar(pokemon2);
	var tagResultado = document.getElementById("resultado");
	var textoResultado = pokemon1 + " ataco a " + pokemon2 + " y " +  pokemon2 + " tiene una vida de : " + (charmander.vida - ataqueUno);	

	tagResultado.innerHTML = textoResultado;

}