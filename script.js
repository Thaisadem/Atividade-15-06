function valida_form() {
    if (document.getElementById("email").value.length < 3) {
        alert('Por favor, preencha o campo email');
        document.getElementById("email").focus();
        return false
    }
}