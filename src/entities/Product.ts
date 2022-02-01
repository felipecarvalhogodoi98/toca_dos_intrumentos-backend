import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  store_quantity: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }

  setName(name: string) {
    this.name = name ? name : this.name;
  }

  setPrice(Price: number) {
    this.price = this.price ? this.price : this.price;
  }

  setQuantity(quantity: number) {
    this.store_quantity = quantity ? quantity : this.store_quantity;
  }

  setDescription(description: string) {
    this.description = description ? description : this.description;
  }
}
