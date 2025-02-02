Mars Visit Application Form
This is a multi-stage application form for individuals interested in visiting Mars. The form collects personal information, travel preferences, and health and safety details from applicants.

Features
Multi-stage form: The form is divided into three stages:

Personal Information: Collects full name, date of birth, nationality, and contact information.

Travel Preferences: Collects departure date, return date, accommodation preference, and special requests.

Health and Safety: Collects health declaration, emergency contact information, and medical conditions.

Form validation: Ensures that all required fields are filled out correctly, including valid email, phone number, and date formats.

Responsive design: The form is designed to be visually appealing and responsive on all devices.

Unit tests: Includes unit tests for form validation logic using Jest.

Technologies Used
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript templates), Bootstrap

Testing: Jest

Deployment: Heroku

Installation
Follow these steps to set up the project locally:

Clone the repository:

bash
git clone https://github.com/your-username/mars-visit-form.git
cd mars-visit-form
Install dependencies:

bash
npm install
Run the server:

bash
node app.js
Open your browser and visit http://localhost:3000.

Deployment
The project is deployed on Heroku. Follow these steps to deploy your own version:

Install Heroku CLI:

Download and install the Heroku CLI from here.

Login to Heroku:

bash
heroku login
Create a new Heroku app:

bash
heroku create your-app-name
Push your code to Heroku:

bash
git push heroku main
Open your Heroku app:

bash
heroku open
Testing
Unit tests for form validation logic are written using Jest. Follow these steps to run the tests:

Install Jest (if not already installed):

bash
npm install --save-dev jest
Run the tests:

bash
npm test

Project Structure:
mars-visit-form/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── stage1.ejs
│   ├── stage2.ejs
│   ├── stage3.ejs
│   └── success.ejs
│
├── test/
│   └── formValidation.test.js
│
├── app.js
├── package.json
└── README.md
Live Link
The project is deployed on Heroku: Live Link

Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

How to Use the Form
Stage 1: Personal Information

Fill in your full name, date of birth, nationality, email, and phone number.

Click Next to proceed to the next stage.

Stage 2: Travel Preferences

Select your departure date, return date, accommodation preference, and any special requests.

Click Next to proceed to the final stage.

Stage 3: Health and Safety

Complete the health declaration, provide emergency contact information, and list any medical conditions.

Click Submit to finalize your application.

Success Page

After successful submission, you will be redirected to a success page.

Screenshots
Stage 1: Personal Information
Stage 2: Travel Preferences
Stage 3: Health and Safety
Success Page

Contact
If you have any questions or need further assistance, feel free to contact me:

Email: your-email@example.com

GitHub: your-username
