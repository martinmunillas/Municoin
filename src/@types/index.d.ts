/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { MigrationsContract } from "./Migrations";
import { MunicoinContract } from "./Municoin";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Migrations"): MigrationsContract;
      require(name: "Municoin"): MunicoinContract;
    }
  }
}

export { MigrationsContract, MigrationsInstance } from "./Migrations";
export { MunicoinContract, MunicoinInstance } from "./Municoin";