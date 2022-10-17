var boton=document.getElementById('agregar');
var guardar=document.getElementById('guardar');
var lista=document.getElementById("lista");
var data=[];
boton.addEventListener("click",agregar);
guardar.addEventListener("click",save);
var cant=0;
function agregar(){
    var codigo=document.querySelector('#codigo').value;
    var nombre=document.querySelector('#nombre').value;
    var precio=parseFloat(document.querySelector('#precio').value);
    var cantidad=parseFloat(document.querySelector('#cantidad').value);
    var subtotal=precio*cantidad;
    var isv=subtotal*0.15.toFixed(2);
    var bonificacion=parseFloat(document.querySelector('#bonificacion').value);
    var total= subtotal+isv-bonificacion;
    
     

    //agrega elementos al arreglo;
    data.push(
        {"id":cant,"codigo":codigo,"nombre":nombre,"precio":precio,"cantidad":cantidad,"subtotal":subtotal,"isv":isv,"bonificacion":bonificacion,"total":total}
    );
   
   //convertir el arreglo a json
  // console.log(JSON.stringify(data));
  var id_row='row'+cant;
  var fila='<tr id='+id_row+'><td>'+codigo+'</td><td>'+nombre+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+subtotal+
  '</td><td>'+isv+'</td><td>'+bonificacion+'</td><td>'+total+
  '</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a> ';
  //agregar fila a la tabla
  $("#lista").append(fila);
  $("#codigo").val('');
  $("#nombre").val('');
  $("#precio").val('');
  $("#cantidad").val('');
  $("#subtotal").val('');
  $("#isv").val('');
  $("#bonificacion").val('');
  $("#nombre").focus();
  cant++;
  sumar();
}
function eliminar(row){
    //remueve la fila de la tabla html
    $("#row"+row).remove();
   //remover el elmento del arreglo
   //data.splice(row,1);
   //buscar el id a eliminar
   var i=0;
   var pos=-1;
   for (x of data){
       console.log(x.id);
       if (x.id==row){
           pos=i;
       }
       i++;
   }
   data.splice(pos,1);
  sumar();
}
function cantidad(row){
    var canti=parseInt(prompt("Nueva cantidad")).toFixed(2);
    data[row].cantidad=canti;
    data[row].subtotal=data[row].cantidad*data[row].precio;
    data[row].isv=data[row].subtotal*0.15;
    data[row].bonificacion=bonificacion;
    data[row].total.toFixed(2)=data[row].subtotal+data[row].isv-bonificacion;
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML=subtotal;
    celda[4].innerHTML=isv.toFixed(2);
    celda[5].innerHTML=bonificacion;
    celda[6].innerHTML= data[row].total.toFixed(2);
    
    console.log(data);
    sumar();
}
function sumar(){
    let tot=0;
    for (x of data){
       tot=tot+x.total;
    }
    document.querySelector("#total").innerHTML="Total "+tot;
}   


///imprimir
function imprimir() {
	window.print();
 }


 ////incrementar
 document.forms["texto"].onsubmit = function(){
    var texto = document.getElementById("tituloOculto").value = document.getElementById("texto").innerHTML;
    alert(texto);
}