var esCorrecto=true;
var numero=/^[0-9]+$/;

$(function () {
    esCorrecto=true;
    $('#trab_dir_calle').keyup(function () {
        var _this = $('#trab_dir_calle');
        var _user = $('#trab_dir_calle').val();
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
}); //validar calle

$(function () {
    esCorrecto=true;
    $('#trab_dir_numero').keyup(function () {
        var _this = $('#trab_dir_numero');
        var _user = $('#trab_dir_numero').val();
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
}); //validar numero

$(function () {
    esCorrecto=true;
    $('#trab_dir_sector').keyup(function () {
        var _this = $('#trab_dir_sector');
        var _user = $('#trab_dir_sector').val();
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
}); //validar sector

$(function () {
    esCorrecto=true;
    $('#trab_tel_fijo').keyup(function () {
        var _this = $('#trab_tel_fijo');
        var _user = $('#trab_tel_fijo').val();
        
        _this.attr('style', 'background:white');

        
        if (_user.length > 7) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        if (_user.length < 6) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=true;
        }
    });
}); //validar telefono

$(function () {
    esCorrecto=true;
    $('#trab_tel_movil').keyup(function () {
        var _this = $('#trab_tel_movil');
        var _user = $('#trab_tel_movil').val();
        _this.attr('style', 'background:white'); 
        if (_user.length > 9) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        if (_user.length < 8) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
        if (!numero.test(_user)) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=true;
        }
    });
}); //validar celular

$(function () {
    esCorrecto=true;
    $('#trab_prev_salud_d').keyup(function () {
        var _this = $('#trab_prev_salud_d');
        var _user = $('#trab_prev_salud_d').val();
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
}); //validar prevision
$(function () {
    esCorrecto=true;
    $('#trab_prev_social').keyup(function () {
        var _this = $('#trab_prev_social');
        var _user = $('#trab_prev_social').val();
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
}); //validar prevision sosial