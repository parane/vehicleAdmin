# VehicleAdmin

A simple vehicle selling application. [Demo](https://vehicle-demo-para.herokuapp.com/)

Admins should be able to insert, update, delete, search vehicles

Anyone should be able to search and view details of vehicles. [ClientPotral](https://vehicle-demo-para.herokuapp.com/client)

A login should be there for Admins.
It Contain two (microservice) component:
1. Admin Backend (Server - node, expressjs and Mongodb).
2. Admin Frontend (Angular 2)


## Admin Vehicle
 [Demo](https://vehicle-demo-para.herokuapp.com/)
 ```
username : Admin
password: admin
```

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
ng build

Push to Server:
git push heroku master

Access:
https://vehicle-demo-para.herokuapp.com/
```

