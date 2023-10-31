import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";

@Entity('roles',  {schema:'sales'})

export class RoleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP'
    })
    deleteAt: Date;

    @OneToOne (()=> CustomerEntity, customer => customer.roles)
    customers: CustomerEntity[];

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'role name'
    })

    title: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'role description'
    })

    description: string;

}