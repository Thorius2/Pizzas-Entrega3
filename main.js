const pizzas = [

    {
        id: 1,
        nombre: "Muzzarela",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Aceitunas"],
        precio: 500,
        imagen: "pizza-muzarella.png",
    },
    
    {
        id: 2,
        nombre: "Cancha",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Orégano", "Aceitunas"],
        precio: 450,
        imagen: "m4Ae6PADduDcJmYLp-1200-1200.png",
    },
    
    {
        id: 3,
        nombre: "Jamón",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Aceitunas"],
        precio: 700,
        imagen: "Pizza-Jamon-Crudo-459x300.png"
    },
    
    {
        id: 4,
        nombre: "Jamón y Morrón",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Morrón", "Aceitunas"],
        precio: 800,
        imagen: "jamon-morron-frog-2.png"
    },
    
    {
        id: 5,
        nombre: "Jamón y Rúcula",
        ingredientes: ["Masa de Pizza", "Salsa de Tomate", "Muzzarela", "Jamon", "Rúcula", "Aceitunas"],
        precio: 800,
        imagen: "pizza-rucula.png",
    },
    
    {
        id: 6,
        nombre: "Fugazzeta",
        ingredientes: ["Masa de Pizza", "Muzzarela", "Jamon", "Cebolla"],
        precio: 1000,
        imagen: "Fugazzeta.png",
    },
    
];
    
const idPizza = document.getElementById("numeroPizza");
const qPizza = document.getElementById("cantidadPizzas");
const pedirPizza = document.querySelector(".pedirPizza");
const cardContainer = document.querySelector(".cardContainer");
const deleteButton = document.querySelector(".delete-btn");

//Pisa lo que existe en el LS con la nueva información, en caso de que se agreguen nuevos estilos de Pizza
const saveToLocalStorage = () => {
    localStorage.setItem("Pizzas", JSON.stringify(pizzas));
};

//Se ejecuta antes de guardar la variable de listaPizzas, así usa el listado completo
saveToLocalStorage();

//Obtiene el listado actualizado de las Pizzas
let listaPizzas = localStorage.getItem("Pizzas")

//Agrega la información al inner HTML, para que se muestre la card
const renderPizza = (pizza) => {

    const {id, nombre, ingredientes, precio, imagen} = pizza;

    return `<div class="cardPizza">
                <h2 class="nombrePizza">Pizza de ${nombre}</h2>
                <div class="cardDataContainer">
                    <div class="datosPizza"> 
                        <div class="ingredientesPizza">
                        <h4>Ingredientes:</h4>
                        <ul class="ingredientesPizza"> ${addIngredientes(ingredientes)}</ul>
                        </div>
                    <h4 class="cantidadPizza">Cantidad: ${qPizza.value} u.</h4>
                    <h4 class="precioPizza">Precio: $${precio} c/u</h4>
                    </div>
                    <div class="img-container">
                        <img src=pizzas-png/${imagen} alt=${nombre} - img>
                    </div>
                </div>
                <div class="precioTotal">
                    <h3>Precio Total: $${calcularTotal(precio)}</h3>
                </div>
            </div>`
}

// Agrega la pizza que deseamos, luego de validar que todo esté correcto
const addPizza = (e) => {
    e.preventDefault();

    const pizzaElegida = extraerPizza(idPizza.value);

    if (isValidForm()) {
        const pizzaNueva = renderPizza(pizzaElegida);
        cardContainer.innerHTML = pizzaNueva
        addClassHidden("show");
    }
}

const init = () => {
    pedirPizza.addEventListener("submit", addPizza);
    deleteButton.addEventListener("click", borrarPizza);
    addClassHidden("hide");
};

init();
