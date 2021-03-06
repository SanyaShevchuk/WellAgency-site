var menuIcon = document.getElementsByClassName('menu_icon');

for(let i = 0 ; i < menuIcon.length; i++){
    menuIcon[i].onclick = function(){
      if((window.matchMedia("(max-width: 600px)").matches 
      || window.matchMedia("(max-width: 1100px)").matches)
      && window.matchMedia('(orientation: portrait)').matches){
        let menuPage = document.getElementById('mob-menu-page');
        menuPage.style.display = "block";
        menuPage.style.top = (100*(i)) + "%";    
      } else{
        let menuPage = document.getElementById('menu_page');
        menuPage.style.display = "block";
        menuPage.style.top = (100*(i)) + "%";    
      }
    }
}

var closeButton = document.getElementsByClassName('close');
for(let i=0; i < closeButton.length; i++){
  closeButton[i].onclick = function(){
    if((window.matchMedia('(max-width: 600px)').matches 
    || window.matchMedia("(max-width: 1100px)").matches)
    && window.matchMedia('(orientation: portrait)').matches){
      document.getElementById('mob-menu-page').style.display = 'none';
    } else document.getElementById('menu_page').style.display = 'none'; 
  }
}


function closeMenu(){
  if((window.matchMedia('(max-width: 600px)').matches
    || window.matchMedia("(max-width: 1100px)").matches)
    && window.matchMedia('(orientation: portrait)').matches){
    document.getElementById('mob-menu-page').style.display = 'none';
  } else document.getElementById('menu_page').style.display = "none";
}