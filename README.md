
## Design My Week

https://fervent-swartz-34d852.netlify.app

## Project Description

Design My Week is a React App for users to optimize their days and organize their weeks. The App allows users to input to-do list items and their corresponding ratings of importance, urgency, enjoyment and time-to-complete. Each task is stored in AirTable. The user can then click 'Design my week' and recieve a customized plan for the week, taking into account inputted ratings of each task. There are various other interactive sections of the App for users to optimize their day, including a self reflection page and sections to track habits and practice skills.

## Wireframes

Desktop

![image](https://user-images.githubusercontent.com/87200663/139360273-32236cfa-c684-48cb-9dd2-12fd4231b2ec.png)


## Component Hierarchy

![image](https://user-images.githubusercontent.com/87200663/139365099-ae09c7c0-c06c-4da2-8c5d-18f59ac12b2d.png)


## API and Data Sample

https://airtable.com/app8BFd6lNH00rllQ/tbl52gEObFswKDU8r/viwJhGsgUfHb5W5Ff?blocks=hide

{

    "records": [
        {
            "id": "recs3NL951sxMYa6K",
            "fields": {
                "enjoyment": "4",
                "urgency": "7",
                "Name": "gooliajulia",
                "importance": "9",
                "rating": 20,
                "minutes": "30",
                "task": "go for a walk"
            },
            "createdTime": "2021-10-26T21:35:33.000Z"
        },
        {
            "id": "recpxNLGn0MqCax0Q",
            "fields": {
                "enjoyment": "4",
                "urgency": "10",
                "Name": "gooliajulia",
                "importance": "10",
                "rating": 24,
                "minutes": "30",
                "task": "do dishes"
            },
            "createdTime": "2021-10-27T21:23:13.000Z"
        },
        {
            "id": "recgd8WRUrkIewPl0",
            "fields": {
                "enjoyment": "3",
                "urgency": "7",
                "Name": "gooliajulia",
                "importance": "8",
                "rating": 18,
                "minutes": "60",
                "task": "meal prep"
            },
            "createdTime": "2021-10-28T19:04:49.000Z"
        }
    ],
    "offset": "itrqjnhAxaFRH9m1z/recgd8WRUrkIewPl0"

### MVP/PostMVP
  

#### MVP 


## React
- Be a working, interactive React app, built using create react app.
- Have at least 6 separate, rendered components.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.

## Styling
- Implement responsive design on 2 screen sizes, using a media query (desktop and mobile and N/A if using a component library that handles this).

## Miscellaneous
- Deployed via Netflify
- Minimum of 50 commits to GitHub

## Project Specific
- user can:
    - input their name upon arrival
    - add tasks to the AirTable API
    - delete tasks from the API
    - user can track water intake throughout the day

#### PostMVP  

- user can "log in" with a username and password to access their own personal task list from API
- a "morning warmup" section that includes links to sites like Duolingo, Codewars, MonkeyType and other sites for learning and training (learn a new word, news snippets, etc.)
- a "note pad" section for users to add notes for the day
- a journal section with randomly generated prompts (either imported from a third party API or from a separate AirTable API) and a "note pad" for answering prompt.
- a meals section to add favorite meals and snacks, get inspiration for new meals and snacks, track fridge/pantry and grocery list.
- certain elements of page are "collapsable" so user can customly hide them and unhide them.
- user can add habits to habit tracker
- implement at least one third party API
- Alerts for user to take a break, fix posture, stretch, sip water, etc.
- a "focus mode" option that hides distracting elements form the page

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|October 22| README.md First Draft / Project Approval / Timeframes | Complete
|October 25| Core App Structure - MVP Components Basic Functionality, Basic CSS Styling / Pseudocode each Component / Start Hard Code| Complete
|October 26| Continue writing Hard Code / MVP | Complete
|October 27| Clean up Code, README and glaring App quirks / Work on Post MVP| Complete
|October 28| Work on some Post MVP / Clean Up / Presentation Prep | Complete
|October 29| Presentations | TBD

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic App Strucutre | H | 3hrs| 3hrs | 3hrs |
| Basic CSS | H | 2hrs| 1.5hrs | 1.5hrs |
| User Entry Page | H | 2hrs| 6hrs | 6hrs |
| Greeting and Warups | H | 6hrs| 5hrs | 5hrs |
| User Entry Page | M | 6hrs| 5hrs | 5hrs |
| Filter User Tasks | H | 0.5hrs| 3hrs | 3hrs |
| Display Tasks | H | 2hrs| 4hrs | 4hrs |
| Schedule Implementation | M | 4hrs| 2hrs | 2hrs |

## SWOT Analysis

### Strengths:

I have a good handle on CSS and styling, and a lot of ideas for the app, with a good idea of the logic to make them happen.

### Weaknesses:

I can be a bit disorganized which can lead to messy code, and also underestimate how long it might take to complete tasks. I also still don't have an entirely clear understanding of the best way to use componenets.


### Opportunities:
    - Practice staying organized and cleaning code as you go, before jumping ahead to the next idea.
    - Get comfortable manipulating components with practice.
    - Get comfortable using flex box to manipulate the page how you envision.

### Threats:
    - Underestimating complexity of desired features
    - Not planning my time efficiently/realistically
