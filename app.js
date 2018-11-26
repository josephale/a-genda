var creados = 0;

function llamar(){
    console.log('voy a iniciar la funcion');
    var fch =document.getElementsByClassName('enterFecha')[0].value;
    if(fch === undefined || fch === '') return alert('you must put a date');
    fch = fch.split('-');
    var fecha = new Date(fch[0],(fch[1]-1),fch[2]);
    var content = document.getElementsByClassName('enterContenido')[0].value;
    if(content === undefined || content === '') return alert('you must write something here')
    var fab = document.getElementsByClassName('fab')[0];
    var frm = document.getElementsByClassName('formulario')[0];
    var modal = document.getElementsByClassName('modal')[0];
    document.getElementsByClassName('enterContenido')[0].value = null;
    document.getElementsByClassName('enterFecha')[0].value = null;
    frm.className = 'formulario';
    fab.className = 'fab';
    modal.className = 'modal';
    return crearTab(fecha, content);
}

function activeFab(){
    var modal = document.getElementsByClassName('modal')[0];
    var fab = document.getElementsByClassName('fab')[0];
    if(fab.className.includes('activo')){
        fab.className = 'fab';
        modal.className = 'modal';
    }else{
        fab.className += ' activo';
        modal.className += ' activo';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.className = 'modal';
            fab.className = 'fab';
        }
    }
    return fab;
}

function crearTab(fecha, content){
    console.log('ya se inicio')
    var mainDiv = this.crearElemento('div');



    var aInput = this.crearElemento(
        'input',
        'a-input',
        'a-Input'+creados,
        null,
        'checkbox'
    );
    mainDiv.appendChild(aInput);



    var aLabel = this.crearElemento(
        'label',
        'item-label',
        null,
        aInput.id
    );
    mainDiv.appendChild(aLabel);



    var aDate = this.crearElemento('div','fecha');
    var fch = fecha.getDate();
    if(fch < 10) fch = '0'+fch;
    aDate.appendChild(
        this.insertarTexto(crearElemento('h3'), fch)
    )
    aLabel.appendChild(aDate);



    var aDay = this.crearElemento('div','dia');
    aDay.appendChild(
        this.insertarTexto(
            this.crearElemento('p'),
            mes(fecha.getMonth())+' '+fecha.getFullYear())
    );
    aDay.appendChild(
        this.insertarTexto(
            this.crearElemento('span'), weekDay(fecha.getDay()))
    );
    aLabel.appendChild(aDay);



    var arrow = this.crearElemento('div','flecha');
    arrow.appendChild(this.crearElemento('i', 'arrow down'));
    aLabel.appendChild(arrow);


    var hiddenContent = this.insertarTexto(this.crearElemento('p','hid-content'), content);
    mainDiv.appendChild(hiddenContent);
    document.getElementById('agenda').appendChild(mainDiv);

    console.log(mainDiv);
    creados += 1;
}

function crearElemento(elem, clase, Id, aFor, aType){
    var elemento = document.createElement(elem);
    if(clase != undefined) elemento.className = clase;
    if(Id != undefined) elemento.id = Id;
    if(aFor != undefined) elemento.htmlFor = aFor;
    if(aType != undefined) elemento.type = aType;
    return elemento;
}

function insertarTexto(elem, texto){
    var t = document.createTextNode(texto);
    elem.appendChild(t);
    return elem;
}

function mes(month){
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return meses[month];
}

function weekDay(dia){
    var dias = ['Domingo','Lunes','Martes','Miércoles','Jueves',
        'Viernes','Sábado'];
    return dias[dia];
}

function noEnter(e) { 
    tecla = (document.all) ? e.keyCode :e.which;
    if(tecla == 13) llamar();
    return (tecla!=13); 
  }