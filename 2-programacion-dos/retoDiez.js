function recibir() {
    const VALOR_TIEMPO = 8760;
    var año = document.getElementById("texto").value;
    totalAños = (año * VALOR_TIEMPO);
    document.getElementById("txt").innerHTML = totalAños;

}