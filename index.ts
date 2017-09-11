
import * as express from 'express';
import * as bodyParser from 'body-parser';

let app = express();
let router = express.Router();
let host = 'localhost';
let port = 8000;



app.listen(port, host, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('listening on port '+port);
});