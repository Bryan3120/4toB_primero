import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductsEntity } from "./product.entity";

@Entity('categories',  {schema:'sales'})

export class CategoryEntity {

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

    @OneToMany (()=>ProductsEntity, product=> product.categories)
    products: ProductsEntity[];

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'main category name'
    })

    title: string;

    @Column('varchar', {
        name: 'subtitle',
        nullable: false,
        comment: 'subcategory name'
    })

    subtitle: string;

    @Column('varchar',{
        name: 'description',
        nullable: false,
        comment: 'category description'
    })

    description: string;

    @Column('varchar',{
        name: 'associated_products',
        nullable: false,
        comment: 'associated products description'
    })

    associated_products: string;

    @Column('varchar',{
        name: 'attributes',
        nullable: false,
        comment: 'attributes description'
    })

    attributes: string;

    @Column('date',{
        name: 'CRUD_date',
        nullable: false,
        comment: 'creation date description'
    })

    CRUD_date: Date;

}