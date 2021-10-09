// Target para el observer
const elDocument = document.documentElement;
// Configuracion del observer:
const config = {
    childList: true,
    subtree: true
};

// f para inyectar color blanco al texto generado dinamicamente
function modifyIframeTextColor() {
    const iFrames = document.querySelectorAll("iframe");
    iFrames.forEach(iFrame => {
        if (iFrame.hasAttribute("srcdoc")) {
            iFrame.srcdoc += "<style>*{--common-text:#f1f1f1;--ps-title:#f1f1f1;}</style>";
        }
    });
};

// Instancia de observer
const iFramesObserver = new MutationObserver(function (mutations) {
        mutations.forEach(mutation => {
            if (mutation.addedNodes[0]) {
                const nodeList = mutation.addedNodes[0].childNodes;
                nodeList.forEach(node => {
                    if (node.className === "basic-block-content") {
                        modifyIframeTextColor();
                    }
                })
            }
        });
});

// Nodos a observar e
// Invocaciones del observer:
if (elDocument) {
    iFramesObserver.observe(elDocument, config);
};

// Posteriormente, puede detener la observacion
/* iFramesObserver.disconnect();
layoutObserver.disconnect(); */
