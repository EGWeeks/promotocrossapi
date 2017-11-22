ProMotocrossAPI.com has been taken down because of lack maintenance and hosting cost. For anyone ambitious enough to put it back up. I’ll do my best to assist. 

This is only the API, documentation, and license repo. The actual data needs to be pulled from [http://americanmotocrossresults.com](americanmotocrossresults.com) and the repo for is at [https://github.com/EGWeeks/AMAPDFtoJSONParser](here.)

The AMA PDF to JSON Parser requires a NodeJS and Mongo database.

Once you’ve forked the AMA PDF to JSON parser run `npm install`.
Then there’s two things you’ll have to configure.
	- Update the for loop to iterate the races you want to parse. You’ll have to look at the race result URL to figure out how the increment but there is comment about it in app.js.
	- Create a .env file in the root of the project with the list variables
		- DB_URL=database.url
		- DB_PATH=database.url/path
		- DB_USER=database username
		- DB_PW=database password

Finally run `$ node app.js` in the terminal and it should send that data straight to your database.
