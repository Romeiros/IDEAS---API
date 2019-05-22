# IDEAS-API Aplication

## Used
* PostgreSQL v10
* NestJS v5.7.4
* Angular v7.0.0
* NodeJS v10.13.0

## Required

* PostgreSQL v10
* NodeJS v10.13.0

## Usage

Install dependencies in ideas-api-backend folder and in ideas-api-frontend folder with

    npm install
    
Create .env file in ideas-api-backend folder and define PORT and SECRET

    PORT=4000
    SECRET='ThisIsASecretKey'
    
If you dont have PostgreSQL v10, you can use Docker-compose in ideas-api-backend folder with

    docker-compose up  

Run in ideas-api-backend folder

    npm run start:dev
    
Run in chatapp-frontend folder

    ng serve
