import {EventSubscriber, On} from "event-dispatch";
import { IUser } from "../interfaces/IUser";
 
@EventSubscriber()
export class UserEventSubscriber {
 
    @On("onUserSignUp")
    onUserSignUp(user: IUser) {
        console.log(user.email);
        console.log("User " + user.username + " created!");
    }
 
 
}