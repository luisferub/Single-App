var secciones = [];
		var tiempo_splash = 2000;
		var puntaje = 0;
		var contador = 0;

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

		}
		var elemento;
		function clic(boton) {		
            elemento = document.getElementById(boton.id);
            respuesta = document.getElementById(letra);
			contador++;
			if((elemento.innerText)==(respuesta.innerText)){
				buena();
            }
            else {
                mala();
            }
		}
		function buena() {
			elemento.style.background = '#2ECC71';
			var tiempo = 1000;
			puntaje++;
			if (contador<25) {
			setTimeout(continuarSiguiente, tiempo);
			}
			else{
			setTimeout(cambiarResult, tiempo);//hacer funcion cuando se acabe el 'tiempo'
			}
		}
		function mala() {
			elemento.style.background = '#FA5858';
			var tiempo = 1000;
			if (contador<25) {
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
        }
        var i = 1;
		function continuarSiguiente() {
            elemento.style.background = 'white';//volver a poner el boton del color blanco
            if(contador<25){
                document.getElementById("genero").innerHTML = personajes[lista[i]][1];
                letra=personajes[lista[i]][2];
                document.getElementById(letra).innerHTML = personajes[lista[i]][0];
                i++;
            }
		}

var lista = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
lista = lista.sort(function() {return Math.random() - 0.5});

let personajes = [
    [
        "John Wick",
        "Accion",
	    "a"
    ],
    [
        "Neo",
        "Accion",
	    "c"
    ],
    [
        "John McClane",
        "Accion",
	    "b"
    ],
    [
        "Sarah Connor",
        "Accion",
	    "c"
    ],
    [
        "La novia",
        "Accion",
	    "b"
    ],
    [
        "Obi-Wan Kenobi",
        "Ciencia ficcion",
	    "a"
    ],
    [
        "Jake Sully",
        "Ciencia ficcion",
	    "c"
    ],
    [
        "Joseph Cooper",
        "Ciencia ficcion",
	    "b"
    ],
    [
        "Elliot",
        "Ciencia ficcion",
	    "b"
    ],
    [
        "Marty McFly",
        "Ciencia ficcion",
	    "a"
    ],
    [
        "Cindy Campbell",
        "Comedia",
	    "c"
    ],    
    [
        "Steve Stifler",
        "Comedia",
	    "a"
    ],
    [
        "Stanley Ipkiss",
        "Comedia",
	    "c"
    ],    
    [
        "Alan Garner",
        "Comedia",
	    "b"
    ],
    [
        "Peter Venkman",
        "Comedia",
	    "a"
    ],
    [
        "Ed Warren",
        "Terror",
	    "b"
    ],
    [
        "Chris MacNeil",
        "Terror",
	    "a"
    ],
    [
        "Thomasin",
        "Terror",
	    "c"
    ],
    [
        "Jigsaw",
        "Terror",
	    "b"
    ],
    [
        "Pennywise",
        "Terror",
	    "a"
    ],
    [
        "Tony Montana",
        "Drama",
	    "a"
    ],
    [
        "Jack Dawson",
        "Drama",
	    "a"
    ],
    [
        "Wlagyslaw Szpilman",
        "Drama",
	    "b"
    ],
    [
        "Forrest Gump",
        "Drama",
	    "c"
    ],
    [
        "Michael Corleone",
        "Drama",
	    "b"
    ]
];