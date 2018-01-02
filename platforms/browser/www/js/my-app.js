// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

myApp.onPageInit('premios', function (page) {
  var calendarDateFormat = myApp.calendar({
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      monthNames:	['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto' , 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre'],
      input: '#calendar-date-format',
      dateFormat: 'dd/mm/yyyy'
  });

  $$("#myform").submit(function(e) {
    e.preventDefault();
    var datos = [];
    var intereses = [];
    var chk = $$("input[name='my-checkbox[]']:checked");
    for (var i = 0; i < chk.length; i++) {
      intereses.push(chk[i].value);
    }
    var genero = "Hombre";
    if($$("#genero").prop('checked')){
      genero = "Mujer";
    }
    datos.push(genero, $$("#nombre").val(), $$("#correo").val(), $$("#telefono").val(), $$("#calendar-date-format").val(), intereses);
    $$.ajax({
      type: "POST",
      url: "http://apps.opion-tech.com/correoPremios.php",
      contentType: "application/x-www-form-urlencoded",
      data: {
        data: datos
      },
      beforeSend: function() {
        $$("button").attr("disabled", "disabled");
        $$("#body").append("<div id='loading' class='content-block' style='text-align: center'><span style='width:42px; height:42px' class='preloader'></span></div>");
      },
      success: function(response) {
        myApp.alert("Te suscribiste exitosamente", "MarcaGto")
      },
      error: function(error) {
        myApp.alert("Ocurrió un error, intenta de nuevo", "MarcaGto")
      },
      complete: function() {
        $$("#loading").remove();
        $$("button").removeAttr("disabled");
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

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    checkPermissions();
});

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
    title: 'MarcaGto',
    message: 'Te recomendamos dar permisos para acceder a tu ubicación'
  });
}

function success(status) {
  if(!status.hasPermission){
    error();
  }
}
