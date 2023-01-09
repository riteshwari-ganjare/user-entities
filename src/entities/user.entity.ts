import { Column, Entity } from "typeorm";
// import { Content } from "./content.entity";
// import { ContentDto } from "../../../backend-refresher-1.0-dtos/src/dtos/content.dto"
import { EntityBase } from "./entityBase";

@Entity()
export class User extends EntityBase {

    @Column()gi
    firstname: string;

    @Column()
    lastname: string;git remote

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;

    // @OneToMany(()=>Content,content=>content.user)
    // contents: ContentDto[];

}