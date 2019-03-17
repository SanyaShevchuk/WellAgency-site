var menuIcon = document.getElementsByClassName('menu_icon');

// [].forEach.call(menuIcon, function(element){
//   element.onclick = function(){
//     document.getElementById('menu_page').style.display = "block";
//   }
//  })

for(let i = 0 ; i < menuIcon.length; i++){
  menuIcon[i].onclick = function(){
    let menuPage = document.getElementById('menu_page');
    menuPage.style.display = "block";
    menuPage.style.top = (100*(i+1)) + "%";
  }
}

document.getElementById('close').onclick = function(){
  document.getElementById('menu_page').style.display = 'none';
}