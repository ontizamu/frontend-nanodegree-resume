//$("#main").append("Esther");
//var awesomeThoughts = "I am Esther and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");
//$("#main").append(funThoughts);

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
	]
};

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
						"Images" : ["images/Project1.jpg"]
					}
				]
};

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
			"picture" : "images/Picture.jpg",
			"skills" : ["SQL","Reporting Tools","Data Analysis"]
};

var education = {
	"schools":[
		{
			"name" : "WIU",
			"city" : "Phoenix, AZ, US",
			"degree": "Masters",
			"major" : "Business Administration",
			"datesAttended" : "2000-2002",
			"url" : "http://www.west.edu"
		},
		{
			"name" : "ITAM",
			"city" : "Mexico City, MX",
			"degree" : "BS",
			"major" : "Computer Science",
			"datesAttended" : "1990-1995",
			"url" : "http://www/itam.mx/en"
		}
	],
	"onlinecourses" : [
		{
			"title" : "Introduction to HTML and CSS",
			"school" : "Udacity.com",
			"datesAttended" : "2/15",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity.com",
			"datesAttended" : "2/15",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Version Control with Git and Github",
			"school" : "Udacity.com",
			"datesAttended" : "3/15",
			"url" : "http://www.udacity.com"
		}	
	]
}

bio.display = function()
{
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedpicture = HTMLbioPic.replace("%data%",bio.picture);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedgithub);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedpicture);
	$("#header").append(formattedwelcomeMsg);

	if (bio.skills.length > 0)
	{		
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills)
		{
    		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}	
	}
};

work.display = function() 
{
	for (job in work.jobs) 
	{
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

projects.display = function () 
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].Title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].Dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
    	$(".project-entry:last").append(formattedTitle);
    	$(".project-entry:last").append(formattedDates);
    	$(".project-entry:last").append(formattedDescription);
    	if (projects.projects[project].Images.length > 0)
    	{
    		for (image in projects.projects[project].Images)
    		{
    			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].Images[image]);
    			//$(".project-entry:last").append(formattedImage);
    		}
    	}
	}
};

education.display = function()
{
	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].datesAttended);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlinecourses)
	{
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlinecourses[course].datesAttended);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlinecourses[course].url);
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	}
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


/*var oldName = bio.name;

$("#main").append(internationalizeButton);

function inName (oldName)
{
	var finalName = oldName;
	var firstLetter = finalName(0);
	var spacePosition = finalNmae.indexOf(" ");
	var.firstName = oldName.slice(1,SpacePosition);
	var.lastName = oldName.slice(spacePosition);
	finalName = firstLetter.toUpperCase() + firstName.toLowerCase() +lastName.toUpperCase();
	$("#main").append(oldName);
	$("#main").append(finalName);
	return finalName;
}*/









//$("#main").append(bio.name);



