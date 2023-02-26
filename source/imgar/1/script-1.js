document.getElementById("action").onclick = function () {
    if (document.getElementById("name").value ==="") {
        alert("Заполните поле имя");
    } 
    else if (document.getElementById("phone").value ==="") {
        alert("Заполните поле телефон");
    } 
    else if (document.getElementById("mail").value ==="") {
        alert("Заполните поле E-mail");
    } 
    else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время");
    }
}