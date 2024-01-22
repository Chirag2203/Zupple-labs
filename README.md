
# Zupple Labs Assignment
This repo consist of the Frontend Assignment by Zupple Labs.



## Task
The task includes
1) Form with validation and Axios
2) Blockchain Explorer
## Tech Stack Used
I have used the following tech stack along with ShadCn/Ui and Framer Motion, Axios.
ShadCn is used for getting consistency in the design of the application and it adds no extra code to the project. Framer motion is used for animations.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://choosealicense.com/licenses/mit/) 

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://opensource.org/licenses/)

[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](http://www.gnu.org/licenses/agpl-3.0)

[![Amazon_AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](http://www.gnu.org/licenses/agpl-3.0)


## Installation

Clone the GitHub Repo and type the following commands.

```bash
  npm install 
  npm run dev
```
This will spin up the application which is built using Vite and React.
#### Navigating to task pages:
Task1: Go to Forms from the navigation bar or click on the Task 1 element on home page.

Task2: Go to Explorer from the navigation bar or click on the Task 2 element on home page.
    
## File Folder Structure

#### Components

```http
  src/components
```

| Folder |     Description |
| :-------- | :------------------------- |
| `/pages` |  Contains the pages of the application. |
| `/shared` |  Contains shared custom components|
| `/ui` |  Contains shadcn components|

#### Assets

```http
  src
```

| Folder |     Description |
| :-------- | :------------------------- |
| `/assets` |  Contains the assets of the application. |

#### Utility Functions

```http
  src/utils
```

| File |     Description |
| :-------- | :------------------------- |
| `/data.ts` |  Source of all the dummy data in the application. |
| `/motion.ts` | Funtions for framer motion |

Types are stored in ``` src/lib/Types.ts ```



## Details of Task 1

- **Form**:  Created a form using ShadCn and TailwindCSS.
- **Form Validation and Errors**: Form Validation and error management of each field using typescript. 
- **Axios**: Used Axios for sending the data to server after form Validation.
- **Animations** : Added animations using framer-motion

Errors are displayed along with the field name if user tries to submit the form without meeting the conditions.

This page is mobile responsive and I have tried enhancing the design of the form keeping the structure same as the design file.

## Details of Task 2
Crypto explorer with data display.

- **Blocks**:  Created blocks to display the data on top.
- **Block details div**:Functionality to close a box details component. 
- **Transaction Cards**: Conditional rendering babsed on what data is provided from the server.
- **Animations** : Added animations using framer-motion

Data is fetched from a static file but can be fetched from the server usign Axios.

This page is mobile responsive and I have tried enhancing the design of the Explorer keeping the structure same as the design file.

## Details of Home page
Home page is the entry point when you open the application. From here you can navigate to other screen to see the tasks.


## About Me
I Love working on user centric and products and new technologies. I mainly use MERN and have recently started learning AWS, SST, Deno and Vue.

I believe that tech stack does not matter, only will maters and thats what I have. Even if I don't know about a particular thing, I am sure that somehow I will be able to solve that problem, either by reading 100 articles or taking someone's help.

I also do freelancing and have done many projects in the past 6 months.

I have published a paper on Software Reliability under IEEE during my last Sem.

Here is my portfolio website for your refernece https://chiragrajput.in

