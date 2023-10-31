import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductsEntity } from "./product.entity";
import { RoleEntity } from "./role.entity";

@Entity('customers',  {schema:'sales'})

export class CustomerEntity {

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

    @ManyToMany ( ()=> ProductsEntity, product => product.customers )
    products: ProductsEntity[];

    @OneToOne (()=> RoleEntity, role => role.customers)
    @JoinColumn()
    roles: RoleEntity[];

    @Column('varchar', {
        name: 'first_name',
        nullable: false,
        comment: 'customer first name'
    })

    first_name: string;

    @Column('varchar', {
        name: 'last_name',
        nullable: false,
        comment: 'customer last name'
    })

    last_name: string;

    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'customer address'
    })

    address: string;

    @Column('number', {
        name: 'cell_phone',
        nullable: false,
        comment: 'customer cell phone'
    })

    cell_phone: number;

    @Column('varchar', {
        name:  'email',
        nullable: false,
        comment: 'customer email'
    })

    email: string;

    @Column('date',{
        name: 'registration_date',
        nullable: true,
        comment: 'creation date description'
    })

    registration_date: Date;

   @Column('varchar', {
        name: 'password',
        nullable: true,
        comment: 'password type'
    })

    password: string;

    @Column('varchar', {
        name: 'payment_method',
        nullable: false,
        comment: 'payment method description'
    })

    payment_method: string;
}