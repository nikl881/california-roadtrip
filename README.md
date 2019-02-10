![alt text](https://nikl881.github.io/nortstack/images/artboard_full.png "Logo Full 1")

Concerns the corporate website of a new digital agency called  ‘Nortstack’. Nortstack is a collaboration between Niels de Klerk (Project Manager and full stack web developer) and Rogier Leijen (Motion Graphic Designer and Art director). 
Based on their different backgrounds, a merger has been formed to offer innovative online services that combine creativity, customer intimacy and the use of modern technology standards. 
Nortstack was founded in 2018. See www.nortstack.com (online from 03-02-2019) for more information and contact details. 

This project concerns the first official assignment at Code Institute (see more at www.codeinstitute.net). 

Niels de Klerk (2019) 

## UX perspective 

User stories, as an important part of the UX design, are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, 
usually a user or customer of the system. In a random order a list of important user stories has been drawn up bellow: 

*	As a (first time) visitor of the website, I want to see directly what kind of website I’m looking at; 
*	As a prospect, I want to see clearly what kind of services Nortstack delivers. I’m expecting to see relevant information without searching through the website; 
*	As a IT recruiter, searching projects for clients, I want to see relevant information about services and people behind the company. 
*	As a (co-)owner of the company, I want to use the website as an digital business card. I need the website to be in line of the corporate identity, and also be available for good use of mobile devices (responsive design); 
*	As a prospect/customer/visitor, I want to find some contact information about the company, i.e. email-addresses and location of the office.  

In the following link additional information concerning the UX/UI design can be found. 
This includes wireframes and mockups and basic images for the branddesign: 

https://drive.google.com/drive/folders/1PtXtJduz-PELMQiYZTIpvAgPSXKjqaYd?usp=sharing

## Features

Existing Features (week 1 - 2019) 

*	Main feature 1 -  short corporate video- allows users to see a few minutes video about the services of Nortstack by clicking on the video link in the center container of the index.html page. 
*	Main feature 2 - menu navigation - allows users to enter specific places of the website, by using the navigation buttons with descriptions of different parts of the website. It's also possible to navigate backwards easily.
*	Main feature 3 - footer icon links – give a quick and easy access to all social media environments that Nortstack represents. 
*	Feature mainpage – video / Introduction video  
*	Feature mainpage – Text / Introduction text 
*	Feature about – General information about owners of the company seperated in two text areas. Allows users to see general  background information. 
*	Feature about – Full width image with photo styling. 
*	Feature cases –  Cases / headlines / basis imageblok and layout styling for cases page (basic layout only). 
*	Feature contact - Basic form implemented with no further function. Currently for layout purpose only. 
*	Feature contact – Basic adres information with location map image, styled in general company identity. 

Features Left to Implement (in a random order listed below)

*	Implement form logics so the contactform is usable (contact.html)
*	Add Google maps API for geographical loction mark office location Nortstack.
*	Add customer login in de main navigation bar for (existing) customers (basic portal functionality) 
*	Add JavaScript components to create a more interactive design 
*	Add customer stories as an extra html page on the website 
*	Add a additional html page about company strategy and workprogress of Nortstack
*	Add Google analytics to generate relevant data. 
*   Create social media accounts so a reference can be made from the website. 
*   Replace dummy image and text on cases.html for real customerlogo's with a matching description.  

## Technologies Used

In this section all of the languages, frameworks, libraries, and other tools that have been used are mentioned. 

*	HTML 5
The website uses HTML5 as a fundamental basis for building the website.

*	CSS3
The website uses CSS3 with regard to the styling of all elements within the website. For this a separate layout has been created within the page structure. CSS is used for all content, including: images, video, layout of color and background, etc.

*	Bootstrap 3.7.6.
The open-source Bootstrap framework has been used to implement some basic templates for forms, buttons and navigation. Bootstrap has also been used to stand with a responsive and mobile first design of the web page.

*	Cloud9
AWS (Amazon) Cloud9, a cloud-based integrated development environment (IDE) that has been used to write, run, and debug the code used for the website. 

*	GitHub
GitHub has been used for version control of the code by using Git. During the realization of the project, Git was daily used.

## Testing

Various methods have been used to test the code of the website. During development,
there has been continuously tested on the quality of the code. This has been done by checking the correct functionality of the code on different screensizes, different resolutions,
different devices (mobile, tablet, desktop). This approach is used from the start to the end of the realization of the project.

Site viewed and tested in the following browsers:
    * Firefox
    * Safari 
    * Chrome

Site viewed and tested in the following devices:
    * Samsung Galaxy
    * Iphone 8
    * Iphone 6S
    * Ipad
    * Macbook 13" and 15"

Mockups and sketches were also used to continuously build and deliver in accordance to the initial plan and design of the website.
In the final phase of the project, the opinion of a number of people was asked. We used professinoals and non professionals to see iff the site functions properly from a certain perspective. 
In order to be able to check whether the code functions as it was conceived during the design phase, we tested the functions on a basis of different scenarios.
Below the main features described that are basic functions as currently available on the site.

* Main navigation - 
    * Go to about.html, cases.html, contact.html. 
    * Navigate back to index.html using the 'home' button.
    * Try to navigate on a tablet screensize resolution within all the navigation buttons.
    * Try to navigate on a mobile screensize resolution within all the navigation buttons. 
  
* Video - 
    * Play the external video file on index.html on different webbrowsers (IE, Firefox, Chrome, Safari).  
    * Play the video file on a small (mobile and tablet) screensize. 
 
* Links - 
    * Mouseover the footer buttons to see green color as part of the design.
    * Click on the footer buttons to verify a external site will load.
    * Verify that the Nortstack site is still open at a different tab at moving to external site. 

* Responsive / mobile first design - 
    * Verify that the navigation and footer are availble at every screensize.
    * Verify the changes in lay-out at cases.html on different screensizes (better users experience and clarity of design).

## Issuelist 

| Issue number    | Description     | Implemented Solution  |
| ------------- |:-------------:| -----:|
| 1	| Image index.html not responsive on mobile view| Added CSS functions: width: 100%; height: auto; to make it responsive on all screensizes |
| 2	| Video content Youtube shows unwanted commercials in embeded view  |  Replaced the video/iframe source from Youtube to Vimeo |
| 3	| Header was not responsive at lager resolutions      |  Replaced the custom header into Bootstrap header and rebuild it into desired style |
| 4 | W3C error about deprecated form styling   |  Added example text instead of value 0 within inputfields and changed styling from HTML into CSS |
| 5 | Width of page not neat on all views during testphase  |  Created a container class with a max width of 700px on all elements |
| 6 | Bootstrap columns did not stack like design/mockup requirements  |  More knowledge gained from Bootstrap columns and did debugging on stacking columns |
| 7 | Menu items in main navigation are outside navbar  |  Replaced the custom header into Bootstrap header and rebuild into desired style |
| 8 | No active link available on different html pages |  Debugged by adding active link to every html page|

## Deployment

The website is made in the AWS Cloud9 environment. To give a good idea of the development progress, short deliveries are always placed at the workspace on GitHub. 
uring the development period a upload was made to GitHub after every 3 to 4 hours of development work.

It has happened a few times that we faced some coding beginner issues. Thanks to a restoration via GitHub, we were able to continue working on improving the website quickly. 
The way the Git process is used is as follows:

1. Builded the site on a local environment.
2. Staged the files in the stage area.
3. Perform push to Github to renew the working environment. (Git directory / repository).

The website is now live in a testing environment, available at the following link: https://nikl881.github.io/nortstack/index.html. 

After implementing the remaining features listed above the site will be live at: www.nortstack.com


## Credits

This README file is based on the Code Institute template.

## Media

All media files used were developed by Nortstack itself for the design of the project. 

## Acknowledgements

It is a good introduction step for me into software development. 
This project concerns the first official assignment at Code Institute. 
Nortstack is a collaboration with me and Rogier Leijen. 
Working together for the first few weeks on our company site gives me a good feeling for the near future. 
I am looking forward to doing more projects together and to master webdevelopment more and more during the training. 

I would also like to thank Anthony Ngene (https://github.com/tonymontaro) as a supervisor in the development of this project. 
Thanks to his feedback, I have been given the correct insights to achieve this result.
