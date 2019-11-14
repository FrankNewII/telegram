import DI from '../common/DI';

export default class Auth {
    constructor() {

    }

    isLoggined() {
        return this.log;
    }

    login(creds) {
        this.log = true;
    }

    logout() {

    }
}

DI.add(Auth);

