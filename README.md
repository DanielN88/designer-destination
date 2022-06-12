# Designer Destination

### Deployment Link
You can view the deployed project [here]().

## Overview:
This application allows to users to navigate through a mock travel planner and save attractions they are interested in. The user can choose one of the suggested trips to display attractions around them. They can also manually fill in the inputs to display attractions around the area searched. Once the user has found an attraction they like they can choose to interact with it to display more details and eventually favorite it. Once favorited the attraction will be displayed on users planner page. 

## Application in Action:

Searching for attractions and adding to planner:

![destination-planner](https://user-images.githubusercontent.com/92230099/173250735-0a38e13a-be6e-4a62-b0bf-27996552a935.gif)

Displaying error handling:

![destination-error-handling](https://user-images.githubusercontent.com/92230099/173250765-033e5c7f-9e62-4300-a6fa-a0aebcc68a2c.gif)


## Set Up:

- Clone the repository to your local machine.
- `cd` into the application.
- Run `npm install` to install the project dependencies.
- Run `npm start` to see the application.
  - Paste http://localhost:3000/ into your browser to view.
  - If you need to stop running the application, run `Control + C`.
- To view tests, run `npm run cypress`.

## API Used:

The Api used for this project was the [OpenTripMap API](https://opentripmap.io/product).

All end points used in this project are conviently displayed in their documentation [here](https://opentripmap.io/docs#/).

All of their potential catlogue options are displayed [here](https://opentripmap.io/catalog).

## Goals and Challenges:

The biggest challenge for this project was the short time frame for completion and navigating the choosen API. The data was nested in a way that required a great deal of fetch calls. These multiple fetch calls caused many timing issues as well as displayed the limitations of the API. While it did function as expected from my testing the API was limited to a maximum of nine repetitive fetch calls before it failed. This presented new challenges, but was an excellent learning opportunity. 

## Technologies:

- React
- Javascript
- CSS
- JSX / HTML
- Router
- Cypress
- Restful APIs
- NPM

## Future Additions:

In the future, I hope to build out additional user functionality, including the following:
- Giving user the abilitiy to plan individual trips and save attractions to each one.
- Allowing users to plan attraction by trip dates and eventually link to booking site.
- The application is not fully resonsive (ex: on mobile devices) and we would like to make it so in the future.
- The user should be able to see geo location data on the attractiosn details page. 
- Implement a loader so that error messages don't dispaly out of timing. 

## Contributors:

- [Daniel Neer](https://github.com/DanielN88)

