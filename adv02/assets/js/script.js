document.addEventListener("DOMContentLoaded", function () {
    var aLinks = document.querySelectorAll('a');
    aLinks.forEach(function (element, index) {
        if (element.classList.contains("clickarea")) {
            let clickAreaValue = element.dataset.clickarea !== undefined 
                ? element.dataset.clickarea
                : element.textContent;
            
            clickAreaValue = clickAreaValue
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, "")
                .replace(/[^a-zA-Z\s]/g, "")
                .replace(/ /g, "")
                .toLowerCase() + index;
            
            // Usa a variável botao_link e mantém a lógica do separator
            let separator = botao_link.includes("?") ? "&" : "?";
            element.href = botao_link + separator + "click_area=" + clickAreaValue;
        }
    });
});
