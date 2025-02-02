# Mars Visit Application Form

This is a multi-stage application form for individuals interested in visiting Mars. The form collects personal information, travel preferences, and health and safety details from applicants.

## Features

- **Multi-stage form**: The form is divided into three stages:
  1. **Personal Information**: Collects full name, date of birth, nationality, and contact information.
  2. **Travel Preferences**: Collects departure date, return date, accommodation preference, and special requests.
  3. **Health and Safety**: Collects health declaration, emergency contact information, and medical conditions.
- **Form validation**: Ensures that all required fields are filled out correctly, including valid email, phone number, and date formats.
- **Responsive design**: The form is designed to be visually appealing and responsive on all devices.
- **Unit tests**: Includes unit tests for form validation logic using Jest.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates), Bootstrap
- **Testing**: Jest
- **Deployment**: Heroku

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdamYyoung/Mars_Application_Form.git
   cd Mars_Application_Form
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node app.js
   ```

4. **Open your browser** and visit `http://localhost:3000`.

## Deployment

The project is deployed on Heroku. Follow these steps to deploy your own version:

1. **Install Heroku CLI**:
   - Download and install the Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli).

2. **Login to Heroku**:
   ```bash
   heroku login
   ```

3. **Create a new Heroku app**:
   ```bash
   heroku create your-app-name
   ```

4. **Push your code to Heroku**:
   ```bash
   git push heroku main
   ```

5. **Open your Heroku app**:
   ```bash
   heroku open
   ```

## Testing

Unit tests for form validation logic are written using Jest. Follow these steps to run the tests:

1. **Install Jest** (if not already installed):
   ```bash
   npm install --save-dev jest
   ```

2. **Run the tests**:
   ```bash
   npm test
   ```

## Project Structure

```
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
```

## Live Link

The project is deployed on Heroku: [Live Link](https://Mars_Application_Form.herokuapp.com)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **How to Use the Form**

1. **Stage 1: Personal Information**
   - Fill in your full name, date of birth, nationality, email, and phone number.
   - Click **Next** to proceed to the next stage.

2. **Stage 2: Travel Preferences**
   - Select your departure date, return date, accommodation preference, and any special requests.
   - Click **Next** to proceed to the final stage.

3. **Stage 3: Health and Safety**
   - Complete the health declaration, provide emergency contact information, and list any medical conditions.
   - Click **Submit** to finalize your application.

4. **Success Page**
   - After successful submission, you will be redirected to a success page.

---

### **Screenshots**

![Stage 1: Personal Information](screenshots/stage1.png)
![Stage 2: Travel Preferences](screenshots/stage2.png)
![Stage 3: Health and Safety](screenshots/stage3.png)
![Success Page](screenshots/success.png)

---

### **Contact**

If you have any questions or need further assistance, feel free to contact me:

- **GitHub**: [AdamYyoung](https://github.com/AdamYyoung)
