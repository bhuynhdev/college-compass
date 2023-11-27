# Fall 2023 Final Design Reports - College Compass

## Table of content

1. [Project abstract and team members](#1-project-abstract-and-team-members)

2. [Project details](#2-project-details)

3. [User stories and design diagrams](#3-user-stories-and-design-diagrams)

4. [Tasks and timeline](#4-tasks-and-timeline)

## 1. Project abstract and team members

Project **College Compass**: An AI-powered web app that aid college student's career success through personalized mentoring and suggestion of resources, advice, and knowledge bits. 

Team member:
- Bao Huynh (huynhlbg@mail.uc.edu)
- Triet Pham (phamt7@mail.uc.edu)
- Advisor: Dr. Jillian Aurisano

## 2. Project details
- Project Topic Area: Web development, web scraping, Artificial Intelligence, and UI/UX design

- Project description: A web appplication that aid college student's success by leveraging web scraping and Retrieveal-Augemented Generation with GPT4 LLM API to provide personalized mentoring and suggestion of University of Cincinnati-specific resources, advice, and knowledge bits to students. This will help students readily access information about the college any time anywhere, while also knowing what resources they can tap into from even first year in order to plan a successful college journey.

- Repository Link: https://github.com/bhuynhdev/college-compass

## 3. User stories and Design diagrams

### User stories

* As a first-year student, I want to receive career tips, resources, and advice based on my skills and knowledge, so that I improve my chance of landing a satisfactory jobs and/or internships.

* As a student interested in doing an abroad internship, I want to access information about study abroad and international internship programs, application processes, and funding opportunities, so that I can do the required work and application on time

* As a student exploring career options, I want to access a database of alumni success stories and connect with alumni for informational interviews and networking.

* As a student aiming to enhance my soft skills, I want the app to suggest courses or modules on communication, leadership, and teamwork so that I can arrage them to my schedule next semester.

* As a senior preparing for graduation, I want to access a checklist of graduation requirements, deadlines, and steps to ensure a smooth transition into post-college life.

### Design diagrams

* Design diagram D0

![](/Design_Diagrams/design_d0.png)

* Design diagram D1

![](/Design_Diagrams/design_d1.png)

* Design diagram D2

![](/Design_Diagrams/design_d2.png)

## 4. Tasks and timeline

### Task list

1. Research the current college needs and challenges of students through surveys and interviews.
2. Specify the key features and functionalities of the College Compass app based on research findings.
3. Design the user interface and user experience (UI/UX) of the app.
4. Develop a database system to store user profiles, schedules, and preferences securely.
5. Implement the AI to provide personalized study and career suggestions.
6. Intergrate UC data to the AI in order to provide relevant resources.
7. Design and implement a system for students to set and track their academic and career goals using checklists, to-do lists.
8. Develop a notification system to send reminders for coursework deadlines, events, and job application deadlines.
9. Test the app for usability and performance, fixing any bugs or issues identified during testing.
10. Develop a feedback mechanism for students to suggest new features and report issues.
11. Document the app's features, functionality, and user guides for students and administrators.

Responsibility:  
* Bao: Task 1, 2, 3, 7, 8, 9  
* Triet: 4, 5, 6, 10, 11

### Timeline and Effort Matrix

![](/effort-matrix.jpg)

## 5. ABET Concern essay

In the development of our AI-powered web application, College Compass, several critical topical areas impose constraints on the possible solutions and overall project design.

- **Economic Constraint:** College Compass plan to use several paid services in the final solution; therefore, we are limited by financial constraint. Specifically, we plan to use the GPT API under the hood, which bill cost per token process, and we plan to use serverless Edge Function deployment on AWS. While we aim to utilize cost-effective solutions and open-source technologies, our funds are sourced from a combination of personal contributions and potential grants, so we aim to place checks and throttles in place to ensure that the product cost does not exceed the budget.

- **Ethical Constraint:** Given that College Compass is designed to assist college students in their academic and career pursuits, ethical considerations are paramount. We must ensure that the impact of our project is positive or, at the very least, neutral, and the system's AI-driven suggestions and advice must be ethically sound, free from biases, and in the best interest of the students. There are also ethical concerns revolving around data privacy, and we need to ensure that user information is handled with utmost care and respect.

- **Legal Constraint:** Legal considerations are significant due to potential issues related to intellectual property rights, data privacy laws, and compliance with relevant regulations. Since we are planning to use college-specific data and information to augment our response, we need to ensure that the project does not infringe upon any existing copyrights or intellectual property. Additionally, we need to adhere to data protection laws and guidelines prevent legal complications and maintain the trust of our users.

Addressing these constraints requires careful planning, adherence to ethical standards, compliance with legal requirements, and a commitment to social responsibility. By navigating these challenges effectively, we can craft a successful and impactful College Compass platform that prioritizes the needs and well-being of college students while upholding ethical, legal, and societal norms.

## Powerpoint slideshow

## Self-assessment essays

### Bao Huynh

My collective experiences from college course plays a pivotal role in shaping the development of this
project. The knowledge I have learned from the CS-4033 - AI Principles and Applications course equips
me with a deep understanding of AI principles. I am also taking the Intelligent System class this semester,
which I hope to will further my understanding of Large Language Model behavior and thus I will be able
to tune the GPT API to my needs and wants and debug and fix potential limitations. I am also taking User
Interface class this semester, which will hone my skills in empathizing with user needs and pain points,
allowing me to create an intuitive and user-friendly design. Furthermore, my CS-5165 - Cloud Computing
class has provided me with insights into selecting the most efficient and cost-effective cloud services for
the project, ensuring its scalability and sustainability. Additionally, the project management knowledge
from my EECE-3093 - Software Engineering class will help the team manage the project effectively using
industry-proven practices and principles such as Agile and Test-driven development to not only meet all
deadlines but also create a resilient code base that satisfy user needs.

My cooperative work experiences, especially in the field of web development, is also extremely helpful
for the project. As a Full-sack Web Developer intern at EyeQ Tech, I was able to hone my web
development skills, specifically in working with backend systems and RESTful API design using JavaScript.
The work also provided me insights into Developer Operations work and how to deploy my web
applications onto cloud services and maintain uptime. Then, at my Software Engineer Coop role at
Siemens Digital Industry Software, I continued to sharpen my web development skills, through learning
how to use the Chrome Developer Tools to debug logical errors and performance issues. The experience
at Siemens also strengthened my communication and teamwork skills, which will help me tremendously
as I work and communicate with my teammate and falculty advisor. These experiences have allowed me
to gain practical insights into industry-standard practices and will definitely contribute greatly to the
project’s development.

I am deeply motivated and excited to participate in Project College Compass because I am passionate
about supporting student education, and I love the opportunity make a huge positive impact in the lives
of college student. I am also have long been interested in the development and evolution of Artificial
Intelligence, and the advent of the powerful GPT Large Language Model has finally gives us capabilities
the opportunity to develop a platform that can truly assists students in achieving their academic and
career goals in a personalized manner. This project also serves a test for my skills as a web developer,
and also an opportunity for me to try out new technologies in a web development space. My preliminary
approach involves meticulous planning, collaborative brainstorming, and agile development
methodologies. O intend to prioritize user feedback throughout the project’s lifecycle, ensuring that our
solution is constantly refined to meet user needs effectively. Our expected results and accomplishments
include delivering a fully functional and user-tested AI-powered web application that will also be able to
converted into a mobile app through PWA technologies. Success metrics will be based on high
satisfaction score in the initial beta testing surveys.

I will assess my contributions to the project through several key indicators. Firstly, it will be through user
feedback; user satisfaction will play a crucial role in gauging the success of the interface design and
overall user experience, and will be an indicator if I have done a good job in gathering user requirements.
The timely completion of project milestones and objectives within the specified timeline will also serve
as a measure of my progress. Moreover, I will utilize project management tools to track and document
my work, ensuring that tasks are completed to the best of our abilities. Regular team meetings will
facilitate discussions on project status and allow us to align my efforts with the project’s goals and also
serve as a regular checkpoint to know if I am on the right track and diagnose any problems I have.
Ultimately, I will consider my contributions successful when our team have delivered a functional, user-
centric, and impactful College Compass web application that fulfills its mission of assisting college
students on their path to success.

### Triet Pham

From my college curriculum, I have gained relevant knowledge that would help me in this project. From 
Data Structures (CS-2028C), I have acquired a strong foundation of structures like lists, arrays, trees, 
graphs. Combined with the deep understanding of algorithm design, analysis, and optimization gained 
from Design and Analysis of Algorithms (CS-4071), I will be able to create efficient systems for storing 
user profiles, recommendations, and other relevant data. Data Design and Development (CS-4092) also 
provided me with the necessary knowledge to create a robust and efficient database system for storing 
user data and content. Finally, I learnt useful concepts such as design patterns and principles from 
Software Engineering (EECE-3093C), which will help me build appropriate systems based on the needs 
and specifications of the project. All in all, the classes that I took provide me with a solid foundation in 
key areas that are essential for the development of my web application. 

Besides school, my co-op experience has also equipped me with valuable knowledge as well. During my 
time as a Full-stack Software Engineer Co-op at Fox Sports, I had been exposed to API and web 
development using .Net, Blazor Framework and C#. Although the technologies I used were different from 
what I intend to use for this project, the process is similar and it would help me familiarize with the new 
languages better. My API development skill was enhanced and I have also gained more experience in 
JavaScript, HTML and CSS when I worked as a Full-stack engineer, at Farental Inc, on a management web 
application project. These skills are relevant to the scope of my project and would lay a solid foundation 
for me to work upon. Lastly, as a Software Developer Intern at FPT Software, I picked up technical 
documentation and effective communication, which would be important in communicating with my 
teammate and documenting our progress as well as code base.

This project is exciting to me for several reasons. First of all, it is relevant to today’s world, as it 
incorporates new technology. This project also serves as a tool to better the college students community, 
which aligns with my value as a Global Engineer, that is to use my skill to make positive impacts on the 
world. Not only does this project have the potential to contribute to students’ well-being and future 
success by well-being and future success, it will also allow me to expand my skillset and gain more 
experience in web development, AI integration, data analysis, user experience design. Not only does this 
project have the potential to contribute to students’ well-being and future success by helping them 
overcome academic, personal, and professional challenges, it will also allow me to expand my skillset 
and gain more experience in web development, AI integration, data analysis, user experience design. 
More specifically, I wish to gain more exposure to TypeScript, Rust and other database systems. Lastly, 
completing such a project will help me become more equipped to be a desirable engineer and land a 
good job after graduation.

In the beginning phase, I plan to research to gather relevant information and context to know how and 
where to start this project. My team’s initial intentions are to use ChatGPT dev kit to power the 
Application, and some programming languages we have in mind are JavaScript, TypeScript, Python, Rust, 
HTML and CSS. We would feed UC data to the model so it knows more relevant information for UC 
students. In my mind, a success in this semester would be a functional website with a proper interface 
that could generate personalized and helpful responses when prompted. With my experience, I would 
work on the front-end and the generative components of the system. To know whether I have done a 
good job, I plan to properly document my progress and seek continuous feedback to make adjustments 
and reflect on. Furthermore, setting timelines and milestones is also a way for more to keep track of 
where I am and how far I am to my goals.

## Professional biographies

### Bao Huynh

#### Contact information
Email: huynhlbg@mail.uc.edu

#### Coop work experience

##### Software Developer, Siemens Digital Industry Software, Ohio
August 2022 - August 2023
- Worked on a collaborative web-based SaaS application for managing construction lifecycle
*- Developed POC code into production-ready modules using the Siemens Web Framework; successfully integrated into the CI pipeline
- Orchestrated cross-team communication to gather requirements and develop JavaScript module to integrate Customer Survey and Onboarding
- Collaborated in team of 4 to develop designs that simplify the web UI and improve User Experience; presented Proof Of Concept demo successfully to 6 upper managers and stakeholders
- Fixed defects, enhanced documentations, and wrote Jest unit tests
- **Technologies used**: HTML, JavaScript, Jest, React.js

##### Software Developer, EyeQ Tech, Vietnam
January 2021 - August 2021

- Worked on a web application that support Human Resource talent sourcing using automated video interviews
- Spearheaded construction of backend REST-ful API using Typescript, NestJS, and MongoDB
- Enhanced video streaming quality by 200% by setting up webRTC connections and servers
- Constructed a CI/CD pipeline that saved operation time by 2 hours/week and enhanced teamwork experience
- Authored a Python Flask API to manage the email server’s functionalities
- **Technologies used**: Typescript, Express, NestJS, React.js, Python, MongoDB, Node.js, Git, GitLab CI

#### Skills/Expertise Areas
- Programming: JavaScript, TypeScript, Python, C++
- Operating System: Linux, Windows, MacOS
- Web development: HTML, CSS, TailwindCSS, React.js, Angular, Svelte, Node.js, Fastify, NestJs
- Database: PostgreSQL, MySQL, MongoDB

#### Types of projects sought
- Education-focused web applications that aim to improve student studying and thinking (encouraging more active learning), and/or ease the friction for lectures to design better materials
- AI-based applications that utilized GPT to help college students have more focused directions and tasks list to maximize their college journey and potential

### Triet Pham

#### Contact information
Email: phamt7@mail.uc.edu

#### Co-op Work Experience
*Software Engineer Intern* - FPT Software
January – August 2023
- Worked in the Global Health Center division to develop software for ultrasound devices. 
- Implemented 6 new features for 2 product lines using *C*, *C++*, *C#* and *.NET* framework, enhancing functionalities of the devices. 
- Actively participated in bug fixing efforts, identifying and resolving over 20 issues to maintain code quality and integrity.
- Collaborated with the Testing Team to conduct thorough unit tests and ensure quality and reliability of the software. 

*Full-stack Software Engineer Intern* - Farental
February– June 2023
- Led the development of the Website and API of the Jordan Rail project for a railing business. 
- Implemented over 20 new features for the management website using *HTML*, *CSS*, *JavaScript*, *jQuery*, *KendoUI* and *.NET* framework. 
- Identified and fixed over 10 issues to improve performance and user experience. 
- Represented the developer team to showcase the product and communicate with the client.

*Full-stack Software Engineer* - FOX Corporation
January 2021 – August 2022
- Worked in the Sports Data Team to contribute to the development of the FOX Sports App.
- Developed a web application using C#, .NET framework and Blazor to provide convenient data access to 90 developers across 6 internal teams, reducing wait time by 80%. 
- Created programs using C# to process APIs and retrieve data for 19 sports. 
- Managed data in the database using SSMS and SQL

#### Project Sought
- I want to work on something that helps improve the quality of life and well-being of college students.
- I want to explore other aspects of software engineering as well.

## Budget

To date, expeneses only include $5 OpenAI GPT3.5 API cost

## Appendix

### [Google Form Survey form](https://forms.gle/EQSPGkfmLfjiM3hm9)

Questions:

1. What is your Gender 
2. What year are you at
3. When it comes to career, what aspect do you find challenging? - Finding Opportunity, Resume Building, Networking, Technical Skills, Soft Skills, Career Choice
4. Please provide some more details in a few words.

### [Code repository link](https://github.com/bhuynhdev/college-compass)

### Web scraping result





