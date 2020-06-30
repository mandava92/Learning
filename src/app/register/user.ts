import { NumberValueAccessor } from '@angular/forms';

export class User {
    constructor(
        public firstName:string,
        public lastName:string,
        public userName:string,
        public password:string,
        public role:string
    ){}
}
