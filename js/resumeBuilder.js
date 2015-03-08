// BIO SECTION	//
var	bio = {
	"name":	"Sandy Gross",
	"role" : " Systems	Engineer",
	"contacts" : {
		"email" : " slgicl@gmail.com",
		"github" : " Sandy Gross",
		"mobile" : " 732-747-8682",
		"location":" Little Silver, NJ"
	 },
	"skills" : [" Systems &	Solutions Engineering -","Project Management -", "Driving Instuctor"],
	"biopic" : "images/ddog1.jpg",
	"welcomeMsg" : "Looking for an exciting new opportunty as a Front End Web Developer",
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var displayWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
	var displayImage = HTMLbioPic.replace("%data%",bio.biopic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(displayImage);
	$("#header").append ("<br><br>");
	$("#header").append(displayWelcomeMsg);
	$("#header").append ("<br><br>");
	$("#topContacts").append(contactsEmail);
	$("#topContacts").append(contactsGithub);
	$("#topContacts").append(contactsMobile);
	$("#topContacts").append(contactsLocation);

	$("#footerContacts").append(contactsEmail);
	$("#footerContacts").append(contactsGithub);
	$("#footerContacts").append(contactsMobile);
	$("#footerContacts").append(contactsLocation);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(formattedSkill);
		}
	}
}

bio.display();


// WORK	SECTION	 //
var	work = {
	"jobs" : [
	{
		"employer" : "AT&T",
		"title" : "Senior Technical	Architect",
		"location" : "Middletown, NJ",
		"dates" : "2010-2015",
		"website" : "http://www.att.com",
		"description" : "System	Engineering, Requirements, Project Management, vendor sourcing for internal	applications."
	},
	{
		"employer" : "AT&T Labs",
		"title" : "District Manager",
		"location" : "Lincroft, NJ",
		"dates" : " 1997-2010",
		"website" : "http://www.att.com",
		"description" : "Manage PC imagine for On-Site Workforce, Y2K, Architecture	evaluations	of biomentrics,	collaboration tools	and	implementation / customization of Documentum for Labs."
	},
	{
		"employer" : "Bell Labs (watch this video, I miss the labs, what a cool place)",
		"title" : "Principal Member Technical Staff",
		"location" : "Holmdel, NJ",
		"dates" : "1981-1997",
		"website" : "http://vimeo.com/102559180",
		"description" : "Developed UI for Dataphone	II,	Develeoped YACC/LEX	appplication for central office	equipment reports for 4E switches. Developed softer	to determine diverse routing of	T1 paths for a Data	Network	backbone at	the	circuit	level.",
	},
  ]
};

work.display = function() {
  for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var	formattedEmployer = formattedEmployer.replace("#", work.jobs[job].website);
	var	formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title)
	var	formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var	formattedEmployerTitle = formattedEmployer + formattedTitle	+ formattedLocation;
	var	formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var	formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	}
}

work.display();


// PROJECTS	AREA  //
var	projects = {
	"projects": [
	{
	"title" : "Dataphone II	Service",
	"dates" : "1982",
	"description" : "Designed by Bell Labs, Produced at Western	Electric",
	"images" : ["images/dataphone.jpg"]
	},
	{
	"title" : "T1 Diversity",
	"dates" : "1987",
	"description" : "4ESS, T1, circuit switching, Central Office",
	"images" : ["images/4E.jpg", "images/centraloffice.jpg"]
	}
	]
}
projects.display = function(){
		for (project in	projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedPTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedPTitle);

			var formattedPDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedPDates);

			var formattedPDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedPDescription);

			if(projects.projects[project].images.length > 0){
				for (image in projects.projects[project].images){
					var formattedPImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedPImage);
				}
			}
		}
}

projects.display();

//ALL education	information	and	data //
var	education = {
	"schools": [
		{
			"name": "Northern Illinois University",
			"location": "DeKalb, Illinois",
			"degree": "Bachelor of Arts",
			"major": "Honors Psychology",
			"dates": "1974- 1978",
			"url": "http://www.niu.edu/psyc/",
		},
		{
			"name": "Northern Illinois University",
			"location": "DeKalb, Illinois",
			"degree": "Masters of Science",
			"major": "Computer Science GPA 4.0",
			"dates": "1978 - 1980",
			"url": "http://www.cs.niu.edu/graduate/index.html",
		}
	],
	"onlineCourse": [
		{
			"title": "Intro to HTML and CSS",
			"schoolName": "AT&T Udacity",
			"date": "2015",
			"url": "http://www.udacity.com",
		},
		{
			"title": "JavaScript Basics",
			"schoolName": "AT&T Udacity",
			"date": "2015",
			"url": "http://www.udacity.com",
		},
		{
			"title": "Intro to jQuery",
			"schoolName": "AT&T Udacity",
			"date": "2015",
			"url": "http://www.udacity.com",
		}
	]
};

education.display =	function() {
		//Education	function
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedschoolName);

			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedschoolDegree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedschoolMajor);
		}
		$("#education").append(HTMLschoolStart);
		
		$(".education-entry:last").append(HTMLonlineClasses);

		for (course in education.onlineCourse) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
			
			$(".education-entry:last").append(formattedonlineTitle);

			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].date);
			$(".education-entry:last").append(formattedonlineDates);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].schoolName);
			$(".education-entry:last").append(formattedonlineSchool);

			var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
			$(".education-entry:last").append(formattedonlineUrl);
		}
}
education.display();



//Internationalizer Uppercase Name Generator (TODO look at ways to undo it)   //
function inName() {
	var name1 = bio.name.trim().split(" ");
	name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
	name1[1] = name1[1].toUpperCase();
	return name1[0] + " " + name1[1];
}

$('#footerContacts').append(internationalizeButton);

$("#mapDiv").append(googleMap);
