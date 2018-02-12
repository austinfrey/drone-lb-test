// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/cli
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {AppApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {AppApplication};

export async function main(options?: ApplicationConfig) {
  const app = new AppApplication(options);

  try {
    await app.start();
  } catch (err) {
    console.error(`Unable to start application: ${err}`);
  }
  return app;
}
