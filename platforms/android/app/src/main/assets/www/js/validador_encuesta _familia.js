var esCorrecto=true;
var esCorrecto1=true;
var esCorrecto2=true;

$(function () {
    
    $('#fam_nombres').keyup(function () {
        esCorrecto=true;
        var _this = $('#fam_nombres');
        var _user = $('#fam_nombres').val();
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
   
    $('#fam_apellido_p').keyup(function () {
         esCorrecto1=true;
        var _this = $('#fam_apellido_p');
        var _user = $('#fam_apellido_p').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto1=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto1=false;
        }
    });
}); //validar apellido paterno

$(function () {
   
    $('#fam_apellido_m').keyup(function () {
         esCorrecto2=true;
        var _this = $('#fam_apellido_m');
        var _user = $('#fam_apellido_m').val();
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