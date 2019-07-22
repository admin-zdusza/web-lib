import {User, USER} from "./types";

const userLoggedIn = (user: User) => ({type: USER.LOGGED_IN, data: user});
const userLoggedOut = () => ({type: USER.LOGGED_OUT});

export {
    userLoggedIn,
    userLoggedOut
}
