import DI from '../common/DI';

export default class Auth {
    constructor() {

    }

    isLoggined() {
        return this.log = false;
    }

    login(creds) {
        this.log = true;
    }

    logout() {

    }
}

DI.add(Auth);

