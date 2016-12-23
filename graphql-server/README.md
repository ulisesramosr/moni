#How to use graph-server

    cd graphql-server #go to graphql-server
    npm install #install dependencies

### Test1

 * In terminal 1:

      node XX_xxx_example.js


### Test 2

 * In terminal 1:

     node express-graphql-example.js

 * In terminal 2:

     curl -XPOST -d '{hello}' -H 'Content-Type:application/graphql' http://localhost:4000/graphql

 * In Browser go to: localhost:4000/graphql and in the left panel insert

     {hello}
