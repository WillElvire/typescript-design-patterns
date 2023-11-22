/************************************************************************* */
/*                          INTERFACE SEGREGATION PRINCIPLE               */
/************************************************************************* */


/**
 * @description instead of create only one interface we should better create multiple in order to help class during implementations 
 * @description some classes implements interface and d'ont need some interface methods
 */


/************************************************************************* */
/*                                 ISSUE GOT                               */
/************************************************************************* */

interface User {
    name : string;
    passwrod : string;
}
interface UserManager {
    createUser(user : User) : void ;
    updateUser(user : User) : void ;
    deleteUser(user : User) : void ;
}

// in this case supervisor should only create user 
class SuperVisor implements UserManager {
    createUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    updateUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    
}
// admin should only delete and update user
class Admin implements UserManager {
    
    createUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    updateUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    
}

/************************************************************************* */
/*                                RESPONSE                                */
/************************************************************************* */

interface UserCreation {
    createUser(user : User) : void;
}
interface UserDeletion {
    deleteUser(user : User) : void;
}
interface UserUpdate {
    updateUser(user : User) : void;
}


class UserSupervisor implements UserCreation {
    createUser(user: User): void {
        throw new Error("Method not implemented.");
    }
}

class UserAdmin implements UserDeletion,UserUpdate {
    
    updateUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    
}