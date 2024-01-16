const anteriorBtn = document.querySelector("#atras-btn");
const siguiBtn = document.querySelector("#sigui-btn");
const libro = document.querySelector("#libro");
const portada = document.querySelector("#f1");
const pagina1 = document.querySelector("#p1");
const pagina2 = document.querySelector("#p2");
const pagina3 = document.querySelector("#p3");
const pagina4 = document.querySelector("#p4");
const clickCard = document.querySelector("#cuentos");
const clickCerrar = document.querySelector("#cerrar-popup");
const section = document.querySelector(".pop-up");


document.querySelectorAll('a[href^="#videos"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Desplaza suavemente hacia el objetivo
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#cuentos"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Desplaza suavemente hacia el objetivo
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    document.querySelectorAll('a[href^="#juegos"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Desplaza suavemente hacia el objetivo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// Event Listener


  




clickCard.addEventListener("click", function(event){
    const closestArticle = event.target.closest("article");
    if (closestArticle) {
        const clickArticleId = closestArticle.id;
        
        
    if(clickArticleId === "article-cuento-1"){   
        abrirPopUp();
       
        console.log(paginaActual);
        actualizarContenidoLibro('img/portada-libro1.png', 'img/sinopsis-libro1.png', 'img/pagina1-libro1.png', 'img/pagina2-libro1.png', 'img/pagina3-libro1.png', 'img/pagina4-libro1.png', 'img/consejos-ultimapag.png', 'img/ultimapagi.png');
    } else if (clickArticleId === "article-cuento-2"){
        abrirPopUp();
        
        actualizarContenidoLibro('img/portada-libro2.png', 'img/sinopsis-libro2.png', 'img/pagina1-libro2.png', 'img/pagina2-libro2.png', 'img/pagina3-libro2.png', 'img/pagina4-libro2.png', 'img/consejos-ultimapag.png', 'img/ultimapagi.png');
        console.log(paginaActual);
    } else if (clickArticleId === "article-cuento-3"){
        actualizarContenidoLibro('img/portada-libro3.png', 'img/sinopsis-libro3.png', 'img/pagina1-libro3.png', 'img/pagina2-libro3.png', 'img/pagina3-libro3.png', 'img/pagina4-libro3.png', 'img/consejos-ultimapag.png', 'img/ultimapagi.png');
        abrirPopUp();
        console.log(paginaActual);
    }

    
}

});


clickCerrar.addEventListener("click" , cerrarPopUp);
anteriorBtn.addEventListener("click" , volver);
siguiBtn.addEventListener("click", siguiente  );

// Funciones de libro
function actualizarContenidoLibro(portada, sinopsis, pagina1, pagina2, pagina3, pagina4, consejos, ultimapagi) {
    const f1 = document.querySelector("#f1 .content-frente");
    const f2 = document.querySelector("#f2 .content-frente");
    const f3 = document.querySelector("#f3 .content-frente");
    const f4 = document.querySelector("#f4 .content-frente");
    const atrasp1 = document.querySelector("#atras-p1 .content-atras");
    const atrasp2 = document.querySelector("#atras-p2 .content-atras");
    const atrasp3 = document.querySelector("#atras-p3 .content-atras");
    const atrasp4 = document.querySelector("#atras-p4 .content-atras");

    if (f1 && f2 && f3 && f4 && atrasp1 && atrasp2 && atrasp3 && atrasp4) {
        f1.innerHTML = `<img src="${portada}" alt="">`;
        atrasp1.innerHTML = `<img src="${sinopsis}" alt="">`;

        f2.innerHTML = `<img src="${pagina1}" alt="">`;
        atrasp2.innerHTML = `<img src="${pagina2}" alt="">`;

        f3.innerHTML = `<img src="${pagina3}" alt="">`;
        atrasp3.innerHTML = `<img src="${pagina4}" alt="">`;

        f4.innerHTML = `<img src="${consejos}" alt="">`;
        atrasp4.innerHTML = `<img src="${ultimapagi}" alt="">`;
    } else {
        console.error("Alguno de los elementos no se ha encontrado.");
    }
}



let paginaActual = 1;
let numDePagina = 4;
let paginaMaxima = numDePagina + 1;



function abrirPopUp(){
    section.style.display = "flex";
    section.style.position = "absolute";
    
}

function cerrarPopUp(){
    section.style.display = "none";
    section.style.position = "fixed";
    
}

function abrirLibro(){
    libro.style.transform = "translateX(50%)";
    anteriorBtn.style.transform = "translateX(-180px)";
    siguiBtn.style.transform = "translateX(180px)";
    clickCerrar.style.transform = "translateX(180px)";

    
   
}

function cerrarLibro(estadoInicial){
    if(estadoInicial){
        libro.style.transform = "translateX(0%)";

    } else{
        libro.style.transform = "translateX(100%)";
        
    
    }  

    anteriorBtn.style.transform = "translateX(0px)";
    siguiBtn.style.transform = "translateX(0px)";
    clickCerrar.style.transform = "translateX(0px)"; 
}


function siguiente(){
    if(paginaActual < paginaMaxima){
        switch(paginaActual){
            
            case 1:
                abrirLibro();
                pagina1.classList.add("pasar-pagina");
                pagina1.style.zIndex = 1;
                break;
            case 2:
                pagina2.classList.add("pasar-pagina");
                pagina2.style.zIndex = 2;
                break;
            case 3:
                pagina3.classList.add("pasar-pagina");
                pagina3.style.zIndex = 3;
                break;
            case 4:
                pagina4.classList.add("pasar-pagina");
                pagina4.style.zIndex = 4;
                cerrarLibro(false);
                break;
                
            default:
                throw new Error("Pagina desconocida");
        }
        paginaActual++;
        
    }
}

function volver(){
    if(paginaActual > 1){
        switch(paginaActual){
          case 2:
            cerrarLibro(true);
            pagina1.classList.remove("pasar-pagina");
            pagina1.style.zIndex = 4;
            break;
          case 3:
            pagina2.classList.remove("pasar-pagina");
            pagina2.style.zIndex = 3;
            break;
          case 4:
            pagina3.classList.remove("pasar-pagina");
            pagina3.style.zIndex = 2;
            break
          case 5:
            abrirLibro();
            pagina4.classList.remove("pasar-pagina");
            pagina4.style.zIndex = 1;
            break;

        default:
            throw new Error("Pagina desconocida");
        
        }
        paginaActual--;
        
    } 

}
