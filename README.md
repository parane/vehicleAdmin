# VehicleAdmin

A simple vehicle selling application. Admins should be able to insert, update, delete, search vehicles. 
It Contain two (microservice) component:
1. Admin Backend (Server - node, expressjs and Mongodb).
2. Admin Frontend (Angular 2)

## Admin Backend
### Run local Mode:
```
Build:
webpack --watch

Run:
nodemon dist/bundle.js

Access:
localhost:3000/vehicle
```

### Run Remote Mode:
```
Build:
webpack

Push to Server:
git push heroku master

Access Api:
https://vehicle-demo-para1.herokuapp.com/
```

Api Documents:


## Admin FrontEnd:
### Run local Mode:

```
Build and Run:
ng serve

Access:
localhost:4200/
```

### Run Remote Mode:
```
Build:
webpack

Push to Server:
git push heroku master

Access:
https://vehicle-demo-para1.herokuapp.com/
```

