<script>
	
document.getElementById('01').style.display = 'none';
document.getElementById('02').style.display = 'none';
document.getElementById('03').style.display = 'none';
document.getElementById('04').style.display = 'none';
document.getElementById('05').style.display = 'none';
document.getElementById('06').style.display = 'none';
document.getElementById('07').style.display = 'none';
document.getElementById('08').style.display = 'none';
document.getElementById('final').style.display = 'none';
	
	
let btnKalend = document.getElementsByClassName('our_nav');
	
for(let d=0; d < btnKalend.length; d++) {
					btnKalend[d].style.display = 'none';
				}	
	
	
jQuery( document ).ready(function() {
   jQuery( ".show_01" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#01").fadeToggle();
		 	jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_01").addClass("my_active");
	 });
		
		jQuery( ".show_02" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#02").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_02").addClass("my_active");
	 });
		
		jQuery( ".show_03" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#03").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_03").addClass("my_active");
	 });
		
		jQuery( ".show_04" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#04").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_04").addClass("my_active");
	 });
	
	jQuery( ".show_05" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#05").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_05").addClass("my_active");
	 });
	
	jQuery( ".show_06" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#06").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_06").addClass("my_active");
	 });
	
	jQuery( ".show_07" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery("#07").fadeToggle();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".show_07").addClass("my_active");
	 });
	
	jQuery( ".showAcht" ).click(function() {
  		jQuery(".changing_image").hide();
		 	jQuery('#final').fadeIn();
			jQuery(".our_nav").removeClass("my_active");
		 	jQuery(".showAcht").addClass("my_active");
	 });
	
});

var today = (new Date()).getDay();
console.log(today);
switch (today) {
		
    case 0:
        let sunDay = document.getElementsByClassName('showSunday');
		
				for(let i=0; i < sunDay.length; i++) {
					sunDay[i].style.display = 'block';
				}
				
				document.getElementById('mnBtn').style.display = 'block';

        break;
		
    case 1: 
        let monDay = document.getElementsByClassName('showMonday');
		
				for(let a=0; a < monDay.length; a++) {
					monDay[a].style.display = 'block';
				}
				
				document.getElementById('heutBtn').style.display = 'block';
		
        break;
		
	  case 2: 
        let tuesDay = document.getElementsByClassName('showTuesday');
		
				for(let q=0; q < tuesDay.length; q++) {
					tuesDay[q].style.display = 'block';
				}
		
				document.getElementById('heutBtn').style.display = 'block';

        break;
		
	  case 3: 
       let wednesDay = document.getElementsByClassName('showWednesday');
		
				for(let e=0; e < wednesDay.length; e++) {
					wednesDay[e].style.display = 'block';
				}

			document.getElementById('heutBtn').style.display = 'block';
		
        break;
		
	  case 4: 
       let thursDay = document.getElementsByClassName('showThursday');
		
			 for(let r=0; r < thursDay.length; r++) {
					thursDay[r].style.display = 'block';
				}
		
			document.getElementById('heutBtn').style.display = 'block';
		
        break;
		
	  case 5: 
        let friDay = document.getElementsByClassName('showFriday');
		
				for(let t=0; t < friDay.length; t++) {
					friDay[t].style.display = 'block';
				}
		
				document.getElementById('heutBtn').style.display = 'block';
		
        break;
		
	  case 6: 
        let saturDay = document.getElementsByClassName('showSaturday');
		
				for(let g=0; g < saturDay.length; g++) {
					saturDay[g].style.display = 'block';
				}
		
				document.getElementById('heutBtn').style.display = 'block';
		
}
	
	

	
function codeToRun () {
	
	if(document.querySelector('div#mnBtn').style.display == 'block'){
	
	document.querySelector('div#mnBtn').click();

} else {
	document.querySelector('div#heutBtn').click();
}
}
	

 setTimeout(function(){
      codeToRun();
    }, 50);
	
</script>