// Target para el observer
const elDocument = document.documentElement;

// f para inyectar color blanco al texto generado dinamicamente
function modifyIframeTextColor() {
    const iFrames = document.querySelectorAll("iframe");
    iFrames.forEach(iFrame => {
        if (iFrame.hasAttribute("srcdoc")) {
            iFrame.srcdoc += "<style>*{--common-text:#f1f1f1;--ps-title:#f1f1f1;}</style>";
            console.log("Inyected: iFrames Mod");
        }
    });
};

// Instancia de observer
const iFramesObserver = new MutationObserver(function (mutations) {
    if (mutations.length > 0) {
        modifyIframeTextColor()
    } else {
        return
    }
});

// Configuracion del observer:
const config = {
    childList: true,
    subtree: true
};

// Nodos a observar e
// Invocaciones del observer:
if (elDocument) {
    iFramesObserver.observe(elDocument, config);
};



// Posteriormente, puede detener la observacion
/* iFramesObserver.disconnect();
layoutObserver.disconnect(); */
