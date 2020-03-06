var secciones = [];
		var tiempo_splash = 2000;

		var puntaje = 0; // Puntaje
		var contador = 0; // Contador de preguntas
		var max = 10; // Maxima cantidad de preguntas

		var aux = 0;

		window.onload = function () {
			inicializarReferencias();
            setTimeout(cambiarSplash, tiempo_splash);
		}

		function inicializarReferencias() {
			secciones[1] = document.getElementById("seccion_1");
			secciones[2] = document.getElementById("seccion_2");
			secciones[3] = document.getElementById("seccion_3");
			secciones[4] = document.getElementById("seccion_4");
			secciones[5] = document.getElementById("seccion_5");
			secciones[6] = document.getElementById("seccion_6");
		}

		function cambiarSplash() {
			secciones[1].className = "splash oculto";
			secciones[2].className = "home";
        }
        

		function cambiarSeccion(id_seccion) {
			for (var i in secciones) {
				secciones[i].classList.add("oculto");
            }
            secciones[id_seccion].classList.remove("oculto");

            if(id_seccion==3) {
                document.getElementById("genero").innerHTML = personajes[lista[0]][1];
                letra=personajes[lista[0]][2];
				document.getElementById(letra).innerHTML = personajes[lista[0]][0];
				document.getElementById("personaje").src= personajes[lista[0]][5];
			switch (letra) {
				case "a":
					document.getElementById("b").innerHTML = personajes[lista[0]][3];
					document.getElementById("c").innerHTML = personajes[lista[0]][4];
					break;
				case "b":
					document.getElementById("a").innerHTML = personajes[lista[0]][3];
					document.getElementById("c").innerHTML = personajes[lista[0]][4];
					break;
				case "c":
					document.getElementById("a").innerHTML = personajes[lista[0]][3];
					document.getElementById("b").innerHTML = personajes[lista[0]][4];
					break;
				}
            }

		}
		function volverQuestion(id_seccion) {
			var opcion = window.confirm("¿Está seguro que desea salir?")
			if (opcion) {
				for (var i in secciones) {
					secciones[i].classList.add("oculto");
				}
				secciones[id_seccion].classList.remove("oculto");
			}
		
			puntaje = 0;
			contador = 0;

		}
		var elemento;
		function clic(boton) {
			if (aux==0){
				elemento = document.getElementById(boton.id);
				respuesta = document.getElementById(letra);
				contador++;
				aux = 1;
				if((elemento.innerText)==(respuesta.innerText)){
					buena();
        		}
           	 	else {
           	     mala();
            	}
			}
			else {}		     
		}
		function buena() {
			elemento.style.background = '#2ECC71';
			var tiempo = 1000;
			puntaje++;
			aux = 1;
			genero = document.getElementById("genero");
			if (contador<max) {
			setTimeout(continuarSiguiente, tiempo);
				}
			else{
			setTimeout(cambiarResult, tiempo);//hacer funcion cuando se acabe el 'tiempo'
				}
		}
		function mala() {
			elemento.style.background = '#FA5858';
			var tiempo = 1000;
			aux = 1;
			if (contador<max) {
			setTimeout(continuarSiguiente, tiempo);
			}
			else{
			setTimeout(cambiarResult, tiempo);//hacer funcion cuando se acabe el 'tiempo'
			}		
		}
		function cambiarResult() {
			for (var i in secciones) {
				secciones[i].classList.add("oculto");
			}
			secciones[6].classList.remove("oculto");
			elemento.style.background = 'white';//volver a poner el boton del color blanco
			document.getElementById("puntaje").innerHTML = (puntaje + '/25');

			if(puntaje<=5){
				document.getElementById("men").innerHTML = mensaje[4][0];
				document.getElementById("desc").innerHTML = mensaje[4][1];
			}
			if(puntaje>5&&puntaje<=10){
				document.getElementById("men").innerHTML = mensaje[3][0];
				document.getElementById("desc").innerHTML = mensaje[3][1];
			}
			if(puntaje>10&&puntaje<=15){
				document.getElementById("men").innerHTML = mensaje[2][0];
				document.getElementById("desc").innerHTML = mensaje[2][1];
			}
			if(puntaje>15&&puntaje<=20){
				document.getElementById("men").innerHTML = mensaje[1][0];
				document.getElementById("desc").innerHTML = mensaje[1][1];
			}
			if(puntaje>20&&puntaje<=25){
				document.getElementById("men").innerHTML = mensaje[0][0];
				document.getElementById("desc").innerHTML = mensaje[0][1];
			}

        }
        var i = 1;
		function continuarSiguiente() {
				elemento.style.background = 'white';//volver a poner el boton del color blanco
				aux = 0;
            	if(contador<max){
                	document.getElementById("genero").innerHTML = personajes[lista[i]][1];
                	letra=personajes[lista[i]][2];
					document.getElementById(letra).innerHTML = personajes[lista[i]][0];
					document.getElementById("personaje").src= personajes[lista[i]][5];
			switch (letra) {
				case "a":
					document.getElementById("b").innerHTML = personajes[lista[i]][3];
					document.getElementById("c").innerHTML = personajes[lista[i]][4];
					break;
				case "b":
					document.getElementById("a").innerHTML = personajes[lista[i]][3];
					document.getElementById("c").innerHTML = personajes[lista[i]][4];
					break;
				case "c":
					document.getElementById("a").innerHTML = personajes[lista[i]][3];
					document.getElementById("b").innerHTML = personajes[lista[i]][4];
					break;
				}
			i++;
            		}
		}

var lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
lista = lista.sort(function() {return Math.random() - 0.5});

let mensaje = [
	[
		"¡Felicidades!",
		"¡Eres un experto en cine!"
	],
	[
		"¡Felicidades!",
		"¡Te falta poco para convertirte en un maestro!"
	],
	[
		"¡Vas bien!",
		"¡Estás a mitad de camino de ser un experto en cine!"
	],
	[
		"Ups...",
		"Aún te faltan muchas películas por ver."
	],
	[
		"Ups...",
		"Quizás el cine no es lo tuyo..."
	]
];

let personajes = [
    [
        "El Resplandor",
        "Terror",
		"a",
		"El bosque maldito",
		"Mamá",
		'img/the-shining.png'
    ],
    [
        "Scary Movie",
        "Comedia",
		"c",
		"¿Qué pasó ayer?",
		"¿Y dónde está el piloto?",
		'img/scary-movie.png'
    ],
    [
        "The Matrix",
        "Acción",
		"b",
		"El transportador",
		"12 Balas",
		'img/matrix.png'
    ],
    [
        "It",
        "Terror",
		"c",
		"Annabelle",
		"The Witch",
		'img/it.png'
    ],
    [
        "Star Wars",
        "Ciencia Ficción",
		"b",
		"Star Trek",
		"Blade Runner",
		'img/star-wars.png'
    ],
    [
        "Scarface",
        "Drama",
		"a",
		"El padrino",
		"Pulp Fiction",
		'img/scarface.png'
    ],
    [
        "Titanic",
        "Drama",
		"c",
		"El cisne negro",
		"Siete almas",
		'img/titanic.png'
    ],
    [
        "Avatar",
        "Ciencia Ficción",
		"b",
		"La llegada",
		"Ex-Machina",
		'img/avatar.png'
    ],
    [
        "John Wick",
        "Acción",
		"b",
		"Alita",
		"Ghost in shell",
		'img/john-wick.png'
    ],
    [
        "Viernes 13",
        "Terror",
		"a",
		"Halloween",
		"San Valentín sangriento",
		'img/viernes-13.png'
    ],
    [
        "Saw",
        "Terror",
		"c",
		"Exterminio",
		"Rec",
		'img/saw.png'
    ],    
    [
        "E.T.",
        "Ciencia Ficción",
		"a",
		"La Llegada",
		"La Rebelión",
		'img/et.png'
    ],
    [
        "La Máscara",
        "Comedia",
		"c",
		"Zoolander",
		"Luna de miel en familia",
		'img/la-mascara.png'
    ],    
    [
        "Forrest Gump",
        "Comedia",
		"b",
		"Roma",
		"Yo antes de tí",
		'img/forrest-gump.png'
    ],
    [
        "El pianista",
        "Drama",
		"a",
		"Whiplash",
		"The Help",
		'img/el-pianista.png'
    ],
    [
        "El exorcista",
        "Terror",
		"b",
		"La monja",
		"El rito",
		'img/el-exorcista.png'
    ],
    [
        "Los Cazafantasmas",
        "Comedia",
		"a",
		"Evolution",
		"The blues brothers",
		'img/cazafantasmas.png'
    ],
    [
        "Duro de matar",
        "Acción",
		"c",
		"Misión imposible",
		"Salt",
		'img/duro-de-matar.png'
    ],
    [
        "Kill Bill",
        "Acción",
		"b",
		"Death Proof",
		"Grind House",
		'img/kill-bill.png'
    ],
    [
        "Terminator",
        "Acción",
		"a",
		"Yo Robot",
		"Robocop",
		'img/terminator.png'
    ],
    [
        "El Padrino",
        "Drama",
		"a",
		"Brasco",
		"El Irlandés",
		'img/el-padrino.png'
    ],
    [
        "El Conjuro",
        "Terror",
		"a",
		"La noche del demonio",
		"La crucifixión",
		'img/el-conjuro.png'
    ],
    [
        "Interstellar",
        "Ciencia Ficción",
		"b",
		"Misión rescate",
		"Ad Astra",
		'img/interstellar.png'
    ],
    [
        "¿Dónde están las rubias?",
        "Comedia",
		"c",
		"Little Men",
		"Norbit",
		'img/donde-estan-las-rubias.png'
    ],
    [
        "Volver al Futuro",
        "Ciencia Ficción",
		"b",
		"Inception",
		"Gravity",
		'img/volver-al-futuro.png'
    ]
];