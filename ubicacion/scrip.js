
//lupa responsive
var contenedor__lupa = document.querySelector(".contenedor__lupa").addEventListener("click", mostrarLupa);
var ctn__lupa_responsive = document.querySelector(".ctn__lupa_responsive");
var input__mn = document.querySelector("#input__mn");
var ctn__x__lupa = document.querySelector(".ctn__x__lupa").addEventListener("click", ocultarLupa);

function mostrarLupa (){
   ctn__lupa_responsive.style.marginTop = "0";
   input__mn.focus();
   input__mn.style.top = "30%";
}

function ocultarLupa (){
  ctn__lupa_responsive.style.marginTop = "-100px";
  input__mn.style.top = "-10%";
}

//menu responsive

var contenedor__menu = document.querySelector(".contenedor__menu").addEventListener("click", mostrarMenu);
var ctn__x__mn = document.querySelector(".ctn__x__mn").addEventListener("click", ocultarMenu);
var ctn__menu = document.querySelector(".contenedor__de__opciones__barra__ne__navegacion");
var ctn__mn__a = document.querySelector(".ctn__mn__a");


function mostrarMenu (){
  ctn__menu.style.left = "0%";
  ctn__mn__a.style.left = "5%";
  ctn__mn__a.style.opacity = "1";
}



function ocultarMenu() {
    ctn__menu.style.left = "-60%";
    ctn__mn__a.style.left = "-50%";
    ctn__mn__a.style.opacity = "0";
}

//buscador de contenido

//ejecutando funciones



//traje todos mis elemtos a js

cover__ctn__search.addEventListener("click", ocultar__el__buscador)

cover__ctn__search =  document.getElementById("cover__ctn__search");
input__search =       document.getElementById("inputSearch").addEventListener("click", mostrar__buscador, "keyup", buscador__interno);
box__search =         document.getElementById("box__search");



//funcion para mostrar el buscador

document.getElementById("inputSearch").addEventListener("keyup", buscador__interno);

function mostrar__buscador(){
    box__search.style.display = "block"
    cover__ctn__search.style.display = "block";
 }
 
 function ocultar__el__buscador(){
    box__search.style.display = "none"
    cover__ctn__search.style.display = "none";
    input__search.value = "";

 }


//creando filtrado de busqueda



document.getElementById("inputSearch").addEventListener("keyup", buscador__interno);

function buscador__interno(){

  filter = inputSearch.value.toUpperCase();
  li = box__search.getElementsByTagName("li");

  //recorriendo elemntos
  for (i = 0; i < li.length; i++){

  a = li[i].getElementsByTagName("a")[0];
  textValue = a.textContent || a.innerText;

  if(textValue.toUpperCase().indexOf(filter) > -1){
    
    li[i].style.display = "";
    box__search.style.display = "block"


    if(inputSearch.value === ""){
        box__search.style.display = "none"
    }
  }else{
    li[i].style.display = "none";
  }
    
  }
}



    // flecha arriba

    buttonUp = document.getElementById("button-up");

    window.onscroll = function() {
             
          var scroll = document.documentElement.scrollTop;
    
          if (scroll > 1000){
            buttonUp.style.transform = "scale(1)"
          }else if(scroll < 1000){
            buttonUp.style.transform = "scale(0)"
          }
    }






