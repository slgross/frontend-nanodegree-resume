/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span class='headerRole'>%data%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><a href='mailto:slg@gmail.com' class='white-text'>%data%</a></li>";

var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><a href='https://github.com/slgross/' target='_blank' span class='white-text'>%data%</a></li>";

var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#' target='_blank'>%data%";
var HTMLworkTitle = " / %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "%data%<br>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%' width='350px'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<br><a href='#' target='_blank'>%data%";
var HTMLschoolDegree = " <span class='orange-text'> %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<span class='orange-text'><em>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#' target='_blank'>%data%";
var HTMLonlineSchool = " %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div><br>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
