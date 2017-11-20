/* Llamando a la ventana para que cargen todas la funciones*/
window.addEventListener('load', function(event) {
    /* BotÓn tweet del formulario*/
    var buttonTweet = document.getElementById('send');
    var text = document.getElementById('input-text');
    var showText = document.getElementById('box-newtext');
    /* contador*/
    var count = document.getElementById('count');
    /* Llamando al evento click en el boton tweet*/
    buttonTweet.addEventListener('click', enterText);
    function enterText() {
      /* Valor de la entrada del texto más la hora*/
      var myText = text.value + '<br>' + moment().format('LT');
      /* Para que la entrada del texto se vacie luego del click*/
      text.value = '' ;
      if (myText === 0 || myText === null) {
        /* Desabilitando el botón tweet*/
        buttonTweet.disabled = true;
      } else {
        /* variable de los nuevos textos*/
        var newText = document.createElement('div');
        newText.innerHTML = myText ;
        showText.appendChild(newText);
      }
    }
     
    text.addEventListener('keydown', adjustContent);
    /*Función para que la entrada se adecue al texto*/
    function adjustContent() {
      text.style.cssText = 'height:' + text.scrollHeight + 'px';
    }
    buttonTweet .addEventListener('click', normalContent);
    /* Función del textarea que permite una vez enviado el texto vuelva a su estado normal*/
    function normalContent() {
      text.style.cssText = 'height' + 'px';
    }
  });
  
