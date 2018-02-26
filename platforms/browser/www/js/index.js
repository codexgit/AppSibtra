
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
var id_a;

function Mostrar_familiares(){
     
         var msg, msg2;	

         db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_familia WHERE encuesta_id='+localStorage.getItem('actual').toString(), [], function (tx, results) {
               var len = results.rows.length, i;
               msg = "<p>Found rows: " + len + "</p>";
               document.querySelector('#status').innerHTML +=  msg;
					
               for (i = 0; i < len; i++){
                  msg = "<p><b>" + results.rows.item(i).fam_nombres +"  "+ results.rows.item(i).fam_apellido_p +"</p>";
                 // msg2 = "<p><b>  " + results.rows.item(i).fam_apellido_p + "</b></p>";
                  //alert(results.rows.item(i).log);
                  document.querySelector('#status').innerHTML +=  msg;
                 // document.querySelector('#status').innerHTML +=  msg2;
               }
            }, null);
         });
}

function Mostrar_registros(){
    
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_familia WHERE encuesta_id='+localStorage.getItem('actual').toString(), [], function (tx, results) {
               var len = results.rows.length, i;
               for (var trabajador of results) {
                    $("#listaTrabajadores").append("<tr>");
                    $("#listaTrabajadores").append("<th scope='row'>" + trabajador['enc_run'] + "</th>");
                    $("#listaTrabajadores").append("<td>" + trabajador['enc_apellido_p'] + "</td>");
                    $("#listaTrabajadores").append("<td>" + trabajador['enc_nombres'] + "</td>");
                    $("#listaTrabajadores").append("<td> COMUNA</td>");
                    $("#listaTrabajadores").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + trabajador['filial_empresa_id'] + ")' value='Ver Encuestas'>    </td>");
                    //$("#listaEmpresas").append("<td> <input type='button' class='btn btn-primary' onClick='chevar(" + filemp['filial_empresa_id'] + ")' value='Agregar Encuesta'>    </td>");
                    $("#listaTrabajadores").append("</tr>");
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
        tx.executeSql('SELECT * FROM encuesta ',[],function (tx, results) {
               var len = results.rows.length;               
               id =results.rows.item(len-1).encuesta_id; 
               localStorage.setItem('actual', id);
            }, null);
        
    });         
}
function guardar_encuesta(){
    
    //id_ultimo('SELECT * FROM encuesta;',function (id){
    if(esValido()){
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
        //alert(localStorage.getItem('ultimo_registrado'));
        tx.executeSql('UPDATE encuesta SET filial_empresa_id=?,enc_codigo=?,enc_run=?,enc_dv=?,enc_nombres=?,enc_apellido_p=?,enc_apellido_m=?,comuna_id=?,usuario_id=?,enc_fecha=?,enc_estado=? WHERE encuesta_id=?',
        [filial_empresa_id,enc_codigo,enc_run,enc_dv,enc_nombres,enc_apellido_p,enc_apellido_m,comuna_id,usuario_id,enc_fecha,enc_estado,localStorage.getItem('actual')]);
        });
    //});
    location.href="../Pages/pagina2.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_encuesta_trabajador(id_u){
    
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_trabajador(encuesta_id,trab_dir_calle,trab_dir_numero,trab_dir_sector,trab_tel_fijo,trab_tel_movil,trab_fec_nacimiento,trab_genero,trab_jefe_familia,trab_ant_indigenas,trab_est_civil,trab_nacionalidad,trab_prev_salud,trab_prev_salud_d,trab_prev_social) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','','','','','','','']);
    }); 
}
function guardar_encuesta_trabajador(){
 
    if(esValido()){
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
        ,[trab_dir_calle,trab_dir_numero,trab_dir_sector,trab_tel_fijo,trab_tel_movil,trab_fec_nacimiento,trab_genero,trab_jefe_familia,trab_ant_indigenas,trab_est_civil,trab_nacionalidad,trab_prev_salud,trab_prev_salud_d,trab_prev_social,localStorage.getItem('actual')]);
        //alert('se guardo: '+trab_dir_calle);
        }); 
    //}); 
    location.href="../Pages/pagina3.html";
    }
      else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_encuesta_educacion(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_educacion(encuesta_id,edu_nivel_esc,edu_tipo_est,edu_ult_curso,edu_anio_egreso,edu_estudiando,edu_becas) VALUES(?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','']);
    });         
}
function guardar_encuesta_educacion(){
    if(esValido()){
        db.transaction(function (tx) {
        var edu_nivel_esc=capturar("educacion");  //document.getElementById('edu_nivel_esc').value;
        var edu_tipo_est=capturar("edu_tipo_est");  //document.getElementById('edu_tipo_est').value;
        var edu_ult_curso=capturar("edu_ult_curso"); //document.getElementById('edu_ult_curso').value;
        var edu_anio_egreso=document.getElementById('edu_anio_egreso').value;
        var edu_estudiando=capturar("edu_estudiando"); //document.getElementById('edu_estudiando').value;
        var edu_becas=capturar_checkbox("edu_becas[]");  //document.getElementById('edu_becas').value;
        tx.executeSql('UPDATE encuesta_educacion SET edu_nivel_esc=?,edu_tipo_est=?,edu_ult_curso=?,edu_anio_egreso=?,edu_estudiando=?,edu_becas=? WHERE encuesta_id=?'
        ,[edu_nivel_esc,edu_tipo_est,edu_ult_curso,edu_anio_egreso,edu_estudiando,edu_becas,localStorage.getItem('actual')]);
         //alert('se guardo: '+encuesta_id);
        });  
    //}); 
    location.href="../Pages/pagina4.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_encuesta_salud(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_salud(encuesta_id,sad_cont_menores,sad_cons_drogas,sad_cons_drogas_d,sad_pat_ges,sad_usa_prevision,sad_cond_permanente) VALUES(?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','']);
    });         
}
function guardar_encuesta_salud(){
    if(esValido()){
        db.transaction(function (tx) {
        var sad_cont_menores=capturar("n_control"); //document.getElementById('sad_cont_menores').value;
        var sad_cons_drogas=capturar("drogas"); //document.getElementById('sad_cons_drogas').value;
        var sad_cons_drogas_d=document.getElementById('sad_cons_drogas_d').value;
        var sad_pat_ges=document.getElementById('sad_pat_ges').value;
        var sad_usa_prevision=capturar("usa_prev"); //document.getElementById('sad_usa_prevision').value;
        var sad_cond_permanente=capturar_checkbox("cronico"); //document.getElementById('sad_cond_permanente').value;
        tx.executeSql('UPDATE encuesta_salud SET sad_cont_menores=?,sad_cons_drogas=?,sad_cons_drogas_d=?,sad_pat_ges=?,sad_usa_prevision=?,sad_cond_permanente=? WHERE encuesta_id=?'
        ,[sad_cont_menores,sad_cons_drogas,sad_cons_drogas_d,sad_pat_ges,sad_usa_prevision,sad_cond_permanente,localStorage.getItem('actual')]);
        // alert('se guardo: '+encuesta_id);
        });
    //});
    location.href="../Pages/pagina5.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_encuesta_familia(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_familia(encuesta_id,fam_run,fam_dv,fam_nombres,fam_apellido_p,fam_apellido_m,fam_fec_nacimiento,fam_genero,fam_nac_chilena) VALUES(?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','']);
    });         
}
function guardar_encuesta_familia(){
     if(esValido()){
        db.transaction(function (tx) {
        var fam_run=document.getElementById('fam_run').value;
        var fam_dv=document.getElementById('fam_dv').value;
        var fam_nombres=document.getElementById('fam_nombres').value;
        var fam_apellido_p=document.getElementById('fam_apellido_p').value;
        var fam_apellido_m=document.getElementById('fam_apellido_m').value;
        var fam_fec_nacimiento=document.getElementById('fam_fec_nacimiento').value;
        var fam_genero=capturar("fam_genero"); //document.getElementById('fam_genero').value;
        var fam_nac_chilena=capturar("nacionalidad_fam"); //document.getElementById('fam_nac_chilena').value;
        tx.executeSql('UPDATE encuesta_familia SET fam_run=?,fam_dv=?,fam_nombres=?,fam_apellido_p=?,fam_apellido_m=?,fam_fec_nacimiento=?,fam_genero=?,fam_nac_chilena=? WHERE encuesta_familia_id=?'
        ,[fam_run,fam_dv,fam_nombres,fam_apellido_p,fam_apellido_m,fam_fec_nacimiento,fam_genero,fam_nac_chilena,localStorage.getItem('ultimo_familiar')]);
         //alert(localStorage.getItem('ultimo_familiar'));
        }); 
   // });
    location.href="../Pages/pagina7.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_encuesta_vivienda(id_u){
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO encuesta_vivienda(encuesta_id,viv_tenencia,viv_sitio,viv_post_subsidio,viv_libreta,viv_libreta_anio,viv_monto_ahorro,viv_fam_ocupante,viv_num_personas,viv_num_dormitorios,viv_prov_agua,viv_sub_agua,viv_ener_electrica,viv_elim_excretas,viv_reg_hogares,viv_tramo_grupo,viv_ben_subsidio,viv_otro_subsidio) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        ,[id_u,'','','','','','','','','','','','','','','','','']);
    });         
}
function guardar_encuesta_vivienda(){
     if(esValido()){
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
        ,[viv_tenencia,viv_sitio,viv_post_subsidio,viv_libreta,viv_libreta_anio,viv_monto_ahorro,viv_fam_ocupante,viv_num_personas,viv_num_dormitorios,viv_prov_agua,viv_sub_agua,viv_ener_electrica,viv_elim_excretas,viv_reg_hogares,viv_tramo_grupo,viv_ben_subsidio,viv_otro_subsidio,localStorage.getItem('actual')]);
        }); 
    location.href="../Pages/pagina5ymedio.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}

function crear_familia_datos(id_u){
    
    db.transaction(function (tx) { 
        tx.executeSql('SELECT * FROM familia_datos WHERE encuesta_familia_id=?',[id_u],function (tx, results) {
               if( results.rows.length===0){  
               tx.executeSql('INSERT INTO familia_datos(encuesta_familia_id,fam_jefe_familia,fam_es_carga,fam_parentezco,fam_ant_indigena,fam_padre_profesor,fam_cond_perm,fam_ges,fam_usa_prevsalud,fam_trabajando,fam_sit_contrato,fam_sit_nolaboral,fam_det_pension,fam_meses_cesante,fam_inicio_activ,fam_matriculado,fam_nivel_educ,fam_tipo_est,fam_ult_curso,fam_fin_estudios,fam_rindio_psu,fam_anio_psu,fam_puntaje_psu,fam_ult_promedio,fam_fin_educsup,fam_ibruto_mes1,fam_ibruto_mes2,fam_ibruto_mes3,fam_iliquido_mes1,fam_iliquido_mes2,fam_iliquido_mes3,fam_rec_pension,fam_pension_mes1,fam_pension_mes2,fam_pension_mes3,fam_rec_otros,fam_otros_mes1,fam_otros_mes2,fam_otros_mes3) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
               ,[id_u,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
               }
            }, null);
        
    });         
}
function guardar_familia_datos(){
     
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
        var fam_rindio_psu=capturar("fam_rindio_psu"); //document.getElementById('fam_rindio_psu').value;
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
        ,[fam_jefe_familia,fam_es_carga,fam_parentezco,fam_ant_indigena,fam_padre_profesor,fam_cond_perm,fam_ges,fam_usa_prevsalud,fam_trabajando,fam_sit_contrato,fam_sit_nolaboral,fam_det_pension,fam_meses_cesante,fam_inicio_activ,fam_matriculado,fam_nivel_educ,fam_tipo_est,fam_ult_curso,fam_fin_estudios,fam_rindio_psu,fam_anio_psu,fam_puntaje_psu,fam_ult_promedio,fam_fin_educsup,fam_ibruto_mes1,fam_ibruto_mes2,fam_ibruto_mes3,fam_iliquido_mes1,fam_iliquido_mes2,fam_iliquido_mes3,fam_rec_pension,fam_pension_mes1,fam_pension_mes2,fam_pension_mes3,fam_rec_otros,fam_otros_mes1,fam_otros_mes2,fam_otros_mes3,localStorage.getItem('ultimo_familiar')]);
        });
  
}

function guardar_seguir(){
    if(esValido()){
    guardar_familia_datos();
    location.href="../Pages/pagina5ymedio.html";
    }
    else {
        alert("Ingrese los campos correctamente para continuar");
    }
}
function guardar_finalizar(){
    guardar_familia_datos();
    location.href="../index.html";
}

function nueva_encuesta(){
    crear_encuesta();
    //alert(localStorage.getItem('encuesta_id'));
    window.location="Pages/pagina1.html";
   // window.open("Pages/pagina1.html"); 
}
function crear_encuestas_id(id){
    db.transaction(function (tx) {   
            tx.executeSql('SELECT * FROM encuesta_trabajador WHERE encuesta_id=?',[id],function (tx, results) {
               if( results.rows.length===0){  
                crear_encuesta_trabajador(id);
                crear_encuesta_educacion(id);
                crear_encuesta_salud(id);
                crear_encuesta_vivienda(id);
                localStorage.setItem('actual', id);
               }
            }, null);
   
    //alert(localStorage.getItem('ultimo_registrado'));
    });
}

function agregar_familiar(){
    crear_encuesta_familia(localStorage.getItem('actual')); 
    //window.close("../Pages/pagina5ymedio.html");
    //window.open("../Pages/pagina6.html");
    //alert(localStorage.getItem('ultimo_registrado'));
    window.location="../Pages/pagina6.html";
    //localStorage.clear('encuesta_id');
}

function agregar_datos_familiar(){
    id_ultimo_familiar('SELECT * FROM encuesta_familia;',function (id_familiar){   
    crear_familia_datos(id_familiar);
    //alert(id_familiar);
    localStorage.setItem('ultimo_familiar',id_familiar);
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
}

function id_actual(){
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta;', [], function (tx, results) {
               var len = results.rows.length;               
               id =results.rows.item(len-1).encuesta_id; 
               
            }, null);       
    });   
}

function id_ultimo_familiar(query,callBack){
    var id_familiar;
    db.transaction(function (tx) {
            tx.executeSql(query, [], function (tx, results) {
               var len = results.rows.length;               
               id_familiar =results.rows.item(len-1).encuesta_familia_id; 
               callBack(id_familiar);
               //alert(id_familiar);
            }, null);
        });
        //alert(id_encuesta);
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

function setear_checkbox(checkboxName,array) {
    for (var i=0;i<array.length;i++)
    {
        var valido=true, valor='';
        for(i;i<array.length&&valido===true;i++)
        {
            if(array[i]!=='/')
                valor=valor+array[i].toString();
            else {
                valido=false;
                i--;
            }
        }
        document.getElementsByName(checkboxName).item(parseInt(valor)-1).checked=true;
        //alert(valor);
    }  
}

function volver_inicio(){
    location.href="../index.html";
}

function llenar_encuesta(){
    //localStorage.setItem('actual', 1);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta WHERE encuesta_id=?',[localStorage.getItem('actual')], function (tx, results) {            
              document.getElementById('enc_run').value = results.rows.item(0).enc_run;
              document.getElementById('enc_dv').value = results.rows.item(0).enc_dv;
              document.getElementById('enc_nombres').value = results.rows.item(0).enc_nombres;
              document.getElementById('enc_apellido_p').value = results.rows.item(0).enc_apellido_p;
              document.getElementById('enc_apellido_m').value = results.rows.item(0).enc_apellido_m;
              document.getElementById('comuna_id').value = results.rows.item(0).comuna_id;
              document.getElementById('usuario_id').value = results.rows.item(0).usuario_id;
              document.getElementById('enc_fecha').value = results.rows.item(0).enc_fecha;
              document.getElementById('enc_estado').value = results.rows.item(0).enc_estado;
                 //alert(results.rows.item(0).enc_run);
            }, null);         
        });     
} 

function llenar_encuesta_trabajador(){
    //localStorage.setItem('actual', 1);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_trabajador WHERE encuesta_id=?',[localStorage.getItem('actual')], function (tx, results) {            
              document.getElementById('trab_dir_calle').value = results.rows.item(0).trab_dir_calle;
              document.getElementById('trab_dir_numero').value = results.rows.item(0).trab_dir_numero;
              document.getElementById('trab_dir_sector').value = results.rows.item(0).trab_dir_sector;
              document.getElementById('trab_tel_fijo').value = results.rows.item(0).trab_tel_fijo;
              document.getElementById('trab_tel_movil').value = results.rows.item(0).trab_tel_movil;
              document.getElementById('trab_fec_nacimiento').value = results.rows.item(0).trab_fec_nacimiento;
              document.gen.genero.value = results.rows.item(0).trab_genero;
              document.jef.jefe.value = results.rows.item(0).trab_jefe_familia;
              document.indi.indigena.value = results.rows.item(0).trab_ant_indigenas;
              document.civil.e_civil.value = results.rows.item(0).trab_est_civil;
              document.nacio.nacionalidad.value = results.rows.item(0).trab_nacionalidad;
              document.prev.p_salud.value = results.rows.item(0).trab_prev_salud;
              document.getElementById('trab_prev_salud_d').value = results.rows.item(0).trab_prev_salud_d;
              document.getElementById('trab_prev_social').value = results.rows.item(0).trab_prev_social;
                 //alert(results.rows.item(0).enc_run);
            }, null);         
        });     
} 

function llenar_encuesta_educacion(){
    //localStorage.setItem('actual', 3);
    var i=0;
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_educacion WHERE encuesta_id=?',[localStorage.getItem('actual')], function (tx, results) {            
              document.nivel_edu.educacion.value = results.rows.item(0).edu_nivel_esc;
              document.t_est.edu_tipo_est.value = results.rows.item(0).edu_tipo_est;
              document.u_cur.edu_ult_curso.value = results.rows.item(0).edu_ult_curso;
              document.getElementById('edu_anio_egreso').value = results.rows.item(0).edu_anio_egreso;
              document.a_estu.edu_estudiando.value = results.rows.item(0).edu_estudiando; 
              setear_checkbox('edu_becas[]',results.rows.item(0).edu_becas);
              //document.e_becas.edu_becas.value = results.rows.item(0).edu_becas;
              
                
            }, null);         
        });     
} 

function llenar_encuesta_salud(){
    //localStorage.setItem('actual', 6);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_salud WHERE encuesta_id=?',[localStorage.getItem('actual')], function (tx, results) {            
              document.n_cont.n_control.value = results.rows.item(0).sad_cont_menores;
              document.c_drog.drogas.value = results.rows.item(0).sad_cons_drogas;
              document.getElementById('sad_cons_drogas_d').value = results.rows.item(0).sad_cons_drogas_d;
              document.getElementById('sad_pat_ges').value = results.rows.item(0).sad_pat_ges;
              document.u_prev.usa_prev.value = results.rows.item(0).sad_usa_prevision;
              setear_checkbox('cronico',results.rows.item(0).sad_cond_permanente);
            }, null);         
        });     
} 

function llenar_encuesta_vivienda(){
    //localStorage.setItem('actual', 1);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_vivienda WHERE encuesta_id=?',[localStorage.getItem('actual')], function (tx, results) {            
              document.v_ten.viv_tenencia.value = results.rows.item(0).viv_tenencia;
              document.s_ten.sit_tenencia.value = results.rows.item(0).viv_sitio;
              document.p_sub.p_subsidio.value = results.rows.item(0).viv_post_subsidio;
              document.t_lib.libreta.value = results.rows.item(0).viv_libreta;
              document.getElementById('viv_libreta_anio').value = results.rows.item(0).viv_libreta_anio;
              document.getElementById('viv_monto_ahorro').value = results.rows.item(0).viv_monto_ahorro;
              document.f_ocu.ocupante.value = results.rows.item(0).viv_fam_ocupante;
              document.getElementById('viv_num_personas').value = results.rows.item(0).viv_num_personas;
              document.getElementById('viv_num_dormitorios').value = results.rows.item(0).viv_num_dormitorios;
              document.v_agua.agua.value = results.rows.item(0).viv_prov_agua;
              document.s_agu.s_agua.value = results.rows.item(0).viv_sub_agua;
              document.v_ene.energia.value = results.rows.item(0).viv_ener_electrica;
              document.v_exc.excretas.value = results.rows.item(0).viv_elim_excretas;
              document.r_hog.registro_hogares.value = results.rows.item(0).viv_reg_hogares;
              document.e_enc.e_encuesta.value = results.rows.item(0).viv_tramo_grupo;
              document.v_ben.benef_sub.value = results.rows.item(0).viv_ben_subsidio;
              setear_checkbox("bonos",results.rows.item(0).viv_otro_subsidio);
            }, null);         
        });     
} 

function llenar_encuesta_familia(){
    //localStorage.setItem('actual', 1);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM encuesta_familia WHERE encuesta_familia_id=?',[localStorage.getItem('ultimo_familiar')], function (tx, results) {            
              document.getElementById('fam_run').value = results.rows.item(0).fam_run;
              document.getElementById('fam_dv').value = results.rows.item(0).fam_dv;
              document.getElementById('fam_nombres').value = results.rows.item(0).fam_nombres;
              document.getElementById('fam_apellido_p').value = results.rows.item(0).fam_apellido_p;
              document.getElementById('fam_apellido_m').value = results.rows.item(0).fam_apellido_m; 
              document.getElementById('fam_fec_nacimiento').value = results.rows.item(0).fam_fec_nacimiento;
              document.f_nac.nacionalidad_fam.value = results.rows.item(0).fam_nac_chilena;
              document.gen.fam_genero.value = results.rows.item(0).fam_genero;
            }, null);         
        });     
} 

function llenar_familia_datos(){
    //localStorage.setItem('actual', 1);
 
    db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM familia_datos WHERE encuesta_familia_id=?',[localStorage.getItem('ultimo_familiar')], function (tx, results) {            
              document.f_jefe.fam_jefe_familia.value = results.rows.item(0).fam_jefe_familia;
              document.f_carga.fam_es_carga.value = results.rows.item(0).fam_es_carga;
              document.f_paren.fam_parentezco.value = results.rows.item(0).fam_parentezco;
              document.f_indige.fam_ant_indigena.value = results.rows.item(0).fam_ant_indigena;
              document.f_prof.fam_padre_profesor.value = results.rows.item(0).fam_padre_profesor;
              setear_checkbox('fam_cond_perm',results.rows.item(0).fam_cond_perm);
              document.getElementById('fam_ges').value = results.rows.item(0).fam_ges;
              document.f_pre.fam_usa_prevsalud.value = results.rows.item(0).fam_usa_prevsalud;
              document.f_mayor.fam_trabajando.value = results.rows.item(0).fam_trabajando;
              document.f_contra.fam_sit_contrato.value = results.rows.item(0).fam_sit_contrato;
              document.f_lab.fam_sit_nolaboral.value = results.rows.item(0).fam_sit_nolaboral;
              document.f_nlab.fam_det_pension.value = results.rows.item(0).fam_det_pension;
              document.getElementById('fam_meses_cesante').value = results.rows.item(0).fam_meses_cesante;
              document.f_sii.fam_inicio_activ.value = results.rows.item(0).fam_inicio_activ;
              document.f_matri.fam_matriculado.value = results.rows.item(0).fam_matriculado;
              document.f_nivel.fam_nivel_educ.value = results.rows.item(0).fam_nivel_educ;
              document.f_est.fam_tipo_est.value = results.rows.item(0).fam_tipo_est;
              document.f_ult.fam_ult_curso.value = results.rows.item(0).fam_ult_curso;
              document.getElementById('fam_fin_estudios').value = results.rows.item(0).fam_fin_estudios;
              document.f_rpsu.fam_rindio_psu.value = results.rows.item(0).fam_rindio_psu;
              document.getElementById('fam_anio_psu').value = results.rows.item(0).fam_anio_psu;
              document.getElementById('fam_puntaje_psu').value = results.rows.item(0).fam_puntaje_psu;
              document.getElementById('fam_ult_promedio').value = results.rows.item(0).fam_ult_promedio;
              document.f_fincar.fam_fin_educsup.value = results.rows.item(0).fam_fin_educsup;
              document.getElementById('fam_ibruto_mes1').value = results.rows.item(0).fam_ibruto_mes1;
              document.getElementById('fam_ibruto_mes2').value = results.rows.item(0).fam_ibruto_mes2;
              document.getElementById('fam_ibruto_mes3').value = results.rows.item(0).fam_ibruto_mes3;
              document.getElementById('fam_iliquido_mes1').value = results.rows.item(0).fam_iliquido_mes1;
              document.getElementById('fam_iliquido_mes2').value = results.rows.item(0).fam_iliquido_mes2;
              document.getElementById('fam_iliquido_mes3').value = results.rows.item(0).fam_iliquido_mes3;
              document.f_recibe_pen.fam_rec_pension.value = results.rows.item(0).fam_rec_pension;
              document.getElementById('fam_pension_mes1').value = results.rows.item(0).fam_pension_mes1;
              document.getElementById('fam_pension_mes2').value = results.rows.item(0).fam_pension_mes2;
              document.getElementById('fam_pension_mes3').value = results.rows.item(0).fam_pension_mes3;
              document.f_rec_otro.fam_rec_otros.value = results.rows.item(0).fam_rec_otros;
              document.getElementById('fam_otros_mes1').value = results.rows.item(0).fam_otros_mes1;
              document.getElementById('fam_otros_mes2').value = results.rows.item(0).fam_otros_mes2;
              document.getElementById('fam_otros_mes3').value = results.rows.item(0).fam_otros_mes3;
            }, null);         
        });     
} 

app.initialize();