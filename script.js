const formularioHTML = document.getElementById('formulario');

 function validarTitulo(titulo) {
  return titulo.length > 6;
}

function validaPrecio(precio) {
  return!isNaN(precio) && precio > 0;
}

function validarDescripcion(descripcion) {
  return descripcion.length > 100;
}

function validaStock(stock) {
  return!isNaN(stock) && stock > 0;
}

function validaCodigo(codigo) {
  return Boolean(codigo) && codigo.includes("#");
} 
 function obtenerValidacion(validar) {
  let dato = prompt(validar.mensaje);
  while (!validar.validacion(dato)) {
    dato = prompt(validar.error);
  }
  return dato;
}
 
const VALIDACION = {
  TITULO: {
    mensaje: "Ingrese un título",
    error: "El título debe tener al menos 6 caracteres",
    validacion: validarTitulo
  },
  PRECIO: {
    mensaje: "Ingrese un precio",
    error: "El precio debe ser un número",
    validacion: validaPrecio
  },
  DESCRIPCION: {
    mensaje: "Ingrese una descripción",
    error: "La descripción debe tener al menos 100 caracteres",
    validacion: validarDescripcion
  },
  STOCK: {
    mensaje: "Ingrese un stock",
    error: "El stock debe ser un número",
    validacion: validaStock
  },
  CODIGO: {
    mensaje: "Ingrese un código",
    error: "El código debe contener un # por delante",
    validacion: validaCodigo
  }
};
formularioHTML.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Se envió el formulario');
    const formulario = event.target;
    let errores = [];
  
for (const campo in VALIDACION) {
    const valor = formulario[campo.toLowerCase()].value;
    if (!VALIDACION[campo].validacion(valor)) {
    errores.push(VALIDACION[campo].error);
    }
    }
    
    if (errores.length > 0) {
    document.getElementById('error-text').innerText = errores.join('\n');
    } 
    else {
    console.log('Éxito');
    }
    });