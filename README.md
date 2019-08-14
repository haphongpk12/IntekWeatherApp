# IntekWeatherApp 

#### Core

### Mission

You have to develop a React Native app that will work in both iOS and Android platforms. For convenience we are only going to test the app in iOS iPhone simulator. Your app will query a local JSON file and call a third party API to fetch the data and display in the app.

### Open Weather Map API

We are going to be using a third party API to get the required data. It requires you to create an account in them and subscribe you to their API. Follow the link below to register an account:

https://openweathermap.org

Once you are registered you need to subscribe to Current Weather data API in the following link:

https://openweathermap.org/api

You would have to read the API docs for the specific API. The following link helps you to understand API more:

https://openweathermap.org/current

### Prerequisite

We assume that you have React Native installed in your PC's. But for students whose PC doesn't have React Native, you need to follow the procedures step by step to get React Native installed:

https://www.npmjs.com/package/react-native

https://facebook.github.io/react-native/docs/getting-started

### Practicing with React Native

You can practice your React Native code using an online code editor. The following code editors are popular with developers and you may use them to practice your React Native code:

https://codesandbox.io/s/q4qymyp2l6

https://codepen.io/necolas/pen/PZzwBR

### The App

The following is the screenshot of the app:

![](https://i.imgur.com/NI5ICv2.png)

### Waypoint 1: Create a skeleton React Native app

Create a basic React Native app that displays a text or an image.

### Waypoint 2: Parse JSON file

Fetch information from parsed data.

### Waypoint 3: Create and Load Picker Component

Create a Picker component in your app. More information on Picker can be found here:

https://facebook.github.io/react-native/docs/picker

Once you create a Picker component, load the parsed JSON data value city into pickers. Remember only load the JSON value of city into picker.

### Waypoint 4: Create TextInput Component

Create a TextInput component above the picker component. More information on TextInput component can be found here.

https://facebook.github.io/react-native/docs/textinput

When a text value is entered in TextInput it will show the corresponding value in Picker. In a way TextInput and Picker are synchronized.

![](https://i.imgur.com/DoFSBtz.png)

### Waypoint 5: Fetch API data

When a valid TextInput is entered or when a Picker value is selected we fetch the API data of the selected city from Open Weather Map API.

### Waypoint 6: Display the weather data

Display the data of the fetched API from Open Weather and stylize a component with images for each weather conditions to display interactive weather data.

![](https://i.imgur.com/pFgMBHX.png)

### Local JSON File

For this project you will be working with JSON file that will has all the cities in Vietnam.
[JSON File](city.list.json)

---

#### Bonus 

### Facebook Login

We will be using `react-native-fbsdk` to integrate Facebook login to work with our app. The following is the documentation on how to install and use it:

https://github.com/facebook/react-native-fbsdk

Note that installing a wrapper doesn't always work directly. You would have to search for and find the best possible solutions to make it work.

![](https://i.imgur.com/8QZo6m3.png)