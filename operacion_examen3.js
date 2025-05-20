function total_a_pagar() {
    let horas = document.getElementById("horas").value;
    let precio = document.getElementById("auto").value;

    if (horas && precio) {
        let total = horas * precio;
        document.getElementById("total_pagar").textContent = `Total a pagar: $${total}`;
    }
}	