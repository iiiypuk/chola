function layoutReplace()
{
  'use strict';

  let keys = {
    "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
    "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
    "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
    ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
    "n":"т", "m":"ь", ",":"б", ".":"ю", "/":"."
  };  

  let inputText = document.getElementById("one").value;
  let outputText = document.getElementById("two");
  let text = null;

  text = inputText.replace(/[A-z/,.;\'\]\[]/g, function(x) {
    return x == x.toLowerCase() ? keys[ x ] : keys[ x.toLowerCase() ].toUpperCase();
  });

  outputText.value = text;
}
