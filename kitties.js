document.addEventListener("DOMContentLoaded", function(event) {
  debugger;
  console.log("😻");


  document.querySelector("#not-cats li a").addEventListener('click', function(event) {
    console.log('click');
    document.querySelector('#not-cats').style.cssText = "transform: rotate(180deg);";
    event.stopPropagation();
    event.preventDefault();
  });

  document.body.addEventListener('click', function(event) {
    console.log('click from body');
  });

});