var bio = {
  "name": "Jonathan Flores",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(818)795-7926",
    "email": "apex.j.91@gmail.com",
    "github": "jonnyflores",
    "location": "Los Angeles",
  },
  "welcomeMessage": "Hey I'm Jonathan, and I am a LA based front-end web developer. Fun, responsive websites... I create those.",
  "skills": ["HTML", " CSS", " JavaScript", "JSON", "jQuery"],
  "biopic": "images/me.jpg"
};
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail +
    formattedGithub + formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};


var education = {
  "schools": [{
    "name": "College of the Canyons",
    "location": "Santa Clarita, CA",
    "degree": "AA",
    "majors": ["Graphic and Multimedia Design"],
    "dates": "2015 - 2017",
    "url": "https://canyons.edu"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "2018 - 2019",
    "url": "https://confirm.udacity.com/QQJF6V9R"
  }]
};

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }

  }
};

var work = {
  "jobs": [{
      "employer": "Apple",
      "title": "Operations Specialist",
      "location": "Santa Clarita, CA",
      "dates": "August 2018 - Present",
      "description": "Maintaining product inventory for the location to ensure customer's can get the Apple products they need. Keeping the back of house clean and organized."
    },
    {
      "employer": "Whole Foods",
      "title": "Supervisor",
      "location": "Santa Clarita, CA",
      "dates": "2014 - December 4, 2018",
      "description": "Supervisor with leadership and cash handling experience. Accommodate to customer needs such as returns and exchanges; quick problem solving skills and communication as well"
    }
  ]
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

    $(".work-entry:last").append(formattedEmployerTitle);

    $(".work-entry:last").append(formattedWorkLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
var projects = {
  "projects": [{
      "title": "Online Resume ",
      "dates": "2019",
      "description": "Utilizing HTML, CSS, JavaScript, and JQuery to create an appealing, responsive page to showcase an online resume. Also used Google Maps API to display places I've lived and worked.",
      "url": "https://github.com/jonnyflores/Online-Resume",
      "images": ["images/resume.png"]
    },
    {
      "title": "Classic Arcade Game Clone",
      "dates": "2019",
      "description": "JavaScript & Object-Oriented JavaScript were key in creating the project.",
      "url": "https://github.com/jonnyflores/arcade-game-udacity",
      "images": ["images/arcade-game.png"]
    },
    {
      "title": "Website Optimization",
      "dates": "2019",
      "description": "Optimizing a website with performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second. Also use Chrome Developer Tools to view and adjust current states of various pages and determine which areas need optimization.",
      "url": "https://github.com/jonnyflores/Website-Optimization",
      "images": ["images/website-optimization.png"]
    },
    {
      "title": "Neighborhood Map",
      "dates": "2019",
      "description": "Develop a functioning map using Google Map APIs and KnockoutJS.",
      "url": "https://github.com/jonnyflores/Neighborhood-Map",
      "images": ["images/neighborhood-map.png"]
    },
    {
      "title": "Feed Reader Testing",
      "dates": "2019",
      "description": "Writing tests using Jasmine in the feedreader.js file on an application. Also be able to manipulate the DOM.",
      "url": "https://github.com/jonnyflores/Feed-Reader-Testing",
      "images": ["images/feedreader.png"]
    }
  ]
};

// replace the "[project]" with "[i]"
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = $(HTMLprojectTitle);
    formattedTitle.text(projects.projects[i].title);
    formattedTitle.attr('href', projects.projects[i].url);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

    if (projects.projects[i].images.length > 0) {
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};


bio.display();
projects.display();
work.display();
education.display();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
