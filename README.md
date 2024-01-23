
# Zupple Labs Assignment
This repository consists of the Frontend Assignment by Zupple Labs.



## Task
The task includes
1) Form with validation and Axios to send form data to the server.
2) Blockchain Explorer.
## Tech Stack Used
I have used the following tech stack along with ShadCn/Ui, Framer Motion, and Axios.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://choosealicense.com/licenses/mit/) 

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://opensource.org/licenses/)

[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](http://www.gnu.org/licenses/agpl-3.0)

[![Amazon_AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](http://www.gnu.org/licenses/agpl-3.0)


## Installation

Clone the GitHub Repo and type the following commands in the terminal.

```bash
  npm install 
  npm run dev
```
This will spin up the application on ``` localhost:5173 ``` which is built using Vite and React.

#### Navigating to task pages:
Task 1: Go to the Forms section from the navigation bar or click on the Task 1 element on the home page.

Task 2: Go to the Explorer section from the navigation bar or click on the Task 2 element on the home page.
    
## File Folder Structure

#### Components

```
  src/components
```

| Folder |     Description |
| :-------- | :------------------------- |
| `/pages` |  Contains the 3 pages of the application. |
| `/shared` |  Contains shared custom components.|
| `/ui` |  Contains shadcn components.|

#### Assets

```
  src
```

| Folder |     Description |
| :-------- | :------------------------- |
| `/assets` |  Contains the assets of the application. |

#### Utility Functions

```
  src/utils
```

| File |     Description |
| :-------- | :------------------------- |
| `/data.ts` |  Source of all the dummy data in the application. |
| `/motion.ts` | Functions for framer motion animations. |

Types are stored in ``` src/lib/Types.ts ```



## Details of Task 1

- **Form**:  I created a form using ShadCn, React, and TailwindCSS.
- **Form Validation and Errors**: Form Validation and error management of each field using typescript and javascript. 
- **Axios**: Used Axios to send the data to the server after form validation.
- **Animations** : Added animations using framer-motion

#### Flow of the form
- User enters the data in the form.
- Data is validated on the go, and errors are displayed.
- If all the data is valid, the user can submit the form.

Errors are displayed along with the field name if the user tries to submit the form without meeting the conditions.

This page is mobile responsive, and I have tried enhancing the design of the form, keeping the structure similar to the design file.

## Details of Task 2
Crypto explorer with data display.

- **Blocks**:  Created blocks to display the data on top.
- **Block details element**:Functionality to close a box details component. 
- **Transaction Cards**: Conditional rendering based on what data is provided from the server.
- **Animations** : Added animations using framer-motion

Data is fetched from a static file but can be brought from the server using Axios.

This page is mobile responsive, and I have tried enhancing the design of the Explorer, keeping the structure the same as the design file.

## Details of Home page
- **Home page** :  Created a home page with links to the tasks.
- **Animations** : Added animations using framer-motion


## Deployment
This application is deployed on AWS S3 and can be accessed using the following link.
Amazon S3 Deployment- http://zupplelabsassign.s3-website.ap-south-1.amazonaws.com/
Netlify Deployment- https://chirag-zupplelabs.netlify.app/




## About Me
I Love working on user-centric products and new technologies. I mainly use the MERN stack and have recently started learning AWS, langchain, Deno and Vue.

Even if I don't know about a particular thing, I am sure that somehow I will be able to solve that problem, either by reading 100 articles or by taking someone's help.

I also freelance and have done many projects in the past 6 months.

I published a paper on software reliability under IEEE during my last semester.

Here is my portfolio website for your reference: https://chiragrajput.in

