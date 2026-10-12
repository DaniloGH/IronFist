Tiempolvl2 = 60; // Variable de inicio tiempo
Puntajelvl2 = 0; // Variable de inicio puntos

function JUEGOlvl2() {

    // 1. DISMINUCIÓN Y CONTROL DE TIEMPO
    function Tiempo_Disminurlvl2() {
        Tiempolvl2--;
        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;

        // Evaluamos si el tiempo se agotó
        if (Tiempolvl2 <= 0) {
            clearInterval(Restar_Tiempolvl2);

            // Si al llegar a 0 no se alcanzó la meta de 10 puntos -> Derrota
            if (Puntajelvl2 < 10) {
                document.getElementById("Perdiste_sound").play();
                
                // Detener trayectorias
                clearInterval(Reanudar_trayectorialvl2);
                clearInterval(Reanudar_trayectoria2lvl2);
                clearInterval(Reanudar_trayectoria3lvl2);

                alert("El tiempo se agotó. No lograste alcanzar los 10 puntos a tiempo.");
            }
        }
    }

    Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);

    // EVENTOS MOUSEOVER PARA SUMAR PUNTOS
    document.getElementById("Meteioritolvl2").addEventListener('mouseover', Aumentar_Puntoslvl2);
    document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2);
    document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2);

    // 2. AUMENTO DE PUNTOS Y DETECCIÓN DE VICTORIA (MÁXIMO 10)
    function Aumentar_Puntoslvl2() {
        if (Puntajelvl2 < 10) {
            Puntajelvl2++;
            document.getElementById("Puntajelvl2").innerHTML = Puntajelvl2 + " / 10";

            // Al llegar exactamente a 10 puntos -> Victoria inmediata
            if (Puntajelvl2 === 10) {
                clearInterval(Restar_Tiempolvl2);
                document.getElementById("Fondo_Ciberpunk").pause();
                document.getElementById("Triunfo").play();

                // Detener movimiento e intervalos de meteoritos
                clearInterval(Reanudar_trayectorialvl2);
                clearTimeout(Activador_iniciallvl2);
                clearInterval(Reanudar_trayectoria2lvl2);
                clearTimeout(Activador_inicial2lvl2);
                clearInterval(Reanudar_trayectoria3lvl2);
                clearTimeout(Activador_inicial3lvl2);

                // Ocultar meteoritos inmediatamente para evitar bugs tras ganar
                document.getElementById("Meteioritolvl2").style.left = "-100px";
                document.getElementById("Meteiorito2lvl2").style.left = "-100px";
                document.getElementById("Meteiorito3lvl2").style.left = "-100px";

                // Pantalla y modal de victoria
                document.getElementById("GanastePantallaLvL2").style.display = "flex";
                Swal.fire({
                    title: 'FELICIDADES POR SUPERAR <br> EL NIVEL <br><br> <img src="IMG/Check.png" width="120px"><br>',
                    html: '¿VERDAD QUE FUE DIFÍCIL?. Prepárate para el siguiente nivel que las cosas van a empeorar. Agradecemos tu dedicación en pasar este nivel.',
                    icon: 'success',
                    confirmButtonText: 'QUIERO CONTINUAR',
                    width: '50%',
                    height: '80%',
                    timer: 100000,
                    timerProgressBar: true,
                    allowOutsideClick: true,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false,
                });

                document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL);
                function Habilitar_Siguienten_LVL() {
                    document.getElementById("NIVEL_01").style.display = "none";
                    document.getElementById("NIVEL_02").style.display = "none";
                    document.getElementById("NIVEL3").style.display = "block";
                }
            }
        }
    }

    // TRAYECTORIAS Y MOVIMIENTOS
    function Metiorito_Direccionlvl2() {
        document.getElementById("Meteioritolvl2").style.transition = "1.4s linear";
        document.getElementById("Meteioritolvl2").style.left = "80%";
        document.getElementById("Meteioritolvl2").style.top = Math.round(Math.random() * 450) + "px";
    }
    Activador_iniciallvl2 = setTimeout(Metiorito_Direccionlvl2, 3500);
    Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 3830);

    function Metiorito_Direccion2lvl2() {
        document.getElementById("Meteiorito2lvl2").style.transition = "1.2s linear";
        document.getElementById("Meteiorito2lvl2").style.left = "80%";
        document.getElementById("Meteiorito2lvl2").style.top = Math.round(Math.random() * 450) + "px";
    }
    Activador_inicial2lvl2 = setTimeout(Metiorito_Direccion2lvl2, 3000);
    Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 4050);

    function Metiorito_Direccion3lvl2() {
        document.getElementById("Meteiorito3lvl2").style.transition = "1.9s linear";
        document.getElementById("Meteiorito3lvl2").style.left = "80%";
        document.getElementById("Meteiorito3lvl2").style.top = Math.round(Math.random() * 450) + "px";
    }
    Activador_inicial3lvl2 = setTimeout(Metiorito_Direccion3lvl2, 2200);
    Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 4570);

    // EXPULSIÓN DE METEORITOS AL HACER MOUSEOVER
    document.getElementById("Meteioritolvl2").addEventListener('mouseover', Explulsarlvl2);
    document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Explulsar2lvl2);
    document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Explulsar3lvl2);

    function Explulsarlvl2() {
        document.getElementById("Puntos_sound").play();
        document.getElementById("Meteioritolvl2").style.transition = "1.8s";
        document.getElementById("Meteioritolvl2").style.left = "-500px";
    }

    function Explulsar2lvl2() {
        document.getElementById("Punto2").play();
        document.getElementById("Meteiorito2lvl2").style.transition = "1.8s";
        document.getElementById("Meteiorito2lvl2").style.left = "-500px";
    }

    function Explulsar3lvl2() {
        document.getElementById("Punto3").play();
        document.getElementById("Meteiorito3lvl2").style.transition = "1.8s";
        document.getElementById("Meteiorito3lvl2").style.left = "-500px";
    }

    // 3. CONTROL DE CRUCE DE LÍNEA: REINICIO DE PUNTOS Y REUBICACIÓN DE METEORITOS
    function perdistelvl2() {
        var m1 = document.getElementById("Meteioritolvl2");
        var m2 = document.getElementById("Meteiorito2lvl2");
        var m3 = document.getElementById("Meteiorito3lvl2");

        var p1 = m1.offsetLeft;
        var p2 = m2.offsetLeft;
        var p3 = m3.offsetLeft;

        // Si cualquiera cruza el límite de 630px
        if (p1 > 630 || p2 > 630 || p3 > 630) {
            document.getElementById("Perdiste_sound").play();

            // Reiniciar puntaje a 0
            Puntajelvl2 = 0;
            document.getElementById("Puntajelvl2").innerHTML = "0 / 10";

            // Reubicar inmediatamente el meteorito que cruzó a la izquierda para evitar que se quede congelado
            if (p1 > 630) {
                m1.style.transition = "0s";
                m1.style.left = "-100px";
            }
            if (p2 > 630) {
                m2.style.transition = "0s";
                m2.style.left = "-100px";
            }
            if (p3 > 630) {
                m3.style.transition = "0s";
                m3.style.left = "-100px";
            }
        }
    }

    setInterval(perdistelvl2, 100);
}

        
        //LE DECIMOS QUE AL PRECIONAR EL BOTON JUGAR EJECUTARA LA FUNCION PLAY     
        document.getElementById("Playlvl2").addEventListener('click', PLAYlvl2)

        Conteolvl2 = 4 //ESTE ES EL CONTEO DE LA CUENTA REGRESIVA QUE SE DA DESPUEZ DE PRESINAR JUGAR
            
            //ESTA FUNCION EJECUTA UN CONJUNTO DE ACCIONES AL PRESIONAR JUGAR
            function PLAYlvl2(){
                document.getElementById("Fondo_Ciberpunk").play()
                //MUEVE EL TITULO FUERA DEL CONTENEDOR UNA VEZ DE CLICK A JUGAR
                document.getElementById("Texolvl2").style.left = "-900px" 
                //MUEVE AL BOTON PLAY TRANS PRESIONAR PRESIONAR AL MISMO BOTON
                document.getElementById("Playlvl2").style.left = "-900px" 
                document.getElementById("Dificultad").style.left = "-900px"
                    //ESTA FUNCION CONTIENE AL JUEGO COMO TAL
                    function ARRACARlvl2(){    
                        JUEGOlvl2()}
                //INVOCA AL JUEGO UNA VEZ PASEN 4 SEGUNDO - OSEA UNA VEZ TERMINE EL CONTADOR
                tiempo_de_arranquelvl2 =  setTimeout(ARRACARlvl2, 4100)
                //ESTA FUNCION EJECUTA LA CUENTA REGRESIVA Y RETIRA LA PANTALLA START 
                function ESPERARlvl2(){
                    function Cuenta_rglvl2(){
                        Conteolvl2--;
                        document.getElementById("RGBlvl2").innerHTML = Conteolvl2
                        if(Conteolvl2 == -1){
                        document.getElementById("Contenedor_contadorlvl2").style.display = "none"
                        function Borrarlvl2(){
                        document.getElementById("Startlvl2").style.display = "none"

                            DETENER_JUEGOlvl2() }//HABILITA LA FUNCION DE PAUSE Y REANUDAR UNA VEZ CARGUE EL JUEGO
                        setTimeout(Borrarlvl2, 500) }  }
                        setInterval (Cuenta_rglvl2, 1000)}

                        setTimeout(ESPERARlvl2, 350)}//SE EJECUTARA EN UN LAPSO DE 350, DESPUES DE PRESIONAR EL BOTON


// Función para alternar el sonido ON / OFF
function alternarMute() {
    var audio = document.getElementById("Fondo_Ciberpunk");
    var btn = document.getElementById("btn-audio");

    if (audio) {
        audio.muted = !audio.muted;
        if (btn) {
            btn.innerHTML = audio.muted ? "🔇" : "🔊";
        }
    }
}

                        
// =========================================================
// PAUSA Y REANUDAR COMPLETO - NIVEL 2
// =========================================================
function DETENER_JUEGOlvl2() {
    // Vinculación al botón interactivo del Nivel 2
    var btnPausa = document.getElementById("Pauselvl2");
    if (btnPausa) {
        btnPausa.addEventListener('click', PAUSElvl2);
    }

    Activo = 1;

    function PAUSElvl2() {
        var btn = document.getElementById("Pauselvl2");
        var icono = document.getElementById("iconoPausalvl2");
        var texto = document.getElementById("textoPausalvl2");

        if (Activo == 1) {
            // =====================================================
            // 1. ESTADO: PAUSAR (Se activa al presionar PAUSAR)
            // =====================================================

            // Cambio visual a modo "REANUDAR" (Verde Neón)
            if (btn) btn.classList.add("btn-reanudar");
            if (icono) icono.innerHTML = "▶";
            if (texto) texto.innerText = "REANUDAR";

            // Despliegue de overlay de pausa y detención de audio
            document.getElementById("Pausa_Pantallalvl2").style.display = "table";
            document.getElementById("Fondo_Ciberpunk").pause();

            // Congelar el temporizador global del Nivel 2
            clearInterval(Restar_Tiempolvl2);
            document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;

            // Detener las trayectorias de los 3 meteoritos del Nivel 2
            if (typeof Reanudar_trayectorialvl2 !== 'undefined') clearInterval(Reanudar_trayectorialvl2);
            if (typeof Reanudar_trayectoria2lvl2 !== 'undefined') clearInterval(Reanudar_trayectoria2lvl2);
            if (typeof Reanudar_trayectoria3lvl2 !== 'undefined') clearInterval(Reanudar_trayectoria3lvl2);

            // Fijar posiciones exactas en el DOM durante la pausa
            function Metiorito_detenerlvl2() {
                var met1 = document.getElementById("Meteioritolvl2");
                var met2 = document.getElementById("Meteiorito2lvl2");
                var met3 = document.getElementById("Meteiorito3lvl2");

                if (met1) {
                    met1.style.left = met1.offsetLeft + "px";
                    met1.style.top = met1.offsetTop + "px";
                }
                if (met2) {
                    met2.style.left = met2.offsetLeft + "px";
                    met2.style.top = met2.offsetTop + "px";
                }
                if (met3) {
                    met3.style.left = met3.offsetLeft + "px";
                    met3.style.top = met3.offsetTop + "px";
                }
            }

            Pusae_offflvl2 = setInterval(Metiorito_detenerlvl2, 1);
            Activo = 2; // Transición a estado Pausado

        } else {
            // =====================================================
            // 2. ESTADO: REANUDAR (Se activa al presionar REANUDAR)
            // =====================================================

            // Restauración visual a modo "PAUSAR" (Azul Neón)
            if (btn) btn.classList.remove("btn-reanudar");
            if (icono) icono.innerHTML = "⏸";
            if (texto) texto.innerText = "PAUSAR";

            // Ocultar overlay y reanudar audio
            clearInterval(Pusae_offflvl2);
            document.getElementById("Pausa_Pantallalvl2").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();

            // Reanudar el conteo regresivo del tiempo del Nivel 2
            function Tiempo_Disminurlvl2() {
                Tiempolvl2--;
                document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;
                if (Tiempolvl2 == 0) {
                    Tiempolvl2 = 61;
                    Puntajelvl2 = 0;
                    alert("Lo lamento, el tiempo se agotó en el Nivel 2");
                }
            }

            Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);

            // Reanudar posiciones y transiciones de los meteoritos
            var met1 = document.getElementById("Meteioritolvl2");
            var met2 = document.getElementById("Meteiorito2lvl2");
            var met3 = document.getElementById("Meteiorito3lvl2");

            if (met1 && typeof Distancialvl2 !== 'undefined') {
                met1.style.left = Distancialvl2 + "%";
                met1.style.top = Alturalvl2 + "px";
                met1.style.transition = "2s";
            }
            if (met2 && typeof Distancia2lvl2 !== 'undefined') {
                met2.style.left = Distancia2lvl2 + "%";
                met2.style.top = Altura2lvl2 + "px";
                met2.style.transition = "2s";
            }
            if (met3 && typeof Distancia3lvl2 !== 'undefined') {
                met3.style.left = Distancia3lvl2 + "%";
                met3.style.top = Altura3lvl2 + "px";
                met3.style.transition = "2s";
            }

            // Reprogramar los intervalos de movimiento aleatorio para los 3 meteoritos
            function Metiorito_Direccionlvl2() {
                Distancialvl2 = 80;
                Alturalvl2 = Math.round(Math.random() * 450);
                if (met1) {
                    met1.style.left = Distancialvl2 + "%";
                    met1.style.top = Alturalvl2 + "px";
                }
            }
            setTimeout(Metiorito_Direccionlvl2, 1700);
            Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 2430);

            function Metiorito_Direccion2lvl2() {
                Distancia2lvl2 = 80;
                Altura2lvl2 = Math.round(Math.random() * 400);
                if (met2) {
                    met2.style.left = Distancia2lvl2 + "%";
                    met2.style.top = Altura2lvl2 + "px";
                }
            }
            setTimeout(Metiorito_Direccion2lvl2, 1);
            Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 2050);

            function Metiorito_Direccion3lvl2() {
                Distancia3lvl2 = 80;
                Altura3lvl2 = Math.round(Math.random() * 400);
                if (met3) {
                    met3.style.left = Distancia3lvl2 + "%";
                    met3.style.top = Altura3lvl2 + "px";
                }
            }
            setTimeout(Metiorito_Direccion3lvl2, 1);
            Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2200);

            Activo = 1; // Transición a estado Activo
        }
    }
}

