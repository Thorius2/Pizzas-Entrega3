const showError = (input, message) => {
    const campoForm = input.parentElement;
    const errorField = campoForm.querySelector("small");

    errorField.classList.remove("success");
    errorField.classList.add("error");

    errorField.textContent = message;
    addClassHidden("hide");
    cardContainer.innerHTML = "";

}

const showSuccess = (input) => {
    const campoForm = input.parentElement;
    const errorField = campoForm.querySelector("small");

    errorField.classList.add("success");
    errorField.classList.remove("error");

    errorField.textContent = "";
}

//Valida si el ID es encontrado en el listado de pizzas
const validarId = (idElegido) => {

    valid = false

    let id = +idElegido;

    const pizzaElegida = pizzas.filter(pizza => pizza['id'] === id)
    
    if (idElegido === "") {
        showError(idPizza, "Este campo no puede estar vacío. Por favor, ingrese un número del 1 al 6")
    } else if (pizzaElegida.length === 0) {
        showError(idPizza,"El número ingresado es inválido. Por favor, seleccione una pizza del 1 al 6")
    } else {
        showSuccess(idPizza)
        valid = true;
    }

    return valid;
}

//Valida si la cantidad está entre 1 y 10
const validarCantidad = (cantidad) => {
    valid = false;

    let cantidadElegida = +cantidad

    if (cantidadElegida <= 0) {
        showError(qPizza, "No puede ordenar una cantidad menor a 1 pizza.")
    } else if (cantidadElegida > 10) {
        showError(qPizza, "No puede pedir más de 10 pizzas en un solo pedido. Si desea más, por favor agregue un nuevo pedido.")
    } else {
        showSuccess(qPizza)
        valid = true;
    };

    return valid;

}

const isValidForm = () => {
    const idValid = validarId(idPizza.value);
    const qValid = validarCantidad(qPizza.value);

    return (idValid && qValid);
}

const calcularTotal = (precio) => {
    const cantidad = qPizza.value;
    const total =  cantidad * precio;
    return total; 
}

// Extrae el objeto del array, que coincida con el ID provisto
const extraerPizza = (idElegido) => {
    let id = +idElegido;
    const pizzaElegida = pizzas.filter(pizza => pizza['id'] === id).shift();
    return pizzaElegida;
}

// Agregar un LI por cada ingrediente de la Pizza, para que luego se muestre en la card

const addIngredientes = (ingredientes) => {

    let listadoIngredientes = ""

    ingredientes.forEach(ingrediente => {
        listadoIngredientes = listadoIngredientes + `<li>${ingrediente}</li>`
    });

    return listadoIngredientes;
}

const borrarPizza = () => {
    cardContainer.innerHTML = ""
    addClassHidden("hide");
}

const addClassHidden = (accion) => {
    if (accion === "hide") {
        deleteButton.classList.add("hidden")
        cardContainer.classList.add("hidden")
    } else {
        deleteButton.classList.remove("hidden")
        cardContainer.classList.remove("hidden")
    }
}