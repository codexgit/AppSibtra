$(function () {
    $('#enc_run').keyup(function () {
        var _this = $('#enc_run');
        var _user = $('#enc_run').val();
        _this.attr('style', 'background:white');
        if (_user.indexOf(' ') >= 0) {
            _this.attr('style', 'background:#FF4A4A');
            return false;
        }

        if (_user.indexOf("'") >= 0) {
            _this.attr('style', 'background:#FF4A4A');
            return false;
        }
        
        if (_user.length > 8) {
            _this.attr('style', 'background:#FF4A4A');
            return false;
        }

        if (_user === '') {
            _this.attr('style', 'background:#FF4A4A');
        }
    });
});