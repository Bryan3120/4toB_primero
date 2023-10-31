import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity,
     JoinTable,
     ManyToMany,
     ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { CustomerEntity } from "./customer.entity";
import { scrypt } from "crypto";

@Entity('products', {schema:'ventas'})

export class ProductsEntity{
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

    @ManyToOne (() => CategoryEntity, category => category.products)
    categories: CategoryEntity[];

    @ManyToMany (()=>CustomerEntity, customer => customer.products)
    @JoinTable()
    customers: CustomerEntity[];
    
    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'product name'
    })

    title: string;

    @Column('number',{
        name: 'price',
        nullable: false,
        comment: 'product price'
    })

    price: number;

    @Column('varchar',{
        name: 'description',
        nullable: true,
        comment: 'product description'
    })

    description: string;

    @BeforeInsert()
@BeforeUpdate()
async setTitle() {
    if (!this.title) {
        return;
    }
    this.title = this.title.toUpperCase();
}

/*@BeforeInsert()
@BeforeUpdate()
async setEmail() {
    if (!this.email) {
        return;
    }
    this.email = this.email.toUpperCase();
}

@BeforeInsert()
@BeforeUpdate()
async setPassword() {
    if (!this.password) {
        return;
    }
    this.password = await Bcrypt.hash(this.password, 15);
}

@BeforeInsert()
@BeforeUpdate()
async convertToUppercase() {
    if (!this.title) {
        this.title = this.title.toUpperCase();
    }
}

}*/
}