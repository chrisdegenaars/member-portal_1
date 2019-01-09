# Member Portal - Breakdown
Member Portal 1.0 developed using Google Firebase to create a member portal on country club websites.

## Getting Started
Step 1.

 - Make sure the website is published
 - Create a new project inside Google Firebase (each website/property will have their own project)

Step 2.

- Log back into Duda and access the websites Developer Mode
- Navigate to the Site HTML/CSS section and click "head-section.html"
- Insert the HTML in the `header.html` file and replace the following variables with the Google Firebase Project Web Setup specifications:
  - apiKey
  - authDomain
  - databaseURL
  - projectId
  - storageBucket
  - messagingSenderId

## Setting up the Member Portal
Continue using the additional files in this repository to add HTML for the `signup`, `password reset` and `login` forms to the Duda website. Add the `protect.html`file to any pages that should be restricted to logged in users, this script also adds the "Log Out" button to the page.
