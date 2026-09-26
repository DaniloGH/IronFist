Swal.fire({
    title: '¿Preparado para salvar el mundo? <br><br> <img src="IMG/planeta_tierra.png" width="120px"><br>',
    html: 'IRON FIST, es un juego que mejorara tus reflejos a medida que pases de nivel, retandote cada vez mas a medida que avances y desbloqueando grandes logros al final de cada nivel, esperamos te diviertas y disfrutes de este gran juego',
    icon: 'success',
    confirmButtonText: 'ESTOY PREPARADO',
    width: '50%',
    height: '80%',
    timer: 100000,

    timerProgressbar: true,
    allowOutsideClick: true,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false
});


Tiempo = 71; // VARIABLE DE INICIO TIEMPO
Puntaje = 0; // VARIABLE DE INICIO PUNTOS


// =========================================================
// FUNCIONES DE NARRACIONES
// =========================================================

Narracion = 1;

document.getElementById("Contenedor_narracion").addEventListener(
    'click',
    Iniciar_narracion
);

function Iniciar_narracion() {

    if (Narracion == 1) {

        document.getElementById("narracion").play();

        document.getElementById("VOLUMEN").style.display = "none";
        document.getElementById("PAUSE").style.display = "table";

        Narracion = 2;

    } else {

        document.getElementById("narracion").pause();

        document.getElementById("VOLUMEN").style.display = "table";
        document.getElementById("PAUSE").style.display = "none";

        Narracion = 1;
    }
}


// =========================================================
// CAMBIO DE GRÁFICOS
// =========================================================

Graficos = 1;

function Graficos_fondo() {

    Contenedor_RQ = document.getElementById("Contenedor_RC");

    if (Graficos == 1) {

        document.getElementById("Recursos").style.marginLeft = "60%";

        document.getElementById("Fondo").style.background =
            "url(IMG/Fondo_Espacio2.jpg)";

        document.getElementById("Fondo").style.backgroundAttachment =
            "fixed";

        document.getElementById("Fondo").style.backgroundRepeat =
            "no-repeat";

        document.getElementById("Fondo").style.backgroundSize =
            "100% 120%";

        Graficos = 2;

    } else {

        document.getElementById("Recursos").style.marginLeft = "0%";

        document.getElementById("Fondo").style.backgroundImage =
            "url(IMG/Fondo_Espacio.gif)";

        Graficos = 1;
    }
}


// =========================================================
// CONTENEDOR PRINCIPAL DEL JUEGO
// =========================================================

function JUEGO() {

    function Tiempo_Disminur() {

        Tiempo--;

        document.getElementById("Tiempo").innerHTML = Tiempo;

        if (Tiempo == 0) {

            Tiempo = 71;
            Puntaje = 0;

            document.getElementById("Perdiste_sound").play();

            alert("Lo lamento perdiste");
        }
    }


    Restar_Tiempo = setInterval(Tiempo_Disminur, 1000);


// =====================================================
// INICIALIZACIÓN Y AUMENTAR PUNTOS 
// =====================================================

Puntaje = 0;
document.getElementById("Puntaje").innerHTML = "0&nbsp;/&nbsp;5";

document.getElementById("Meteiorito").addEventListener('mouseover', Aumentar_Puntos);
document.getElementById("Meteiorito2").addEventListener('mouseover', Aumentar_Puntos);

function Aumentar_Puntos() {

    Puntaje++;
    document.getElementById("Puntaje").innerHTML = Puntaje + "&nbsp;/&nbsp;5";

    if (Puntaje == 5) {
        Puntaje = 0;
        Tiempo = 71;

        document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL);

        function Habilitar_Siguienten_LVL() {
            document.getElementById("NIVEL_01").style.display = "none";
            document.getElementById("NIVEL_02").style.display = "block";
        }

        document.getElementById("Tiempo").innerHTML = 70;
        document.getElementById("Puntaje").innerHTML = "0&nbsp;/&nbsp;5";

        document.getElementById("Triunfo").play();
        document.getElementById("Fondo_Ciberpunk").pause();
        document.getElementById("Puntos_sound").pause();
        document.getElementById("Punto2").pause();

        document.getElementById("GANASTE_PANTALLA").style.display = "flex";

        function Ganaste_Pantalla() {
            if (typeof Reanudar_trayectoria !== 'undefined') clearInterval(Reanudar_trayectoria);
            if (typeof Reanudar_trayectoria2 !== 'undefined') clearInterval(Reanudar_trayectoria2);
            if (typeof Restar_Tiempo !== 'undefined') clearInterval(Restar_Tiempo);

            document.getElementById("Meteiorito").style.left = "-70%";
            document.getElementById("Meteiorito").style.transition = "0s";

            document.getElementById("Meteiorito2").style.left = "-70%";
            document.getElementById("Meteiorito2").style.transition = "0s";
        }

        Desbloquear_Pantalla = setInterval(Ganaste_Pantalla, 1);

        Swal.fire({
            title: 'FELICIDADES POR SUPERAR <br> EL NIVEL <br><br> <img src="IMG/Check.png" width="120px"><br>',
            html: 'Al parecer nos salvamos, agradecemos tu ayuda y esfuerzo al superar este nivel, esperamos seguir contando contigo si algo más sucede.',
            icon: 'success',
            confirmButtonText: 'QUIERO CONTINUAR',
            width: '50%',
            height: '80%',
            timer: 100000,
            timerProgressbar: true,
            allowOutsideClick: true,
            allowEscapeKey: false,
            allowEnterkey: false,
            stopKeydownPropagation: false
        });
    }
}


    // =====================================================
    // MOVIMIENTO METEORITO 1
    // =====================================================

    function Metiorito_Direccion() {

        Distancia1 = 80;

        Altura1 =
            Math.round(Math.random() * 450);

        document.getElementById("Meteiorito").style.left =
            Distancia1 + "%";

        document.getElementById("Meteiorito").style.top =
            Altura1 + "px";
    }


    setTimeout(Metiorito_Direccion, 2000);

    Reanudar_trayectoria =
        setInterval(Metiorito_Direccion, 2430);


    // =====================================================
    // MOVIMIENTO METEORITO 2
    // =====================================================

    function Metiorito_Direccion2() {

        Distancia2 = 80;

        Altura2 =
            Math.round(Math.random() * 450);

        document.getElementById("Meteiorito2").style.left =
            Distancia2 + "%";

        document.getElementById("Meteiorito2").style.top =
            Altura2 + "px";
    }


    setTimeout(Metiorito_Direccion2, 2600);

    Reanudar_trayectoria2 =
        setInterval(Metiorito_Direccion2, 2350);


    // =====================================================
    // EXPULSAR METEORITOS
    // =====================================================

    document.getElementById("Meteiorito").addEventListener(
        'mouseover',
        Explulsar
    );

    document.getElementById("Meteiorito2").addEventListener(
        'mouseover',
        Explulsar2
    );


    function Explulsar() {

        document.getElementById("Puntos_sound").play();

        Distancia = "-500";

        Altura =
            Math.round(Math.random() * 450);

        document.getElementById("Meteiorito").style.left =
            Distancia + "px";

        document.getElementById("Meteiorito").style.top =
            Altura + "px";

        document.getElementById("Meteiorito").style.transition =
            "1.8s";
    }


    function Explulsar2() {

        document.getElementById("Punto2").play();

        Distancia = "-500";

        Altura =
            Math.round(Math.random() * 450);

        document.getElementById("Meteiorito2").style.left =
            Distancia + "px";

        document.getElementById("Meteiorito2").style.top =
            Altura + "px";

        document.getElementById("Meteiorito2").style.transition =
            "1.8s";
    }


    // =====================================================
    // PERDISTE
    // =====================================================

    function perdiste() {

        if (
            document.getElementById("Meteiorito").offsetLeft > 630 ||
            document.getElementById("Meteiorito2").offsetLeft > 630
        ) {

            document.getElementById("Perdiste_sound").play();

            alert(
                "YA ES DEMASIADO TARDE, LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE Y LO MEJOR ES ESPERAR LO PEOR"
            );


            document.getElementById("Meteiorito").style.left =
                "-70%";

            document.getElementById("Meteiorito").style.transition =
                "0s";


            document.getElementById("Meteiorito2").style.left =
                "-70%";

            document.getElementById("Meteiorito2").style.transition =
                "0s";


            Tiempo = 71;

            Puntaje = 0;

        } else {

            document.getElementById("Meteiorito").style.transition =
                "2.4s";

            document.getElementById("Meteiorito2").style.transition =
                "2.4s";
        }
    }


    setInterval(perdiste, 1);
}


// =========================================================
// BOTÓN PLAY DEL NIVEL 1
// =========================================================

document.getElementById("Play").addEventListener(
    'click',
    PLAY
);


Conteo = 4;


function PLAY() {

    document.getElementById("Fondo_Ciberpunk").play();


    document.getElementById("Texo").style.left =
        "-900px";


    document.getElementById("Contenedor_Mensaje_Star").style.left =
        "-100%";


    function ARRACAR() {

        JUEGO();
    }


    tiempo_de_arranque =
        setTimeout(ARRACAR, 4100);


    function ESPERAR() {

        function Cuenta_rg() {

            Conteo--;

            document.getElementById("RGB").innerHTML =
                Conteo;


            if (Conteo == -1) {

                document.getElementById("Contenedor_contador").style.display =
                    "none";


                function Borrar() {

                    document.getElementById("Start").style.display =
                        "none";

                    DETENER_JUEGO();
                }


                setTimeout(Borrar, 500);
            }
        }


        setInterval(Cuenta_rg, 1000);
    }


    setTimeout(ESPERAR, 350);
}

// =========================================================
// PAUSA Y REANUDAR COMPLETO - NIVEL 1
// =========================================================
function DETENER_JUEGO() {
    // Vinculación al botón interactivo del Nivel 1
    var btnPausa = document.getElementById("btnPausalvl1");
    if (btnPausa) {
        btnPausa.addEventListener('click', PAUSE);
    }

    Activo = 1;

    function PAUSE() {
        var btn = document.getElementById("btnPausalvl1");
        var icono = document.getElementById("iconoPausalvl1");
        var texto = document.getElementById("textoPausalvl1");

        if (Activo == 1) {
            // =====================================================
            // 1. ESTADO: PAUSAR 
            // =====================================================

            // Cambio visual de la interfaz a modo "REANUDAR" (Verde Neón)
            if (btn) btn.classList.add("btn-reanudar");
            if (icono) icono.innerHTML = "▶";
            if (texto) texto.innerText = "REANUDAR";

            // Despliegue de overlay de pausa y detención de audio
            document.getElementById("Pausa_Pantalla").style.display = "table";
            document.getElementById("Fondo_Ciberpunk").pause();

            // Congelar el temporizador global
            clearInterval(Restar_Tiempo);
            document.getElementById("Tiempo").innerHTML = Tiempo;

            // Detener las trayectorias de los meteoritos
            if (typeof Reanudar_trayectoria !== 'undefined') clearInterval(Reanudar_trayectoria);
            if (typeof Reanudar_trayectoria2 !== 'undefined') clearInterval(Reanudar_trayectoria2);

            // Fijar posiciones exactas en el canvas/DOM durante el estado pausado
            function Metiorito_detener() {
                var met1 = document.getElementById("Meteiorito");
                var met2 = document.getElementById("Meteiorito2");

                if (met1) {
                    met1.style.left = met1.offsetLeft + "px";
                    met1.style.top = met1.offsetTop + "px";
                }
                if (met2) {
                    met2.style.left = met2.offsetLeft + "px";
                    met2.style.top = met2.offsetTop + "px";
                }
            }

            Pusae_offf = setInterval(Metiorito_detener, 1);
            Activo = 2; // Transición de estado a Pausado

        } else {
            // =====================================================
            // 2. ESTADO: REANUDAR
            // =====================================================

            // Restauración visual de la interfaz a modo "PAUSAR" (Azul Neón)
            if (btn) btn.classList.remove("btn-reanudar");
            if (icono) icono.innerHTML = "⏸";
            if (texto) texto.innerText = "PAUSAR";

            // Ocultar overlay y reanudar audio
            clearInterval(Pusae_offf);
            document.getElementById("Pausa_Pantalla").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();

            // Reanudar el conteo regresivo del tiempo
            function Tiempo_Disminur() {
                Tiempo--;
                document.getElementById("Tiempo").innerHTML = Tiempo;
                if (Tiempo == 0) {
                    Tiempo = 71;
                    Puntaje = 0;
                    alert("Lo lamento, el tiempo se agotó en el Nivel 1");
                }
            }

            Restar_Tiempo = setInterval(Tiempo_Disminur, 1000);

            // Reanudar movimiento físico y transiciones de los meteoritos
            var met1 = document.getElementById("Meteiorito");
            var met2 = document.getElementById("Meteiorito2");

            if (met1 && typeof Distancia1 !== 'undefined') {
                met1.style.left = Distancia1 + "%";
                met1.style.top = Altura1 + "px";
                met1.style.transition = "2s";
            }
            if (met2 && typeof Distancia2 !== 'undefined') {
                met2.style.left = Distancia2 + "%";
                met2.style.top = Altura2 + "px";
                met2.style.transition = "2s";
            }

            // Reprogramar los intervalos de movimiento aleatorio
            function Metiorito_Direccion() {
                Distancia1 = 80;
                Altura1 = Math.round(Math.random() * 450);
                if (met1) {
                    met1.style.left = Distancia1 + "%";
                    met1.style.top = Altura1 + "px";
                }
            }
            setTimeout(Metiorito_Direccion, 1700);
            Reanudar_trayectoria = setInterval(Metiorito_Direccion, 2430);

            function Metiorito_Direccion2() {
                Distancia2 = 80;
                Altura2 = Math.round(Math.random() * 400);
                if (met2) {
                    met2.style.left = Distancia2 + "%";
                    met2.style.top = Altura2 + "px";
                }
            }
            setTimeout(Metiorito_Direccion2, 1);
            Reanudar_trayectoria2 = setInterval(Metiorito_Direccion2, 2050);

            Activo = 1; // Transición de estado a Activo
        }
    }
}
// =========================================================
// TRANSICIONES ENTRE PANTALLAS
// =========================================================


// PRIMERA PANTALLA → REGLAS
// =========================================================

function Mover() {

    var contenedor =
        document.getElementById("Seccion_01");

    var Reglas =
        document.getElementById("Reglas");


    // Verificar que existan los elementos

    if (!contenedor || !Reglas) {

        console.error(
            "No se encontró Seccion_01 o Reglas"
        );

        return;
    }


    // Preparar REGLAS

    Reglas.style.display = "block";

    Reglas.style.top = "120%";


    // Animación de salida de la pantalla principal

    contenedor.style.transition =
        "transform 1.2s ease";

    contenedor.style.transform =
        "translateY(-100%)";


    // Mostrar REGLAS después de la animación

    setTimeout(function () {

        contenedor.style.display =
            "none";

        contenedor.style.transform =
            "translateY(-100%)";


        Reglas.style.top =
            "3%";

        Reglas.style.transition =
            "1s";

    }, 1200);
}


// =========================================================
// REGLAS → HISTORIA
// =========================================================

function Mover_2() {

    var Reglas_Sacar =
        document.getElementById("Reglas");


    Reglas_Sacar.style.top =
        "-100%";

    Reglas_Sacar.style.transition =
        "1.4s";


    function Desaparecer2() {

        var Reglas_Sacar =
            document.getElementById("Reglas");

        var contenedor_2 =
            document.getElementById("Seccion_2");

        var imagen =
            document.getElementById("Imagen");

        var mensaje =
            document.getElementById("Mensaje");

        var titulo =
            document.getElementById("Titulo_historia");


        Reglas_Sacar.style.display =
            "none";


        contenedor_2.style.top =
            "0%";


        imagen.style.left =
            "2%";

        imagen.style.transition =
            "2s";


        mensaje.style.right =
            "2%";

        mensaje.style.transition =
            "2s";


        titulo.style.left =
            "2%";

        titulo.style.transition =
            "1s";
    }


    setTimeout(
        Desaparecer2,
        1260
    );
}


// =========================================================
// HISTORIA → JUEGO
// =========================================================

function Mover_3() {

    var contenedor_2 =
        document.getElementById("Seccion_2");

    var Supremo =
        document.getElementById("Seccion_suprema");


    document.getElementById("narracion").pause();


    contenedor_2.style.top =
        "-100%";

    contenedor_2.style.transition =
        "1.4s";


    Supremo.style.height =
        "160vh";


    function Desaparaceer3() {

        var Seccion_Juego =
            document.getElementById("Seccion_Juego");

        var contenedor_2 =
            document.getElementById("Seccion_2");

        var juego =
            document.getElementById("Registraar");

        var Titulo_jugar =
            document.getElementById("Titulo_jugar");

        var Contenedor_juego =
            document.getElementById("Contenedor_Juego");

        var Cabezara =
            document.getElementById("Cabezera");


        Seccion_Juego.style.left =
            "0%";


        contenedor_2.style.display =
            "none";


        juego.style.top =
            "0%";

        juego.style.transition =
            "0s";


        Titulo_jugar.style.left =
            "0%";

        Titulo_jugar.style.transition =
            "0.8s";


        Contenedor_juego.style.left =
            "0%";

        Contenedor_juego.style.transition =
            "1.2s";


        Cabezara.style.left =
            "0%";

        Cabezara.style.transition =
            "1.2s";
    }


    setTimeout(
        Desaparaceer3,
        900
    );
}


// =========================================================
// RELOJ
// =========================================================

function Reloj_Tiempo() {

    var actualizar_Hora = function () {

        var Fecha = new Date(),

            Horas = Fecha.getHours(),

            ampm,

            Minutos = Fecha.getMinutes(),

            Segundos = Fecha.getSeconds(),

            diaSemana = Fecha.getDay(),

            dia = Fecha.getDate(),

            mes = Fecha.getMonth(),

            Año = Fecha.getFullYear();


        var pHoras =
            document.getElementById("Hora"),

            pAMPM =
                document.getElementById("AMPM"),

            pMinutos =
                document.getElementById("Minutos"),

            pSegundos =
                document.getElementById("Segundos"),

            pDia_Semana =
                document.getElementById("Dia_Semana"),

            pDia =
                document.getElementById("dia"),

            pMes =
                document.getElementById("mes"),

            pAño =
                document.getElementById("año");


        var semana = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado'
        ];


        pDia_Semana.textContent =
            semana[diaSemana];


        pDia.textContent =
            dia;


        var Mes_Actual = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Nomviembre',
            'Diciembre'
        ];


        pMes.textContent =
            Mes_Actual[mes];


        pAño.textContent =
            Año;


        if (Horas >= 12) {

            Horas =
                Horas - 12;

            ampm =
                'PM';

        } else {

            ampm =
                'AM';
        }


        if (Horas == 0) {

            Horas =
                12;
        }


        if (Horas < 10) {

            Horas =
                "0" + Horas;
        }


        pHoras.textContent =
            Horas;


        pAMPM.textContent =
            ampm;


        if (Minutos < 10) {

            Minutos =
                "0" + Minutos;
        }


        pMinutos.textContent =
            Minutos;


        if (Segundos < 10) {

            Segundos =
                "0" + Segundos;
        }


        pSegundos.textContent =
            Segundos;
    };


    actualizar_Hora();
}


Reloj_Tiempo();


setInterval(
    Reloj_Tiempo,
    1000
);
// =========================================================
// BOTÓN JUGAR - IR DE INICIO A REGLAS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    var botonJuego = document.getElementById("Juego");

    if (!botonJuego) {
        console.error("No se encontró el botón Juego");
        return;
    }

    botonJuego.addEventListener("click", function () {

        var pantallaInicio =
            document.getElementById("Seccion_01");

        var reglas =
            document.getElementById("Reglas");


        if (!pantallaInicio) {
            console.error("No existe Seccion_01");
            return;
        }

        if (!reglas) {
            console.error("No existe Reglas");
            return;
        }


        // Ocultamos la pantalla principal
        pantallaInicio.style.transition =
            "transform 1s ease";

        pantallaInicio.style.transform =
            "translateY(-100%)";


        // Mostramos las reglas
        setTimeout(function () {

            pantallaInicio.style.display =
                "none";

            reglas.style.display =
                "block";

            reglas.style.top =
                "3%";

            reglas.style.transition =
                "1s";

        }, 1000);

    });

});