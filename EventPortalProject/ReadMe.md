In this project, we are using events-api(expressJS) which exposes rest api and provides data by connecting to mongodb , we are going to display in events-portal.
events-portal is sample application developed in angular8.

Mongodb 
-----------

Once mongodb service is up and running, do the following

a)create a database with below command

    use ng8-hyd-db
	
b)Create collection in db

    db.createCollection("events")
	
c) insert some test data
 
 db.events.insert(
 [
    {
       eventId: 1001,
       eventCode: 'SEMJQ3',
       eventName: 'Seminar on jQuery 3.x',
       description: 'Seminar will discuss all the new features of jQuery 3.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 800,
       seatsFilled: 70,
       logo: 'images/jq3.png'
     },
     {
       eventId: 1002,
       eventCode: 'SEMNG1',
       eventName: 'Seminar on Angular JS 1.5.x',
       description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 600,
       seatsFilled: 50,
       logo: 'images/ng1.png'
     },
     {
       eventId: 1003,
       eventCode: 'SEMNG2',
       eventName: 'Seminar on Angular 2.x',
       description: 'Seminar will discuss all the new features of Angular 2.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 1000,
       seatsFilled: 80,
       logo: 'images/ng2.png'
     },
     {
       eventId: 1004,
       eventCode: 'SEMNG4',
       eventName: 'Seminar on Angular 4.x',
       description: 'Seminar will discuss all the new features of Angular 4.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 1000,
       seatsFilled: 76,
       logo: 'images/ng2.png'
     },
     {
       eventId: 1005,
       eventCode: 'SEMBS3',
       eventName: 'Seminar on Bootstrap 3.x',
       description: 'Seminar will discuss all the new features of Bootstrap 3.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 500,
       seatsFilled: 34,
       logo: 'images/bs3.png'
	   }
     
  ]
 )
 
 d) check whether data is inserted or not using below command
   
    db.events.find().pretty()
	
	
e) In the command promy, go to the events-api folder and type command :  node syne-rest-server.js ( url: http://localhost:9090/api/events/)