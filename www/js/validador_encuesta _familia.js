var esCorrecto=true;

$(function () {
    esCorrecto=true;
    $('#fam_nombres').keyup(function () {
        var _this = $('#fam_nombres');
        var _user = $('#fam_nombres').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        /*if (_user === '') {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }*/
    });
}); //validar nombres

$(function () {
    esCorrecto=true;
    $('#fam_apellido_p').keyup(function () {
        var _this = $('#fam_apellido_p');
        var _user = $('#fam_apellido_p').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        /*if (_user === '') {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }*/
    });
}); //validar apellido paterno

$(function () {
    esCorrecto=true;
    $('#fam_apellido_m').keyup(function () {
        var _this = $('#fam_apellido_m');
        var _user = $('#fam_apellido_m').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 50) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

       /*if (_user === '') {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }*/
    });
}); //validar apellido materno