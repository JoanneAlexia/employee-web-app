# Employee Fullstack Application

This project is my submission for the tech test from DCS recruitment. The requirments for the tech test was to build a web application to create, list, modify and delete employees. The application should consist of a RESTful API and a React Typescript frontend.
I have choosen to create the REST API using a Spring backend.

## Setup

To run this project on your local machine clone the repository into a folder of your choice.

`git clone git@github.com:JoanneAlexia/employee-fullstack-app.git`

The github repository contains both the frontend and backend code seperated into their respective folders.

- frontend
- backend

### Database

The REST API will load employee data into a local mySQL database, therefore prior to running the application you will need to create a local mySQL database called employees. To do this first ensure that you have mysql installed. You can check this by going to your terminal and running `mysql --version`. The application was tested with a mysql version 8.0.31 local database.
If you do not have mysql installed you can download it using the following link:
https://downloads.mysql.com/archives/community/

Once you have mysql installed you can create a database using an IDE such as mySQL workbench or using the terminal with the command:

```
create database employees
```

### Running applications

#### API

Run the REST API in using your prefered IDE. The Spring boot dashboad extension can be added and used to run the backend application in Visual Studio Code.

#### React application

To run the react application move to the frontend directory run the commands

```
npm install
npm run dev
```

## Functionality

### Backend

The REST API was written using Spring.

The database includes only a single table containing all employee information called employee.

<ins> Table schema: </ins>

- **id** _bigint AI PK_
- **address** _varchar(255)_
- **contract_type** _varchar(255)_
- **email** _varchar(255)_
- **employment_type** _varchar(255)_
- **end_day** _int_
- **end_month** _int_
- **end_year** _int_
- **first_name** varchar(255)
- **hours_per_week** _int_
- **is_ongoing** _bit(1)_
- **last_name** _varchar(255)_
- **middle_name** _varchar(255)_
- **mobile_number** _int_
- **start_day** _int_
- **start_month** _int_
- **start_year** _int_

<ins> Endpoints </ins>

#### _CREATE_

**POST /employee**

Creates a new employee, ids are automatically generated.

#### _READ_

**GET /employee**

Returns an array of all employees

**GET /employee/:id**

Returns a single employee object

#### _UPDATE_

**PUT /employee/:id**

Updates the employee with id provided in endpoint. If an employee with the id is not provided the employee will be created.

#### _DELETE_

**DELETE /employee/:id**

Will delete the employee with id provided in endpoint

Cross Origin Resource Sharing (CORS) was enabled via annotations for all controller methods.

### Frontend

Vite was used for creating the react application.

There are three page components:

**Home Page**

This is where the employee list is displayed. If there are no employees in the database or if data from the database cannot be loaded an approprate message will be displayed to the user. On the home page is a button for adding new employees which will navigate to the create page component. If employees are displayed in the list there is an 'Edit' link which will navigate to the Update page componentl and a 'Remove' link which delete the employee by making an axios call to the http delete method.

**Create Page**

This displays an empty form that can be filled in by the user and submitted. Error messages should appear if required fields are not inputted or fields are not of the appropriate type.

**Update Page**

This displays a form with the current employee data that can be changed. The employee data will be updated in the database once the submit button is selected.


**Form**
The same form component was reused for both the create and update pages. The update and create page components have different implementations of the submit method and employee data which is passed in as a prop to the form component.

To allow for easier form validation and collection of user data, useForm hook was used.
The radio buttons didn't work well with the useForm hook which is why the decision was made to use selection boxes instead for these inputs.

The date input elements in the form are currently text fields and selection boxes. This makes it diffcult to perform proper validation of these fields to ensure appropriate input. Other options could be explored, such as used a date picker component.

### Testing.

Some testing in React was performed of the Employee List component. More thorough testing of all components are needed.

A test of the getAll service method was performed for the spring application but again more testing is needed.
