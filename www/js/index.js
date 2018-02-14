
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $('#btnAlerta').on('click', this.onClickbtnAlerta);
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    },
    
    onClickbtnAlerta: function()
    {
        document.addEventListener("deviceready", onDeviceReady, false);
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

        alert('file system open: ' );
        fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

            alert("fileEntry is file?" + fileEntry.isFile.toString());
            // fileEntry.name == 'someFile.txt'
            // fileEntry.fullPath == '/someFile.txt'
            writeFile(fileEntry, null);

        }, onErrorCreateFile);

      }, onErrorLoadFs);
    },
    
    onErrorCreateFile: function() {
    alert("no se pudo crear el archivo");
    },

    onErrorLoadFs: function() {
    alert("no se pudo cargar el archivo");}

    
};
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var id_encuesta;

function baseDeDatos(){
     
         var msg, msg2;	

         db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta', [], function (tx, results) {
               var len = results.rows.length, i;
              // msg = "<p>Found rows: " + len + "</p>";
               //document.querySelector('#status').innerHTML +=  msg;
					
               for (i = 0; i < len; i++){
                  //msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                  msg2 = "<p><b>" + results.rows.item(i).encuesta_id + "</b></p>";
                  //alert(results.rows.item(i).log);
                  //document.querySelector('#status').innerHTML +=  msg;
                  document.querySelector('#status').innerHTML +=  msg2;
               }
            }, null);
         });
}
function crearTablas(){
     db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id INTEGER PRIMARY KEY AUTOINCREMENT, log)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta (encuesta_id  INTEGER PRIMARY KEY AUTOINCREMENT, filial_empresa_id INTEGER NOT NULL, enc_codigo TEXT NULL, enc_run INTEGER NOT NULL, enc_dv TEXT NOT NULL, enc_nombres TEXT NOT NULL, enc_apellido_p TEXT NOT NULL, enc_apellido_m TEXT NULL, comuna_id INTEGER NOT NULL, usuario_id INTEGER NOT NULL, enc_fecha INTEGER NOT NULL, enc_estado INTEGER NOT NULL )');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_educacion(encuesta_educacion_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL,edu_nivel_esc INTEGER NOT NULL, edu_tipo_est INTEGER NULL, edu_ult_curso INTEGER NULL, edu_anio_egreso INTEGER NULL, edu_estudiando INTEGER NOT NULL, edu_becas TEXT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_salud(encuesta_salud_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, sad_cont_menores INTEGER NOT NULL, sad_cons_drogas INTEGER NOT NULL, sad_cons_drogas_d TEXT NULL, sad_pat_ges TEXT NULL, sad_usa_prevision INTEGER NOT NULL, sad_cond_permanente TEXT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_trabajador(encuesta_trabajador_id INTEGER PRIMARY KEY AUTOINCREMENT,encuesta_id INTEGER NOT NULL, trab_dir_calle TEXT NOT NULL, trab_dir_numero INTEGER NOT NULL, trab_dir_sector TEXT NULL, trab_tel_fijo TEXT NULL, trab_tel_movil TEXT NOT NULL, trab_fec_nacimiento INTEGER NOT NULL, trab_genero INTEGER NOT NULL, trab_jefe_familia INTEGER NOT NULL, trab_ant_indigenas INTEGER NOT NULL, trab_est_civil INTEGER NOT NULL, trab_nacionalidad INTEGER NOT NULL, trab_prev_salud INTEGER NOT NULL, trab_prev_salud_d TEXT NOT NULL, trab_prev_social TEXT NOT NULL)'); 
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_vivienda(encuesta_vivienda_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, viv_tenencia INTEGER NOT NULL, viv_sitio INTEGER NOT NULL, viv_post_subsidio INTEGER NOT NULL, viv_libreta INTEGER NOT NULL, viv_libreta_anio INTEGER NOT NULL, viv_monto_ahorro INTEGER NOT NULL, viv_fam_ocupante INTEGER NOT NULL, viv_num_personas INTEGER NOT NULL, viv_num_dormitorios INTEGER NOT NULL, viv_prov_agua INTEGER NOT NULL, viv_sub_agua INTEGER NOT NULL, viv_ener_electrica INTEGER NOT NULL, viv_elim_excretas INTEGER NOT NULL, viv_reg_hogares INTEGER NOT NULL, viv_tramo_grupo INTEGER NOT NULL, viv_ben_subsidio TEXT NOT NULL, viv_otro_subsidio TEXT NOT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS encuesta_familia(encuesta_familia_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_id INTEGER NOT NULL, fam_run INTEGER NOT NULL, fam_dv TEXT NOT NULL, fam_nombres TEXT NOT NULL, fam_apellido_p TEXT NOT NULL,fam_apellido_m TEXT NOT NULL, fam_fec_nacimiento INTEGER NOT NULL, fam_genero INTEGER NOT NULL, fam_nac_chilena INTEGER NOT NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS familia_datos(famiia_datos_id INTEGER PRIMARY KEY AUTOINCREMENT, encuesta_familia_id INTEGER NOT NULL, fam_jefe_familia INTEGER NOT NULL, fam_es_carga INTEGER NOT NULL, fam_parentezco INTEGER NOT NULL, fam_ant_indigena INTEGER NOT NULL, fam_padre_profesor INTEGER NOT NULL, fam_cond_perm TEXT NULL, fam_ges TEXT NULL, fam_usa_prevsalud INTEGER NOT NULL, fam_trabajando INTEGER NOT NULL, fam_sit_contrato INTEGER NULL, fam_sit_nolaboral INTEGER NULL, fam_det_pension TEXT NULL, fam_meses_cesante INTEGER NULL, fam_inicio_activ INTEGER NOT NULL, fam_matriculado INTEGER NOT NULL, fam_nivel_educ INTEGER NOT NULL, fam_tipo_est INTEGER NULL, fam_ult_curso INTEGER NULL, fam_fin_estudios INTEGER NULL, fam_rindio_psu INTEGER NULL, fam_anio_psu INTEGER NULL, fam_puntaje_psu INTEGER NULL, fam_ult_promedio INTEGER NULL, fam_fin_educsup INTEGER NULL, fam_ibruto_mes1 INTEGER NULL, fam_ibruto_mes2 INTEGER NULL, fam_ibruto_mes3 INTEGER NULL, fam_iliquido_mes1 INTEGER NULL, fam_iliquido_mes2 INTEGER NULL, fam_iliquido_mes3 INTEGER NULL, fam_rec_pension INTEGER NOT NULL, fam_pension_mes1 INTEGER NULL, fam_pension_mes2 INTEGER NULL, fam_pension_mes3 INTEGER NULL, fam_rec_otros INTEGER NOT NULL, fam_otros_mes1 INTEGER NULL, fam_otros_mes2 INTEGER NULL, fam_otros_mes3 INTEGER NULL)'); 
     });
    
}
function recuperar(){
    var i;
     db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM LOGS WHERE id=1', [], function (tx, results) {
               
               i=results.rows.item(1).log;
            }, null);   
         });
    alert(i);
    //return i;
}

function guardar_logs(){
    db.transaction(function (tx) {
        var log=document.getElementById('log').value;
        tx.executeSql('INSERT INTO LOGS (log) VALUES(?)',[log]);
    });         
}

function crear_encuesta(){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta(filial_empresa_id,enc_codigo,enc_run,enc_dv,enc_nombres,enc_apellido_p,enc_apellido_m,comuna_id,usuario_id,enc_fecha,enc_estado) VALUES(?,?,?,?,?,?,?,?,?,?,?)'
        ,['','','','','','','','','','','']);
    });         
}
function guardar_encuesta(){
    
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var filial_empresa_id=document.getElementById('filial_empresa_id').value;
        var enc_codigo=document.getElementById('enc_codigo').value;
        var enc_run=document.getElementById('enc_run').value;
        var enc_dv=document.getElementById('enc_dv').value;
        var enc_nombres=document.getElementById('enc_nombres').value;
        var enc_apellido_p=document.getElementById('enc_apellido_p').value;
        var enc_apellido_m=document.getElementById('enc_apellido_m').value;
        var comuna_id=document.getElementById('comuna_id').value;
        var usuario_id=document.getElementById('usuario_id').value;
        var enc_fecha=document.getElementById('enc_fecha').value;
        var enc_estado=document.getElementById('enc_estado').value;
        //alert(id);
        tx.executeSql('UPDATE encuesta SET filial_empresa_id=?,enc_codigo=?,enc_run=?,enc_dv=?,enc_nombres=?,enc_apellido_p=?,enc_apellido_m=?,comuna_id=?,usuario_id=?,enc_fecha=?,enc_estado=? WHERE encuesta_id=?',
        [filial_empresa_id,enc_codigo,enc_run,enc_dv,enc_nombres,enc_apellido_p,enc_apellido_m,comuna_id,usuario_id,enc_fecha,enc_estado,id]);
        });
    });
    location.href="../Pages/pagina2.html";
}
function crear_encuesta_trabajador(id_u){
    
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_trabajador(encuesta_id,trab_dir_calle,trab_dir_numero,trab_dir_sector,trab_tel_fijo,trab_tel_movil,trab_fec_nacimiento,trab_genero,trab_jefe_familia,trab_ant_indigenas,trab_est_civil,trab_nacionalidad,trab_prev_salud,trab_prev_salud_d,trab_prev_social) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','','','','','','','']);
    }); 
}
function guardar_encuesta_trabajador(){
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var trab_dir_calle=document.getElementById('trab_dir_calle').value;
        var trab_dir_numero=document.getElementById('trab_dir_numero').value;
        var trab_dir_sector=document.getElementById('trab_dir_sector').value;
        var trab_tel_fijo=document.getElementById('trab_tel_fijo').value;
        var trab_tel_movil=document.getElementById('trab_tel_movil').value;
        var trab_fec_nacimiento=document.getElementById('trab_fec_nacimiento').value;
        var trab_genero=capturar("genero"); //document.getElementById('trab_genero').value;
        var trab_jefe_familia=capturar("jefe"); //document.getElementById('trab_jefe_familia').value;
        var trab_ant_indigenas=capturar("indigena"); //document.getElementById('trab_ant_indigenas').value;
        var trab_est_civil=capturar("e_civil"); //document.getElementById('trab_est_civil').value;
        var trab_nacionalidad=capturar("nacionalidad"); //document.getElementById('trab_nacionalidad').value;
        var trab_prev_salud=capturar("p_salud"); //document.getElementById('trab_prev_salud').value;
        var trab_prev_salud_d=document.getElementById('trab_prev_salud_d').value;
        var trab_prev_social=document.getElementById('trab_prev_social').value;
        tx.executeSql('UPDATE encuesta_trabajador SET trab_dir_calle=?,trab_dir_numero=?,trab_dir_sector=?,trab_tel_fijo=?,trab_tel_movil=?,trab_fec_nacimiento=?,trab_genero=?,trab_jefe_familia=?,trab_ant_indigenas=?,trab_est_civil=?,trab_nacionalidad=?,trab_prev_salud=?,trab_prev_salud_d=?,trab_prev_social=? WHERE encuesta_id=?'
        ,[trab_dir_calle,trab_dir_numero,trab_dir_sector,trab_tel_fijo,trab_tel_movil,trab_fec_nacimiento,trab_genero,trab_jefe_familia,trab_ant_indigenas,trab_est_civil,trab_nacionalidad,trab_prev_salud,trab_prev_salud_d,trab_prev_social,id]);
        //alert('se guardo: '+trab_dir_calle);
        }); 
    }); 
    location.href="../Pages/pagina3.html";
}

function crear_encuesta_educacion(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_educacion(encuesta_id,edu_nivel_esc,edu_tipo_est,edu_ult_curso,edu_anio_egreso,edu_estudiando,edu_becas) VALUES(?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','']);
    });         
}
function guardar_encuesta_educacion(){
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var edu_nivel_esc=capturar("educacion");  //document.getElementById('edu_nivel_esc').value;
        var edu_tipo_est=capturar("edu_tipo_est");  //document.getElementById('edu_tipo_est').value;
        var edu_ult_curso=capturar("edu_ult_curso"); //document.getElementById('edu_ult_curso').value;
        var edu_anio_egreso=document.getElementById('edu_anio_egreso').value;
        var edu_estudiando=capturar("edu_estudiando"); //document.getElementById('edu_estudiando').value;
        var edu_becas=capturar_checkbox("edu_becas");  //document.getElementById('edu_becas').value;
        tx.executeSql('UPDATE encuesta_educacion SET edu_nivel_esc=?,edu_tipo_est=?,edu_ult_curso=?,edu_anio_egreso=?,edu_estudiando=?,edu_becas=? WHERE encuesta_id=?'
        ,[edu_nivel_esc,edu_tipo_est,edu_ult_curso,edu_anio_egreso,edu_estudiando,edu_becas,id]);
         //alert('se guardo: '+encuesta_id);
        });  
    }); 
    location.href="../Pages/pagina4.html";
}

function crear_encuesta_salud(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_salud(encuesta_id,sad_cont_menores,sad_cons_drogas,sad_cons_drogas_d,sad_pat_ges,sad_usa_prevision,sad_cond_permanente) VALUES(?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','']);
    });         
}
function guardar_encuesta_salud(){
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var sad_cont_menores=capturar("n_control"); //document.getElementById('sad_cont_menores').value;
        var sad_cons_drogas=capturar("drogas"); //document.getElementById('sad_cons_drogas').value;
        var sad_cons_drogas_d=document.getElementById('sad_cons_drogas_d').value;
        var sad_pat_ges=document.getElementById('sad_pat_ges').value;
        var sad_usa_prevision=capturar("usa_prev"); //document.getElementById('sad_usa_prevision').value;
        var sad_cond_permanente=capturar_checkbox("cronico"); //document.getElementById('sad_cond_permanente').value;
        tx.executeSql('UPDATE encuesta_salud SET sad_cont_menores=?,sad_cons_drogas=?,sad_cons_drogas_d=?,sad_pat_ges=?,sad_usa_prevision=?,sad_cond_permanente=? WHERE encuesta_id=?'
        ,[sad_cont_menores,sad_cons_drogas,sad_cons_drogas_d,sad_pat_ges,sad_usa_prevision,sad_cond_permanente,id]);
        // alert('se guardo: '+encuesta_id);
        });
    });
    location.href="../Pages/pagina5.html";
}

function crear_encuesta_familia(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_familia(encuesta_id,fam_run,fam_dv,fam_nombres,fam_apellido_p,fam_apellido_m,fam_fec_nacimiento,fam_genero,fam_nac_chilena) VALUES(?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','']);
    });         
}
function guardar_encuesta_familia(){
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var fam_run=document.getElementById('fam_run').value;
        var fam_dv=document.getElementById('fam_dv').value;
        var fam_nombres=document.getElementById('fam_nombres').value;
        var fam_apellido_p=document.getElementById('fam_apellido_p').value;
        var fam_apellido_m=document.getElementById('fam_apellido_m').value;
        var fam_fec_nacimiento=document.getElementById('fam_fec_nacimiento').value;
        var fam_genero=capturar("fam_genero"); //document.getElementById('fam_genero').value;
        var fam_nac_chilena=capturar("nacionalidad_fam"); //document.getElementById('fam_nac_chilena').value;
        tx.executeSql('UPDATE encuesta_familia SET fam_run=?,fam_dv=?,fam_nombres=?,fam_apellido_p=?,fam_apellido_m=?,fam_fec_nacimiento=?,fam_genero=?,fam_nac_chilena=? WHERE encuesta_id=?'
        ,[fam_run,fam_dv,fam_nombres,fam_apellido_p,fam_apellido_m,fam_fec_nacimiento,fam_genero,fam_nac_chilena,id]);
         //alert('se guardo: '+encuesta_id);
        }); 
    });
    location.href="../Pages/pagina7.html";
}

function crear_encuesta_vivienda(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_vivienda(encuesta_id,viv_tenencia,viv_sitio,viv_post_subsidio,viv_libreta,viv_libreta_anio,viv_monto_ahorro,viv_fam_ocupante,viv_num_personas,viv_num_dormitorios,viv_prov_agua,viv_sub_agua,viv_ener_electrica,viv_elim_excretas,viv_reg_hogares,viv_tramo_grupo,viv_ben_subsidio,viv_otro_subsidio) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','','','','','','','','','','']);
    });         
}
function guardar_encuesta_vivienda(){
    id_ultimo('SELECT * FROM encuesta;',function (id){
        db.transaction(function (tx) {
        var viv_tenencia=capturar("viv_tenencia"); //document.getElementById('viv_tenencia').value;
        var viv_sitio=capturar("sit_tenencia"); //document.getElementById('viv_sitio').value;
        var viv_post_subsidio=capturar("p_subsidio"); //document.getElementById('viv_post_subsidio').value;
        var viv_libreta=capturar("libreta"); //document.getElementById('viv_libreta').value;
        var viv_libreta_anio=document.getElementById('viv_libreta_anio').value;
        var viv_monto_ahorro=document.getElementById('viv_monto_ahorro').value;
        var viv_fam_ocupante=capturar("ocupante"); // document.getElementById('viv_fam_ocupante').value;
        var viv_num_personas=document.getElementById('viv_num_personas').value;
        var viv_num_dormitorios=document.getElementById('viv_num_dormitorios').value;
        var viv_prov_agua=capturar("agua"); //document.getElementById('viv_prov_agua').value;
        var viv_sub_agua=capturar("s_agua"); //document.getElementById('viv_sub_agua').value;
        var viv_ener_electrica=capturar("energia"); //document.getElementById('viv_ener_electrica').value;
        var viv_elim_excretas=capturar("excretas"); //document.getElementById('viv_elim_excretas').value;
        var viv_reg_hogares=capturar("registro_hogares"); //document.getElementById('viv_reg_hogares').value;
        var viv_tramo_grupo=capturar("e_encuesta"); //document.getElementById('viv_tramo_grupo').value;
        var viv_ben_subsidio=capturar("benef_sub"); //document.getElementById('viv_ben_subsidio').value;
        var viv_otro_subsidio=capturar_checkbox("bonos"); //document.getElementById('viv_otro_subsidio').value;
        tx.executeSql('UPDATE encuesta_vivienda SET viv_tenencia=?,viv_sitio=?,viv_post_subsidio=?,viv_libreta=?,viv_libreta_anio=?,viv_monto_ahorro=?,viv_fam_ocupante=?,viv_num_personas=?,viv_num_dormitorios=?,viv_prov_agua=?,viv_sub_agua=?,viv_ener_electrica=?,viv_elim_excretas=?,viv_reg_hogares=?,viv_tramo_grupo=?,viv_ben_subsidio=?,viv_otro_subsidio=? WHERE encuesta_id=?'
        ,[viv_tenencia,viv_sitio,viv_post_subsidio,viv_libreta,viv_libreta_anio,viv_monto_ahorro,viv_fam_ocupante,viv_num_personas,viv_num_dormitorios,viv_prov_agua,viv_sub_agua,viv_ener_electrica,viv_elim_excretas,viv_reg_hogares,viv_tramo_grupo,viv_ben_subsidio,viv_otro_subsidio,id]);
        // alert('se guardo: '+encuesta_id);
        }); 
    }); 
    location.href="../Pages/pagina6.html";
}

function crear_familia_datos(id_u){
    
    db.transaction(function (tx) { 
        tx.executeSql('INSERT INTO familia_datos(encuesta_familia_id,fam_jefe_familia,fam_es_carga,fam_parentezco,fam_ant_indigena,fam_padre_profesor,fam_cond_perm,fam_ges,fam_usa_prevsalud,fam_trabajando,fam_sit_contrato,fam_sit_nolaboral,fam_det_pension,fam_meses_cesante,fam_inicio_activ,fam_matriculado,fam_nivel_educ,fam_tipo_est,fam_ult_curso,fam_fin_estudios,fam_rindio_psu,fam_anio_psu,fam_puntaje_psu,fam_ult_promedio,fam_fin_educsup,fam_ibruto_mes1,fam_ibruto_mes2,fam_ibruto_mes3,fam_iliquido_mes1,fam_iliquido_mes2,fam_iliquido_mes3,fam_rec_pension,fam_pension_mes1,fam_pension_mes2,fam_pension_mes3,fam_rec_otros,fam_otros_mes1,fam_otros_mes2,fam_otros_mes3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    });         
}
function guardar_familia_datos(){
    id_ultimo('SELECT * FROM encuesta_familia;',function (id){
    db.transaction(function (tx) { 
        var fam_jefe_familia=capturar("fam_jefe_familia"); //document.getElementById('fam_jefe_familia').value;
        var fam_es_carga=capturar("fam_es_carga"); //document.getElementById('fam_es_carga').value;
        var fam_parentezco=capturar("fam_parentezco"); //((document.getElementById('fam_parentezco').value;
        var fam_ant_indigena=capturar("fam_ant_indigena");  //document.getElementById('fam_ant_indigena').value;
        var fam_padre_profesor= capturar("fam_padre_profesor"); //document.getElementById('fam_padre_profesor').value;
        var fam_cond_perm=capturar_checkbox("fam_cond_perm");  //document.getElementById('fam_cond_perm').value;
        var fam_ges=document.getElementById('fam_ges').value;
        var fam_usa_prevsalud=capturar("fam_usa_prevsalud"); //document.getElementById('fam_usa_prevsalud').value;
        var fam_trabajando=capturar("fam_trabajando"); //document.getElementById('fam_trabajando').value;
        var fam_sit_contrato=capturar("fam_sit_contrato"); //document.getElementById('fam_sit_contrato').value;
        var fam_sit_nolaboral=capturar("fam_sit_nolaboral"); //document.getElementById('fam_sit_nolaboral').value;
        var fam_det_pension=capturar("fam_det_pension"); //document.getElementById('fam_det_pension').value;
        var fam_meses_cesante=document.getElementById('fam_meses_cesante').value;
        var fam_inicio_activ=capturar("fam_inicio_activ"); //document.getElementById('fam_inicio_activ').value;
        var fam_matriculado=capturar("fam_matriculado"); //document.getElementById('fam_matriculado').value;
        var fam_nivel_educ=capturar("fam_nivel_educ");  //document.getElementById('fam_nivel_educ').value;
        var fam_tipo_est=capturar("fam_tipo_est");  //document.getElementById('fam_tipo_est').value;
        var fam_ult_curso=capturar("fam_ult_curso"); //document.getElementById('fam_ult_curso').value;
        var fam_fin_estudios=document.getElementById('fam_fin_estudios').value;
        var fam_rindio_psu=document.getElementById('fam_rindio_psu').value;
        var fam_anio_psu=document.getElementById('fam_anio_psu').value;
        var fam_puntaje_psu=document.getElementById('fam_puntaje_psu').value;
        var fam_ult_promedio=document.getElementById('fam_ult_promedio').value;
        var fam_fin_educsup=capturar("fam_fin_educsup"); //   document.getElementById('fam_fin_educsup').value;
        var fam_ibruto_mes1=document.getElementById('fam_ibruto_mes1').value;
        var fam_ibruto_mes2=document.getElementById('fam_ibruto_mes2').value;
        var fam_ibruto_mes3=document.getElementById('fam_ibruto_mes3').value;
        var fam_iliquido_mes1=document.getElementById('fam_iliquido_mes1').value;
        var fam_iliquido_mes2=document.getElementById('fam_iliquido_mes2').value;
        var fam_iliquido_mes3=document.getElementById('fam_iliquido_mes3').value;
        var fam_rec_pension= capturar("fam_rec_pension"); //document.getElementById('fam_rec_pension').value;
        var fam_pension_mes1=document.getElementById('fam_pension_mes1').value;
        var fam_pension_mes2=document.getElementById('fam_pension_mes2').value;
        var fam_pension_mes3=document.getElementById('fam_pension_mes3').value;
        var fam_rec_otros= capturar("fam_rec_otros"); //document.getElementById('fam_rec_otros').value;
        var fam_otros_mes1=document.getElementById('fam_otros_mes1').value;
        var fam_otros_mes2=document.getElementById('fam_otros_mes2').value;
        var fam_otros_mes3=document.getElementById('fam_otros_mes3').value;
        tx.executeSql('UPDATE familia_datos SET fam_jefe_familia=?,fam_es_carga=?,fam_parentezco=?,fam_ant_indigena=?,fam_padre_profesor=?,fam_cond_perm=?,fam_ges=?,fam_usa_prevsalud=?,fam_trabajando=?,fam_sit_contrato=?,fam_sit_nolaboral=?,fam_det_pension=?,fam_meses_cesante=?,fam_inicio_activ=?,fam_matriculado=?,fam_nivel_educ=?,fam_tipo_est=?,fam_ult_curso=?,fam_fin_estudios=?,fam_rindio_psu=?,fam_anio_psu=?,fam_puntaje_psu=?,fam_ult_promedio=?,fam_fin_educsup=?,fam_ibruto_mes1=?,fam_ibruto_mes2=?,fam_ibruto_mes3=?,fam_iliquido_mes1=?,fam_iliquido_mes2=?,fam_iliquido_mes3=?,fam_rec_pension=?,fam_pension_mes1=?,fam_pension_mes2=?,fam_pension_mes3=?,fam_rec_otros=?,fam_otros_mes1=?,fam_otros_mes2=?,fam_otros_mes3=? WHERE encuesta_familia_id=?'
        ,[fam_jefe_familia,fam_es_carga,fam_parentezco,fam_ant_indigena,fam_padre_profesor,fam_cond_perm,fam_ges,fam_usa_prevsalud,fam_trabajando,fam_sit_contrato,fam_sit_nolaboral,fam_det_pension,fam_meses_cesante,fam_inicio_activ,fam_matriculado,fam_nivel_educ,fam_tipo_est,fam_ult_curso,fam_fin_estudios,fam_rindio_psu,fam_anio_psu,fam_puntaje_psu,fam_ult_promedio,fam_fin_educsup,fam_ibruto_mes1,fam_ibruto_mes2,fam_ibruto_mes3,fam_iliquido_mes1,fam_iliquido_mes2,fam_iliquido_mes3,fam_rec_pension,fam_pension_mes1,fam_pension_mes2,fam_pension_mes3,fam_rec_otros,fam_otros_mes1,fam_otros_mes2,fam_otros_mes3,id]);
         //alert('se guardo: '+encuesta_familia_id);
        });
    });
    //location.href="../index.html";
}

function nueva_encuesta(){
    
    crear_encuesta();
    id_ultimo('SELECT * FROM encuesta;',function (id){
    crear_encuesta_trabajador(id);
    crear_encuesta_educacion(id);
    crear_encuesta_salud(id);
    crear_encuesta_vivienda(id);
    agregar_familiar(id);
    });
}

function agregar_familiar(id){
    crear_encuesta_familia(id);
    id_ultimo_familiar('SELECT * FROM encuesta_familia;',function (id_familiar){
    crear_familia_datos(id_familiar);
    });  
}

function id_ultimo(query,callBack){
    var id;
    db.transaction(function (tx) {
            tx.executeSql(query, [], function (tx, results) {
               var len = results.rows.length;               
               id =results.rows.item(len-1).encuesta_id; 
               callBack(id);
            }, null);
        });
        //alert(id_encuesta);
}

function id_ultimo_familiar(query,callBack){
    var id_familiar;
    db.transaction(function (tx) {
            tx.executeSql(query, [], function (tx, results) {
               var len = results.rows.length;               
               id_familiar =results.rows.item(len-1).encuesta_familia_id; 
               callBack(id_familiar);
            }, null);
        });
        //alert(id_encuesta);
}

function begin(){
    nueva_encuesta();
   window.open("Pages/pagina1.html");      
}

function borrar_db(){
    db.transaction(function (tx) {
             // tx.executeSql('DELETE FROM LOGS WHERE id=1');
            //tx.executeSql('DROP TABLE LOGS');
            tx.executeSql('DROP TABLE encuesta');
            tx.executeSql('DROP TABLE encuesta_educacion');
            tx.executeSql('DROP TABLE encuesta_salud');
            tx.executeSql('DROP TABLE encuesta_familia'); 
            tx.executeSql('DROP TABLE encuesta_vivienda'); 
            tx.executeSql('DROP TABLE encuesta_trabajador'); 
            tx.executeSql('DROP TABLE familia_datos'); 
         });
}

function capturar(nombre)
{
    var resultado="0";
 
    var porNombre=document.getElementsByName(nombre);
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
    for(var i=0;i<porNombre.length;i++)
    {
        if(porNombre[i].checked)
            resultado=porNombre[i].value;
    }
    return resultado;
}

function capturar_checkbox(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [], cadena="";
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    for (var i=0;i<values.length;i++)
    {
        cadena=cadena+values[i]+"/";
    }
    cadena=cadena.substr(0,cadena.length-1);
    return cadena;
}

function volver_inicio(){
    location.href="../index.html";
}
app.initialize();