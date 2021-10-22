# design-my-week
A schedule designer and day optimizer

# Project Overview

## Project Name

Design My Week.

## Project Description

"Design My Week" will be a dynamic website for user's to optimize their day and organize their week. The App will allow users to input to-do list items and recieve a customized plan for their week, taking into account importance and timliness of each task. There will be interactive sections of the App for users to optimize their day, self reflect and practice desired habits and skills.

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy

Show your component hierarchy here! Use [this](https://cms-assets.tutsplus.com/uploads/users/1795/posts/30352/image/GettingStartedWithReduxTutorial-React-Component-Structure.png) as an example.

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
}
```

### MVP/PostMVP
  

#### MVP 


## React
- Have a thoroughly developed README.md file
- Be a working, interactive React app, built using create react app.
- Utilize React Router, installed via NPM.
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure (via Components directory)
- Utilize functional components appropriately.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.
- Use only React for DOM Manipulation.

## Styling
- Be styled using any combination of CSS, Styled Components, CSS-in-JS, or a component library to style your React project.
- Use flexbox (display: flex) or CSS Grid (N/A if using a component library that handles this).
- Implement responsive design on 2 screen sizes, using a media query (desktop and mobile and N/A if using a component library that handles this).

## Linting
- Indented properly.
- Utilizes high-quality, semantic variable names.
- Follow camelCase, kebab-case and PascalCase conventions in your code
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are acceptable).

## Miscellaneous
- Deployed via Netflify
- Minimum of 50 commits to GitHub

## Project Specific
- user can:
    - input their name upon arrival
    - add tasks to the AirTable API
    - delete tasks from the API
    - edit tasks
    - user can track water intake throughout the day

#### PostMVP  

- user can "log in" with a username and password to access their own personal task list from API
- user can add habits they would like to practice daily to a seperate habit tracker section
- a "morning warmup" section that includes links to sites like Duolingo, Codewars, MonkeyType and other sites for learning and training (learn a new word, news snippets, etc.)
- implement at least one third party API
- a "note pad" section for users to add notes for the day
- Alerts for user to take a break, fix posture, stretch, sip water, etc.
- a "focus mode" option that hides distracting elements form the page
- a journal section with randomly generated prompts (either imported from a third party API or from a separate AirTable API) and a "note pad" for answering prompt.
- a meals section to add favorite meals and snacks, get inspiration for new meals and snacks, track fridge/pantry and grocery list.
- certain elements of page are "collapsable" so user can customly hide them and unhide them.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|October 22| README.md First Draft / Proposal Prepped / Project Approval / Prioritize / Timeframes | Incomplete
|October 25| Core Application Structure - MVP Components Basic Functionality, Basic CSS Styling / Pseudocode each Component / Start Hard Code| Incomplete
|October 26| Continue writing Hard Code / MVP | Incomplete
|October 27| Clean up Code, README and glaring App quirks / Work on Post MVP| Incomplete
|October 28| Post MVP / Clean Up / Presentation Prep | Incomplete
|October 29| Presentations | Incomplete

## Timeframes

NOTE: tbd post proposal approval and priority plan

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:
    - Design and styling. Making an App aesthetically pleasing.
    - Lots of ideas for features

### Weaknesses:
    - Can be disorganized which can lead to messy code
    - Not totally comfortable with React components and Link/Route (yet!)
    - Responsive design and flex box. Sometimes this can be an after thought for me.

### Opportunities:
    - Practice staying organized and cleaning code as you go, before jumping ahead to the next idea.
    - Get comfortable manipulating components with practice.
    - Get comfortable using flex box to manipulate the page how you envision.

### Threats:
    - Underestimating complexity of desired features
    - Not planning my time efficiently/realistically
    - Frustration getting components to do what I want and go where I want when I want
