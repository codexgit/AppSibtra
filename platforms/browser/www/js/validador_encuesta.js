var esCorrecto=true;
var esCorrecto1=true;
var esCorrecto2=true;

$(function () {
    esCorrecto=true;
    $('#enc_run').keyup(function () {
        var _this = $('#enc_run');
        var _user = $('#enc_run').val();
        _this.attr('style', 'background:white');
        if (_user.indexOf(' ') >= 0) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        if (_user.indexOf("'") >= 0) {
            _this.attr('style', 'background:#FF4A4A');
           esCorrecto=false;
        }
        
        if (_user.length > 11) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
    });
});

function validaRut(campo){
	if ( campo.length === 0 ){ return false; }
	if ( campo.length < 8 ){ return false; }

	campo = campo.replace('-','');
	campo = campo.replace(/\./g,'');

	var suma = 0;
	var caracteres = "1234567890kK";
	var contador = 0;    
	for (var i=0; i < campo.length; i++){
		u = campo.substring(i, i + 1);
		if (caracteres.indexOf(u) !== -1)
		contador ++;
	}
	if ( contador===0 ) { return false; }
	
	var rut = campo.substring(0,campo.length-1);
	var drut = campo.substring( campo.length-1 );
	var dvr = '0';
	var mul = 2;
	
	for (i= rut.length -1 ; i >= 0; i--) {
		suma = suma + rut.charAt(i) * mul;
                if (mul === 7) 	mul = 2;
		        else	mul++;
	}
	res = suma % 11;
	if (res===1)		dvr = 'k';
                else if (res===0) dvr = '0';
	else {
		dvi = 11-res;
		dvr = dvi + "";
	}
	if ( dvr !== drut.toLowerCase() ) { return false; }
	else { return true; }
}


function isValidRUT(rut) {
  if (!rut | typeof rut !== 'string') return false;

  var regexp = /^\d{7,8}-[k|K|\d]{1}$/;
  return regexp.test(rut);
}

$(function () {
    $('#enc_nombres').keyup(function () {
        esCorrecto=true;
        var _this = $('#enc_nombres');
        var _user = $('#enc_nombres').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=true;
        }
    });
}); //validar nombres

$(function () {
    $('#enc_apellido_p').keyup(function () {
        esCorrecto1=true;
        var _this = $('#enc_apellido_p');
        var _user = $('#enc_apellido_p').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto1=true;
        }
    });
}); //validar apellido paterno

$(function () {
    
    $('#enc_apellido_m').keyup(function () {
        esCorrecto2=true;
        var _this = $('#enc_apellido_m');
        var _user = $('#enc_apellido_m').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto2=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto2=true;
        }
    });
}); //validar apellido materno

function esValido(){
    if(esCorrecto&esCorrecto2&esCorrecto1){
        return true;
    }
    else {
        return false;
    }
}  