# moni
Data Monitor project

## Desciption
As Perrita likes, this project involve a tipical IoT issue:
Brings internet services and set of apps to interact with electronic devices.

## How to get this code
git clone git@github.com:molavec/moni.git

## Technologies
* NodeJs
* GraphQL
* RxJS
* ReactJS
* Redux

## File structure
 /graphql-server - A graphql server. It should work to consume and serve data
                   and it should work in cloud nodejs server or nodejs device.


#How to use graph-server

    cd graphql-server #go to graphql-server
    npm install #install dependencies

### Test1

 * In terminal 1:

      node console-example.js

### Test 2

 * In terminal 1:

     node express-graphql-example.js

 * In terminal 2:

     curl -XPOST -d '{hello}' -H 'Content-Type:application/graphql' http://localhost:4000/graphql

 * In Browser go to: localhost:4000/graphql and in the left panel insert

     {hello}
