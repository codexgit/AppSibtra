var esCorrecto=true;
var numero=/^[0-9]+$/;

$(function () {
    esCorrecto=true;
    $('#viv_libreta_anio').keyup(function () {
        var _this = $('#viv_libreta_anio');
        var _user = $('#viv_libreta_anio').val();
         _this.attr('style', 'background:white');
        
          if (_user.length > 4) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        if (_user.length < 4) {
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
}); //validar libreta año

$(function () {
    esCorrecto=true;
    $('#viv_monto_ahorro').keyup(function () {
        var _this = $('#viv_monto_ahorro');
        var _user = $('#viv_monto_ahorro').val();
         _this.attr('style', 'background:white');
         
          if (_user.length > 11) {
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
});

$(function () {
    esCorrecto=true;
    $('#viv_num_personas').keyup(function () {
        var _this = $('#viv_num_personas');
        var _user = $('#viv_num_personas').val();
         _this.attr('style', 'background:white');
        
          if (_user.length > 2) {
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
}); //validar numero habitantes

$(function () {
    esCorrecto=true;
    $('#viv_num_dormitorios').keyup(function () {
        var _this = $('#viv_num_dormitorios');
        var _user = $('#viv_num_dormitorios').val();
         _this.attr('style', 'background:white');
        
          if (_user.length > 2) {
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
}); //validar numero habitaciones