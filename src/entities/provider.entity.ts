import { Column, CreateDateColumn, DeleteDateColumn, Entity,
    ManyToMany,
    ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

    @Entity('providers',  {schema:'sales'})

export class ProviderEntity {

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

    @Column('varchar', {
        name: 'company name',
        nullable: false,
        comment: 'customer first name'
    })

    company_name: string;
}