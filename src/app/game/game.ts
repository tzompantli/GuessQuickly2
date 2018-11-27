import {User} from '../user/user';
import {Entry} from '../entry/entry'

export class Game {

    id: number;
    name: string;
    status: string;
    users: User [];
    entries: Entry [];
}