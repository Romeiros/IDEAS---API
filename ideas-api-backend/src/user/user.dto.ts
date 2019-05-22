import { IsNotEmpty } from "class-validator";
import { IdeaEntity } from "../idea/idea.entity";

export class UserDTO {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}

export class UserRO {
    id: string;
    created: Date;
    username: string;
    token?: string;
    ideas?: IdeaEntity[];
    bookmarks?: IdeaEntity[];
}