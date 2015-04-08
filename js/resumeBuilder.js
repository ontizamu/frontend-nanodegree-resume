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
	"welcomeMsg" : "Welcome to my resume page!",
	"skills" : ["SQL","Reporting Tools","Data Analysis"],	
	"bioPic" : "images/Picture.jpg",
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
			"name" : "Western International University (WIU)",
			"location" : "Phoenix, AZ, US",
			"degree": "Masters",
			"major" : "Business Administration",
			"dates" : 2002,
			"url" : "http://www.west.edu"
		},
		{
			"name" : "Instituto Tecnologico Autonomo de Mexico (ITAM)",
			"location" : "Mexico City, MX",
			"degree" : "BS",
			"major" : "Computer Science",
			"dates" : 1995,
			"url" : "http://www/itam.mx/en"
		}
	],
	"onlinecourses" : [
		{
			"title" : "Introduction to HTML and CSS",
			"school" : "Udacity.com",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity.com",
			"date" : 2015,
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Version Control with Git and Github",
			"school" : "Udacity.com",
			"date" : 2015,
			"url" : "http://www.udacity.com"
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
			"Employer" : "Wycliffe Associates",
			"Title" : "Report Developer",
			"Location" : "Chandler, AZ",
			"Dates" : "2012-present",
			"Description" : "Participating in the development of an application for training administration. Reponsible for creating reports using SQL and SSRS"
		},
		{
			"Employer" : "Arizona State University",
			"Title" : "Research Assistant",
			"Location" : "Tempe, AZ",
			"Dates" : "2007-2011",
			"Description" : "Interviewed participants to collect research data, performed data entry, data cleaning and descriptive statistical analysis"
		},
		{
			"Employer" : "Schaller Anderson",
			"Title" : "Systems Analyst",
			"Location" : "Phoenix, AZ",
			"Dates" : "2003",
			"Description" : "Interviewed users to define report specifications. Defined, coded, tested and debugged reports using SQL Server stored procedures and Crystal Reports"
		}
	],
	display : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].Employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].Location);
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
			"Title" : "TEA",
			"Dates" : "6/12-3/15",
			"Description" : "System to administer, evaluate and asses training",
			"Images" : []
		},
		{
			"Title" : "Mockup to Website",
			"Dates" : "2/26/15-3/4/15",
			"Description" : "Design a website from a mockup",
			"Images" : []
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
