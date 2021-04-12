// importing the necessary node packages
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

// initializing the express module
const app = express();

// here we are making the static local files available to the server by using static method of express package
app.use(express.static("public"));

// here we are parsing the data that the user gives in the form in the client side and fetching it in our server
app.use(bodyParser.urlencoded({extended: true}));

// sending the index.html file as HTTP response back to client's browser as it's making a GET request for the same from our server
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
	// fetching the data that the client inputs in the client side form and make's a POST request to our server
	const fname = req.body.First_Name;
	const lname = req.body.Last_Name;
	const emails = req.body.Email;

	const data = {
		members: [
			{
				email_address: emails,
				status: "subscribed",
				merge_fields: {
					FNAME: fname,
					LNAME: lname
				}
			}
		]
	};

	const jsonData = JSON.stringify(data);

	const url = "https://us7.api.mailchimp.com/3.0/lists/dafc14b6a3";

	const options = {
		method: "POST",
		auth: "anurag:1f95f5c51f9eb6e3525d8a416b861427-us7"
	}

	const request = https.request(url, options, function (response) {
		const status = response.statusCode;
		if (status === 200) {
			res.sendFile(__dirname + "/success.html");
		} else {
			res.sendFile(__dirname + "/failure.html");
		}

		response.on("data", function (data) {
			console.log(JSON.parse(data));
		})
	})

	request.write(jsonData);
	request.end();
});

// redirecting the client to home route if the signup process fails
app.post("/failure", function (req, res) {
	res.redirect("/");
})

// starting our server
app.listen(process.env.PORT || 3000, function () {
	console.log("Server is running on port 3000");
})
