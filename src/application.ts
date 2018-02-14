import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { ProductController, PingController, HelloController } from './controllers';
import {
  Class,
  Repository,
  RepositoryMixin,
  DataSourceConstructor,
} from '@loopback/repository';
import { db } from './datasources/db.datasource';
import { ProductRepository } from './repositories';

export class AppApplication extends RepositoryMixin(RestApplication) {
  constructor(options?: ApplicationConfig) {
    super(options);
    this.setupControllers();
    this.setupRepositories();
  }

  setupControllers() {
    this.controller(PingController);
    this.controller(HelloController);
    this.controller(ProductController);
  }

  setupRepositories() {
    const datasource =
      this.options && this.options.datasource
        ? new DataSourceConstructor(this.options.datasource)
        : db;
    this.bind('datasource').to(datasource);
    this.repository(ProductRepository);
  }
}
