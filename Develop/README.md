# README Generator  
  ## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  https://opensource.org/licenses/MIT  
    This project is licensed under the MIT license. 
    Click the badge for more information.  
  ## Description  
  This project is a CLI application in which the user can input vehicles with specific properties and perform specific actions on them. 

  The main purpose of this project is to demonstrate some basic concepts of Object-Oriented Programming. 
  
  The first concept being demonstrated is Inheritance. That can be observed by the fact that there is a Vehicle superclass containing some basic properties and behaviors and three subclasses (Car, Truck and Motorbike) that extend Vehicle and include some of their own unique properties and behaviors. The fact that the Car is a Vehicle, the Truck is a Vehicle, and the Motorbike is a Vehicle, allows instances of those classes to be grouped together in an array on the Cli.ts class for better organization.

  The second concept is that of Polymorphism. That concept is most evident by the Driveable interface. Since, Vehicle implements Driveable, the properties and behavior found in Driveable can be applied to all Vehicle instances. That is not only useful to the current construction, but will be beneficial if any new subclasses of Vehicle are added in the future.

  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contribution](#contribution)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  ## Installation  
  To install this project:  

  1. Clone the repo
   ```sh
    git clone git@github.com:hobbsm-code/vehicle-builder.git
   ```
  2. Install NPM packages
   ```sh
   npm install
   ```

  ## Usage  
  Please follow these instructions to use the Vehicle Builder

  1. Open a terminal and cd into the Develop/dist directory
  2. Type node index to run the application
  3. Then, simply answer the questions about your project
  4. Upon receiving the Success message, your README.md will be generated in the output dir.
  5. <a href="./assets/vehicle_builder_demo.mp4">Click this link to watch a Demo Video</a>


  ## Contribution  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request

  ## Tests  
  Test instructions:  

  This project does not currently have any unit tests. Having test coverage is always welcome. Please feel free to contribute some unit tests. Otherwise, it is our goal to improve the test coverage as the project becomes more mature and more complex functionality is added.

  ## Questions  
  For questions, please contact me at:  
  GitHub: [Find me on GitHub ->  hobbsm-code](https://github.com/Find me on GitHub ->  hobbsm-code)  
  Email: [Email me at: hobbsm321@gmail.com]  
  