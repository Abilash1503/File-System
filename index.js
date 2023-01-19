var fs = require('fs');

var date = new Date();
var month = date.getMonth() + 1;
month = (month < 10 ? '0' : '') + month;
var day = date.getDate();
day = (day < 10 ? '0' : '') + day;
var  filename= date.getFullYear() + '-' + month + '-' + day +'-' + date.getHours() +'-' + date.getMinutes() +'-' + date.getSeconds() + '.txt';
var writeStream = fs.createWriteStream(filename);
var content =  date.getHours() +'-' + date.getMinutes() +'-' + date.getSeconds();
var content1 =  date.getHours();
const path = require('path')
const url = path.join(__dirname,filename);
console.log(url);

fs.stat(filename, function(err, stat) {
    if (err == null) {
        fs.appendFile(filename, content, function(err) {
            if (err) console.log("appended");
        });
    } else if (err.code == 'ENOENT') {
        
       fs.writeFile(filename,content, function(err) {
					if(err) return console.log("not appended");
				}); 
                var str = fs.readFileSync(filename, 'utf8'); 
                console.log('result read: ' + str);
    } else {
        console.log('Error: ', err.code);
    }
});

