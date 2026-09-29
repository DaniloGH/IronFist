// ===================================================
// IRON FIST - MÓDULO DE INTEGRACIÓN DE MEJORAS NIVEL 3
// Archivo: Ejecucion3.js
// ===================================================

// Estado global para comunicar Ejecucion3.js con JavaScript.js
window.Nivel3Mejoras = {
    nombreBossVisible: "ASTRO-DEVORADOR CELES",
    rutaBossImagen: "IMG/Megalodon.gif",
    vidaBossMax: 200,
    vidaBossActual: 200,
    faseBoss: 1,
    escudoActivo: false,
    escudoCooldown: false
};

if (typeof window.registrarImpactoNivel3 === 'function') {
    window.registrarImpactoNivel3(20, event.clientX, event.clientY);
}
if (window.Nivel3Mejoras && window.Nivel3Mejoras.escudoActivo) {
    console.log("¡Ataque bloqueado por el escudo!");
    return; // Previene el daño
}

// Carga de sonidos del proyecto
const audioImpactoMejora = new Audio('Punto2.mp3');
const audioVictoriaMejora = new Audio('Mensaje_Ganaste.mp3');

// Inyección de elementos visuales al cargar el documento
(function iniciarIntegracionNivel3() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', prepararHUDNivel3);
    } else {
        prepararHUDNivel3();
    }
})();

function prepararHUDNivel3() {
    console.log("Integrando mejoras del Nivel 3 para:", window.Nivel3Mejoras.nombreBossVisible);

    // 1. MEJORA: Interface (HUD) Superior para el Jefe Final
    let hudBoss = document.getElementById('hud-boss-nivel3');
    if (!hudBoss) {
        hudBoss = document.createElement('div');
        hudBoss.id = 'hud-boss-nivel3';
        hudBoss.style.cssText = `
            position: fixed;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(15, 0, 25, 0.88);
            border: 2px solid #ff0055;
            padding: 8px 18px;
            border-radius: 8px;
            color: #ffffff;
            text-align: center;
            font-family: monospace;
            z-index: 10000;
            box-shadow: 0 0 15px rgba(255, 0, 85, 0.6);
        `;
        document.body.appendChild(hudBoss);
    }

    // 2. MEJORA: Botón de Habilidad Activa (Escudo Temporal)
    let btnEscudo = document.getElementById('btn-escudo-mejora');
    if (!btnEscudo) {
        btnEscudo = document.createElement('button');
        btnEscudo.id = 'btn-escudo-mejora';
        btnEscudo.innerText = '🛡️ ESCUDO [Tecla E]';
        btnEscudo.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #00e5ff;
            color: #000000;
            border: none;
            padding: 10px 16px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            z-index: 10000;
            box-shadow: 0 0 10px #00e5ff;
        `;
        btnEscudo.onclick = activarEscudoHabilidad;
        document.body.appendChild(btnEscudo);
    }

    // Escuchar la tecla 'E' para activar el escudo
    window.addEventListener('keydown', (e) => {
        if (e.key === 'e' || e.key === 'E') {
            activarEscudoHabilidad();
        }
    });

    actualizarHUDJefe();
}

// Actualiza el HUD en tiempo real
function actualizarHUDJefe() {
    const hud = document.getElementById('hud-boss-nivel3');
    if (!hud) return;

    const datos = window.Nivel3Mejoras;
    const porcentajeVida = Math.max(0, (datos.vidaBossActual / datos.vidaBossMax) * 100);
    const colorBarra = datos.faseBoss === 1 ? '#8a2be2' : '#ff0033';

    hud.innerHTML = `
        <div style="font-size: 14px; font-weight: bold; color: #ff3366; margin-bottom: 4px;">
            ¡ENEMIGO FINAL! ${datos.nombreBossVisible} (FASE ${datos.faseBoss})
        </div>
        <div style="width: 250px; background: #222; height: 14px; border-radius: 7px; overflow: hidden; margin: 0 auto; border: 1px solid #fff;">
            <div style="width: ${porcentajeVida}%; background: ${colorBarra}; height: 100%; transition: width 0.25s;"></div>
        </div>
        <div style="font-size: 11px; margin-top: 3px;">SALUD: ${datos.vidaBossActual} / ${datos.vidaBossMax}</div>
    `;
}

// Lógica de activación de la Habilidad de Escudo (Mejora 1)
function activarEscudoHabilidad() {
    const datos = window.Nivel3Mejoras;
    if (datos.escudoCooldown || datos.escudoActivo) return;

    datos.escudoActivo = true;
    datos.escudoCooldown = true;

    const btn = document.getElementById('btn-escudo-mejora');
    if (btn) btn.style.background = '#00ff66';

    // Resplandor cian para el jugador/nave
    const nave = document.querySelector('.player-ship') || document.querySelector('img[src*="Nave"]') || document.body;
    const filtroPrevio = nave.style.filter;
    nave.style.filter = 'drop-shadow(0px 0px 15px #00e5ff)';

    // Duración: 3 segundos
    setTimeout(() => {
        datos.escudoActivo = false;
        nave.style.filter = filtroPrevio || 'none';
        if (btn) btn.style.background = '#777777';

        // Cooldown: 6 segundos
        setTimeout(() => {
            datos.escudoCooldown = false;
            if (btn) btn.style.background = '#00e5ff';
        }, 6000);
    }, 3000);
}

// 3. MEJORA: Función para registrar el impacto de daño desde JavaScript.js
window.registrarImpactoNivel3 = function(danio, posX, posY) {
    const datos = window.Nivel3Mejoras;
    if (datos.vidaBossActual <= 0) return;

    datos.vidaBossActual -= danio;

    // Reprodicir audio de impacto (Mejora 8)
    audioImpactoMejora.currentTime = 0;
    audioImpactoMejora.play().catch(() => {});

    // Mostrar números flotantes de daño (Mejora 11)
    mostrarDanioFlotante(`-${danio}`, posX || (window.innerWidth / 2), posY || (window.innerHeight / 3));

    // Cambio a FASE 2 de Furia al bajar del 50% de HP (Mejora 3)
    if (datos.vidaBossActual <= (datos.vidaBossMax / 2) && datos.faseBoss === 1) {
        datos.faseBoss = 2;
    }

    actualizarHUDJefe();

    // Evento de Victoria Final
    if (datos.vidaBossActual <= 0) {
        audioVictoriaMejora.play().catch(() => {});
        alert("¡VICTORIA EN EL ESPACIO! Has derrotado al " + datos.nombreBossVisible);
    }
};

// Indicador flotante en pantalla (Mejora 11)
function mostrarDanioFlotante(texto, x, y) {
    const el = document.createElement('div');
    el.innerText = texto;
    el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        color: #ff0055;
        font-size: 22px;
        font-weight: bold;
        font-family: monospace;
        pointer-events: none;
        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        z-index: 10001;
    `;
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transform = 'translateY(-30px)';
        el.style.opacity = '0';
    }, 40);

    setTimeout(() => el.remove(), 550);
}