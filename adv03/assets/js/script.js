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


    //  funcao de data 3 dias atrás 
function getThreeDaysAgo() {
    var date = new Date();
    date.setDate(date.getDate() - 3);

    var day = date.getDate().toString().padStart(2, "0");
    var days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var dayName = days[date.getDay()];

    var month = date.getMonth();
    // var monthsArray = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    // var monthName = monthsArray[month];

    var year = date.getFullYear();
    var currentDay = `|  ${day}/${month}/${year}  |`;

    return currentDay;
}

function updateCurrentDay() {
    var today = document.getElementById('today');
    var currentDay = getThreeDaysAgo();
    if (today) {
        today.textContent = currentDay
    };
}
    updateCurrentDay();


});
