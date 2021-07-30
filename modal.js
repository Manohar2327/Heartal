var modalBtn=document.querySelector('.modal-btn');
var modalBg=document.querySelector('.modal-bg');
var modalClose=document.querySelector('.modal-close');

modalBtn.addEventListener('click',function()
{
	modalBg.classList.add('bg-active');
	
	
});

modalClose.addEventListener('click',function()
{
	modalBg.classList.remove('bg-active');
});
/*window.addEventListener('click', function(e)
{
	if(e.target==modal)
{
	modal.style.display="none";
}
});*/
/*window.addEventListener('click', outsideclick);
function outsideclick(e)
{
	if (e.target==modal)
	{
		
		modal.style.display="none";	
	}
	
}*/