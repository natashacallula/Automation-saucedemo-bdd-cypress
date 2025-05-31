# Automation Testing for SauceDemo

This project focuses on automating the testing of the [SauceDemo](https://www.saucedemo.com/) e-commerce demo platform using **Cypress + Cucumber (BDD)** to ensure smooth user experience and correct functionality of the website’s core features.

## 📋 Project Overview 📋

The goal of this project is to validate critical user journeys such as login, product sorting, cart management, checkout process, and logout on SauceDemo.

The tests are written using the **BDD (Behavior-Driven Development)** approach with Cucumber and Gherkin syntax. This makes the test scenarios:

- ✅ **Readable and understandable** by both technical and non-technical stakeholders.
- 🧠 **Easier to maintain** due to clear separation between test steps and step definitions.
- 🤝 **Collaborative** for QA, developers, and product teams to discuss features and acceptance criteria.

## ⚙️ Tools and Technologies ⚙️

- 🧪 **Cypress** – End-to-end test framework.
- 🧾 **Cucumber (BDD)** – Behavior-driven syntax using Gherkin.
- 💻 **VS Code** – Main development environment.
- 📊 **Spreadsheet** – For test case documentation.
- 🐙 **GitHub** – Source control.
- 🎥 **YouTube** – For demo/testing evidence (optional).
  
## 🚀 How to Run the Tests 🚀

1. Clone the repository : git clone https://github.com/natashacallula/Automation-saucedemo-bdd-cypress.git
2. Install dependencies : yarn install
3. Run tests (interactive mode) : yarn cypress open
4. Run tests (headless mode) : yarn cypress run

## 🧪 Key Test Scenarios 🧪
✅ Authentication
- Login with valid credentials.
- Handling locked out or invalid users.

🛒 Product Interaction
- Adding/removing products to/from cart.
- Sorting products by price and name.

💳 Checkout Process
- Completing checkout with valid shipping data.
- Validating error messages for missing fields.

🔐 Logout
- Ensure user is redirected to login page after logout.

All test scenarios are also documented in a spreadsheet
[Test Scenario documented on Spreadsheet](https://docs.google.com/spreadsheets/d/17XXNfxHiOG1_R7FZQ3Jupex3dSj8jy3lmBqzJ2DZ3MM/edit?gid=0#gid=0)


## 🎥 Testing Evidence 🎥
**Check out the testing evidence video of the automated tests on YouTube:**

[![Testing Evidence](https://img.youtube.com/vi/4IeKJO5gLAw/0.jpg)](https://youtu.be/4IeKJO5gLAw)
