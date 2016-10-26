function showAlert(msg=' '){
	var date = Date.now();
    var gui = nodeRequire('nw.gui');
    var alert = gui.Window.open('http://10.10.61.104:8080/index.html?msg='+msg+'&data='+date,{fullscreen:false,always_on_top:true,resizable:false,frame:false,width:400,height:120});
}

function checkIsNodeEnviroment(){
    if(indow.hasOwnProperty('require') && !window.hasOwnProperty('nodeRequire')){
        window.nodeRequire = window.require;
        delete window.require;
    }
}
            