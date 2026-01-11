import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductRequest: any) {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  async getProducts(): Promise<any[]> {
    return this.productsService.getProducts();
  }
}
