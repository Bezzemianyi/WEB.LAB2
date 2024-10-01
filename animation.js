document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".fly-in-text");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }
});