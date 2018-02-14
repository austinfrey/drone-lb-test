import { get, post, param } from '@loopback/openapi-v2';
import { HttpErrors } from '@loopback/rest';
import { Product, ProductSchema } from '../models';
import { repository } from '@loopback/repository';
import { ProductRepository } from '../repositories/index';

export class ProductController {
  constructor(
    @repository(ProductRepository.name) protected productRepo: ProductRepository,
  ) {}
  @post('/product')
  @param.body('product', ProductSchema)
  async createProduct(product: Product) {
    if(!product.title) {
      return Promise.reject(new HttpErrors.BadRequest('title is required'))
    }
    return await this.productRepo.create(product);
  }

  @get('/products')
  async findProducts(): Promise<Product[]> {
    return await this.productRepo.find();
  }
}

