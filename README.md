# Port of Tortuga
Displays the information regarding vessels passed in Tortuga.
The app is divided to two parts :
1. server side - NodeJS (called: 'api')
2. client side - Vue.js (called: 'client')

### Featuers
1. Shows the information regarding vessels passed in Tortuga.
2. Marks the entrance of a vessel into the port.
3. Marks the exit of a vessel (Assuming it's in the port)

## Project setup
```
cd client/ && npm install && npm run build
cd ../api/ && npm install
```

### Compiles and hot-reloads for development
```
cd client/ && npm run serve       // client
cd ../api/ && npm run watch:dev   // Server(api)
```

### Compiles and minifies for production
```
// Make sure to run the command 'npm run build' in client folder
cd api/ && npm start
```

