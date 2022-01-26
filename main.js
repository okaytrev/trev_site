function dark(){
  document.getElementById("css_main").setAttribute('href', "style.css");
}
function light(){
      document.getElementById("css_main").setAttribute('href', "light.css");
}

var main_html = document.getElementById("global_settings");

function colorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function random(){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    main_html.style.backgroundColor = randomColor;
    let randomColor2 = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    main_html.style.color = randomColor2;
  }
  