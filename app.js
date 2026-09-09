const productos = [
  // --- HOMBRE ---
  { id: 1, nombre: "Hoodie Oversize 'Urban21' Heavy Duty", genero: "hombre", categoria: "poleras", precio: 159.00, talla: "M, L, XL", imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80" },
  { id: 2, nombre: "Pantalón Cargo Black Utility 6-Pockets", genero: "hombre", categoria: "pantalones", precio: 189.00, talla: "30, 32, 34", imagen: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=400&q=80" },
  { id: 3, nombre: "Casaca Bomber Cyber Tactical", genero: "hombre", categoria: "casacas", precio: 249.00, talla: "M, L", imagen: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=400&q=80" },
  { id: 4, nombre: "Polo Boxy Fit 'Acid Wash Black'", genero: "hombre", categoria: "polos", precio: 89.00, talla: "S, M, L, XL", imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80" },
  { id: 5, nombre: "Jogger Techwear Reflex Strap", genero: "hombre", categoria: "pantalones", precio: 169.00, talla: "S, M, L", imagen: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=400&q=80" },
  { id: 6, nombre: "Casaca Puffer Over-SubZero", genero: "hombre", categoria: "casacas", precio: 289.00, talla: "M, L, XL", imagen: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=400&q=80" },
  { id: 7, nombre: "Polo Heavy Cotton Graphic 'Glitch'", genero: "hombre", categoria: "polos", precio: 95.00, talla: "M, L", imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80" },
  { id: 8, nombre: "Jeans Baggy Skate Fit Vintage", genero: "hombre", categoria: "pantalones", precio: 199.00, talla: "30, 32, 34, 36", imagen: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80" },

  // --- MUJER ---
  { id: 9, nombre: "Crop Hoodie Cyber Pink Street", genero: "mujer", categoria: "poleras", precio: 149.00, talla: "XS, S, M", imagen: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&q=80" },
  { id: 10, nombre: "Pantalón Wide Leg Parachute Beige", genero: "mujer", categoria: "pantalones", precio: 179.00, talla: "26, 28, 30", imagen: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80" },
  { id: 11, nombre: "Casaca Varsity Oversize Leather Sleeve", genero: "mujer", categoria: "casacas", precio: 269.00, talla: "S, M", imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80" },
  { id: 12, nombre: "Top Ribbed Tactical Harness", genero: "mujer", categoria: "polos", precio: 75.00, talla: "XS, S, M", imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" },
  { id: 13, nombre: "Hoodie Zip-Up Gothic Cross", genero: "mujer", categoria: "poleras", precio: 169.00, talla: "S, M, L", imagen: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=400&q=80" },
  { id: 14, nombre: "Pantalón Cargo Low-Rise Dark Grey", genero: "mujer", categoria: "pantalones", precio: 185.00, talla: "26, 28, 30", imagen: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80" },
  { id: 15, nombre: "Polo Baby Tee 2000s Graphic", genero: "mujer", categoria: "polos", precio: 69.00, talla: "XS, S, M", imagen: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80" },
  { id: 16, nombre: "Chaqueta Denim Custom Ripped", genero: "mujer", categoria: "casacas", precio: 210.00, talla: "S, M, L", imagen: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=400&q=80" },

  // --- UNISEX ---
  { id: 17, nombre: "Polera Fleece Cream Essential", genero: "unisex", categoria: "poleras", precio: 145.00, talla: "S, M, L, XL", imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80" },
  { id: 18, nombre: "Polo Oversize Neutral Stone Wash", genero: "unisex", categoria: "polos", precio: 85.00, talla: "S, M, L, XL", imagen: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80" },
  { id: 19, nombre: "Casaca Cortaviento Waterproof Tech", genero: "unisex", categoria: "casacas", precio: 229.00, talla: "S, M, L", imagen: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80" },
  { id: 20, nombre: "Pantalón Trackpant Retro Stripes", genero: "unisex", categoria: "pantalones", precio: 155.00, talla: "S, M, L, XL", imagen: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=400&q=80" },
  { id: 21, nombre: "Hoodie Tie-Dye Dark Obsidian", genero: "unisex", categoria: "poleras", precio: 175.00, talla: "M, L, XL", imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80" },
  { id: 22, nombre: "Polera Crewneck Minimalist U21", genero: "unisex", categoria: "poleras", precio: 135.00, talla: "S, M, L", imagen: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=400&q=80" },

  // --- ZAPATILLAS ---
  { id: 23, nombre: "Zapatillas Urban Runner X Red/Black", genero: "unisex", categoria: "zapatillas", precio: 299.00, talla: "38 - 43", imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80" },
  { id: 24, nombre: "Zapatillas High Platform Dark Vibe", genero: "mujer", categoria: "zapatillas", precio: 329.00, talla: "36 - 39", imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80" },
  { id: 25, nombre: "Sneakers Retro Chunky White", genero: "unisex", categoria: "zapatillas", precio: 319.00, talla: "37 - 42", imagen: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=400&q=80" },
  { id: 26, nombre: "Zapatillas Skate Low Black Suede", genero: "hombre", categoria: "zapatillas", precio: 279.00, talla: "39 - 44", imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80" },
  { id: 27, nombre: "High Top Tactical Boots Street", genero: "hombre", categoria: "zapatillas", precio: 359.00, talla: "40 - 44", imagen: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80" },
  { id: 28, nombre: "Sneakers Futuristas Blade Sole", genero: "unisex", categoria: "zapatillas", precio: 389.00, talla: "38 - 43", imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=400&q=80" },

  // --- ACCESORIOS ---
  { id: 29, nombre: "Gorro Bucket Cyberpunk Reflectivo", genero: "unisex", categoria: "accesorios", precio: 59.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=400&q=80" },
  { id: 30, nombre: "Cadena Industrial Silver Heavy Chain", genero: "unisex", categoria: "accesorios", precio: 49.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" },
  { id: 31, nombre: "Mochila Tac-Chest Bag Black", genero: "unisex", categoria: "accesorios", precio: 119.00, talla: "Ajustable", imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" },
  { id: 32, nombre: "Lentes de Sol Matrix Oval Black", genero: "unisex", categoria: "accesorios", precio: 79.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80" },
  { id: 33, nombre: "Cinturón de Lona Tactical Buckle", genero: "unisex", categoria: "accesorios", precio: 39.00, talla: "Ajustable", imagen: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=400&q=80" },
  { id: 34, nombre: "Beanie Slouchy Dark Grey", genero: "unisex", categoria: "accesorios", precio: 45.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=400&q=80" },

  // --- PRENDAS ADICIONALES ---
  { id: 35, nombre: "Vestido Streetwear Cut-Out Black", genero: "mujer", categoria: "polos", precio: 129.00, talla: "S, M", imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" },
  { id: 36, nombre: "Polera Oversize Graphic Japanese Print", genero: "hombre", categoria: "poleras", precio: 165.00, talla: "L, XL", imagen: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&q=80" },
  { id: 37, nombre: "Pantalón Shorts Cargo Combat", genero: "hombre", categoria: "pantalones", precio: 125.00, talla: "30, 32, 34", imagen: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=400&q=80" },
  { id: 38, nombre: "Casaca Windbreaker Neon Accents", genero: "mujer", categoria: "casacas", precio: 219.00, talla: "S, M", imagen: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=400&q=80" },
  { id: 39, nombre: "Media Canillera Flame Design (3-Pack)", genero: "unisex", categoria: "accesorios", precio: 35.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=400&q=80" },
  { id: 40, nombre: "Bolsa Tote Bag Canvas Graphic U21", genero: "unisex", categoria: "accesorios", precio: 45.00, talla: "Única", imagen: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" }
];

document.addEventListener('DOMContentLoaded', () => {

  let carrito = JSON.parse(localStorage.getItem('carrito_u21')) || [];
  let usuario = localStorage.getItem('usuario_u21') || null;

  const btnLoginNav = document.getElementById('boton-login-nav');
  const saludoUsuario = document.getElementById('saludo-usuario');
  const btnCerrarSesion = document.getElementById('boton-cerrar-sesion');
  const contadorCarrito = document.getElementById('contador-carrito');
  const modalCarrito = document.getElementById('modal-carrito');
  const btnCarrito = document.getElementById('boton-carrito');
  const btnCerrarCarrito = document.getElementById('cerrar-carrito');
  const elementosCarrito = document.getElementById('elementos-carrito');
  const totalCarrito = document.getElementById('total-carrito');
  const btnCheckout = document.getElementById('boton-checkout');

  function actualizarEstadoUsuario() {
    if (usuario) {
      if (btnLoginNav) btnLoginNav.classList.add('oculto');
      saludoUsuario.textContent = `Hola, @${usuario}`;
      btnCerrarSesion.classList.remove('oculto');
    } else {
      if (btnLoginNav) btnLoginNav.classList.remove('oculto');
      saludoUsuario.textContent = '';
      btnCerrarSesion.classList.add('oculto');
    }
  }

  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', () => {
      localStorage.removeItem('usuario_u21');
      usuario = null;
      actualizarEstadoUsuario();
    });
  }

  actualizarEstadoUsuario();

  function actualizarCarritoUI() {
    localStorage.setItem('carrito_u21', JSON.stringify(carrito));
    contadorCarrito.textContent = carrito.length;
    elementosCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
      total += item.precio;
      const div = document.createElement('div');
      div.className = 'item-carrito';
      div.innerHTML = `
        <div>
          <strong>${item.nombre}</strong><br>
          <small>Talla: ${item.talla}</small>
        </div>
        <span>S/ ${item.precio.toFixed(2)}</span>
        <button onclick="eliminarDelCarrito(${index})">✕</button>
      `;
      elementosCarrito.appendChild(div);
    });

    totalCarrito.textContent = total.toFixed(2);
  }

  window.agregarAlCarrito = (id) => {
    const prod = productos.find(p => p.id === id);
    carrito.push(prod);
    actualizarCarritoUI();
    modalCarrito.style.display = 'block';
  };

  window.eliminarDelCarrito = (index) => {
    carrito.splice(index, 1);
    actualizarCarritoUI();
  };

  actualizarCarritoUI();

  if (btnCarrito && modalCarrito && btnCerrarCarrito) {
    btnCarrito.addEventListener('click', () => modalCarrito.style.display = 'block');
    btnCerrarCarrito.addEventListener('click', () => modalCarrito.style.display = 'none');
  }

  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      if (carrito.length === 0) {
        alert('Tu carrito está vacío.');
        return;
      }
      if (!usuario) {
        alert('Debes iniciar sesión para completar tu compra.');
        window.location.href = 'login.html';
        return;
      }
      alert(`¡Compra procesada con éxito! Gracias por tu pedido, @${usuario}. Recibirás la confirmación de ModaUrban21.`);
      carrito = [];
      actualizarCarritoUI();
      modalCarrito.style.display = 'none';
    });
  }

  // --- FILTRADO Y BÚSQUEDA ---
  const rejillaCatalogo = document.getElementById('rejilla-catalogo');
  const inputBusqueda = document.getElementById('input-busqueda');

  if (rejillaCatalogo) {
    let generoSeleccionado = 'todos';
    let categoriaSeleccionada = 'todos';
    let textoBusqueda = '';

    function aplicarFiltros() {
      rejillaCatalogo.innerHTML = '';

      const resultados = productos.filter(p => {
        const coincideGenero = (generoSeleccionado === 'todos') || (p.genero === generoSeleccionado) || (p.genero === 'unisex');
        const coincideCategoria = (categoriaSeleccionada === 'todos') || (p.categoria === categoriaSeleccionada);
        const coincideBusqueda = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());

        return coincideGenero && coincideCategoria && coincideBusqueda;
      });

      if (resultados.length === 0) {
        rejillaCatalogo.innerHTML = `<p class="sin-resultados">No se encontraron productos que coincidan con los filtros seleccionados.</p>`;
        return;
      }

      resultados.forEach(prod => {
        rejillaCatalogo.appendChild(crearTarjetaProducto(prod));
      });
    }

    document.querySelectorAll('.boton-genero').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.boton-genero').forEach(b => b.classList.remove('activo'));
        e.target.classList.add('activo');
        generoSeleccionado = e.target.dataset.genero;
        aplicarFiltros();
      });
    });

    document.querySelectorAll('.boton-filtro').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.boton-filtro').forEach(b => b.classList.remove('activo'));
        e.target.classList.add('activo');
        categoriaSeleccionada = e.target.dataset.categoria;
        aplicarFiltros();
      });
    });

    if (inputBusqueda) {
      inputBusqueda.addEventListener('input', (e) => {
        textoBusqueda = e.target.value.trim();
        aplicarFiltros();
      });
    }

    aplicarFiltros();
  }

  // Render destacados en Inicio
  const rejillaDestacados = document.getElementById('rejilla-destacados');
  if (rejillaDestacados) {
    productos.slice(0, 4).forEach(prod => {
      rejillaDestacados.appendChild(crearTarjetaProducto(prod));
    });
  }

  function crearTarjetaProducto(prod) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto tarj-animada';
    tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <span class="etiqueta-genero">${prod.genero.toUpperCase()}</span>
      <h3>${prod.nombre}</h3>
      <p class="talla-producto">Tallas: ${prod.talla}</p>
      <p class="precio-producto">S/ ${prod.precio.toFixed(2)}</p>
      <button class="boton boton-primario boton-bloque boton-efecto" onclick="agregarAlCarrito(${prod.id})">Añadir al Carrito</button>
    `;
    return tarjeta;
  }

  // --- NAVEGACIÓN Y VISTAS DE LOGIN ---
  const vistaLogin = document.getElementById('vista-login');
  const vistaRegistro = document.getElementById('vista-registro');
  const vistaRecuperar = document.getElementById('vista-recuperar');
  const mensajeLoginPagina = document.getElementById('mensaje-login-pagina');

  const btnOlvide = document.getElementById('enlace-olvide');
  const btnRegistro = document.getElementById('enlace-registro');
  const btnVolver1 = document.getElementById('enlace-volver-login-1');
  const btnVolver2 = document.getElementById('enlace-volver-login-2');

  function limpiarVistas() {
    if (vistaLogin) {
      vistaLogin.classList.add('oculto');
      vistaLogin.classList.remove('animar-fade');
    }
    if (vistaRegistro) {
      vistaRegistro.classList.add('oculto');
      vistaRegistro.classList.remove('animar-fade');
    }
    if (vistaRecuperar) {
      vistaRecuperar.classList.add('oculto');
      vistaRecuperar.classList.remove('animar-fade');
    }
    if (mensajeLoginPagina) mensajeLoginPagina.textContent = '';
  }

  function mostrarVista(vista) {
    limpiarVistas();
    if (vista) {
      vista.classList.remove('oculto');
      void vista.offsetWidth;
      vista.classList.add('animar-fade');
    }
  }

  if (btnRegistro) {
    btnRegistro.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarVista(vistaRegistro);
    });
  }

  if (btnOlvide) {
    btnOlvide.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarVista(vistaRecuperar);
    });
  }

  if (btnVolver1) {
    btnVolver1.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarVista(vistaLogin);
    });
  }

  if (btnVolver2) {
    btnVolver2.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarVista(vistaLogin);
    });
  }

  // Iniciar Sesión
  const formLoginPagina = document.getElementById('formulario-login-pagina');
  if (formLoginPagina) {
    formLoginPagina.addEventListener('submit', (e) => {
      e.preventDefault();
      const userVal = document.getElementById('usuario').value.trim();

      if (userVal) {
        localStorage.setItem('usuario_u21', userVal);
        mensajeLoginPagina.style.color = '#10b981';
        mensajeLoginPagina.textContent = `⚡ Bienvenido @${userVal}. Redirigiendo al catálogo...`;
        
        setTimeout(() => {
          window.location.href = 'catalogo.html';
        }, 1000);
      }
    });
  }

  // Registro Completo
  const formReg = document.getElementById('formulario-registro-pagina');
  if (formReg) {
    formReg.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const apodo = document.getElementById('reg-apodo').value.trim();
      const clave = document.getElementById('reg-clave').value;
      const confirmar = document.getElementById('reg-confirmar').value;

      if (clave !== confirmar) {
        mensajeLoginPagina.style.color = '#ef4444';
        mensajeLoginPagina.textContent = '❌ Las contraseñas no coinciden.';
        return;
      }

      if (clave.length < 8) {
        mensajeLoginPagina.style.color = '#ef4444';
        mensajeLoginPagina.textContent = '⚠️ La contraseña debe tener al menos 8 caracteres.';
        return;
      }

      localStorage.setItem('usuario_u21', apodo);
      mensajeLoginPagina.style.color = '#10b981';
      mensajeLoginPagina.textContent = `⚡ ¡Registro completado! Bienvenido @${apodo}. Redirigiendo...`;

      setTimeout(() => {
        window.location.href = 'catalogo.html';
      }, 1200);
    });
  }

  // Recuperar
  const formRec = document.getElementById('formulario-recuperar-pagina');
  if (formRec) {
    formRec.addEventListener('submit', (e) => {
      e.preventDefault();
      mensajeLoginPagina.style.color = '#10b981';
      mensajeLoginPagina.textContent = '📩 Instrucciones enviadas a tu correo electrónico.';
    });
  }

});