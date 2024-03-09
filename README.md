<h1 align="center"> 
  <img alt="Push Logo" src="https://assets-global.website-files.com/5fb89486431df956d62ce163/5fd25493adfb0dd6c286a727_Push-Favicon.png"> Push Frontend Hiring Test
</h1>
<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/tomasperezdev/push-fe-ht?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/tomasperezdev/push-fe-ht?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tomasperezdev/push-fe-ht?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/tomasperezdev/push-fe-ht?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/tomasperezdev/push-fe-ht?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/tomasperezdev/push-fe-ht?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/tomasperezdev/push-fe-ht?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Push Frontend Ht 🚀 Under construction...  🚧
</h4> 

<hr> -->
<p align="center">
  <a href="https://pushfeht.web.app/" target="_blank">Demo 🎮</a> 
</p>
<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Run</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/tomasperezdev" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

In this project, I reproduce the screen of a web application following the instructions described and the Figma designs provided for it. Using the demo data JSON file that was included, we show a set of employee cards with their Full Names and Total Hours, data that required processing to format and calculate before displaying it

## 🕵️ My Approach ##

**1. The requirements:**

  1. I started by checking all the provided information **looking for questions**, issues or doubts on my side, so I could quickly communicate any need for explanation or extra information before starting to build the application
  2. After making a list, formulating and dividing my questions as specific and accurate as I could, I then sent an email looking for some clarification, specially with some **business rules** I was going to define
  3. Once I took a good look of the application layout, using the figma designs to divide the application in individual components, I started coding

**2. Building the layout**
   
  1. I started by choosing an **UI component library** for the excercise, MaterialUI was my pick, as I knew it had some elements shown in the designs that would help me build them faster and with the level of customization that I needed\
  2. I then created a constant file, to include **all the colors** I could identify from the designs, to have them ready for whenever I needed them, I added new ones later on, but I like to have a good base to start\
  3. With all that ready, I then created the **navigation structure**, defining the posible routes, paths, and the Layout components where the three pieces of the site would live, the Side Bar, the Top Bar, and the Main Content\
  4. Finally I added a slice to have a way to identify the navigation using a **simple appState** variable that would help me change some styles and texts depending on the path the user was in\

**3. The Components**
    
  1. I started with the tricky part, **the drawer**, creating the side bar, with some styles and populated with the routes defined, creating list items that would serve as Links to navigate to the different states of the app\
  2. Then I worked with the **Top Bar**, now with the updated state, I was able to place the current state as the Header, and built the user/avatar static content on the top right corner\
  3. From there, I structered the **main content area**, creating a specific component that was going to be the Employees screen with its search bar and the rendered Employee Cards\
  4. Then I defined a local, **temporal json array** that helped me define the interface of what the Employee data would look like, and help me to start seeing some cards on the screen, no longer hard coded\
  5. Finally, I created a **hook** to determine wether the user was accesing the application from a **desktop, tablet or mobile device**. This then helped me to do some conditional styling, specially to the layout, to change what was shown depending on the width of the device screen\

**4. Data processing**

  1. With the UI in place, and ready to just replace the data source, I then proceed to create a method in a separated file that would handle the "GET" the data from the **demo data file provided**, map the values on it, and provide a parsed and formatted array to be requested by the UI
  2. From the requirements phase, I already identified some issues with the data. **Missing or null values**, **unrealistic dates**, and **duplicate entries**, so I decided to tackle the fullName employee property first, to start flowing **real data into the view**
  3. I created some local functions to have them as **utils or helpers** to process the mapped data, validating **if there were null values**, then **fixating the first letter** of the word to be capitalized, and setting the **rest to lower case** to make sure the names were formatted correctly
  4. Then I used a for each method to get a first glance of what the **total hours property** would look like for each employee, checking their "labour" prop and **iterating by all the day entries** found, and adding up to a total using the "total hours per day" found in the JSON
  5. Finally, I added some assumed **business rules**, to see wether the date was a **valid date**, if it wasnt, the values would be discarded
  6. **UPDATE-ErrorHandling:** After validating the answers, the business rules established that the date format should be **YYYY-MM-DD**, that the **maximum hours** an employee can have per day **is 24**, and in any of those cases (including invalid dates) an error should be displayed
  7. Since all the dates in the JSON provided where in a format of YY-MM-DD I decided to include **momentjs** in the project to use it to see if the given date was valid, avoiding some unexpected behavior that otherwise would require much more date validations
  8. I also changed the Employee interface to now include an **error array**, with a code and a message, so if present, to be shown for the specific Employee with the error, and describing where, when and why the error was encountered
  9. Using the **Alert component** from MaterialUI I was able to show a nice message in case there were any problems with the data processing

**5. The tests**\
    
  1. I usually like to do the tests **after implementing** and seeing everything working as expected, so once I was seen the data in the view, and made sense with the requirements, I started seeting up the tests
  2. I created **four test cases** for the getEmployees function that retrived the parsed Employees data:
    
      ◻️ it "should return an array of employees with fullName and totalHours"
      
      This would make sure that the result array would **include** a fullName and a totalHours properties on each retrived element
    
      ◻️ it "should only count hours for real dates"
    on the assumptions made, this test checked the result information to be accurate. **Updated** the expected values to include the new error properties\   
      Using the **expected values** from the demo json, and based
      
      ◻️ it "should capitalize the first letter of first and last names"\
      
      Making sure every word found in the fullName property of each element would have the **first letter capitalized and the rest in lowercase**\
      
      ◻️ it "should render the correct amount of EmployeeCard components"\
      **Rendering** the Employees component, which used the getEmployees function, we could see if the amount of displayed cards with the test-id was the expected amount according to the demo data

**6.** Cleaning Up\

  1. To close up the test, I then proceeded to create **separate styles files** for the components where all the inline css values would be store, to make the tsx files cleaner, and easier to find a specific property or value to be modified\
  2. Also, I like to keep any **hard coded text or string** in the application in a specific place, so I created a "localizedStrings" object that included all the required label text for the application to make it easier to change whenever needed and as a base for a future localization process\
  3. Then, I moved the local data **formatting functions** to its own utils file, to have them available anywwhere else of needed and for easy access if any chance is required\
  4. Finally, I created this **ReadMe file**, trying to document all my process, findings, assumptions, and other considerations for building and completing this excercise\
    
## :sparkles: Assumptions ##

:heavy_check_mark: The figma desings showed both the Desktop and Tablet layout for the requirments, but didnt include a landscape view for tablets. So I assumed that it would take the desktop layout when the user was in landscape orientation\
:heavy_check_mark: Total Hours can be decimal values, based on the Figma designs

## 🔎 Findings ##

◽️ I had to add support on validating that the First and Last Name of the employee had the first letter capitalized and all the others in lower case\
◽️ Had to make a decision regarding the date format that was going to be accepted, since the dates provided in the demo data were valid dates, but not likely insightful information\
◽️ Add a validation to see wether the First Name or Last Name might be null values

## :sparkles: Extras ##

◾️ A navigation FAB Button in the bottom right corner of the screen so the user can navigate to the other two screens when using a Tablet or Mobile\
◾️ Support for Mobile devices\
◾️ Unit Testing for the business logic involving the data processing
◾️ Created a "Coming Soon" component to show in the two screens not described in the figma design, but present in the navigation menu
- SVG taken from [the error 404 page](https://www.pushoperations.com/not-found) in the pushoperations.com website.

## :rocket: Technologies ##

The following tools were used in this project:

- [ReactJs](https://react.dev/)
- [Redux](https://redux.js.org/)
- [MaterialUI](https://mui.com/material-ui/)
- [Jest](https://jestjs.io/)
- [momentjs](https://momentjs.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Set Up ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/tomasperezdev/push-fe-ht

# Access
$ cd push-fe-ht

# Install dependencies
$ npm install

# Run the project
$ npm start

# Run the tests
$ npm run test

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT.


Made with :heart: by <a href="https://github.com/tomasperezdev" target="_blank">Tomas Perez</a>

&#xa0;

<a href="#top">Back to top</a>
