document.getElementById("calcular").addEventListener("click", () => {
  const precio = parseFloat(document.getElementById("precio-vidrio").value.replace(",", "."));
  const base = parseFloat(document.getElementById("base-vidrio").value.replace(",", "."));
  const altura = parseFloat(document.getElementById("altura-vidrio").value.replace(",", "."));
  const resultado = document.getElementById("precio-final");

  if (isNaN(precio) || isNaN(base) || isNaN(altura)) {
    resultado.textContent = "⚠️ Ingrese valores válidos";
    resultado.style.color = "red";
    return;
  }

  const area = base * altura; // en m² directamente
  const total = precio * area;

  resultado.textContent = `$${total.toFixed(2)}`;
  resultado.style.color = "#ffcc00";
});
