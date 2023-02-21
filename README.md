# Employee Fullstack Application

This project is my submission for the tech test from DCS recruitment. The requirments for the tech test was to build a web application to create, list, modify and delete employees. The application should consist of a RESTful API and a React Typescript frontend.
I have choosen to create the REST API using a Spring backend.

## Hosting?

## Setup

To run this project on your local machine clone the repository into a folder of your choice.

`git clone git@github.com:JoanneAlexia/employee-fullstack-app.git`

The github repository contains both the frontend and backend code seperated into their respective folders.

- frontend
- backend

### Database

The REST API will load employee into a local mySQL database, therefore prior to running the application you will need to create a local mySQL database called employees. To do this first ensure that you have mysql installed. You can check this by going to your terminal and running mysql --version. The application was tested with a mysql version 8.0.31.
If you do not have mysql installed you can download it using the following link:
https://downloads.mysql.com/archives/community/

Once you have mysql installed you can create a database using an IDE such as mySQL workbench or using the terminal usign the command:

```
create database employees
```

### Running applications

#### API

Start by running the REST API.

#### React application

To run the react application move to the frontend directory and then to the employee-fullstack folder.
Run the commands:

```
npm install
npm run dev
```

## Functionality

### Frontend

### Backend

The REST API was written using Spring.

The database includes only a single table containing all employee information called employee.

#### Table schema:

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

  #### CREATE

  The endpoint for creating a new employee is:
  POST

  #### READ

  #### UPDATE

  #### DELETE

## Problems Encountered

### Frontend

### Backend

## Improvements

### Frontend

### Backend
