// loader :
	window.addEventListener("load",function(){
		document.getElementById('loading_buffer').style.display= "none";
		console.log('loader removed')
	})

function create_strike_fromstart(){
	function create_strike_now(){
		const create_stike =document.getElementById('strike_via_line');
		create_stike.style.transition ='0s'
		create_stike.style.width ='10vw';
		create_stike.style.transition ='2.5s';
		create_stike.style.width ='40vw';
	};
	setTimeout(create_strike_now(),2000);
}

// adding/removing elements :
	
	create_strike_fromstart();

	var currentActive_Element= "home_01";

	const body =document.getElementById('body');

	const home =document.getElementById('home_div');
	const activity =document.getElementById('activity_div');
	const bio =document.getElementById('bio_div');
	const skills =document.getElementById('skills_div');
	const projects =document.getElementById('projects_div');
	const publications =document.getElementById('publications_div');

	const gohome=document.getElementById('gohome');
	const goactivity=document.getElementById('goactivity');
	const gobio =document.getElementById('gobio');
	const goskills =document.getElementById('goskills');
	const goprojects =document.getElementById('goprojects');
	const gopublications =document.getElementById('gopublications');


	// home ELEMENT :
		gohome.addEventListener('mouseover',function(){
			gohome.style.color= 'black';
		});
		gohome.addEventListener('mouseout',function (){
			gohome.style.color= 'grey';
			if (currentActive_Element==="home_01") {
				gohome.style.color= 'black';
			};	
		});

		function addhomeEle() {
			currentActive_Element="home_01";
			home.style.display ='block';
			gohome.style.color= 'black';
			gohome.style.borderBottom= '3px solid hotpink';
			body.style.backgroundImage="url('design.png')";

			create_strike_fromstart();		
		};
		function removehomeEle() {
			home.style.display ='none';
			body.style.backgroundImage="url('')";
			gohome.style.color= 'grey';
			gohome.style.borderBottom= 'none';
			create_strike_fromstart();
		};

		// // hamburger button:
		// 	const homehamburgdiv= document.getElementById('home_hamburger_button');
		// 	var homehamburgdiv_status="open";
		// 	// homehamburgdiv.addEventListener('click',function() {
		// 	// 	if(homehamburgdiv_status=="open"){
		// 	// 		const homehamburgline1= document.getElementById('HomeHamburg1stline');
		// 	// 		const homehamburgline2= document.getElementById('HomeHamburg2stline');
		// 	// 		const homehamburgline3= document.getElementById('HomeHamburg3stline');
		// 	// 	}
		// 	// 	else{

		// 	// 	}
		// 	// })

	// Activity ELEMENT :
		
		goactivity.addEventListener('mouseover',function(){
			goactivity.style.color= 'black';
		});
		goactivity.addEventListener('mouseout',function (){
			goactivity.style.color= 'grey';
			if (currentActive_Element==="activity_01") {
				goactivity.style.color= 'black';
			};	
		});
		function addactivityEle() {
			currentActive_Element="activity_01"
			goactivity.style.color= 'black';
			goactivity.style.borderBottom= '3px solid hotpink';
			activity.style.display ='block';
			body.style.backgroundColor= "#f3f2ef";

		};
		function removeactivityEle() {
			activity.style.display ='none';
			goactivity.style.borderBottom= 'none';
			goactivity.style.color= 'grey';
			body.style.backgroundColor= "white"

		};
		document.getElementById('activitysharebutton').addEventListener("click",function(){
			const websiteURL="https://aryanmarwaha.github.io/Portfolio/";
			navigator.clipboard.writeText(websiteURL);
			alert("Thankyou for showing your support \nThe URL for this site has been copied on to your clipboard \n" +websiteURL);
		});
		
		// Sort Buttons :
			function turnButtonToGreen_sort(a) {
				a.style.backgroundColor= "rgb(5,118,66)";
				a.style.color= "white";
				a.style.border= "0px";
			}
			function turnButtonTonormal_sort(a) {
				a.style.backgroundColor= "white";
				a.style.color= "black";
				a.style.border= "1px solid black";
			}
			const sortbyALLacti_Activity= document.getElementById('sortbyALLacti_Activity');
			const sortbyArticles_Activity= document.getElementById('sortbyArticles_Activity');
			const sortbyPosts_Activity= document.getElementById('sortbyPosts_Activity');
			const sortbyDocuments_Activity= document.getElementById('sortbyDocuments_Activity');

			sortbyALLacti_Activity.addEventListener("click",function(){
				turnButtonTonormal_sort(sortbyALLacti_Activity);
				turnButtonTonormal_sort(sortbyArticles_Activity);
				turnButtonTonormal_sort(sortbyPosts_Activity);
				turnButtonTonormal_sort(sortbyDocuments_Activity);

				turnButtonToGreen_sort(sortbyALLacti_Activity);

			})

			sortbyArticles_Activity.addEventListener("click",function(){
				turnButtonTonormal_sort(sortbyALLacti_Activity);
				turnButtonTonormal_sort(sortbyArticles_Activity);
				turnButtonTonormal_sort(sortbyPosts_Activity);
				turnButtonTonormal_sort(sortbyDocuments_Activity);
				
				turnButtonToGreen_sort(sortbyArticles_Activity);

			})

			sortbyPosts_Activity.addEventListener("click",function(){
				turnButtonTonormal_sort(sortbyALLacti_Activity);
				turnButtonTonormal_sort(sortbyArticles_Activity);
				turnButtonTonormal_sort(sortbyPosts_Activity);
				turnButtonTonormal_sort(sortbyDocuments_Activity);
				
				turnButtonToGreen_sort(sortbyPosts_Activity);

			})

			sortbyDocuments_Activity.addEventListener("click",function(){
				turnButtonTonormal_sort(sortbyALLacti_Activity);
				turnButtonTonormal_sort(sortbyArticles_Activity);
				turnButtonTonormal_sort(sortbyPosts_Activity);
				turnButtonTonormal_sort(sortbyDocuments_Activity);
				
				turnButtonToGreen_sort(sortbyDocuments_Activity);

			})

	// Bio ELEMENT :
		gobio.addEventListener('mouseover',function(){
			gobio.style.color= 'black';
		});
		gobio.addEventListener('mouseout',function (){
			gobio.style.color= 'grey';
			if (currentActive_Element==="bio_01") {
				gobio.style.color= 'black';
			};	
		});

		function addbioEle() {
			currentActive_Element="bio_01";
			gobio.style.color= 'black';
			gobio.style.borderBottom= '3px solid hotpink';
			bio.style.display ='block';

		};
		function removebioEle() {
			bio.style.display ='none';
			gobio.style.borderBottom= 'none';
			gobio.style.color= 'grey';

		};

	// Skills ELEMENT :
		goskills.addEventListener('mouseover',function(){
			goskills.style.color= 'black';
		});
		goskills.addEventListener('mouseout',function (){
			goskills.style.color= 'grey';
			if (currentActive_Element==="skills_01") {
				goskills.style.color= 'black';
			};	
		});
		function addskillsEle() {
			currentActive_Element="skills_01";
			goskills.style.color= 'black';
			goskills.style.borderBottom= '3px solid hotpink';
			skills.style.display ='block';
			body.style.backgroundColor= "#f3f2ef";
		};
		function removeskillsEle() {
			skills.style.display ='none';
			goskills.style.borderBottom= 'none';
			goskills.style.color= 'grey';
			body.style.backgroundColor= "white";
		};

	// Projects ELEMENT :
		goprojects.addEventListener('mouseover',function(){
			goprojects.style.color= 'black';
		});
		goprojects.addEventListener('mouseout',function (){
			goprojects.style.color= 'grey';
			if (currentActive_Element==="projects_01") {
				goprojects.style.color= 'black';
			};	
		});
		function addprojectsEle() {
			currentActive_Element="projects_01";
			goprojects.style.color= 'black';
			goprojects.style.borderBottom= '3px solid hotpink';
			projects.style.display ='block';
		};
		function removeprojectsEle() {
			projects.style.display ='none';
			goprojects.style.borderBottom= 'none';
			goprojects.style.color= 'grey';
		};

	// Publications ELEMENT :
		gopublications.addEventListener('mouseover',function(){
			gopublications.style.color= 'black';
		});
		gopublications.addEventListener('mouseout',function (){
			gopublications.style.color= 'grey';
			if (currentActive_Element==="publications_01") {
				gopublications.style.color= 'black';
			};	
		});
		function addpublicationsEle() {
			currentActive_Element="publications_01";
			gopublications.style.color= 'black';
			gopublications.style.borderBottom= '3px solid hotpink';
			publications.style.display ='block';
		};
		function removepublicationsEle() {
			publications.style.display ='none';
			gopublications.style.borderBottom= 'none';
			gopublications.style.color= 'grey';

		};


// menu shift:

	document.getElementById('gohome').addEventListener("click",function() {
		removeactivityEle();
		removebioEle();
		removeskillsEle();
		removeprojectsEle();
		removepublicationsEle();		
		
		addhomeEle();

	});


	document.getElementById('goactivity').addEventListener("click",function() {
		removehomeEle();
		removebioEle();
		removeskillsEle();
		removeprojectsEle();
		removepublicationsEle();		
		
		addactivityEle();		

	});


	document.getElementById('gobio').addEventListener("click",function() {
		removehomeEle();
		removeactivityEle();
		removeskillsEle();
		removeprojectsEle();
		removepublicationsEle();		
		
		addbioEle();

	});


	document.getElementById('goskills').addEventListener("click",function() {
		removehomeEle();
		removeactivityEle();
		removebioEle();
		removeprojectsEle();
		removepublicationsEle();		
		
		addskillsEle();

	});


	document.getElementById('goprojects').addEventListener("click",function() {
		removehomeEle();
		removeactivityEle();
		removebioEle();
		removeskillsEle();
		removepublicationsEle();		
		
		addprojectsEle();
		
	});


	document.getElementById('gopublications').addEventListener("click",function() {
		removehomeEle();
		removeactivityEle();
		removebioEle();
		removeskillsEle();
		removeprojectsEle();
		
		addpublicationsEle();

		
	});

// 
// Ref. links :
			function redirect_to_linkedin(){
				window.open("https://www.linkedin.com/in/aryan-marwaha-0029b5219",'_blank');
			};
			function redirect_to_githubProfile(){
				window.open("https://github.com/aryanmarwaha",'_blank');
			};
			function redirect_to_email(){
				window.open("mailto:aryan0300.be21@chitkara.ed.in?&subject=Edit<Connect message via Aryan's ProfileV1>",'_blank');
			};
			function copy_mobile_no(){
				var xxxqwert="+91 77298 87422";
				navigator.clipboard.writeText(xxxqwert);
				alert("The contact number has been copied on to you'r clipboard\n"+xxxqwert);
			};