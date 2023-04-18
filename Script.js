// Función para registrar un nuevo usuario
function register() {
    // Obtener los valores de usuario y contraseña del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verificar que el usuario no esté vacío
    if (username == "") {
      alert("Por favor ingrese un nombre de usuario");
      return;
    }
    
    // Verificar que la contraseña no esté vacía
    if (password == "") {
      alert("Por favor ingrese una contraseña");
      return;
    }
    
    // Guardar los datos de usuario en el storage
    localStorage.setItem(username, password);
    
    // Limpiar los campos del formulario
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    
    // Mostrar un mensaje de éxito
    document.getElementById("message").innerHTML = "Usuario registrado correctamente";
  }
  
  // Función para iniciar sesión
  function login() {
    // Obtener los valores de usuario y contraseña del formulario
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    
    // Obtener la contraseña guardada del usuario
    var storedPassword = localStorage.getItem(username);
    
    // Verificar que la contraseña ingresada sea la misma que la guardada
    if (password == storedPassword) {
      // Mostrar un mensaje de éxito en la consola
      console.log("Inicio de sesión exitoso");
      
      // Limpiar los campos del formulario
      document.getElementById("loginUsername").value = "";
      document.getElementById("loginPassword").value = "";
      
      // Redirigir al usuario a la página principal
      window.location.href = "index.html";
    } else {
      // Mostrar un mensaje de error en la consola
      console.log("Nombre de usuario o contraseña incorrectos");
      
      // Limpiar el campo de la contraseña del formulario
      document.getElementById("loginPassword").value = "";
      
      // Mostrar un mensaje de error en la página
      document.getElementById("message").innerHTML = "Nombre de usuario o contraseña incorrectos";
    }
  }
  

 // Array de productos
var products = [
  {
      name: "Delineador mate liquido",
      image: "./img/super-matte-liquido-500x500.jpg",
      description: "Delineador liquido resistente al agua, de rápido secado y larga duración, posee una punta suave y firme que facilita realizar trazos uniformes y finos",
      price: 1000
  },
  {
      name: "Labial mate rojo",
      image: "./img/amanda-dalbjorn-t7WrWaewbtw-unsplash.jpg",
      description: "Labial mate rojo y ciruela profunda, no transferible, impermeable, a prueba de besos, antiadherente, no se agrieta ni seca tus labios",
      price: 2000
  },
  {
      name: "Kit de brochas",
      image: "./img/edz-norton-PEttXYw9hi8-unsplash.jpg",
      description: "Nuestro kit de brochas Green Edición contiene 15 brochas libres de crueldad animal (Cruelty-free) que cumplen con los más altos estándares",
      price: 3000
  },
  {
      name: "Serum",
      image: "./img/kadarius-seegars-Mxy5gokl8mE-unsplash.jpg",
      description: "Vitamina C: Antioxidante, ayuda a neutralizar los radicales libres que provocan el envejecimiento prematuro de la piel",
      price: 4000
  },
  {
      name: "Paleta de sombras",
      image: "./img/laura-chouette-i3KR4ZoXI9M-unsplash.jpg",
      description: "La paleta de Sombras de 4 tonos es perfecta para crear un maquillaje de ojos tonos nude",
      price: 5000
  },
  {
      name: "Kit cosmetiquera",
      image: "./img/laura-chouette-L0UsybxXiCs-unsplash.jpg",
      description: "Cosmetiquera que incluye crema y losión para viaje",
      price: 6000
  }
];

// Función para mostrar los productos en la página
function showProducts() {
  // Obtener el elemento #productList de la página
  var productList = document.getElementById("productList");
  
  // Vaciar el contenido actual del #productList (por si había productos de una búsqueda anterior)
  productList.innerHTML = "";
  
  // Recorrer el array de productos y agregarlos a la página
  for (var i = 0; i < products.length; i++) {
    // Crear un nuevo elemento div para el producto
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");
    
    // // Crear un nuevo elemento img para la imagen del producto
     var image = document.createElement("img");
     image.src = products[i].image;
     image.alt = products[i].name;
     productDiv.appendChild(image);
    
    // Crear un nuevo elemento h3 para el nombre del producto
    var name = document.createElement("h3");
    name.textContent = products[i].name;
    productDiv.appendChild(name);
    
    // Crear un nuevo elemento p para la descripción del producto
    var description = document.createElement("p");
    description.textContent = products[i].description;
    productDiv.appendChild(description);
    
    // Crear un nuevo elemento span para el precio del producto
    var price = document.createElement("span");
    price.textContent = "$" + products[i].price;
    productDiv.appendChild(price);
    
    // Crear un nuevo elemento button para agregar el producto al carrito
    var button = document.createElement("button");
    button.textContent = "Agregar al carrito";
    productDiv.appendChild(button);
    
    // Agregar el producto al #productList
    productList.appendChild(productDiv);
  }
}

// Cuando el usuario inicie sesión, mostrar la página principal de la tienda y los productos
function onLogin() {
  // Mostrar la página principal de la tienda
  document.getElementById("store").style.display = "block";
  
  // Mostrar los productos
  showProducts();
}

// // Llamar a onLogin() cuando el usuario inicie sesión correctamente
 function login() {
   // Obtener los valores de usuario y contraseña del formulario
   var username = document.getElementById("loginUsername").value;
   var password = document.getElementById("loginPassword").value;
  
   // Obtener la contraseña guardada del usuario
   var storedPassword = localStorage.getItem(username);
  
   // Verificar que la contraseña ingresada sea la misma que la guardada
   if (password == storedPassword) {
     // Mostrar un mensaje de éxito en la consola
     console.log("Inicio de sesión exitoso");
    
     // Limpiar los campos del formulario
     document.getElementById("loginUsername").value = "";
     document.getElementById("loginPassword").value = "";
    
     // Llamar a onLogin() para mostrar la página principal de la tienda y los productos
    onLogin();
  } else {
    
  }}


// Función para buscar productos
function search() {
  // Obtener el valor del campo de búsqueda
  var searchString = document.getElementById("searchBox").value.toLowerCase();
  
  // Obtener el elemento #productList de la página
  var productList = document.getElementById("productList");
  
  // Vaciar el contenido actual del #productList
  productList.innerHTML = "";
  
  // Recorrer el array de productos y agregar los productos que contengan la cadena de búsqueda
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchString) || products[i].description.toLowerCase().includes(searchString)) {
      // Crear un nuevo elemento div para el producto
      var productDiv = document.createElement("div");
      productDiv.classList.add("product");
      
      // Crear un nuevo elemento img para la imagen del producto
      var image = document.createElement("img");
      image.src = products[i].image;
      image.alt = products[i].name;
      productDiv.appendChild(image);
      
      // Crear un nuevo elemento h3 para el nombre del producto
      var name = document.createElement("h3");
      name.textContent = products[i].name;
      productDiv.appendChild(name);
      
      // Crear un nuevo elemento p para la descripción del producto
      var description = document.createElement("p");
      description.textContent = products[i].description;
      productDiv.appendChild(description);
      
      // Crear un nuevo elemento span para el precio del producto
      var price = document.createElement("span");
      price.textContent = "$" + products[i].price;
      productDiv.appendChild(price);
      
      // Crear un nuevo elemento button para agregar el producto al carrito
      var button = document.createElement("button");
      button.textContent = "Agregar al carrito";
      productDiv.appendChild(button);
      
      // Agregar el producto al #productList
      productList.appendChild(productDiv);
    }
  }
}





