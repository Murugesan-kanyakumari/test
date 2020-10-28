var request = require("request")

var url = "https://www.php.net/releases/?json";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
		
		var json_data = body ;
		var display_data= json_data["4"].source;
		var display_md5= display_data[1].md5;
        console.log(json_data);
		  console.log("---------------");
		console.log(display_data);
			console.log("---------------");
		console.log(display_md5);
    }
})

