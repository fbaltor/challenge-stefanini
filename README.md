# Stefanini's Backend Challenge

## Running
To run te project you will need [Docker](https://www.docker.com/) and a UNIX-based environment able to run some [bash commands and scripts](https://www.gnu.org/software/bash/).
```console
$ git clone https://github.com/fbaltor/challenge-stefanini
$ cd challenge-stefanini

## The two commands bellow solve some docker permissions issues
$ chmod 755 db
$ chmod 644 db/*

## Make the start scrip executable and run it
$ chmod +x start.sh
$ ./start.sh
```

## Testing

With the services running, open the [Postman](https://www.postman.com/) and send a POST request with the following URL:
```
http://localhost:3000/dollar?dataCotacao='02-06-2020'
```
To check that the value was saved to the database, run the test script:
```console
$ chmod +x test.sh query.sh
$ ./test.sh
```

## Explanation

This repository solves the challenge of Stefanini's recruitment process. The project goal is to create a backend to retrieve some data from a [BACEN API](https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios) and persist it. Specifically, the API should be able to receive incoming requests with a date and then fetch the dollar rate and save it to a database in the following format:

- Dollar buy price
- Dollar sell price
- Date of the price
- Datetime of the price
- Datetime of the request

The repository folder strucuture is very simple, there are a **docker-compose** file that runs two services: the Node.js server and the PostgreSQL server. For the API server I decided to use [NestJS](https://docs.nestjs.com/) as it has a series of great features like [IoC](https://en.wikipedia.org/wiki/Inversion_of_control), [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection) and a great architecture structure out of the box. Also, I am more familiar with it.

All the code of interest can be found in **challenge-stefanini/api/src** and it is composed of the default NestJS files such as **main.ts**, the starter; **app.\***, the main application module that wraps up all the other modules; and the **dollar** module, containing the domain logic. In the dollar module we find four files: 
- The wraper module, **dollar.module.ts**
- The controller, **dollar.controller.ts** 
- The service file containing the logic code, **dollar.service.ts**, and
- The **cotacao.entity.ts** that represents the database table being used.

Besides the NestJS as the main framework, I also used [TypeORM](https://typeorm.io/) for the database interfacing and [RxJS](https://rxjs.dev/) to wrap the axios requests to the BACEN API.

Thank you for the oportunity!
