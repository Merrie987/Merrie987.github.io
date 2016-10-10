var bio = {
  "name": "Merrie Gabriel",
  "role": "Web Developer",
  "contacts": {
    "mobile": "260-797-3132",
    "email": "merrie.gabriel@gmail.com",
    "github": "Merrie987",
    "location": "Durham, NC"
  },
  "welcomeMessage": "W3 Schools certified in HTML, CSS, and JS, I am currently seeking a position in website development. Thank you for your interest.",
  "skills": [
    "HTML", "CSS", "JavaScript" , "Python", "Responsive Design"
  ],
  "bioPic": "images/merrieresume.jpg",

  display: function () {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

var des = "I'm a self-taught front-end web developer W3 Schools Certified in HTML, CSS, and JavaScript. I love learning new skills and techniques and my goal is to find a position that will enable to keep learning and improving myself and my skill set."

var summary = {
  "description": des,
  display: function() {
    $("#summary").append(HTMLsumStart);
    var formattedDescription = HTMLsumDescription.replace("%data%", summary.description);
    $(".sum-entry").append(formattedDescription);
  }
};

var education = {
  "schools": [
    {
     "name" : "Purdue University",
      "dates" : "2005-2010",
      "location" : "West Lafayette, IN",
      "degree" : "B.A. English",
      "majors" : ["English Literature"],
      "url" : "www.purdue.edu"
    },
    ],
"onlineCourses": [
    {
      "title": "Front-End Web Development",
      "school": "General Assembly",
      "completed": "October 2015",
      "url": "https://generalassemb.ly/education/learn-html-css-web-design-online"
    },
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "completed": "November 2015",
      "url": "https://classroom.udacity.com/courses/ud000"
    },
    {
      "title": "Programming Foundations with Python",
      "school": "Udacity",
      "completed": "November 2015",
      "url": "https://www.udacity.com/course/ud036"
    },
    {
      "title": "Intro to HTML & CSS",
      "school": "Udacity",
      "completed": "February 2016",
      "url": "https://classroom.udacity.com/courses/ud304/"
    },
    {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "completed": "March 2016",
    "url": "https://www.udacity.com/course/ud804"
    },
    {
    "title": "Object-Oriented JavaScript",
    "school": "Udacity",
    "completed": "April 2016",
    "url": "https://www.udacity.com/course/ud015"
    },
    {
    "title": "Intro to jQuery",
    "school": "Udacity",
    "completed": "May 2016",
    "url": "https://www.udacity.com/course/ud245"
    }
  ],

  displayschools: function() {

    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedName = formattedName.replace("#", education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedMajors);
      $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
    }
  },
  displayOnlineCourses: function() {

    if (education.onlineCourses.length > 0 ) {
      $("#education").append(HTMLonlineClasses);
      for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].completed);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
      }
    }
  }
};

var work = {
  "jobs": [
      {
      "employer" : "Foster's Market",
      "title" : "Head Cashier / Candy Manager",
      "location" : "Durham, NC",
      "datesWorked" : "March 2014 - Present",
      "description": "I was hired as a member of the general retail staff and became the head cashier within only a few months. In that time I've been with the company I've been promoted to manager of candy sales and inventory, and became employee of the month (June 2016) for exceptional work."
      },
      {
      "employer" : "Soma Intimates",
      "title" : "Sales Associate",
      "location" : "Durham, NC",
      "datesWorked" : "November 2012 - September 2014",
      "description" : "I consistently exceeded expectations in both sales and email captures for our store. I was on the fast track to management when I decided to move on to a job with a more stable schedule and managing staff."
      }
  ],
  display: function() {
    for(job in work.jobs) {

      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "HTML Email",
      "url": "www.example.com",
      "dates": "October 2015 - October 2015",
      "description": "The final project in General Assembly's Front-End Web Development Program.",
      "images": ["images/email.psd"]
    },
    {
      "title": "Online Resume",
      "url": "www.example.com",
      "dates": "March 2016 ~ April 2016",
      "description": "This website was part of Udacity's Front-End Web Developer Nanodegree.",
    },
    {
      "title": "Frogger",
      "url": "www.example.com",
      "dates": "April 2016 ~ May 2016",
      "description": "Created an online arcade game for Udacity's Front-End Web Developer Nanodegree.",
    }
  ],
  display: function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
    }
  }
};

bio.display();
summary.display();
work.display();
projects.display();
education.displayschools();
education.displayOnlineCourses();