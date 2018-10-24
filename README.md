EDINKI - EDucation INKed In


# Summary

This is a Continumm Education App for developing a central location for dentists, Dental Hygienists, Dental Assistants, Laboratory Technicians, and Other Dental Personnel to search Dental Continumm Education courses by location, dates, categories and professions.


Epic – CE Website for finding Dental CE by Location, Topic, Date, Presenter

Feature
1.	Location Search
2.	Topic Search
3.  Profession Search
4.  Date Search
5.	Presenter Search
6.	Education Provider Create/Read/Update/Delete CE Courses

1.	Location Search -Feature
	As a USER
	I want to find CE Courses By Location
	So I can get Detailed information of a course located where I’d like to travel

A.	Story Points
a.	Display world map with clickable regions with number indicator of Courses Available for that region. 
b.	Click region to obtain more detailed map of Specific region with # indicating Available Courses
c.	Click on # to obtain detail list of courses available under number for that specific region
d.	Click on a specific course to obtain details of the specific course at the location I’m interested in traveling.

2.	Topic Search – Feature
	As a USER
	I want to find CE Courses by Topic being Presented
	So I can get Details of the Specific Course I’m interested in learning

A.	Story Points
a.	Display a clickable list of Topics to allow a more detailed list of topics to be presented.
b.	Display a clickable list of more detailed topics allowing a detail list of courses to be listed.
c.	Display a clickable list of courses to allow more details to be listed about each individual course.
d.	Display Details of the specific course selected for the Topic I’m interested in Learning.
 
3.	Date Search – Feature

As a User
I want to find CE Courses by the Date it is being offered
So I can get details of the courses being offered on a specific date.

A.	Story Points
a.	Display a dynamic calendar to allow a user to select a date on the calendar.
b.	After clicking a date. display a list courses with the ability to sort by location, topic or presenters allowing selection to a more detailed view of the course
c.	Display Details of the specific course selected by the date.

4.	Presenter Search – Feature

As a User
I want to fine CE Courses that are being offered by a specific presenter
So I can get details of the courses being offered by a specific speaker

A.	Story Points
a.	Display an Aph list of Topics to allow a more detailed list of topics to be presented.
b.	Display a clickable list of more detailed topics allowing a detail list of courses to be listed.
c.	Display a clickable list of courses to allow more details to be listed about each individual course.
d.	Display Details of the specific course selected for the Topic I’m interested in Learning.

Database Website setup

1. Mongo Data base first - (Models/Schema)
A. rides
	B. users
2. Back in Software - Node.js 
	( User Stories - 
		1.  Who ia ir for:  Developer / User
		2.  What is it doing?
		3.  Why is it being done?
	A. start with server - server.js
	B. Controllers - userControllers.js
	C. Routes - users.js
	D. functionality -

For a Calendar:
Google : npm Fullcalendar react - https://www.npmjs.com/package/fullcalendar-react
