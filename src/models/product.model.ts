import { Entity, model, property } from '@loopback/repository';
import { SchemaObject } from '@loopback/openapi-spec';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true
  }) sku: string;
  @property({
    type: 'string',
    required: true
  }) title: string;
  @property({
    type: 'number',
    required: true
  }) quantity: number;
  @property({
    type: 'string'
  }) description: string;
  @property({ type: 'string' }) linkUrl: string;
  @property({ type: 'string' }) imageUrl: string;
  @property({ type: 'boolean' }) onSale: boolean;
  @property({ type: 'string' }) price: string;
  @property({ type: 'string' }) salePrice: string;

  getId() {
    return this.sku
  }
}

export const ProductSchema: SchemaObject = {
  title: 'productSchema',
  properties: {
    sku:         {
                   type: 'string',
                   description: 'product sku, used as the product ID'
                 },
    title:       { type: 'string' },
    quantity:    { type: 'number' },
    description: { type: 'string' },
    linkUrl:     { type: 'string' },
    imageUrl:    { type: 'string' },
    onSale:      { type: 'boolean' },
    price:       { type: 'string' },
    salePrice:   { type: 'string' }
  },
  required: ['sku']
}
