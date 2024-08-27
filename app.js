
function prepararDivTexto(){
    const divContenedorMuñeco = document.getElementById('div_Resultado_Encriptado')
    divContenedorMuñeco.style.backgroundImage="none";
    divContenedorMuñeco.style.display="flex";
    divContenedorMuñeco.style.justifyContent  ="Space-around";
    divContenedorMuñeco.style.alignItems = 'center';
    divContenedorMuñeco.style.padding  = '10px';
   
    return
}

function validarDatosUsuario(){
    let textarea_Ingreso = document.getElementById('textarea_Ingreso').value;
    
    textarea_Ingreso = textarea_Ingreso
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, '');
        console.log("Texto normalizado y limpio:", textarea_Ingreso);
    return document.querySelector('#textarea_Ingreso').value === textarea_Ingreso;
}

function botonEncriptarTexto(){
    
    let encriptarTextoIngresado = document.querySelector("#textarea_Ingreso").value;
    if (encriptarTextoIngresado === "" ){
         alert("ingrese datos para Encriptar")
 
    } else {   
            
            console.log(encriptarTextoIngresado);    
            encriptarTextoIngresado=encriptarTextoIngresado
                .toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                let textoEncriptado=encriptarTextoIngresado
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
                console.log(textoEncriptado);
                prepararDivTexto();
                document.getElementById('div_Resultado_Encriptado').textContent=textoEncriptado;
                document.querySelector("#botonCopiar").style.display="block";
                document.querySelector('#botonDesencriptar').setAttribute("disabled","true");
                document.querySelector('#botonDesencriptar').style.cursor="not-allowed"
                
         
    }
                return;
}


function copiarTextoEncriptado(){
    
    let textoCopiadoEncriptado=document.querySelector("#div_Resultado_Encriptado").textContent;
    navigator.clipboard.writeText(textoCopiadoEncriptado);
    let desactivarboton= document.querySelector('#boton_encriptar')
    console.log(textoCopiadoEncriptado);
    let divResultado = document.getElementById('div_Resultado_Encriptado');
    divResultado.value = "";
    document.querySelector("#textarea_Ingreso").value ="";
    document.querySelector('#botonEncriptar').setAttribute("disabled","true");
    document.querySelector('#botonEncriptar').style.cursor="not-allowed"
    document.querySelector('#botonDesencriptar').removeAttribute("disabled");
    document.querySelector('#botonDesencriptar').style.cursor="pointer";
    alert("Texto copiado con éxito")
    return;
}


function botonDesencriptarTexto(){
    
    let desencriptarTextoCopiado = document.getElementById('textarea_Ingreso').value;
    if (desencriptarTextoCopiado===""){
        alert("ingrese datos para Desencriptar")
    }
        textoEncriptado = desencriptarTextoCopiado
            .replace(/enter/g, 'e' )
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        console.log(textoEncriptado);
        const divContenedorMuñeco = document.getElementById('div_Resultado_Encriptado')
        divContenedorMuñeco.style.backgroundImage="none";
        divContenedorMuñeco.style.display="flex";
        divContenedorMuñeco.style.justifyContent  ="Space-around";
        divContenedorMuñeco.style.alignItems = 'center';
        divContenedorMuñeco.style.padding  = '10px';
        divContenedorMuñeco.textContent=textContent=textoEncriptado;
        document.querySelector("#textarea_Ingreso").value ="";
        document.querySelector('#botonEncriptar').removeAttribute("disabled");
        document.querySelector('#botonEncriptar').style.cursor="pointer";
        document.querySelector("#botonCopiar").style.display="none";
             
        document.querySelector('#botonDesencriptar').addEventListener('click', function() {
            setTimeout(function() {
                window.location.href="index.html";
            }, 10000); // 5000 milisegundos = 2 segundos
        });
    return;
}

