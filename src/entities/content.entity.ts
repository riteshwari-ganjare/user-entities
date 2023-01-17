import { Column, Entity, ManyToOne } from "typeorm";
import { EntityBase } from "./entityBase";
import {ContentType} from "../../../dtos/src/enum/contentType.enum"
import { User } from "./user.entity";
import { UserDto } from "../../../dtos/src/dto/user.dto"

@Entity()
export class Content extends EntityBase {
    
    @Column({
        nullable: false
    })
    title: string;
    
    @Column({
        nullable: false,
        default: ContentType.POST
    })
    type: ContentType;   /// post and poll only

    @Column()
    body: string;

    @Column()
    imageUrls: string;
    
    @Column()
    videoUrl: string;

    @ManyToOne(()=>User,user=>user.contents)
    user: UserDto;

    // userId,
    // groupId 
}