var esCorrecto=true;
var numero=/^[0-9]+$/;

$(function () {
    esCorrecto=true;
    $('#sad_cons_drogas_d').keyup(function () {
        var _this = $('#sad_cons_drogas_d');
        var _user = $('#sad_cons_drogas_d').val();
         _this.attr('style', 'background:white');
        
        if (_user.length > 3) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
         if (parseInt(_user) > 150) {
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
}); //validar nombres