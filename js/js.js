var secciones = [];
		var tiempo_splash = 2000;

		// Puntajes

		var puntaje = 0;
		var puntaje_accion = 0;
		var puntaje_ficcion = 0;
		var puntaje_comedia = 0;
		var puntaje_terror = 0;
		var puntaje_drama = 0;
		
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
			puntaje_accion = 0;
	 		puntaje_ficcion = 0;
			puntaje_comedia = 0;
			puntaje_terror = 0;
			puntaje_drama = 0
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
							
			switch (genero.innerText) {
				case "Accion":
					puntaje_accion++;
					break;
				case "Ciencia ficcion":
					puntaje_ficcion++;
					break;
				case "Comedia":
					puntaje_comedia++;
					break;
				case "Terror":
					puntaje_terror++;
					break;
				case "Drama":
					puntaje_drama++;
					break;
			}
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
			document.getElementById("puntaje").innerHTML = ('Total: ' + puntaje);
			document.getElementById("result_1").innerHTML = ('Accion: ' + puntaje_accion);
			document.getElementById("result_2").innerHTML = ('Ciencia Ficcion: ' + puntaje_ficcion);
			document.getElementById("result_3").innerHTML = ('Comedia: ' + puntaje_comedia);
			document.getElementById("result_4").innerHTML = ('Terror: ' + puntaje_terror);
			document.getElementById("result_5").innerHTML = ('Drama: ' + puntaje_drama);
        }
        var i = 1;
		function continuarSiguiente() {
				elemento.style.background = 'white';//volver a poner el boton del color blanco
				aux = 0;
            	if(contador<max){
                	document.getElementById("genero").innerHTML = personajes[lista[i]][1];
                	letra=personajes[lista[i]][2];
                	document.getElementById(letra).innerHTML = personajes[lista[i]][0];
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

let personajes = [
    [
        "John Wick",
        "Accion",
		"a",
		"Indiana jones",
		"Bruce Banner"
    ],
    [
        "Neo",
        "Accion",
		"c",
		"Han Solo",
		"Frank Martin"
    ],
    [
        "John McClane",
        "Accion",
		"b",
		"Jhon Rambo",
		"Jack Sparrow"
    ],
    [
        "Sarah Connor",
        "Accion",
		"c",
		"Alice Abernathy",
		"Leia Organa"
    ],
    [
        "La novia",
        "Accion",
		"b",
		"Lara Croft",
		"Agente Smith"
    ],
    [
        "Obi-Wan Kenobi",
        "Ciencia ficcion",
		"a",
		"Yoda",
		"Darth Maul"
    ],
    [
        "Jake Sully",
        "Ciencia ficcion",
		"c",
		"Superman",
		"Luke Skywalker"
    ],
    [
        "Joseph Cooper",
        "Ciencia ficcion",
		"b",
		"Depredador",
		"Bib Fortuna"
    ],
    [
        "Elliot",
        "Ciencia ficcion",
		"b",
		"Star-Lord",
		"Ellie Sattler"
    ],
    [
        "Marty McFly",
        "Ciencia ficcion",
		"a",
		"Rick Deckard",
		"Fox Mulder"
    ],
    [
        "Cindy Campbell",
        "Comedia",
		"c",
		"Dana Scully",
		"Dale Arden"
    ],    
    [
        "Steve Stifler",
        "Comedia",
		"a",
		"Less Grossman",
		"Kenny McCormick"
    ],
    [
        "Stanley Ipkiss",
        "Comedia",
		"c",
		"Ace Ventura",
		"Conde Olaf"
    ],    
    [
        "Alan Garner",
        "Comedia",
		"b",
		"Fred Jones",
		"Klaus Baudelaire"
    ],
    [
        "Peter Venkman",
        "Comedia",
		"a",
		"Arthur Poe",
		"Waylon Smithers"
    ],
    [
        "Ed Warren",
        "Terror",
		"b",
		"Freddy Krueger",
		"Regan MacNeil"
    ],
    [
        "Chris MacNeil",
        "Terror",
		"a",
		"Jack Torrance",
		"Michael Mayers"
    ],
    [
        "Thomasin",
        "Terror",
		"c",
		"Jason Voorhees",
		"Leatherface"
    ],
    [
        "Jigsaw",
        "Terror",
		"b",
		"The Candyman",
		"Damien Thorn"
    ],
    [
        "Pennywise",
        "Terror",
		"a",
		"Frankestein",
		"Mary Shaw"
    ],
    [
        "Tony Montana",
        "Drama",
		"a",
		"Norman Bates",
		"Alex DeLarge"
    ],
    [
        "Jack Dawson",
        "Drama",
		"a",
		"Rick Blaine",
		"Samara Morgan"
    ],
    [
        "Wlagyslaw Szpilman",
        "Drama",
		"b",
		"Severus Snape",
		"Travis Bickle"
    ],
    [
        "Forrest Gump",
        "Drama",
		"c",
		"Atticus Finch",
		"John Marston"
    ],
    [
        "Michael Corleone",
        "Drama",
		"b",
		"Hannibal Lecter",
		"Darth Vader"
    ]
];