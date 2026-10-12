// Declarar variables globales al inicio de Ejecucion3.js para evitar bloqueos
var juegoPausadolv3 = false;
var Restar_Tiempolvl3;
var Reanudar_trayectorialv3;
var Reanudar_trayectorialv2lvl3;
var Reanudar_trayectorialv3lvl3;
var Reanudar_trayectorialv4lvl3;
// =========================================================
// IRON FIST - LÓGICA Y MEJORAS DEL NIVEL 3
// Archivo: Ejecucion3.js
// =========================================================

Tiempolvl3 = 50; // Temporizador inicial de 50 segundos
Puntajelvl3 = 0; // Puntuación inicial

function JUEGOlvl3() {
    // Reproducir la alarma al iniciar el nivel 3 usando el ID exacto del index
    var alarmaInicio = document.getElementById("Alarma_sound");
    if (alarmaInicio) {
        alarmaInicio.currentTime = 0;
        alarmaInicio.play().catch(function(error) {
            console.log("El navegador requiere interacción previa o hubo un error:", error);
       });
    } 
    // 1. CONTROL Y DISMINUCIÓN DE TIEMPO
    function Tiempo_Disminurlvl3() {
        Tiempolvl3--;
        document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3;

        if (Tiempolvl3 <= 0) {
            clearInterval(Restar_Tiempolvl3);

            if (Puntajelvl3 < 15) {
                document.getElementById("Perdiste_sound").play();
                
                // Detener intervalos de movimiento
                clearInterval(Reanudar_trayectorialvl3);
                clearInterval(Reanudar_trayectoria2lvl3);
                clearInterval(Reanudar_trayectoria3lvl3);
                clearInterval(Reanudar_trayectoria4lvl3);

                alert("¡Invasión Inminente! El tiempo se agotó antes de alcanzar los 15 puntos.");
            }
        }
    }

    Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000);

    // 2. SUMAR PUNTOS Y DETECTAR VICTORIA (META: 15 PUNTOS)
    document.getElementById("Meteoritolvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);

    function Aumentar_Puntoslvl3() {
        if (Puntajelvl3 < 15) {
            Puntajelvl3++;
            document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 15";

            // VICTORIA EN EL NIVEL 3
            if (Puntajelvl3 === 15) {
                clearInterval(Restar_Tiempolvl3);
                document.getElementById("Fondo_Ciberpunk").pause();
                document.getElementById("Triunfo").play();

                // Detener movimiento de meteoritos
                clearInterval(Reanudar_trayectorialvl3);
                clearInterval(Reanudar_trayectoria2lvl3);
                clearInterval(Reanudar_trayectoria3lvl3);
                clearInterval(Reanudar_trayectoria4lvl3);

                // Reubicar meteoritos fuera de pantalla
                document.getElementById("Meteoritolvl3").style.left = "-200px";
                document.getElementById("Meteorito2lvl3").style.left = "-200px";
                document.getElementById("Meteorito3lvl3").style.left = "-200px";
                document.getElementById("Meteorito4lvl3").style.left = "-200px";

                // Modal de victoria felicitando la defensa con la nave cazadora
                Swal.fire({
                    title: '¡VICTORIA FINAL! <br> AMENAZA DESTRUIDA <br><br> <img src="IMG/nave.png" width="140px"><br>',
                    html: 'Tu nave ha destruido con éxito los asteroides y protegido la Tierra de la invasión. ¡Felicidades, piloto de IRON FIST!',
                    icon: 'success',
                    confirmButtonText: 'VER CRÉDITOS Y FINAL',
                    width: '50%',
                    height: '80%',
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then(() => {
                    // Animación de despliegue de naves aliadas y créditos finales
                    document.getElementById("Pantalla_Ovnislvl3").style.left = "10%";
                    document.getElementById("Pantalla_Nodrizalvl3").style.left = "40%";
                    document.getElementById("Pantalla_Ovnis2lvl3").style.left = "70%";

                    setTimeout(function() {
                        document.getElementById("Creditoslvl3").style.top = "10%";
                        document.getElementById("Proximolvl3").style.bottom = "10%";
                        if (document.getElementById("Musica_Final")) {
                            document.getElementById("Musica_Final").play();
                        }
                    }, 1500);
                });
            }
        }
    }

    // 3. TRAYECTORIAS Y VELOCIDADES DE LOS METEORITOS ORIGINALES
    function Metiorito_Direccionlvl3() {
        document.getElementById("Meteoritolvl3").style.transition = "1.2s linear";
        document.getElementById("Meteoritolvl3").style.left = "80%";
        document.getElementById("Meteoritolvl3").style.top = Math.round(Math.random() * 450) + "px";
    }
    Reanudar_trayectorialvl3 = setInterval(Metiorito_Direccionlvl3, 1900);

    function Metiorito_Direccion2lvl3() {
        document.getElementById("Meteorito2lvl3").style.transition = "1.4s linear";
        document.getElementById("Meteorito2lvl3").style.left = "80%";
        document.getElementById("Meteorito2lvl3").style.top = Math.round(Math.random() * 450) + "px";
    }
    Reanudar_trayectoria2lvl3 = setInterval(Metiorito_Direccion2lvl3, 2100);

    function Metiorito_Direccion3lvl3() {
        document.getElementById("Meteorito3lvl3").style.transition = "1.6s linear";
        document.getElementById("Meteorito3lvl3").style.left = "80%";
        document.getElementById("Meteorito3lvl3").style.top = Math.round(Math.random() * 450) + "px";
    }
    Reanudar_trayectoria3lvl3 = setInterval(Metiorito_Direccion3lvl3, 2300);

    function Metiorito_Direccion4lvl3() {
        document.getElementById("Meteorito4lvl3").style.transition = "1.0s linear";
        document.getElementById("Meteorito4lvl3").style.left = "80%";
        document.getElementById("Meteorito4lvl3").style.top = Math.round(Math.random() * 450) + "px";
    }
    Reanudar_trayectoria4lvl3 = setInterval(Metiorito_Direccion4lvl3, 1800);

    // EXPULSIÓN DE METEORITOS AL PASAR EL CURSOR (MOUSEOVER)
    document.getElementById("Meteoritolvl3").addEventListener('mouseover', function() {
        document.getElementById("Puntos_sound").play();
        this.style.transition = "1.5s";
        this.style.left = "-500px";
    });

    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', function() {
        document.getElementById("Punto2").play();
        this.style.transition = "1.5s";
        this.style.left = "-500px";
    });

    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', function() {
        document.getElementById("Punto3").play();
        this.style.transition = "1.5s";
        this.style.left = "-500px";
    });

    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', function() {
        document.getElementById("Punto4").play();
        this.style.transition = "1.5s";
        this.style.left = "-500px";
    });

    // 4. CONTROL DE CRUCE DE LÍNEA Y REINICIO DE PUNTOS
    function perdistelvl3() {
        var m1 = document.getElementById("Meteoritolv3");
        var m2 = document.getElementById("Meteorito2lvl3");
        var m3 = document.getElementById("Meteorito3lvl3");
        var m4 = document.getElementById("Meteorito4lvl3");

        if ((m1 && m1.offsetLeft > 630) || (m2 && m2.offsetLeft > 630) || (m3 && m3.offsetLeft > 630) || (m4 && m4.offsetLeft > 630)) {
            var alarma = document.getElementById("Alarma_sound");
            if (alarma) {
                alarma.currentTime = 0;
                alarma.play();
           }

            [m1, m2, m3, m4].forEach(function(m) {
                if (m && m.offsetLeft > 630) {
                    // Forzamos la posición inicial usando style.cssText para anular cualquier conflicto
                    m.style.transition = "none";
                    m.style.left = "-150px"; 
                
                    // Forzamos un respiro al DOM para que tome el cambio y reactivemos
                    setTimeout(function() {
                        m.style.transition = "";
                    }, 50);
                }
            });
        }  
    }
    setInterval(perdistelvl3, 100);
}

// INICIO DEL CONTEO Y EVENTO DEL BOTÓN JUGAR
if (document.getElementById("Playlvl3")) {
    document.getElementById("Playlvl3").addEventListener('click', PLAYlvl3);
}

Conteolvl3 = 4;

function PLAYlvl3() {
    // 1. Reproducir música de fondo
    document.getElementById("Fondo_Ciberpunk").play();

    // 2. 🔊 REPRODUCIR LA ALARMA Y PAUSARLA A LOS 3 SEGUNDOS
    var sonidoAlarma = document.getElementById("AudioAlarmaLvl3");
    if (sonidoAlarma) {
        sonidoAlarma.currentTime = 0; 
        sonidoAlarma.play().catch(function(error) {
            console.log("Reproducción de audio prevenida por el navegador:", error);
        });
   
        // Detener la alarma a los 3000 ms (3 segundos)
        setTimeout(function() {
            sonidoAlarma.pause();
            sonidoAlarma.currentTime = 0; // Reinicia el tiempo para la próxima partida
        }, 3000);
    }

    // 3. Ocultar pantalla inicial y empezar el conteo
    document.getElementById("Textolvl3").style.left = "-900px";
    document.getElementById("Playlvl3").style.left = "-900px";
    document.getElementById("Dificultadlvl3").style.left = "-900px";

    setTimeout(JUEGOlvl3, 4100);

    function Cuenta_rglvl3() {
        Conteolvl3--;
        document.getElementById("RGBlvl3").innerHTML = Conteolvl3;
        if (Conteolvl3 == -1) {
            document.getElementById("Contenedor_contadorlvl3").style.display = "none";
            document.getElementById("Startlvl3").style.display = "none";
        }
    }
    setInterval(Cuenta_rglvl3, 1000);
}
// =========================================================
// CONTROL DE PAUSA NIVEL 3
// =========================================================
var juegoPausadolvl3 = false;

if (document.getElementById("Pauselv13")) {
    document.getElementById("Pauselv13").addEventListener('click', TogglePauselv13);
}

function TogglePauselv13() {
    var btnPausa = document.getElementById("Pauselv13");
    var musicaFondo = document.getElementById("Fondo_Ciberpunk");

    if (!juegoPausadolv3) {
        // --- ESTADO: PAUSAR ---
        juegoPausadolv3 = true;
        if (btnPausa) btnPausa.innerHTML = "REANUDAR";

        // Detener temporizador e intervalos de movimiento
        clearInterval(Restar_Tiempolvl3);
        clearInterval(Reanudar_trayectorialv3);
        clearInterval(Reanudar_trayectorialv2lvl3);
        clearInterval(Reanudar_trayectorialv3lvl3);
        clearInterval(Reanudar_trayectorialv4lvl3);

        // Pausar música de fondo
        if (musicaFondo) musicaFondo.pause();

    } else {
        // --- ESTADO: REANUDAR ---
        juegoPausadolv3 = false;
        if (btnPausa) btnPausa.innerHTML = "PAUSA";

        // Reanudar temporizador
        Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000);

        // Reanudar trayectorias de los meteoritos
        Reanudar_trayectorialv3 = setInterval(Metiorito_Direccionlvl3, 1900);
        Reanudar_trayectorialv2lvl3 = setInterval(Metiorito_Direccion2lvl3, 2100);
        Reanudar_trayectorialv3lvl3 = setInterval(Metiorito_Direccion3lvl3, 2300);
        Reanudar_trayectorialv4lvl3 = setInterval(Metiorito_Direccion4lvl3, 1800);

        // Reanudar música de fondo
        if (musicaFondo) musicaFondo.play();
    }
}
// ========================================================
// MOVIMIENTO DE LA NAVE CON EL MOUSE (NIVEL 3)
// ========================================================
document.addEventListener('mousemove', function(evento) {
    var nave = document.getElementById("Contenedor_Nave_Lvl3");
    
    if (nave) {
        var contenedorJuego = nave.offsetParent || document.body;
        var rect = contenedorJuego.getBoundingClientRect();
        
        var posX = evento.clientX - rect.left - (nave.offsetWidth / 2);
        var posY = evento.clientY - rect.top - (nave.offsetHeight / 2);
        
        nave.style.left = posX + "px";
        nave.style.top = posY + "px";
    }
});