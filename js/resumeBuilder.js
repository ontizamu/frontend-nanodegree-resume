/* This script contains all the data for the resume and 
the functions to display it on the web page */

var bio = {
	"name" : "Esther Ontiveros",
	"role" : "Web Developer",
	"contacts" : {
			"mobile" : "602-692-4326",
			"email" : "eontiveros@yahoo.com",
			"github" : "ontizamu",
			"location" : "Chandler, AZ"
	},
	"welcomeMsg" : " ",
	"skills" : ["HTML","CSS","JavaScript","Github","SQL","Relational Databases","Reporting Tools"],	
	"bioPic" : "images/MEOZs.jpg",
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
		$("#topContacts").append(formattedmobile);
		$("#topContacts").append(formattedemail);
		$("#topContacts").append(formattedgithub);
		$("#topContacts").append(formattedlocation);
		$("#header").append(formattedbioPic);
		$("#header").append(formattedwelcomeMsg);

		if (bio.skills.length > 0) {		
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
    			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}	
		}
	}
};

bio.display();

var education = {
	"schools":[
		{
			"name": "Udacity.com",
			"location": " ",
			"degree": "Front-End Web Developer Nanodegree",
			"major": " ",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"name" : "Western International University (WIU)",
			"location" : "Phoenix, AZ, US",
			"degree": "Masters",
			"major" : "Business Administration",
			"dates" : 2002,
			"url" : "http://www.west.edu"
		},
		{
			"name" : "Instituto Tecnologico Autonomo de Mexico (ITAM)",
			"location" : "Mexico City, Mexico",
			"degree" : "BS",
			"major" : "Computer Science",
			"dates" : 1995,
			"url" : "http://www/itam.mx/en"
		}
	],
	"onlinecourses" : [
		{
			"title" : "Introduction to HTML and CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/intro-to-jquery--ud245"
		},
		{
			"title" : "Object-Oriented JavaScript",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/object-oriented-javascript--ud015"
		},
		{
			"title" : "HTML5 Canvas",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/html5-canvas--ud292"
		},
		{
			"title" : "Website Performance Optimization",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/website-performance-optimization--ud884"
		},
		{
			"title" : "Browser Rendering Optimization",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/browser-rendering-optimization--ud860"
		},
		{
			"title" : "Intro to AJAX",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/intro-to-ajax--ud110"
		},
		{
			"title" : "JavaScript Design Patterns",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/javascript-design-patterns--ud989"
		},
		{
			"title" : "JavaScript Testing",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/javascript-testing--ud549"
		},
		{
			"title" : "Version Control with Git and Github",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud775"
		}
	],
	display : function(){
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.onlinecourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlinecourses[course].date);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlinecourses[course].url);
			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		}

	}
};

education.display();

var work = {
	"jobs" : [
		{
			"Employer" : "U.S. Census Bureau",
			"Title" : "Crew Leader",
			"location": "Chandler, AZ",
			"Dates" : "2015",
			"Description" : "Train and manage a team of seven enumerators during the Special Census for the City of Chandler" 
		},
		{
			"Employer" : "Wycliffe Associates",
			"Title" : "Report Developer",
			"location" : "Chandler, AZ",
			"Dates" : "2012-2015",
			"Description" : "Participating in the development of an application for training administration. Responsible for creating reports using SQL and SSRS"
		},
		{
			"Employer" : "Arizona State University",
			"Title" : "Research Assistant",
			"location" : "Tempe, AZ",
			"Dates" : "2007-2012",
			"Description" : "Interviewed participants to collect research data. Performed data entry, data cleaning and descriptive statistical analysis"
		},
		{
			"Employer" : "Schaller Anderson",
			"Title" : "Systems Analyst",
			"location" : "Phoenix, AZ",
			"Dates" : "2003",
			"Description" : "Interviewed users to define report specifications. Defined, coded, tested and debugged reports using SQL Server stored procedures and Crystal Reports"
		}
	],
	display : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].Employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].Dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
    		$(".work-entry:last").append(formattedEmployer + formattedTitle);
    		$(".work-entry:last").append(formattedLocation);
    		$(".work-entry:last").append(formattedDates);
    		$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

var projects = {
	"projects" : [
		{	
			"Title" : "Training Evaluation Assessment (TEA)",
			"Dates" : "6/12-3/15",
			"Description" : "System to administer, evaluate and assess training",
			"Images" : []
		},
		{
			"Title" : "Classic Arcade Game Clone",
			"Dates" : "2015",
			"Description" : "An HTML5 Canvas Powered Video Game, developed using the best practices in Object Oriented JavaScript",
			"Images" : ["images/p3.jpg"]
		},
		{
			"Title" : "Neighborhood Map",
			"Dates" : "2015",
			"Description" : "A single web page application, built using Knockout, that displays a Google map of Chandler, AZ and some points of interest. When the user click on a place additional information is presented from the FourSquare API",
			"Images" : ["images/p5.jpg"]
		},
		{
			"Title" : "Feed Reader Testing",
			"Dates" : "2015",
			"Description" : "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API",
			"Images" : ["images/p6.jpg"]
		}

	],
	display : function() {
		for (project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].Title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].Dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
    		$(".project-entry:last").append(formattedTitle);
    		$(".project-entry:last").append(formattedDates);
    		$(".project-entry:last").append(formattedDescription);
    		if (projects.projects[project].Images.length > 0) {
    			for (image in projects.projects[project].Images) {
    				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].Images[image]);
    				$(".project-entry:last").append(formattedImage);
    			}
    		}
		}
	}
};

projects.display();

$("#mapDiv").append(googleMap);

var displayFooter = function () {
	var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#footerContacts").append(formattedmobile);
	$("#footerContacts").append(formattedemail);
	$("#footerContacts").append(formattedgithub);
	$("#footerContacts").append(formattedlocation);
}

displayFooter();


