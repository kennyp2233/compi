
// Función para mostrar u ocultar contenido adicional
function toggleContent(buttonId, contentId) {
    var button = document.getElementById(buttonId);
    var content = document.getElementById(contentId);

    if (button && content) {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            button.textContent = "Cerrar";
        } else {
            content.style.display = "none";
            button.textContent = "Leer más";
        }
    }
}

// Asocia la función a los botones correspondientes
document.getElementById("toggle-content-btn1").addEventListener("click", function () {
    toggleContent("toggle-content-btn1", "hidden-content1");
});

document.getElementById("toggle-content-btn2").addEventListener("click", function () {
    toggleContent("toggle-content-btn2", "hidden-content2");
});

document.getElementById("toggle-content-btn3").addEventListener("click", function () {
    toggleContent("toggle-content-btn3", "hidden-content3");
});

