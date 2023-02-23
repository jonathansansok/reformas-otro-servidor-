import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Array<Product>;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Coca Cola',
        price: 35,
        stock: 10,
      },
      {
        id: 2,
        name: 'Pepsi',
        price: 40,
        stock: 10,
      },
    ];
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(): Array<Product> {
    return this.products;
  }

  findOne(id: number): Product {
    const producto = this.products.find((p) => p.id === id);
    return producto;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
