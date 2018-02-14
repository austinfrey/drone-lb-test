import { DefaultCrudRepository, DataSourceType } from '@loopback/repository';
import { inject } from '@loopback/core';
import { Product } from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.sku
> {
  constructor(@inject('datasource') protected datasource: DataSourceType) {
    super(Product,datasource)
  }
}
