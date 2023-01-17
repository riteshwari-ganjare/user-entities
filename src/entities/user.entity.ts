import { Column, Entity,OneToMany } from "typeorm";
import { Content } from "./content.entity";
import {ContentDto} from "../../../dtos/src/dto/content.dto"
import { EntityBase } from "./entityBase";

@Entity()
export class User extends EntityBase {

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;

    @OneToMany(()=>Content,content=>content.user)
    contents: ContentDto[];

}