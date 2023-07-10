const button = document.querySelector(".order-submit-btn");

const updateFormAction = (e) => {
    const form = document.getElementById("form-action");
    const emailInput = document.getElementById("emailInput");
    const nombreInput = document.querySelector('input[name="nombre"]');
    const comidaSelect = document.querySelector('select[name="comida"]');
    const cantidadSelect = document.querySelector('select[name="cantidad"]');
    const tarjetaInput = document.querySelector('input[name="tarjeta"]');
    e.preventDefault();

    if (nombreInput.value === '' || comidaSelect.value === 'f0' || cantidadSelect.value === 'o1' || tarjetaInput.value === '' || emailInput.value === '') {
        alert("Por favor, complete todos los campos");
        return;
    }

    alert("Compra éxitosa");
  }

button.addEventListener("click", updateFormAction);

