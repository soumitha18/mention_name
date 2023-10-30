# Squadcast assignement

Project: Mentions component <br/>
Link to design: [Design](https://www.figma.com/file/EEmRktq44VPR3u8Lx7otOJ/Frontend-Assignment---Dropdown?type=design&t=YyUdu9qHBb3sS66T-6)

Description: 
This is similar to the @-mentions in X/Twitter. The user can type any text in the input element but when user types `@` then a select box should appear from which they can select an option and it should be displayed in input element. For example `Hi @Luke Skywalker may the force be with you.`. 

## installation and setup - 
open the terminal and follow the below steps
1.  clone the repo
     ```
       git clone https://github.com/soumitha18/mention_name
     ```
2.  Go inside the repository
     ```
       cd mention_name
     ```
3.  Install dependencies
     ```
        npm install
     ```
4.  Start
     ```
        npm start
     ```

app will run in `http://localhost:3000/`

## page will look like 
<br/>
<img src="images/start.png" width="80%"/>
<br/>

### The flow will be 
<img src="images/start.png" width="80%"/>
<img src="images/started.png" width="80%"/>
<img src="images/mentioned.png" width="80%"/>
<img src="images/completed.png" width="80%"/>

## Cypress Setup-
1. Go to terminal and execute the below steps
     ```sh
         npx cypress open
    ```
     it will redirect to the cypress browser
     <img src="images/cypress_e2e.png" width="80%"/><br/>
2. click on `configured` which is under `E2E Testing`<br/>
     it will redirect to `browsers selection`
     <img src="images/cypress_browser.png" width="80%"/><br/>
3. click on `Start E2E Testing in Chrome`<br/>
     You can see the set of all test cases
     <img src="images/cypress_cases.png" width="80%"/><br/>
4. click on `mentionName.cy.js` - test case will get run<br/>
     <img src="images/cypress_landing.png" width="80%"/><br/>
     If the test case is passed, it will look like this<br/>
