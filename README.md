# The Gateway
This project is built with NestJS and Graphql.

- [The Gateway](#the-gateway)
  - [Prerequisites](#prerequisites)
    - [pnpm](#pnpm)
    - [Nest CLI](#nest-cli)



## Prerequisites
### pnpm
[pnpm](https://pnpm.io/installation): Fast, disk space efficient package manager.
```bash
npm install -g pnpm

```
### Nest CLI
Setting up a new project is quite simple with the [Nest CLI](https://docs.nestjs.com/first-steps).

```bash
npm i -g @nestjs/cli
$ nest new

pnpm install
pnpm run start:dev

# Adding users and posts
nest g app
# Adding graphql (first code) in users app
nest g resource

pnpm i @apollo/gateway @apollo/subgraph @nestjs/graphql @nestjs/apollo @apollo/server graphql

 # run users' graphql 
 pnpm start:dev users

```
url: http://localhost:3000/graphql
users'qraphql example:

```graphql
mutation{
  createUser(createUserInput:{id:"123",email:"test@gmail.com",password:"pass123"}){
    id
    email
    password
  }
}

query{
  user(id:"123"){
    id
    email
    password
  }
}
```