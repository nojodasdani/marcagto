var myApp = new Framework7();
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    //console.log("Device is ready!");
    checkPermissions();
    checkBluetooth();
});

myApp.onPageInit('premios', function (page) {
  var fecha = ['1990-01-02'];
  var calendarDateFormat = myApp.calendar({
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      monthNames:	['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' , 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'],
      input: '#calendar-date-format',
      minDate:'1940-01-01',
      maxDate:'2012-01-01',
      value: fecha,
      dateFormat: 'dd-MM-yyyy'
  });

  $$("#campoMunicipio").hide();
  var municipio = $$("#municipio").val();

  $$("#municipio").change(function(){
    municipio = $$("#municipio").val();
    if(municipio == "Otro"){
      $$("#campoMunicipio").show();
      $$("#txtMunicipio").attr('required', true);
    }else{
      $$("#campoMunicipio").hide();
      $$('#txtMunicipio').removeAttr('required');
    }
  });

  $$("#myform").submit(function(e) {
    e.preventDefault();
    municipio = (municipio == "Otro") ? $$('#txtMunicipio').val() : municipio;
    var datos = [];
    var intereses = [];
    var chk = $$("input[name='my-checkbox[]']:checked");
    $$("input[name='my-radio']:checked")[0].value;
    if(chk.length>0){
    for (var i = 0; i < chk.length; i++) {
      intereses.push(chk[i].value);
    }
    var genero = $$("input[name='my-radio']:checked")[0].value;
    datos.push(genero, $$("#nombre").val(), $$("#apeP").val(), $$("#apeM").val(), $$("#correo").val(), $$("#telefono").val(), $$("#calendar-date-format").val(), intereses, municipio);
    $$.ajax({
      type: "POST",
      url: "http://apps.opion-tech.com/correoPremios.php",
      contentType: "application/x-www-form-urlencoded",
      data: {
        data: datos
      },
      beforeSend: function() {
        $$("#myform").hide();
        $$("#headerPremios").hide();
        $$("#body").append("<div id='loading' class='content-block' style='text-align: center'><span style='width:42px; height:42px' class='preloader'></span><h4>Espera por favor...</h4></div>");
      },
      success: function(response) {
        if(response == "existe"){
          myApp.alert("Ese correo ya fue registrado", "Marca GTO");
        }else{
          myApp.alert("Te suscribiste exitosamente", "Marca GTO");
          $$("#myform")[0].reset();
          $$("#hombre").prop('checked', true);
          $$("#calendar-date-format").val(fecha);
        }
      },
      error: function(error) {
        myApp.alert("Ocurrió un error, intenta de nuevo", "Marca GTO");
      },
      complete: function() {
        $$("#loading").remove();
        $$("#myform").show();
        $$("#headerPremios").show();
      }
    });
  }else {
    myApp.alert("Selecciona tus intereses", "Marca GTO");
  }
});
})

myApp.onPageInit('contacto', function (page) {
  $$("#campoMunicipio").hide();
  $$("#campoTelefono").hide();
  var municipio = $$("#municipio").val();
  var asunto = $$("#asunto").val();
  var telefono = "";
  $$("#municipio").change(function(){
    municipio = $$("#municipio").val();
    if(municipio == "Otro"){
      $$("#campoMunicipio").show();
      $$("#txtMunicipio").attr('required', true);
    }else{
      $$("#campoMunicipio").hide();
      $$('#txtMunicipio').removeAttr('required');
    }
  });
  $$("#asunto").change(function(){
    asunto = $$("#asunto").val();
    if(asunto == "Queja"){
      $$("#campoTelefono").show();
      $$("#txtTelefono").attr('required', true);
    }else{
      $$("#campoTelefono").hide();
      $$('#txtTelefono').val('');
      $$('#txtTelefono').removeAttr('required');
    }
  });
  $$("#myform").submit(function(e) {
    municipio = (municipio == "Otro") ? $$('#txtMunicipio').val() : municipio;
    telefono = $$("#txtTelefono").val();
    e.preventDefault();
    var datos = [];
    datos.push($$("#nombre").val(), $$("#apeP").val(), $$("#apeM").val(), $$("#correo").val(), $$("#asunto").val(), $$("#mensaje").val(), municipio, telefono);
    $$.ajax({
      type: "POST",
      url: "http://apps.opion-tech.com/correoGto.php",
      contentType: "application/x-www-form-urlencoded",
      data: {
        data: datos
      },
      beforeSend: function() {
        $$("#myform").hide();
        $$("#headerContacto").hide();
        $$("#body").append("<div id='loading' class='content-block' style='text-align: center'><span style='width:42px; height:42px' class='preloader'></span><h4>Espera por favor...</h4></div>");
      },
      success: function(response) {
        myApp.alert("El correo se envió exitosamente", "Marca GTO");
        $$("#myform")[0].reset();
      },
      error: function(error) {
        myApp.alert("Ocurrió un error, intenta de nuevo", "Marca GTO")
      },
      complete: function() {
        $$("#loading").remove();
        $$("#myform").show();
        $$("#headerContacto").show();
      }
    });
  });
});

myApp.onPageInit('mapa', function (page) {
  var alta = $$('#alta');
  var baja = $$('#baja');

  baja.on('click', function(){
      alta.removeClass("activo");
      baja.removeClass("inactivo");
      baja.addClass("activo");
  });

  alta.click(function(){
      baja.removeClass("activo");
      alta.removeClass("inactivo");
      alta.addClass("activo");
  });
})

function checkBluetooth(){
  myApp.addNotification({
    title: 'MarcaGTO',
    message: 'Enciende tu Bluetooth para una mejor experiencia'
  });
}

/*function checkBluetooth(){
  cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled){
    if (!enabled) {
      myApp.confirm('¿Podemos encender tu Bluetooth?', '', function () {
        turnBluetooth();
        }, function () {}
      );
    }
  }, function(error){
    myApp.alert('Ocurrió el error: '+ error);
  });
}

function turnBluetooth(){
  cordova.plugins.diagnostic.setBluetoothState(function(){
      //console.log("Bluetooth was enabled");
  }, function(error){
      myApp.alert("Ocurrió un error, enciéndelo manualmente por favor");
  }, true);
}*/

function checkPermissions(){
  var permissions = cordova.plugins.permissions;
  permissions.hasPermission(permissions.ACCESS_COARSE_LOCATION, function(status){
    if (!status.hasPermission) {
      permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION, success, error);
    }
  });
}

function error() {
  myApp.addNotification({
    title: 'MarcaGTO',
    message: 'Te recomendamos dar permisos para acceder a tu ubicación'
  });
}

function success(status) {
  if(!status.hasPermission){
    error();
  }
}
