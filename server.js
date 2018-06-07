var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var aws = require("aws-sdk");

aws.config.region = 'us-east-2';
var S3_BUCKET = process.env.S3_BUCKET;

var app = express();
var PORT = process.env.PORT || 3000;//using heroku default port and our local port when testing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//pathing for apis and html
require('./app/routing/apiRoutes.js')(app);//passing express to our routes
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      console.log(returnData);
      res.end();
    });
  });

  app.post('/save-details', (req, res) => {
    // TODO: Read POSTed form data and do something useful
  });