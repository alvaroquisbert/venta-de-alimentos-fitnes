
 {
    
    let baseDeDatos = [
        {
            id:1,
            nombre: 'multivitaminico marca on',
            precio: 85,
            imagen: src="imghombres/1.jpg" 
        },
        {
            id:2,
            nombre: 'aminoacido',
            precio: 70,
            imagen: src="imghombres/2.jpg" 
        },
        {
            id:3,
            nombre: 'suplemento',
            precio: 34,
            imagen: src="imghombres/3.jpg"
        },
        {
            id:4,
            nombre: 'suplemento gym',
            precio: 100,
            imagen: src="imghombres/4.jpg" },
        {
            id:5,
            nombre: 'vitamina',
            precio: 60,
            imagen: src="imghombres/5.jpg" 
        },
        {
            id:6,
            nombre: 'Nutricion pro hmb',
            precio:100,
            imagen: src="imghombres/6.jpg" 
        },
        {
            id:7,
            nombre: 'optimo nutricional',
            precio: 70,
            imagen: src="imghombres/7.jpg" 
        },
        {
            id:8,
            nombre: 'ISO 100 hidrolyzada ',
            precio: 80,
            imagen: src="imghombres/8.jpg" },
        {
            id:9,
            nombre: 'Dematize Nutrition',
            precio: 220,
            imagen: src="imghombres/9.jpg"  
        },
        {
            id:10,
            nombre: 'Nitro tech',
            precio: 45,
            imagen: src="imghombres/10.jpg" 
        },
        {
            id:11,
            nombre: 'nitro Tech whey gold',
            precio: 90,
            imagen: src="imghombres/11.jpg"  
        },
        {
            id:12,
            nombre: 'BSN Syntha -6 chocolate ',
            precio: 110,
            imagen: src="imghombres/12.jpg"  
        },
     

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

 
    function renderItems() {
        for(let info of baseDeDatos) {
           
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
          
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
           
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['imagen']);
           
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info['precio'] + 'Bs';
         
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', añadirCarrito);
          
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function añadirCarrito () {
        
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
       
        $carrito.textContent = '';
       
        let carritoSinDuplicados = [...new Set(carrito)];
       
        carritoSinDuplicados.forEach(function (item, indice) {
           
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
           
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} = ${miItem[0]['precio']} Bs`;
           
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
           
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
        
        let id = this.getAttribute('item');
       
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        
        renderizarCarrito();
        
        calcularTotal();
    }

    function calcularTotal() {
        
        total = 0;
        
        for (let item of carrito) {
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        
        let totalDosDecimales = total.toFixed(2);
        
        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        calcularTotal();
    }
    $botonVaciar.addEventListener('click', vaciarCarrito);

    renderItems();
} 

function convertir(){
    medida=document.getElementById("medida");
    categoria=document.getElementById("categoria");
    medida=medida.value;
    categoria=categoria.value;
    salida='';
    switch(categoria){
        case '1':{
            salida=(medida*0.14).toFixed(2)+'Dolares';
        }
        break;
        case '2':{
            salida=(medida*0.13).toFixed(2)+'Euros';
        }
        break;
        case '3':{
            salida=(medida*0.77).toFixed(2)+'Reales';
        }
        break;
    }
    transformacion=document.getElementById("resultado");
    transformacion.innerHTML=salida;
}