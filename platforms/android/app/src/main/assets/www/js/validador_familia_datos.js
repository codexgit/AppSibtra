var esCorrecto=true;
var numero=/^[0-9]+$/;

$(function () {
    esCorrecto=true;
    $('#fam_ges').keyup(function () {
        var _this = $('#fam_ges');
        var _user = $('#fam_ges').val();
        _this.attr('style', 'background:white');

        
        if (_user.length > 100) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }

        if (_user === '') {
            _this.attr('style', 'background:white');
            esCorrecto=false;
        }
    });
}); //validar ges

$(function () {
    esCorrecto=true;
    $('#fam_meses_cesante').keyup(function () {
        var _this = $('#fam_meses_cesante');
        var _user = $('#fam_meses_cesante').val();
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
}); //validar meses cesante

$(function () {
    esCorrecto=true;
    $('#fam_fin_estudios').keyup(function () {
        var _this = $('#fam_fin_estudios');
        var _user = $('#fam_fin_estudios').val();
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
});//ultimo año estudiado


$(function () {
    esCorrecto=true;
    $('#fam_anio_psu').keyup(function () {
        var _this = $('#fam_anio_psu');
        var _user = $('#fam_anio_psu').val();
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
});//ultimo año estudiado

$(function () {
    esCorrecto=true;
    $('#fam_puntaje_psu').keyup(function () {
        var _this = $('#fam_puntaje_psu');
        var _user = $('#fam_puntaje_psu').val();
         _this.attr('style', 'background:white');
        
          if (_user.length !== 3) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
          if (_user < 150) {
            _this.attr('style', 'background:#FF4A4A');
            esCorrecto=false;
        }
        
         if (_user > 850) {
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
});//ultimo puntaje psu

$(function () {
    esCorrecto=true;
    $('#fam_ult_promedio').keyup(function () {
        var _this = $('#fam_ult_promedio');
        var _user = $('#fam_ult_promedio').val();
         _this.attr('style', 'background:white');
        
          if (_user.length !== 2) {
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
});//ultimo promedio

$(function () {
    esCorrecto=true;
    $('#fam_ibruto_mes1').keyup(function () {
        var _this = $('#fam_ibruto_mes1');
        var _user = $('#fam_ibruto_mes1').val();
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
    $('#fam_ibruto_mes2').keyup(function () {
        var _this = $('#fam_ibruto_mes2');
        var _user = $('#fam_ibruto_mes2').val();
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
    $('#fam_ibruto_mes3').keyup(function () {
        var _this = $('#fam_ibruto_mes3');
        var _user = $('#fam_ibruto_mes3').val();
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
    $('#fam_iliquido_mes1').keyup(function () {
        var _this = $('#fam_iliquido_mes1');
        var _user = $('#fam_iliquido_mes1').val();
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
    $('#fam_iliquido_mes2').keyup(function () {
        var _this = $('#fam_iliquido_mes2');
        var _user = $('#fam_iliquido_mes2').val();
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
    $('#fam_iliquido_mes3').keyup(function () {
        var _this = $('#fam_iliquido_mes3');
        var _user = $('#fam_iliquido_mes3').val();
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
    $('#fam_pension_mes1').keyup(function () {
        var _this = $('#fam_pension_mes1');
        var _user = $('#fam_pension_mes1').val();
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
    $('#fam_pension_mes2').keyup(function () {
        var _this = $('#fam_pension_mes2');
        var _user = $('#fam_pension_mes2').val();
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
    $('#fam_pension_mes3').keyup(function () {
        var _this = $('#fam_pension_mes3');
        var _user = $('#fam_pension_mes3').val();
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
    $('#fam_otros_mes1').keyup(function () {
        var _this = $('#fam_otros_mes1');
        var _user = $('#fam_otros_mes1').val();
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
    $('#fam_otros_mes2').keyup(function () {
        var _this = $('#fam_otros_mes2');
        var _user = $('#fam_otros_mes2').val();
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
    $('#fam_otros_mes3').keyup(function () {
        var _this = $('#fam_otros_mes3');
        var _user = $('#fam_otros_mes3').val();
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







