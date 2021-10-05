function traerInformacion(){
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        } 
});

}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].address+"</td>";
        myTable+="<td>"+items[i].exension+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td><button onclick='borrarElemento("+items[i].id+")'> Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Guardado el dato")
        }
    });
}
function editarInformacion(){
    let myData={
        id:$("#id").val(),
        address:$("#address").val(),
        exension:$("#exension").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#address").val("");
            $("#exension").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/farm/farm",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")    
        }
    });
}

function consultarClientes(){
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta2(respuesta.items)
        } 

    });

}
function pintarRespuesta2(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td><button onclick='borrarElemento("+items[i].id+")'> Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);
}
function guardarClientes(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
    };
        let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            consultarClientes();
            alert("se ha Guardado el dato")
        }
    });
}    
function editarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#emailCliente").val("");
            $("#ageCliente").val("");
            consultarClientes();
            alert("se ha Actualizado")
        }
    });
}
function borrarCliente(idElemento){
    let myData={    
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            consultarClientes();
            alert("Se ha Eliminado.")      
        }
    });
}

function ConsultarMensaje(){
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta3(respuesta.items)
        } 

    });

}
function pintarRespuesta3(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].menssageText+"</td>";
        myTable+="<td><button onclick='borrarElemento("+items[i].id+")'> Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}
function guardarMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        menssageText:$("#menssageText").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#idMensaje").val("");
            $("#menssageText").val("");
            ConsultarMensaje();
            alert("se ha Guardado el dato")
        }
    });
}    
function editarMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        menssageText:$("#menssageText").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#idMensaje").val("");
            $("#menssageText").val("");
            consultarClientes();
            alert("se ha Actualizado")
        }
    });
}
function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g151a4a899d152e-db202109232116.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            consultarClientes();
            alert("Se ha Eliminado.")      
        }
    });
}