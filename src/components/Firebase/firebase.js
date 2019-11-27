import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY, 
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
    databaseURL: process.env.REACT_APP_DATABASE_URL 
}

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Counter API ***
    // TODO: Replace hardcoded path(s) with ref path stored in a constants file
    count = () => this.db.ref(`/`);
    contructive = () => this.db.ref(`/constructive_count`);
    destructive = () => this.db.ref(`/destructive_count`);
}

export default Firebase;
