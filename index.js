const express = require('express')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    var tempFile="./Rajesh_Thakur_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(port, () => {
  console.log(`RTPCR listening on port ${port}!`)
});
