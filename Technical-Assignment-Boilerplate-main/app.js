

const USER_MENU_BTN=document.querySelector(`#user-menu-button`);
const USER_MENU=document.querySelector(`#user-menu`);

USER_MENU.style.display=`none`;

USER_MENU_BTN.addEventListener(`click`,()=>{
	console.log(`Clicked`);
	console.log(USER_MENU);

	if(USER_MENU.style.display==`none`){
		USER_MENU.style.display=`block`;
	}else{
		USER_MENU.style.display=`none`;
	}
});