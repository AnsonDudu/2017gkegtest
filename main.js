function $(id) {
	return document.getElementById(id);
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

$('button3').addEventListener('click', function(){
	removeClass($('mute'),'hidden');
	removeClass($('button2'),'pulse');
	removeClass($('button3'),'pulse');
},false);

$('button3').addEventListener('touchstart', function(){
	removeClass($('mute'),'hidden');
	removeClass($('button2'),'pulse');
	removeClass($('button3'),'pulse');
},false);