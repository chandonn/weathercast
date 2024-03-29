
# WeatherCast

Weather forecast application built with TypeScript, Nextjs and ReactJs, and deployed to Vercel. [WeatherCast](https://weathercast-sand.vercel.app/)

## Usage

- Use the search bar to locate any city you want to see the forecast from
- Click the top right corner to open the menu, where you can change the units
- Icons will resemble the weather conditions of the current day and next days
- The next days temperature is displayed as Min/Max respectively

## Running the application locally

- Copy the link under the "code" button

- Open the terminal

- Type `git clone ${link}` (this assumes you have git installed locally)

- Type `cd weathercast` to enter the project folder

- Run `npm install` to get the dependencies

- Run `npm start` to run the project, once the installation finishes

## Publically available application

Head to [WeatherCast](https://weathercast-sand.vercel.app/) to see the live project

## Project decisions

### Architecture

- Clean architecture: Organizing the project contents, components, and files. Makes it easier to find anything and extend the project.

- Flux architecture for state management: Makes the project more scalable and maintainable.

### State management

- Context API with flux architecture: Normally ReduxJs would be used, but since it's intended to be a small project, it was decided to use the ContextAPI with a good structure as the flux provides.

### The weather API

- [OpenWeather](https://openweathermap.org/api) is used to get weather data and geolocation data.

### Libraries

- [Font Awesome](https://fontawesome.com/)

### UI
- Font: [Inter](https://fonts.google.com/specimen/Inter)
- Images: [Unsplash](https://unsplash.com/)

The UI design was built using a simple and clean design. Combining elements such as thin fonts for texts and translucent containers. That enhances the experience when using the application, which showcases the next five days weather forecast for any city, catching users' attention, while presenting current weather information at the spotlight.
