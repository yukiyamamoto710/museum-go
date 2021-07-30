# Museum Go
![View Artists](https://media.giphy.com/media/5i6ILFg17iqrxdZfSs/giphy.gif)
![My Gallery](https://media.giphy.com/media/Xv0n3lURlFk9dBq4pj/giphy.gif)

<!-- ABOUT THE APPLICATION -->
## About The Application

A mobile app where users can build their own art gallery by taking/saving photos of their favorite artworks and also look up artists' biography. 
This app was built for 2 days as a MVP project.

### Built With

* [Expo](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Express](https://expressjs.com/)

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install
  ```

### Installation

1. Fork and clone the repo to your local computer
   ```sh
   git clone https://github.com/yukiyamamoto710/museum-go.git
   ```
2. Get an API Key from https://developers.artsy.net/v2/start

3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a config.js file in the root directory and enter your API in ```server/config.js```

5. Run expo and server
   ```sh
   npm start & npm run server
   ```
6. Run a mock server using JSON Server and change the url in ```screens/Artists.js```
   ```sh
   lt --port 8000 --subdomain application-mock-server
   ```

<!-- USAGE EXAMPLES -->
## Usage
- Search artists's biography from View Artists page
- Take a photo of an artwork and save it along with work details in My Gallery page

<!-- ROADMAP -->
## Roadmap
- Using React Native Navigation for smoother page transitions.
- Create a cropping feature to the camera.


<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->



<!-- LICENSE -->
<!-- ## License

Distributed under the GG License. See `LICENSE` for more information. -->



<!-- CONTACT -->
## Contact
Yuki Yamamoto - (https://www.linkedin.com/in/yukiyamamoto1) - yukiyamamoto710@gmail.com

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Artsy API](https://developers.artsy.net/v2/start)
* [The Metropolitan Museum of Art Collection API](https://www.metmuseum.org/)
* [React Native Really Awesome Button](https://github.com/rcaferati/react-native-really-awesome-button)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
