Tiempolvl2 = 61 //VARIBLE DE INICIO TIEMPO
Puntajelvl2 = 0 //VARIABLE DE INICIO PUNTOS





//CONTENEDOR QUE CONTEIENE TOO EL JUEGO
//DE POR SI ESTA FUNCION NO SE EJECUTA HASTA QUE SE LA LLAMA, MAS ADELANTE LA LLAMAREMOS
//PARA QUE EL JUEGO INICIE UNA VEZ SE PRESIONE JUGAR
function JUEGOlvl2(){

    function Tiempo_Disminurlvl2(){ //FUNCION QUE REDUCE EL TIEMPO Y RESETEAL EL RESULTADO UNA VEZ LLEGUE A 0
        Tiempolvl2--;
        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2
        if(Tiempolvl2 == 0){
            Tiempolvl2 = 61
            Puntajelvl2 = 0
            alert("El tiempo se agotó, lo lamento, de seguro lo lograrás para la siguiente")} }

    
        Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000)

        //AÑADIMOS LA FUNCION AUMENTAR PUNTOS AL PASAR EL CURSOR SOBRE LOS METIORITOS
        document.getElementById("Meteioritolvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)
        document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Aumentar_Puntoslvl2)


        //FUNCION QUE UNICAMENTE AUMENTA PUNTOS Y RESETEA LAS VARIABLES AL LLEGAR A CIERTO LIMITE
        function Aumentar_Puntoslvl2(){
            Puntajelvl2++;
            document.getElementById("Puntajelvl2").innerHTML = Puntajelvl2 + " / 4"
            if(Puntajelvl2 == 2){
                Puntajelvl2 = 0 
                Tiempolvl2 = 61

                document.getElementById("Tiempolvl2").innerHTML = 60
                document.getElementById("Puntajelvl2").innerHTML = 0+"&nbsp;/&nbsp;"+34
                document.getElementById("Fondo_Ciberpunk").pause()
                document.getElementById("Triunfo").play()
                document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL)
                function Habilitar_Siguienten_LVL(){
                document.getElementById("NIVEL_01").style.display = "none"
                document.getElementById("NIVEL_02").style.display = "none"
                document.getElementById("NIVEL3").style.display = "block"}
                            
                function Ganaste_Pantallalvl2(){

                    clearInterval(Reanudar_trayectorialvl2)
                    clearTimeout(Activador_iniciallvl2)
                    clearInterval(Reanudar_trayectoria2lvl2)
                    clearTimeout(Activador_inicial2lvl2)
                    clearInterval(Reanudar_trayectoria3lvl2)
                    clearTimeout(Activador_inicial3lvl2) 
                    clearInterval(Restar_Tiempolvl2) 

                    document.getElementById("Meteioritolvl2").style.left = "-70%"
                    document.getElementById("Meteioritolvl2").style.transition = "0s"

                    document.getElementById("Meteiorito2lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito2lvl2").style.transition = "0s"
                    
                    document.getElementById("Meteiorito3lvl2").style.left = "-70%"
                    document.getElementById("Meteiorito3lvl2").style.transition = "0s"}

                     setInterval(Ganaste_Pantallalvl2, 1)


                document.getElementById("GanastePantallaLvL2").style.display = "flex"
                Swal.fire({
                    title : 'FELICIDADES POR SUPERAR <br> EL NIVEL <br><br> <img src="IMG/Check.png" width = "120px"><br>',
                    html: '¿VERDAD QUE FUE DIFÍCIL?. Prepárate para el siguiente nivel que las cosas van a empeorar. Agradecemos tu dedicación en pasar este nivel, esperemos que puedas seguir defendiendo la tierra de esa manera y mejores tu habilidad de reacción ',
                    icon: 'sucess',
                    confirmButtonText: 'QUIERO CONTINUAR',
                    width: '50%',
                    height: '80%',
                    timer: 100000,
                    
                    
                    timerProgressbar: true,
                    /*Funcion de cerrar la alerta*/
                    allowOutsideClick: true,
                    allowEscapeKey: false,
                    allowEnterkey: false,
                    stopKeydownPropagation: false,
                    });

                                }
                                     }


        //ESTA FUNCION DIRIGE AL PRIMER METIORITO 1 A LA TIERRA 
        function Metiorito_Direccionlvl2(){
            Distancia1lvl2 = 80
            Altura1lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteioritolvl2").style.left = Distancia1lvl2 + "%"
            document.getElementById("Meteioritolvl2").style.top = Altura1lvl2 + "px"}

            Activador_iniciallvl2 = setTimeout(Metiorito_Direccionlvl2, 3500)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectorialvl2 = setInterval(Metiorito_Direccionlvl2, 2030)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,4 SEGUNDOS


        //ESTA FUNCION DIRIGE AL PRIMER METIORITO 2 A LA TIERRA         
        function Metiorito_Direccion2lvl2(){
            Distancia2lvl2 = 80
            Altura2lvl2 = Math.round(Math.random()* 450)

            document.getElementById("Meteiorito2lvl2").style.left = Distancia2lvl2 + "%"
            document.getElementById("Meteiorito2lvl2").style.top = Altura2lvl2 + "px"}

            Activador_inicial2lvl2 = setTimeout(Metiorito_Direccion2lvl2, 3000)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria2lvl2 = setInterval(Metiorito_Direccion2lvl2, 2750)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,3 SEGUNDOS

            //ESTA FUNCION DIRIGE AL PRIMER METIORITO 3 A LA TIERRA
            function Metiorito_Direccion3lvl2(){
                Distancia3lvl2 = 80
                Altura3lvl2 = Math.round(Math.random()* 450)
    
                document.getElementById("Meteiorito3lvl2").style.left = Distancia3lvl2 + "%"
                document.getElementById("Meteiorito3lvl2").style.top = Altura3lvl2 + "px"}
    
            Activador_inicial3lvl2  = setTimeout(Metiorito_Direccion3lvl2, 2200)//PRIMERO VA A SER EJECUTADO A LOS DOS PRIMEROS SEGUNDOS
            Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2470)//LUEGO SE VA A LLAMAR A LOS METIORITOS CADA 2,3 SEGUNDOS
       


        //AQUI ADJUNTAMOS LA ACCION DE LA FUNCION EXPULZAR AL PASAR SOBRE EL METIORITO
        document.getElementById("Meteioritolvl2").addEventListener('mouseover', Explulsarlvl2)
        document.getElementById("Meteiorito2lvl2").addEventListener('mouseover', Explulsar2lvl2)
        document.getElementById("Meteiorito3lvl2").addEventListener('mouseover', Explulsar3lvl2)

        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 1 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsarlvl2 (){
            document.getElementById("Puntos_sound").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 450)
            document.getElementById("Meteioritolvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteioritolvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteioritolvl2").style.transition = "1.8s"}


        //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 2 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsar2lvl2 (){
            document.getElementById("Punto2").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 450)
            document.getElementById("Meteiorito2lvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteiorito2lvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteiorito2lvl2").style.transition = "1.8s"}

         //ESTA ES LA FUNCION QUE EXPULSA AL METEORITO 3 DE MANERA ALEATORIA FUERA DEL MAPA
        function Explulsar3lvl2 (){
            document.getElementById("Punto3").play()
            Distancialvl2 = "-500"
            Alturalvl2 = Math.round(Math.random()* 450)
            document.getElementById("Meteiorito3lvl2").style.left = Distancialvl2 + "px"
            document.getElementById("Meteiorito3lvl2").style.top = Alturalvl2 + "px"
            document.getElementById("Meteiorito3lvl2").style.transition = "1.8s"}




        
        //ESTA FUNCION SE ENCARGA DE ALERTARTE UNA VEZ EL METIORITO CRUZE LA LINEA CON UN PERDISTE
        //TAMBIEN RESETEA LOS VALORES Y LLEVA A LOS METIORITOS FUERA DEL MAPA DE MANERA INSTANTANEA
        function perdistelvl2 (){
            if((document.getElementById("Meteioritolvl2").offsetLeft > 630) ||
            (document.getElementById("Meteiorito2lvl2").offsetLeft > 630) ||
            (document.getElementById("Meteiorito3lvl2").offsetLeft > 630))
            
            {
                document.getElementById("Perdiste_sound").play()
            
                alert("YA ES DEMASIADO TARDE, LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE Y LO MEJOR ES ESPERAR LO PEOR")


                document.getElementById("Meteioritolvl2").style.left = "-70%"
                document.getElementById("Meteioritolvl2").style.transition = "0s"

                document.getElementById("Meteiorito2lvl2").style.left = "-70%"
                document.getElementById("Meteiorito2lvl2").style.transition = "0s"

                document.getElementById("Meteiorito3lvl2").style.left = "-70%"
                document.getElementById("Meteiorito3lvl2").style.transition = "0s"

                Tiempolvl2 = 61
                Puntajelvl2 = 0 }
        
            else {
                document.getElementById("Meteioritolvl2").style.transition = "2s"
                document.getElementById("Meteiorito2lvl2").style.transition = "2s"
                document.getElementById("Meteiorito3lvl2").style.transition = "2s"           
            } }

        setInterval(perdistelvl2, 1)//LE COLOCAMOS UNO PARA QUE SIEMPRE SE ESTE EJECUTANDO, DADO A 
        //QUE NO SABEMOS CUANDO EL METIORITO VA A SUPERAR EL LIMITE
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


// =========================================================
// PAUSA Y REANUDAR - NIVEL 2
// =========================================================
function DETENER_JUEGOlvl2() {
    // Escuchador para el botón de pausa del Nivel 2
    document.getElementById("Pauselvl2").addEventListener('click', PAUSElvl2);

    Activolvl2 = 1;

    function PAUSElvl2() {
        // Obtenemos el contenedor de texto del botón de pausa
        var textoPausa = document.getElementById("textoPausalvl2");

        if (Activolvl2 == 1) {
            // --- ENTRAMOS A ESTADO DE PAUSA ---

            if (textoPausa) {
                textoPausa.textContent = "REANUDAR";
            }

            document.getElementById("Pausa_Pantallalvl2").style.display = "table";
            document.getElementById("Fondo_Ciberpunk").pause();
            
            clearInterval(Restar_Tiempolvl2);
            document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;

            // Pausamos las trayectorias activas de los 3 meteoritos
            if (typeof Reanudar_trayectorialvl2 !== 'undefined') clearInterval(Reanudar_trayectorialvl2);
            if (typeof Reanudar_trayectoria2lvl2 !== 'undefined') clearInterval(Reanudar_trayectoria2lvl2);
            if (typeof Reanudar_trayectoria3lvl2 !== 'undefined') clearInterval(Reanudar_trayectoria3lvl2);

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
            Activolvl2 = 2;

        } else {
            // --- REANUDAMOS EL JUEGO ---

            if (textoPausa) {
                textoPausa.textContent = "PAUSAR";
            }

            clearInterval(Pusae_offflvl2);
            document.getElementById("Pausa_Pantallalvl2").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();

            function Tiempo_Disminurlvl2() {
                Tiempolvl2--;
                document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;
                if (Tiempolvl2 == 0) {
                    Tiempolvl2 = 61;
                    Puntajelvl2 = 0;
                    alert("Lo lamento perdiste");
                }
            }

            Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);

            // Reanudación de las posiciones de los meteoritos
            var met1 = document.getElementById("Meteioritolvl2");
            var met2 = document.getElementById("Meteiorito2lvl2");
            var met3 = document.getElementById("Meteiorito3lvl2");

            if (met1 && typeof Distancia1lvl2 !== 'undefined') {
                met1.style.left = Distancia1lvl2 + "%";
                met1.style.top = Altura1lvl2 + "px";
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

            // Reprogramación de las trayectorias de meteoritos
            function Metiorito_Direccionlvl2() {
                Distancia1lvl2 = 80;
                Altura1lvl2 = Math.round(Math.random() * 450);
                if (met1) {
                    met1.style.left = Distancia1lvl2 + "%";
                    met1.style.top = Altura1lvl2 + "px";
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
                Altura3lvl2 = Math.round(Math.random() * 350);
                if (met3) {
                    met3.style.left = Distancia3lvl2 + "%";
                    met3.style.top = Altura3lvl2 + "px";
                }
            }
            setTimeout(Metiorito_Direccion3lvl2, 1700);
            Reanudar_trayectoria3lvl2 = setInterval(Metiorito_Direccion3lvl2, 2570);

            Activolvl2 = 1;
        }
    }
}