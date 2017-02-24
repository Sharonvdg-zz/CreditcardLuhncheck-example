var express = require('express')
var app     = express()

app.use('/js', express.static(__dirname + '/node_modules/bootstrap-validator/dist'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})



// takes the form field value and returns true on valid number
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}



app.get('/validate', function (req, res) {
  // console.log(req.query.ccnumber);
  // console.log(valid_credit_card(req.query.ccnumber));
  if (valid_credit_card(req.query.ccnumber))
    res.sendStatus(200)
  else {
    res.writeHead(400, 'WRONG NUMBER!')
    res.send()
  }
})

var server = app.listen(3000, function () {
  console.log('Listening at http://localhost:3000')
})








