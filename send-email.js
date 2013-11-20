// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('yV04yxDL1By5rr_OsmG0ZQ');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"undurthi_prabhakar@aol.com",
        "to":[{"email":"undurthi.prabhakar@gmail.com"}],
        "subject": "Sending a text email from the Mandrill API",
    "html":"<p>I'm learning the Mandrill API at Codecade. |*COOL FRIEND*|</p>",
        "autotext": "true",
        "track_opens": "true",
        "track_clicks": "true",
        "merge_vars": [
            {
                "rcpt": "your_recipient_address",
                "vars": [
                    {
                        "name": "COOLFRIEND",
                        "content": "Your friend's name"
                    },
                    {
                        "name": "YEARS",
                        "content": "5 awesome years"
                    }
                ]
            }
        ]
    
    
    }
};

function sendTheMail() {
// Send the email!

    m.message.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}