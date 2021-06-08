function layoutReplace()
{
  keys = {
    "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
    "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
    "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
    ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
    "n":"т", "m":"ь", ",":"б", ".":"ю", "/":"."
  };  

  var dat = document.getElementById("one").value
  var res = document.getElementById("two")
  let text = null

  console.log(dat)


  text = dat.replace(/[A-z/,.;\'\]\[]/g, function(x) {
    return x == x.toLowerCase() ? keys[ x ] : keys[ x.toLowerCase() ].toUpperCase();
  });

  res.value = text
}
