var pagina = ''
var arg = ''
var body = ''
var datos = {};
var datosDel=''
function CRUD(argument, pag, idTabla) {
    pagina = "http://localhost:80"+pag
    arg = argument
    switch (arg) {
        case 'receiveData':
            switch (idTabla) {
                case 'contenidoSkateTable':
                    body = 'skateBody';
                    break;

                case 'contenidoClientTable':
                    body = 'clientBody';
                    break;

                case 'contenidoMensajeTable':
                    body = 'messageBody';
                    break;

                case 'contenidoReservationTable':
                    body = 'reservationBody';
                    break;

                case 'contenidoCategoryTable':
                    body = 'categoryBody';
                    break;

                case 'contenidoScoreTable':
                    body = 'scoreBody';
                    break;
                case 'contenidoAdminTable':
                    body = 'adminBody';
                    break;
            }
            peticionGetAjax();
            $('#' + idTabla).show();
            break;

        case 'crearSkate':
            datos = {
                brand: valorAtributo('txtBrandSkate'),
                year: valorAtributo('txtYearSkate'),
                category:{id:valorAtributo('txtCategorySkate')},
                name: valorAtributo('txtNameSkate'),                
                description: valorAtributo('txtDescriptionSkate'),
                }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;

        case 'modificarSkate':
            datos = {
                id: valorAtributo('txtIdSModificarkate'),
                name: valorAtributo('txtBrandModificarSkate'),
                brand: valorAtributo('txtBrandModificarSkate'),
                year: valorAtributo('txtModelModificarSkate'),
                description: valorAtributo('txtNameModificarSkate'),
                category: {id: valorAtributo('txtCategoryModificarSkate')}
               
            }
            datos = JSON.stringify(datos);
            peticionPutAjax();
            break;

        case 'eliminarSkate':
            datosDel = valorAtributo('txtIdEliminarSkate');
            peticionDeleteAjax();
            break;

        /* CLIENTE */
        case 'crearCliente':
            datos = {
                name: valorAtributo('txtNameClient'),
                email: valorAtributo('txtEmailClient'),
                password: valorAtributo('txtPasswordClient'),
                age: valorAtributo('txtAgeClient')
            }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;

        case 'modificarCliente':
            datos = {
                idClient: valorAtributo('txtIdModificarClient'),
                email: valorAtributo('txtEmailModificarClient'),
                password: valorAtributo('txtPasswordModificarClient'),
                name: valorAtributo('txtNameModificarClient'),
                age: valorAtributo('txtAgeModificarClient')
            }
            datos = JSON.stringify(datos);
            peticionPutAjax();
            break;

        case 'eliminarCliente':
            datosDel= valorAtributo('txtIdEliminarClient');
            peticionDeleteAjax();
            break;
        /* MENSAJE */
        case 'crearMensaje':
            datos = {
                messageText: valorAtributo('txtTextMensaje'),
                client:{idClient: valorAtributo('txtIdClienteMensaje')},
                skate:{id:valorAtributo('txtIdSkateMensaje')}
            }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;

        case 'modificarMensaje':
            datos = {
                idMessage:valorAtributo('txtIdModificarMensaje'),
                messageText: valorAtributo('txtTextModificarMensaje'),
                skate: {id: valorAtributo('txtModificarSkateMensaje'),},
                client: {idClient: valorAtributo('txtModificarClientMensaje'),}
            }
            datos = JSON.stringify(datos);
            peticionPutAjax();
            break;

        case 'eliminarMensaje':
            datosDel = valorAtributo('txtIdEliminarMensaje');
            peticionDeleteAjax();
            break;

            /* RESERVACION */
        case 'crearReserva':
            if( (Date.parse(valorAtributo('txtStartDate'))>= getDate()) &&
                (Date.parse(valorAtributo('txtStartDate'))<=Date.parse(valorAtributo('txtDevolucionDate')))){
                datos = {
                    startDate: valorAtributo('txtStartDate'),
                    devolutionDate: valorAtributo('txtDevolucionDate'),
                    client:{idClient:valorAtributo('txtClientId')},
                    skate:{id:valorAtributo('txtSkateId')}
                }
                datos = JSON.stringify(datos);
                peticionPostAjax();
                break;
            }else{
                alert('Check startDate and devolutionDate');
                break;
            }
            
           
        
        case 'modificarReserva':
                datos = {
                    idReservation:valorAtributo('txtIdModificarReserva'),
                    startDate: valorAtributo('txtModificarStartReserva'),
                    devolutionDate: valorAtributo('txtModificarDevolutionReserva'),
                    status:valorAtributo('txtIdModificarStatusReserva'),
                    client:{idClient:valorAtributo('txtIdModificarClienteReserva')},
                    skate:{id:valorAtributo('txtIdModificarSkateReserva')}
                }
                datos = JSON.stringify(datos);
                peticionPutAjax();
                break;
        
        case 'eliminarReserva':
            datosDel = valorAtributo('txtIdEliminarReserva');
            peticionDeleteAjax();
            break;

        /* CATEGORIA */
        case 'crearCategoria':
            datos = {
                name: valorAtributo('txtCategoryName'),
                description: valorAtributo('txtCategoryDescription'),
                
            }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;
    
        case 'modificarCategoria':
                datos = {
                    id: valorAtributo('txtIdModificarCategoria'),
                    name: valorAtributo('txtModificarNombreCategoria'),
                    description: valorAtributo('txtModificarDescripcionCategoria'),
                    
                }
                datos = JSON.stringify(datos);
                peticionPutAjax();
                break;
    

        case 'eliminarCategoria':
                datosDel = valorAtributo('txtIdEliminarCategoria');
                peticionDeleteAjax();
                break;       
        
      /* ADMINISTRADOR */
      case 'crearAdministrator':
        datos = {
            name: valorAtributo('txtAdminName'),
            email: valorAtributo('txtAdminEmail'),
            password:valorAtributo('txtAdminPassword')            
        }
        datos = JSON.stringify(datos);
        peticionPostAjax();
        break;  
    
    case 'modificarAdministrator':
            datos = {
                idAdmin:valorAtributo('txtIdModificarAdministrator'),
                name: valorAtributo('txtModificarNameAdministrator'),
                email: valorAtributo('txtModificarEmailAdministrator'),
                password:valorAtributo('txtIdModificarPasswordAdministrator')            
            }
            datos = JSON.stringify(datos);
            peticionPutAjax();
            break;  

    case 'eliminarAdministrator':
            datosDel=valorAtributo('txtIdEliminarAdministrator');
            peticionDeleteAjax();
            break;     
    }
}

function CRUDAnswer(arg) {
    switch (arg) {
        case 'receiveData':
            switch (body) {
                case 'skateBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td scope='row'>" + items[i].id + "</td>";
                        filas += "<td>" + items[i].name + "</td>";
                        filas += "<td>" + items[i].brand + "</td>";
                        filas += "<td>" + items[i].year + "</td>";
                        filas += "<td>" + items[i].description + "</td>";
                        filas += "<td>" + items[i].category.name + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'clientBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].idClient + "</td>";
                        filas += "<td>" + items[i].email + "</td>";
                        filas += "<td>" + items[i].password + "</td>";
                        filas += "<td>" + items[i].name + "</td>";
                        filas += "<td>" + items[i].age + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'messageBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].idMessage + "</td>";
                        filas += "<td>" + items[i].messageText + "</td>";
                        filas += "<td>" + items[i].skate.id + "</td>";
                        filas += "<td>" + items[i].client.idClient + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'reservationBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].idReservation + "</td>";
                        filas += "<td>" + (items[i].startDate).split('T')[0] + "</td>";
                        filas += "<td>" + (items[i].devolutionDate).split('T')[0] + "</td>";
                        filas += "<td>" + items[i].status + "</td>";
                        filas += "<td>" + items[i].skate.id + "</td>";
                        filas += "<td>" + items[i].client.idClient + "</td>";
                        filas += "<td>" + items[i].score==null ? ' ':items[i].score + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'categoryBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        skate = items[i].skates
                        if (skate.length == 0){
                            filas += "<tr>";
                            filas += "<td>" + items[i].id + "</td>";
                            filas += "<td>" + items[i].name + "</td>";
                            filas += "<td>" + items[i].description + "</td>";
                            filas += "<td>" + "No asignado" + "</td>";
                            filas += "</tr>";
                        }else{
                            for (j = 0; j < skate.length; j++) {
                                filas += "<tr>";
                                filas += "<td>" + items[i].id + "</td>";
                                filas += "<td>" + items[i].name + "</td>";
                                filas += "<td>" + items[i].description + "</td>";
                                filas += "<td>" + skate[j].name + "</td>";
                                filas += "</tr>";
                            }
                        }
                        
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'scoreBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].idScore + "</td>";
                        filas += "<td>" + items[i].messageText + "</td>";
                        filas += "<td>" + items[i].stars + "</td>";
                        filas += "<td>" + items[i].reservation + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'adminBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].idAdmin + "</td>";
                        filas += "<td>" + items[i].name + "</td>";
                        filas += "<td>" + items[i].email + "</td>";
                        filas += "<td>" + items[i].password + "</td>";
                        filas += "</tr>";
                    }
                    console.log(filas);
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;
            }
            break;


        case 'crearSkate':
            alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtBrandSkate');
            limpiarAtributo('txtCategorySkate');
            limpiarAtributo('txtNameSkate');
            limpiarAtributo('txtYearSkate');
            limpiarAtributo('txtDescriptionSkate');
            
            break;

        case 'modificarSkate':
            alert('SE MODIFICO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtBrandModificarSkate');
            limpiarAtributo('txtModelModificarSkate');
            limpiarAtributo('txtCategoryModificarSkate');
            limpiarAtributo('txtNameModificarSkate');
            limpiarAtributo('txtIdSModificarkate');
            break;

        case 'eliminarSkate':
            alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtIdEliminarSkate');
            break;

        case 'crearCliente':
            alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtNameClient');
            limpiarAtributo('txtEmailClient');
            limpiarAtributo('txtPasswordClient');
            limpiarAtributo('txtAgeClient');
            break;

        case 'modificarCliente':
            alert('SE MODIFICO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtNameModificarClient');
            limpiarAtributo('txtEmailModificarClient');
            limpiarAtributo('txtAgeModificarClient');
            limpiarAtributo('txtIdModificarClient');
            limpiarAtributo('txtPasswordModificarClient');
            break;

        case 'eliminarCliente':
            alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtIdEliminarClient');
            break;

        case 'crearMensaje':
            alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtIdClienteMensaje');
            limpiarAtributo('txtIdSkateMensaje');
            limpiarAtributo('txtTextMensaje');
            break;

        case 'modificarMensaje':
            alert('SE MODIFICO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtTextModificarMensaje');
            limpiarAtributo('txtIdModificarMensaje');
            limpiarAtributo('txtModificarClientMensaje');
            limpiarAtributo('txtModificarSkateMensaje');
            break;

        case 'eliminarMensaje':
            alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtIdEliminarMensaje');
            break;

        case 'crearReserva':
        case 'modificarReserva':
                alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
                limpiarAtributo('txtStartDate');
                limpiarAtributo('txtDevolucionDate');
                limpiarAtributo('txtClientId');
                limpiarAtributo('txtSkateId');
                limpiarAtributo('txtModificarStartReserva');
                limpiarAtributo('txtModificarDevolutionReserva');
                limpiarAtributo('txtIdModificarStatusReserva');
                limpiarAtributo('txtIdModificarClienteReserva');
                limpiarAtributo('txtIdModificarSkateReserva');
                limpiarAtributo('txtIdModificarReserva');
                break;
        case 'eliminarReserva':
                    alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
                    limpiarAtributo('txtIdEliminarReserva');
                    break;
            
            case 'crearCategoria':
            case 'modificarCategoria':
                alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
                limpiarAtributo('txtCategoryName');
                limpiarAtributo('txtCategoryDescription');
                limpiarAtributo('txtIdModificarCategoria');
                limpiarAtributo('txtModificarNombreCategoria');
                limpiarAtributo('txtModificarDescripcionCategoria');
                break;

            case 'eliminarCategoria':
                    alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
                    limpiarAtributo('txtIdEliminarCategoria');
                    break;
            
            case 'crearAdministrator':
            case 'modificarAdministrator':
                alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
                limpiarAtributo('txtAdminName');
                limpiarAtributo('txtAdminEmail');
                limpiarAtributo('txtAdminPassword');
                limpiarAtributo('txtAdminEmail');
                limpiarAtributo('txtIdModificarAdministrator');
                limpiarAtributo('txtModificarNameAdministrator');
                limpiarAtributo('txtModificarEmailAdministrator');
                limpiarAtributo('txtIdModificarPasswordAdministrator');  
                limpiarAtributo('txtIdModificarAdministrator');

                break;

            case 'eliminarAdministrator':
                    alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
                    limpiarAtributo('txtIdEliminarAdministrator');
                    break;
    
    }
}