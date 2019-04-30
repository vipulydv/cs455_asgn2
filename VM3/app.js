const express = require('express');
const app = express();
var ping = reqire('ping');

const port = 8080;

let vm1_host = '';
let vm2_host = '';

// app.use(express.static(path));
// app.use('/', router);

app.get('/ping', (req,res) => {
	ping.sys.probe(vm1_host, function(isAlive1){
        	var msg = isAlive1 ? 'host ' + vm1_host + ' is alive' : 'host ' + vm1_host + ' is dead';
        	console.log(msg);
	});
	ping.sys.probe(vm2_host, function(isAlive2){
                var msg = isAlive2 ? 'host ' + vm2_host + ' is alive' : 'host ' + vm2_host + ' is dead';
                console.log(msg);
        });
	res.send({ isAlive1: isAlive1, isAlive2: isAlive2});
});


app.listen(port, function () {
  console.log('App listening on port 8080!')
});
