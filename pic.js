let colors = ["red","green","blue","gray","pink","purple","orange","yellow","brown","white"]
var element = document.getElementById("myText");
var i = Math.floor(Math.random()*10+1);
setInterval(function() {
    element.style.color = colors[i-1]; 
    i = Math.floor(Math.random()*5+1);
  }, 1000);
   




