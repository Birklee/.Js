
function pressSpace(target, type) {
    var press = new KeyboardEvent(type, {"keyCode": 32});
    if(type == 'keyup'){ target.value += ' ';}
    target.dispatchEvent(press);    
}

function type(){
    var text = document.getElementById('words');
    var currentword = document.getElementById('currentword');
    var input = document.getElementById('input');

    if(input.value.indexOf('currentword.innerText') == -1){
        input.value = currentword.innerText;
        pressSpace(input, 'keydown');
        
        setTimeout( function(){
            pressSpace(input, 'keyup');
        }, 200);
    }

}


// document.getElementById('input').addEventListener('keyup', function(evt){ console.log(evt.keyCode); } );
//var handler = setInterval(type, 200);
