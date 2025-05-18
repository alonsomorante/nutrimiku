
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cereals
 * 
 */
export type cereals = $Result.DefaultSelection<Prisma.$cerealsPayload>
/**
 * Model dairy
 * 
 */
export type dairy = $Result.DefaultSelection<Prisma.$dairyPayload>
/**
 * Model drinks
 * 
 */
export type drinks = $Result.DefaultSelection<Prisma.$drinksPayload>
/**
 * Model eggs
 * 
 */
export type eggs = $Result.DefaultSelection<Prisma.$eggsPayload>
/**
 * Model fats
 * 
 */
export type fats = $Result.DefaultSelection<Prisma.$fatsPayload>
/**
 * Model fruits
 * 
 */
export type fruits = $Result.DefaultSelection<Prisma.$fruitsPayload>
/**
 * Model legumes
 * 
 */
export type legumes = $Result.DefaultSelection<Prisma.$legumesPayload>
/**
 * Model meat
 * 
 */
export type meat = $Result.DefaultSelection<Prisma.$meatPayload>
/**
 * Model miscellaneous
 * 
 */
export type miscellaneous = $Result.DefaultSelection<Prisma.$miscellaneousPayload>
/**
 * Model seafood
 * 
 */
export type seafood = $Result.DefaultSelection<Prisma.$seafoodPayload>
/**
 * Model sugar
 * 
 */
export type sugar = $Result.DefaultSelection<Prisma.$sugarPayload>
/**
 * Model tubers
 * 
 */
export type tubers = $Result.DefaultSelection<Prisma.$tubersPayload>
/**
 * Model vegetables
 * 
 */
export type vegetables = $Result.DefaultSelection<Prisma.$vegetablesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cereals
 * const cereals = await prisma.cereals.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cereals
   * const cereals = await prisma.cereals.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cereals`: Exposes CRUD operations for the **cereals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cereals
    * const cereals = await prisma.cereals.findMany()
    * ```
    */
  get cereals(): Prisma.cerealsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dairy`: Exposes CRUD operations for the **dairy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dairies
    * const dairies = await prisma.dairy.findMany()
    * ```
    */
  get dairy(): Prisma.dairyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drinks`: Exposes CRUD operations for the **drinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drinks
    * const drinks = await prisma.drinks.findMany()
    * ```
    */
  get drinks(): Prisma.drinksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eggs`: Exposes CRUD operations for the **eggs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eggs
    * const eggs = await prisma.eggs.findMany()
    * ```
    */
  get eggs(): Prisma.eggsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fats`: Exposes CRUD operations for the **fats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fats
    * const fats = await prisma.fats.findMany()
    * ```
    */
  get fats(): Prisma.fatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fruits`: Exposes CRUD operations for the **fruits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fruits
    * const fruits = await prisma.fruits.findMany()
    * ```
    */
  get fruits(): Prisma.fruitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legumes`: Exposes CRUD operations for the **legumes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legumes
    * const legumes = await prisma.legumes.findMany()
    * ```
    */
  get legumes(): Prisma.legumesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meat`: Exposes CRUD operations for the **meat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meats
    * const meats = await prisma.meat.findMany()
    * ```
    */
  get meat(): Prisma.meatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miscellaneous`: Exposes CRUD operations for the **miscellaneous** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Miscellaneous
    * const miscellaneous = await prisma.miscellaneous.findMany()
    * ```
    */
  get miscellaneous(): Prisma.miscellaneousDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seafood`: Exposes CRUD operations for the **seafood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seafoods
    * const seafoods = await prisma.seafood.findMany()
    * ```
    */
  get seafood(): Prisma.seafoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sugar`: Exposes CRUD operations for the **sugar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sugars
    * const sugars = await prisma.sugar.findMany()
    * ```
    */
  get sugar(): Prisma.sugarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tubers`: Exposes CRUD operations for the **tubers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tubers
    * const tubers = await prisma.tubers.findMany()
    * ```
    */
  get tubers(): Prisma.tubersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vegetables`: Exposes CRUD operations for the **vegetables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vegetables
    * const vegetables = await prisma.vegetables.findMany()
    * ```
    */
  get vegetables(): Prisma.vegetablesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cereals: 'cereals',
    dairy: 'dairy',
    drinks: 'drinks',
    eggs: 'eggs',
    fats: 'fats',
    fruits: 'fruits',
    legumes: 'legumes',
    meat: 'meat',
    miscellaneous: 'miscellaneous',
    seafood: 'seafood',
    sugar: 'sugar',
    tubers: 'tubers',
    vegetables: 'vegetables'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cereals" | "dairy" | "drinks" | "eggs" | "fats" | "fruits" | "legumes" | "meat" | "miscellaneous" | "seafood" | "sugar" | "tubers" | "vegetables"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cereals: {
        payload: Prisma.$cerealsPayload<ExtArgs>
        fields: Prisma.cerealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cerealsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cerealsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          findFirst: {
            args: Prisma.cerealsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cerealsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          findMany: {
            args: Prisma.cerealsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>[]
          }
          create: {
            args: Prisma.cerealsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          createMany: {
            args: Prisma.cerealsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cerealsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>[]
          }
          delete: {
            args: Prisma.cerealsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          update: {
            args: Prisma.cerealsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          deleteMany: {
            args: Prisma.cerealsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cerealsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cerealsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>[]
          }
          upsert: {
            args: Prisma.cerealsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cerealsPayload>
          }
          aggregate: {
            args: Prisma.CerealsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCereals>
          }
          groupBy: {
            args: Prisma.cerealsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CerealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cerealsCountArgs<ExtArgs>
            result: $Utils.Optional<CerealsCountAggregateOutputType> | number
          }
        }
      }
      dairy: {
        payload: Prisma.$dairyPayload<ExtArgs>
        fields: Prisma.dairyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dairyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dairyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          findFirst: {
            args: Prisma.dairyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dairyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          findMany: {
            args: Prisma.dairyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>[]
          }
          create: {
            args: Prisma.dairyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          createMany: {
            args: Prisma.dairyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dairyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>[]
          }
          delete: {
            args: Prisma.dairyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          update: {
            args: Prisma.dairyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          deleteMany: {
            args: Prisma.dairyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dairyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dairyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>[]
          }
          upsert: {
            args: Prisma.dairyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dairyPayload>
          }
          aggregate: {
            args: Prisma.DairyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDairy>
          }
          groupBy: {
            args: Prisma.dairyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DairyGroupByOutputType>[]
          }
          count: {
            args: Prisma.dairyCountArgs<ExtArgs>
            result: $Utils.Optional<DairyCountAggregateOutputType> | number
          }
        }
      }
      drinks: {
        payload: Prisma.$drinksPayload<ExtArgs>
        fields: Prisma.drinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.drinksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.drinksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          findFirst: {
            args: Prisma.drinksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.drinksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          findMany: {
            args: Prisma.drinksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>[]
          }
          create: {
            args: Prisma.drinksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          createMany: {
            args: Prisma.drinksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.drinksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>[]
          }
          delete: {
            args: Prisma.drinksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          update: {
            args: Prisma.drinksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          deleteMany: {
            args: Prisma.drinksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.drinksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.drinksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>[]
          }
          upsert: {
            args: Prisma.drinksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$drinksPayload>
          }
          aggregate: {
            args: Prisma.DrinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrinks>
          }
          groupBy: {
            args: Prisma.drinksGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.drinksCountArgs<ExtArgs>
            result: $Utils.Optional<DrinksCountAggregateOutputType> | number
          }
        }
      }
      eggs: {
        payload: Prisma.$eggsPayload<ExtArgs>
        fields: Prisma.eggsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eggsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eggsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          findFirst: {
            args: Prisma.eggsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eggsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          findMany: {
            args: Prisma.eggsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>[]
          }
          create: {
            args: Prisma.eggsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          createMany: {
            args: Prisma.eggsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eggsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>[]
          }
          delete: {
            args: Prisma.eggsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          update: {
            args: Prisma.eggsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          deleteMany: {
            args: Prisma.eggsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eggsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eggsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>[]
          }
          upsert: {
            args: Prisma.eggsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eggsPayload>
          }
          aggregate: {
            args: Prisma.EggsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEggs>
          }
          groupBy: {
            args: Prisma.eggsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EggsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eggsCountArgs<ExtArgs>
            result: $Utils.Optional<EggsCountAggregateOutputType> | number
          }
        }
      }
      fats: {
        payload: Prisma.$fatsPayload<ExtArgs>
        fields: Prisma.fatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          findFirst: {
            args: Prisma.fatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          findMany: {
            args: Prisma.fatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>[]
          }
          create: {
            args: Prisma.fatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          createMany: {
            args: Prisma.fatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>[]
          }
          delete: {
            args: Prisma.fatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          update: {
            args: Prisma.fatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          deleteMany: {
            args: Prisma.fatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>[]
          }
          upsert: {
            args: Prisma.fatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fatsPayload>
          }
          aggregate: {
            args: Prisma.FatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFats>
          }
          groupBy: {
            args: Prisma.fatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fatsCountArgs<ExtArgs>
            result: $Utils.Optional<FatsCountAggregateOutputType> | number
          }
        }
      }
      fruits: {
        payload: Prisma.$fruitsPayload<ExtArgs>
        fields: Prisma.fruitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          findFirst: {
            args: Prisma.fruitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          findMany: {
            args: Prisma.fruitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>[]
          }
          create: {
            args: Prisma.fruitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          createMany: {
            args: Prisma.fruitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fruitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>[]
          }
          delete: {
            args: Prisma.fruitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          update: {
            args: Prisma.fruitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          deleteMany: {
            args: Prisma.fruitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fruitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fruitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>[]
          }
          upsert: {
            args: Prisma.fruitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fruitsPayload>
          }
          aggregate: {
            args: Prisma.FruitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFruits>
          }
          groupBy: {
            args: Prisma.fruitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FruitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitsCountArgs<ExtArgs>
            result: $Utils.Optional<FruitsCountAggregateOutputType> | number
          }
        }
      }
      legumes: {
        payload: Prisma.$legumesPayload<ExtArgs>
        fields: Prisma.legumesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.legumesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.legumesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          findFirst: {
            args: Prisma.legumesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.legumesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          findMany: {
            args: Prisma.legumesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>[]
          }
          create: {
            args: Prisma.legumesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          createMany: {
            args: Prisma.legumesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.legumesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>[]
          }
          delete: {
            args: Prisma.legumesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          update: {
            args: Prisma.legumesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          deleteMany: {
            args: Prisma.legumesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.legumesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.legumesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>[]
          }
          upsert: {
            args: Prisma.legumesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legumesPayload>
          }
          aggregate: {
            args: Prisma.LegumesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegumes>
          }
          groupBy: {
            args: Prisma.legumesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegumesGroupByOutputType>[]
          }
          count: {
            args: Prisma.legumesCountArgs<ExtArgs>
            result: $Utils.Optional<LegumesCountAggregateOutputType> | number
          }
        }
      }
      meat: {
        payload: Prisma.$meatPayload<ExtArgs>
        fields: Prisma.meatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          findFirst: {
            args: Prisma.meatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          findMany: {
            args: Prisma.meatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>[]
          }
          create: {
            args: Prisma.meatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          createMany: {
            args: Prisma.meatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>[]
          }
          delete: {
            args: Prisma.meatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          update: {
            args: Prisma.meatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          deleteMany: {
            args: Prisma.meatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.meatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>[]
          }
          upsert: {
            args: Prisma.meatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meatPayload>
          }
          aggregate: {
            args: Prisma.MeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeat>
          }
          groupBy: {
            args: Prisma.meatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.meatCountArgs<ExtArgs>
            result: $Utils.Optional<MeatCountAggregateOutputType> | number
          }
        }
      }
      miscellaneous: {
        payload: Prisma.$miscellaneousPayload<ExtArgs>
        fields: Prisma.miscellaneousFieldRefs
        operations: {
          findUnique: {
            args: Prisma.miscellaneousFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.miscellaneousFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          findFirst: {
            args: Prisma.miscellaneousFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.miscellaneousFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          findMany: {
            args: Prisma.miscellaneousFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>[]
          }
          create: {
            args: Prisma.miscellaneousCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          createMany: {
            args: Prisma.miscellaneousCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.miscellaneousCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>[]
          }
          delete: {
            args: Prisma.miscellaneousDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          update: {
            args: Prisma.miscellaneousUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          deleteMany: {
            args: Prisma.miscellaneousDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.miscellaneousUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.miscellaneousUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>[]
          }
          upsert: {
            args: Prisma.miscellaneousUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$miscellaneousPayload>
          }
          aggregate: {
            args: Prisma.MiscellaneousAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiscellaneous>
          }
          groupBy: {
            args: Prisma.miscellaneousGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiscellaneousGroupByOutputType>[]
          }
          count: {
            args: Prisma.miscellaneousCountArgs<ExtArgs>
            result: $Utils.Optional<MiscellaneousCountAggregateOutputType> | number
          }
        }
      }
      seafood: {
        payload: Prisma.$seafoodPayload<ExtArgs>
        fields: Prisma.seafoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seafoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seafoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          findFirst: {
            args: Prisma.seafoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seafoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          findMany: {
            args: Prisma.seafoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>[]
          }
          create: {
            args: Prisma.seafoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          createMany: {
            args: Prisma.seafoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seafoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>[]
          }
          delete: {
            args: Prisma.seafoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          update: {
            args: Prisma.seafoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          deleteMany: {
            args: Prisma.seafoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seafoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seafoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>[]
          }
          upsert: {
            args: Prisma.seafoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seafoodPayload>
          }
          aggregate: {
            args: Prisma.SeafoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeafood>
          }
          groupBy: {
            args: Prisma.seafoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeafoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.seafoodCountArgs<ExtArgs>
            result: $Utils.Optional<SeafoodCountAggregateOutputType> | number
          }
        }
      }
      sugar: {
        payload: Prisma.$sugarPayload<ExtArgs>
        fields: Prisma.sugarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sugarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sugarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          findFirst: {
            args: Prisma.sugarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sugarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          findMany: {
            args: Prisma.sugarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>[]
          }
          create: {
            args: Prisma.sugarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          createMany: {
            args: Prisma.sugarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sugarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>[]
          }
          delete: {
            args: Prisma.sugarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          update: {
            args: Prisma.sugarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          deleteMany: {
            args: Prisma.sugarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sugarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sugarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>[]
          }
          upsert: {
            args: Prisma.sugarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sugarPayload>
          }
          aggregate: {
            args: Prisma.SugarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSugar>
          }
          groupBy: {
            args: Prisma.sugarGroupByArgs<ExtArgs>
            result: $Utils.Optional<SugarGroupByOutputType>[]
          }
          count: {
            args: Prisma.sugarCountArgs<ExtArgs>
            result: $Utils.Optional<SugarCountAggregateOutputType> | number
          }
        }
      }
      tubers: {
        payload: Prisma.$tubersPayload<ExtArgs>
        fields: Prisma.tubersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tubersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tubersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          findFirst: {
            args: Prisma.tubersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tubersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          findMany: {
            args: Prisma.tubersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>[]
          }
          create: {
            args: Prisma.tubersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          createMany: {
            args: Prisma.tubersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tubersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>[]
          }
          delete: {
            args: Prisma.tubersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          update: {
            args: Prisma.tubersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          deleteMany: {
            args: Prisma.tubersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tubersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tubersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>[]
          }
          upsert: {
            args: Prisma.tubersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tubersPayload>
          }
          aggregate: {
            args: Prisma.TubersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTubers>
          }
          groupBy: {
            args: Prisma.tubersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TubersGroupByOutputType>[]
          }
          count: {
            args: Prisma.tubersCountArgs<ExtArgs>
            result: $Utils.Optional<TubersCountAggregateOutputType> | number
          }
        }
      }
      vegetables: {
        payload: Prisma.$vegetablesPayload<ExtArgs>
        fields: Prisma.vegetablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vegetablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vegetablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          findFirst: {
            args: Prisma.vegetablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vegetablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          findMany: {
            args: Prisma.vegetablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>[]
          }
          create: {
            args: Prisma.vegetablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          createMany: {
            args: Prisma.vegetablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vegetablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>[]
          }
          delete: {
            args: Prisma.vegetablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          update: {
            args: Prisma.vegetablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          deleteMany: {
            args: Prisma.vegetablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vegetablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vegetablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>[]
          }
          upsert: {
            args: Prisma.vegetablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vegetablesPayload>
          }
          aggregate: {
            args: Prisma.VegetablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVegetables>
          }
          groupBy: {
            args: Prisma.vegetablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VegetablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vegetablesCountArgs<ExtArgs>
            result: $Utils.Optional<VegetablesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cereals?: cerealsOmit
    dairy?: dairyOmit
    drinks?: drinksOmit
    eggs?: eggsOmit
    fats?: fatsOmit
    fruits?: fruitsOmit
    legumes?: legumesOmit
    meat?: meatOmit
    miscellaneous?: miscellaneousOmit
    seafood?: seafoodOmit
    sugar?: sugarOmit
    tubers?: tubersOmit
    vegetables?: vegetablesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model cereals
   */

  export type AggregateCereals = {
    _count: CerealsCountAggregateOutputType | null
    _avg: CerealsAvgAggregateOutputType | null
    _sum: CerealsSumAggregateOutputType | null
    _min: CerealsMinAggregateOutputType | null
    _max: CerealsMaxAggregateOutputType | null
  }

  export type CerealsAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type CerealsSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type CerealsMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type CerealsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type CerealsCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type CerealsAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type CerealsSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type CerealsMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type CerealsMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type CerealsCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type CerealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cereals to aggregate.
     */
    where?: cerealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cereals to fetch.
     */
    orderBy?: cerealsOrderByWithRelationInput | cerealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cerealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cereals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cereals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cereals
    **/
    _count?: true | CerealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CerealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CerealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CerealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CerealsMaxAggregateInputType
  }

  export type GetCerealsAggregateType<T extends CerealsAggregateArgs> = {
        [P in keyof T & keyof AggregateCereals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCereals[P]>
      : GetScalarType<T[P], AggregateCereals[P]>
  }




  export type cerealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cerealsWhereInput
    orderBy?: cerealsOrderByWithAggregationInput | cerealsOrderByWithAggregationInput[]
    by: CerealsScalarFieldEnum[] | CerealsScalarFieldEnum
    having?: cerealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CerealsCountAggregateInputType | true
    _avg?: CerealsAvgAggregateInputType
    _sum?: CerealsSumAggregateInputType
    _min?: CerealsMinAggregateInputType
    _max?: CerealsMaxAggregateInputType
  }

  export type CerealsGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: CerealsCountAggregateOutputType | null
    _avg: CerealsAvgAggregateOutputType | null
    _sum: CerealsSumAggregateOutputType | null
    _min: CerealsMinAggregateOutputType | null
    _max: CerealsMaxAggregateOutputType | null
  }

  type GetCerealsGroupByPayload<T extends cerealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CerealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CerealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CerealsGroupByOutputType[P]>
            : GetScalarType<T[P], CerealsGroupByOutputType[P]>
        }
      >
    >


  export type cerealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["cereals"]>

  export type cerealsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["cereals"]>

  export type cerealsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["cereals"]>

  export type cerealsSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type cerealsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["cereals"]>

  export type $cerealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cereals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["cereals"]>
    composites: {}
  }

  type cerealsGetPayload<S extends boolean | null | undefined | cerealsDefaultArgs> = $Result.GetResult<Prisma.$cerealsPayload, S>

  type cerealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cerealsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CerealsCountAggregateInputType | true
    }

  export interface cerealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cereals'], meta: { name: 'cereals' } }
    /**
     * Find zero or one Cereals that matches the filter.
     * @param {cerealsFindUniqueArgs} args - Arguments to find a Cereals
     * @example
     * // Get one Cereals
     * const cereals = await prisma.cereals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cerealsFindUniqueArgs>(args: SelectSubset<T, cerealsFindUniqueArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cereals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cerealsFindUniqueOrThrowArgs} args - Arguments to find a Cereals
     * @example
     * // Get one Cereals
     * const cereals = await prisma.cereals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cerealsFindUniqueOrThrowArgs>(args: SelectSubset<T, cerealsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cereals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsFindFirstArgs} args - Arguments to find a Cereals
     * @example
     * // Get one Cereals
     * const cereals = await prisma.cereals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cerealsFindFirstArgs>(args?: SelectSubset<T, cerealsFindFirstArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cereals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsFindFirstOrThrowArgs} args - Arguments to find a Cereals
     * @example
     * // Get one Cereals
     * const cereals = await prisma.cereals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cerealsFindFirstOrThrowArgs>(args?: SelectSubset<T, cerealsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cereals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cereals
     * const cereals = await prisma.cereals.findMany()
     * 
     * // Get first 10 Cereals
     * const cereals = await prisma.cereals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cerealsWithIdOnly = await prisma.cereals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cerealsFindManyArgs>(args?: SelectSubset<T, cerealsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cereals.
     * @param {cerealsCreateArgs} args - Arguments to create a Cereals.
     * @example
     * // Create one Cereals
     * const Cereals = await prisma.cereals.create({
     *   data: {
     *     // ... data to create a Cereals
     *   }
     * })
     * 
     */
    create<T extends cerealsCreateArgs>(args: SelectSubset<T, cerealsCreateArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cereals.
     * @param {cerealsCreateManyArgs} args - Arguments to create many Cereals.
     * @example
     * // Create many Cereals
     * const cereals = await prisma.cereals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cerealsCreateManyArgs>(args?: SelectSubset<T, cerealsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cereals and returns the data saved in the database.
     * @param {cerealsCreateManyAndReturnArgs} args - Arguments to create many Cereals.
     * @example
     * // Create many Cereals
     * const cereals = await prisma.cereals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cereals and only return the `id`
     * const cerealsWithIdOnly = await prisma.cereals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cerealsCreateManyAndReturnArgs>(args?: SelectSubset<T, cerealsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cereals.
     * @param {cerealsDeleteArgs} args - Arguments to delete one Cereals.
     * @example
     * // Delete one Cereals
     * const Cereals = await prisma.cereals.delete({
     *   where: {
     *     // ... filter to delete one Cereals
     *   }
     * })
     * 
     */
    delete<T extends cerealsDeleteArgs>(args: SelectSubset<T, cerealsDeleteArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cereals.
     * @param {cerealsUpdateArgs} args - Arguments to update one Cereals.
     * @example
     * // Update one Cereals
     * const cereals = await prisma.cereals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cerealsUpdateArgs>(args: SelectSubset<T, cerealsUpdateArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cereals.
     * @param {cerealsDeleteManyArgs} args - Arguments to filter Cereals to delete.
     * @example
     * // Delete a few Cereals
     * const { count } = await prisma.cereals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cerealsDeleteManyArgs>(args?: SelectSubset<T, cerealsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cereals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cereals
     * const cereals = await prisma.cereals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cerealsUpdateManyArgs>(args: SelectSubset<T, cerealsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cereals and returns the data updated in the database.
     * @param {cerealsUpdateManyAndReturnArgs} args - Arguments to update many Cereals.
     * @example
     * // Update many Cereals
     * const cereals = await prisma.cereals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cereals and only return the `id`
     * const cerealsWithIdOnly = await prisma.cereals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cerealsUpdateManyAndReturnArgs>(args: SelectSubset<T, cerealsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cereals.
     * @param {cerealsUpsertArgs} args - Arguments to update or create a Cereals.
     * @example
     * // Update or create a Cereals
     * const cereals = await prisma.cereals.upsert({
     *   create: {
     *     // ... data to create a Cereals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cereals we want to update
     *   }
     * })
     */
    upsert<T extends cerealsUpsertArgs>(args: SelectSubset<T, cerealsUpsertArgs<ExtArgs>>): Prisma__cerealsClient<$Result.GetResult<Prisma.$cerealsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cereals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsCountArgs} args - Arguments to filter Cereals to count.
     * @example
     * // Count the number of Cereals
     * const count = await prisma.cereals.count({
     *   where: {
     *     // ... the filter for the Cereals we want to count
     *   }
     * })
    **/
    count<T extends cerealsCountArgs>(
      args?: Subset<T, cerealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CerealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cereals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CerealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CerealsAggregateArgs>(args: Subset<T, CerealsAggregateArgs>): Prisma.PrismaPromise<GetCerealsAggregateType<T>>

    /**
     * Group by Cereals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cerealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cerealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cerealsGroupByArgs['orderBy'] }
        : { orderBy?: cerealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cerealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCerealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cereals model
   */
  readonly fields: cerealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cereals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cerealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cereals model
   */
  interface cerealsFieldRefs {
    readonly id: FieldRef<"cereals", 'Int'>
    readonly name: FieldRef<"cereals", 'String'>
    readonly energy: FieldRef<"cereals", 'Float'>
    readonly protein: FieldRef<"cereals", 'Float'>
    readonly total_fat: FieldRef<"cereals", 'Float'>
    readonly total_carbohydrates: FieldRef<"cereals", 'Float'>
    readonly fibra: FieldRef<"cereals", 'Float'>
    readonly calcium: FieldRef<"cereals", 'Float'>
    readonly fosforo: FieldRef<"cereals", 'Float'>
    readonly zinc: FieldRef<"cereals", 'Float'>
    readonly iron: FieldRef<"cereals", 'Float'>
    readonly sodium: FieldRef<"cereals", 'Float'>
    readonly potassium: FieldRef<"cereals", 'Float'>
    readonly image: FieldRef<"cereals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cereals findUnique
   */
  export type cerealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter, which cereals to fetch.
     */
    where: cerealsWhereUniqueInput
  }

  /**
   * cereals findUniqueOrThrow
   */
  export type cerealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter, which cereals to fetch.
     */
    where: cerealsWhereUniqueInput
  }

  /**
   * cereals findFirst
   */
  export type cerealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter, which cereals to fetch.
     */
    where?: cerealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cereals to fetch.
     */
    orderBy?: cerealsOrderByWithRelationInput | cerealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cereals.
     */
    cursor?: cerealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cereals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cereals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cereals.
     */
    distinct?: CerealsScalarFieldEnum | CerealsScalarFieldEnum[]
  }

  /**
   * cereals findFirstOrThrow
   */
  export type cerealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter, which cereals to fetch.
     */
    where?: cerealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cereals to fetch.
     */
    orderBy?: cerealsOrderByWithRelationInput | cerealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cereals.
     */
    cursor?: cerealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cereals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cereals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cereals.
     */
    distinct?: CerealsScalarFieldEnum | CerealsScalarFieldEnum[]
  }

  /**
   * cereals findMany
   */
  export type cerealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter, which cereals to fetch.
     */
    where?: cerealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cereals to fetch.
     */
    orderBy?: cerealsOrderByWithRelationInput | cerealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cereals.
     */
    cursor?: cerealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cereals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cereals.
     */
    skip?: number
    distinct?: CerealsScalarFieldEnum | CerealsScalarFieldEnum[]
  }

  /**
   * cereals create
   */
  export type cerealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * The data needed to create a cereals.
     */
    data: XOR<cerealsCreateInput, cerealsUncheckedCreateInput>
  }

  /**
   * cereals createMany
   */
  export type cerealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cereals.
     */
    data: cerealsCreateManyInput | cerealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cereals createManyAndReturn
   */
  export type cerealsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * The data used to create many cereals.
     */
    data: cerealsCreateManyInput | cerealsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cereals update
   */
  export type cerealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * The data needed to update a cereals.
     */
    data: XOR<cerealsUpdateInput, cerealsUncheckedUpdateInput>
    /**
     * Choose, which cereals to update.
     */
    where: cerealsWhereUniqueInput
  }

  /**
   * cereals updateMany
   */
  export type cerealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cereals.
     */
    data: XOR<cerealsUpdateManyMutationInput, cerealsUncheckedUpdateManyInput>
    /**
     * Filter which cereals to update
     */
    where?: cerealsWhereInput
    /**
     * Limit how many cereals to update.
     */
    limit?: number
  }

  /**
   * cereals updateManyAndReturn
   */
  export type cerealsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * The data used to update cereals.
     */
    data: XOR<cerealsUpdateManyMutationInput, cerealsUncheckedUpdateManyInput>
    /**
     * Filter which cereals to update
     */
    where?: cerealsWhereInput
    /**
     * Limit how many cereals to update.
     */
    limit?: number
  }

  /**
   * cereals upsert
   */
  export type cerealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * The filter to search for the cereals to update in case it exists.
     */
    where: cerealsWhereUniqueInput
    /**
     * In case the cereals found by the `where` argument doesn't exist, create a new cereals with this data.
     */
    create: XOR<cerealsCreateInput, cerealsUncheckedCreateInput>
    /**
     * In case the cereals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cerealsUpdateInput, cerealsUncheckedUpdateInput>
  }

  /**
   * cereals delete
   */
  export type cerealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
    /**
     * Filter which cereals to delete.
     */
    where: cerealsWhereUniqueInput
  }

  /**
   * cereals deleteMany
   */
  export type cerealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cereals to delete
     */
    where?: cerealsWhereInput
    /**
     * Limit how many cereals to delete.
     */
    limit?: number
  }

  /**
   * cereals without action
   */
  export type cerealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cereals
     */
    select?: cerealsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cereals
     */
    omit?: cerealsOmit<ExtArgs> | null
  }


  /**
   * Model dairy
   */

  export type AggregateDairy = {
    _count: DairyCountAggregateOutputType | null
    _avg: DairyAvgAggregateOutputType | null
    _sum: DairySumAggregateOutputType | null
    _min: DairyMinAggregateOutputType | null
    _max: DairyMaxAggregateOutputType | null
  }

  export type DairyAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type DairySumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type DairyMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type DairyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type DairyCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type DairyAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type DairySumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type DairyMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type DairyMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type DairyCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type DairyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dairy to aggregate.
     */
    where?: dairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dairies to fetch.
     */
    orderBy?: dairyOrderByWithRelationInput | dairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dairies
    **/
    _count?: true | DairyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DairyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DairySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DairyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DairyMaxAggregateInputType
  }

  export type GetDairyAggregateType<T extends DairyAggregateArgs> = {
        [P in keyof T & keyof AggregateDairy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDairy[P]>
      : GetScalarType<T[P], AggregateDairy[P]>
  }




  export type dairyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dairyWhereInput
    orderBy?: dairyOrderByWithAggregationInput | dairyOrderByWithAggregationInput[]
    by: DairyScalarFieldEnum[] | DairyScalarFieldEnum
    having?: dairyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DairyCountAggregateInputType | true
    _avg?: DairyAvgAggregateInputType
    _sum?: DairySumAggregateInputType
    _min?: DairyMinAggregateInputType
    _max?: DairyMaxAggregateInputType
  }

  export type DairyGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: DairyCountAggregateOutputType | null
    _avg: DairyAvgAggregateOutputType | null
    _sum: DairySumAggregateOutputType | null
    _min: DairyMinAggregateOutputType | null
    _max: DairyMaxAggregateOutputType | null
  }

  type GetDairyGroupByPayload<T extends dairyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DairyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DairyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DairyGroupByOutputType[P]>
            : GetScalarType<T[P], DairyGroupByOutputType[P]>
        }
      >
    >


  export type dairySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["dairy"]>

  export type dairySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["dairy"]>

  export type dairySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["dairy"]>

  export type dairySelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type dairyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["dairy"]>

  export type $dairyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dairy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["dairy"]>
    composites: {}
  }

  type dairyGetPayload<S extends boolean | null | undefined | dairyDefaultArgs> = $Result.GetResult<Prisma.$dairyPayload, S>

  type dairyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dairyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DairyCountAggregateInputType | true
    }

  export interface dairyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dairy'], meta: { name: 'dairy' } }
    /**
     * Find zero or one Dairy that matches the filter.
     * @param {dairyFindUniqueArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dairyFindUniqueArgs>(args: SelectSubset<T, dairyFindUniqueArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dairy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dairyFindUniqueOrThrowArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dairyFindUniqueOrThrowArgs>(args: SelectSubset<T, dairyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dairy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyFindFirstArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dairyFindFirstArgs>(args?: SelectSubset<T, dairyFindFirstArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dairy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyFindFirstOrThrowArgs} args - Arguments to find a Dairy
     * @example
     * // Get one Dairy
     * const dairy = await prisma.dairy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dairyFindFirstOrThrowArgs>(args?: SelectSubset<T, dairyFindFirstOrThrowArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dairies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dairies
     * const dairies = await prisma.dairy.findMany()
     * 
     * // Get first 10 Dairies
     * const dairies = await prisma.dairy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dairyWithIdOnly = await prisma.dairy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dairyFindManyArgs>(args?: SelectSubset<T, dairyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dairy.
     * @param {dairyCreateArgs} args - Arguments to create a Dairy.
     * @example
     * // Create one Dairy
     * const Dairy = await prisma.dairy.create({
     *   data: {
     *     // ... data to create a Dairy
     *   }
     * })
     * 
     */
    create<T extends dairyCreateArgs>(args: SelectSubset<T, dairyCreateArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dairies.
     * @param {dairyCreateManyArgs} args - Arguments to create many Dairies.
     * @example
     * // Create many Dairies
     * const dairy = await prisma.dairy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dairyCreateManyArgs>(args?: SelectSubset<T, dairyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dairies and returns the data saved in the database.
     * @param {dairyCreateManyAndReturnArgs} args - Arguments to create many Dairies.
     * @example
     * // Create many Dairies
     * const dairy = await prisma.dairy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dairies and only return the `id`
     * const dairyWithIdOnly = await prisma.dairy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dairyCreateManyAndReturnArgs>(args?: SelectSubset<T, dairyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dairy.
     * @param {dairyDeleteArgs} args - Arguments to delete one Dairy.
     * @example
     * // Delete one Dairy
     * const Dairy = await prisma.dairy.delete({
     *   where: {
     *     // ... filter to delete one Dairy
     *   }
     * })
     * 
     */
    delete<T extends dairyDeleteArgs>(args: SelectSubset<T, dairyDeleteArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dairy.
     * @param {dairyUpdateArgs} args - Arguments to update one Dairy.
     * @example
     * // Update one Dairy
     * const dairy = await prisma.dairy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dairyUpdateArgs>(args: SelectSubset<T, dairyUpdateArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dairies.
     * @param {dairyDeleteManyArgs} args - Arguments to filter Dairies to delete.
     * @example
     * // Delete a few Dairies
     * const { count } = await prisma.dairy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dairyDeleteManyArgs>(args?: SelectSubset<T, dairyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dairies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dairies
     * const dairy = await prisma.dairy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dairyUpdateManyArgs>(args: SelectSubset<T, dairyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dairies and returns the data updated in the database.
     * @param {dairyUpdateManyAndReturnArgs} args - Arguments to update many Dairies.
     * @example
     * // Update many Dairies
     * const dairy = await prisma.dairy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dairies and only return the `id`
     * const dairyWithIdOnly = await prisma.dairy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends dairyUpdateManyAndReturnArgs>(args: SelectSubset<T, dairyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dairy.
     * @param {dairyUpsertArgs} args - Arguments to update or create a Dairy.
     * @example
     * // Update or create a Dairy
     * const dairy = await prisma.dairy.upsert({
     *   create: {
     *     // ... data to create a Dairy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dairy we want to update
     *   }
     * })
     */
    upsert<T extends dairyUpsertArgs>(args: SelectSubset<T, dairyUpsertArgs<ExtArgs>>): Prisma__dairyClient<$Result.GetResult<Prisma.$dairyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dairies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyCountArgs} args - Arguments to filter Dairies to count.
     * @example
     * // Count the number of Dairies
     * const count = await prisma.dairy.count({
     *   where: {
     *     // ... the filter for the Dairies we want to count
     *   }
     * })
    **/
    count<T extends dairyCountArgs>(
      args?: Subset<T, dairyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DairyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dairy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DairyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DairyAggregateArgs>(args: Subset<T, DairyAggregateArgs>): Prisma.PrismaPromise<GetDairyAggregateType<T>>

    /**
     * Group by Dairy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dairyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dairyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dairyGroupByArgs['orderBy'] }
        : { orderBy?: dairyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dairyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDairyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dairy model
   */
  readonly fields: dairyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dairy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dairyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dairy model
   */
  interface dairyFieldRefs {
    readonly id: FieldRef<"dairy", 'Int'>
    readonly name: FieldRef<"dairy", 'String'>
    readonly energy: FieldRef<"dairy", 'Float'>
    readonly protein: FieldRef<"dairy", 'Float'>
    readonly total_fat: FieldRef<"dairy", 'Float'>
    readonly total_carbohydrates: FieldRef<"dairy", 'Float'>
    readonly fibra: FieldRef<"dairy", 'Float'>
    readonly calcium: FieldRef<"dairy", 'Float'>
    readonly fosforo: FieldRef<"dairy", 'Float'>
    readonly zinc: FieldRef<"dairy", 'Float'>
    readonly iron: FieldRef<"dairy", 'Float'>
    readonly sodium: FieldRef<"dairy", 'Float'>
    readonly potassium: FieldRef<"dairy", 'Float'>
    readonly image: FieldRef<"dairy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dairy findUnique
   */
  export type dairyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter, which dairy to fetch.
     */
    where: dairyWhereUniqueInput
  }

  /**
   * dairy findUniqueOrThrow
   */
  export type dairyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter, which dairy to fetch.
     */
    where: dairyWhereUniqueInput
  }

  /**
   * dairy findFirst
   */
  export type dairyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter, which dairy to fetch.
     */
    where?: dairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dairies to fetch.
     */
    orderBy?: dairyOrderByWithRelationInput | dairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dairies.
     */
    cursor?: dairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dairies.
     */
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * dairy findFirstOrThrow
   */
  export type dairyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter, which dairy to fetch.
     */
    where?: dairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dairies to fetch.
     */
    orderBy?: dairyOrderByWithRelationInput | dairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dairies.
     */
    cursor?: dairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dairies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dairies.
     */
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * dairy findMany
   */
  export type dairyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter, which dairies to fetch.
     */
    where?: dairyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dairies to fetch.
     */
    orderBy?: dairyOrderByWithRelationInput | dairyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dairies.
     */
    cursor?: dairyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dairies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dairies.
     */
    skip?: number
    distinct?: DairyScalarFieldEnum | DairyScalarFieldEnum[]
  }

  /**
   * dairy create
   */
  export type dairyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * The data needed to create a dairy.
     */
    data: XOR<dairyCreateInput, dairyUncheckedCreateInput>
  }

  /**
   * dairy createMany
   */
  export type dairyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dairies.
     */
    data: dairyCreateManyInput | dairyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dairy createManyAndReturn
   */
  export type dairyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * The data used to create many dairies.
     */
    data: dairyCreateManyInput | dairyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dairy update
   */
  export type dairyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * The data needed to update a dairy.
     */
    data: XOR<dairyUpdateInput, dairyUncheckedUpdateInput>
    /**
     * Choose, which dairy to update.
     */
    where: dairyWhereUniqueInput
  }

  /**
   * dairy updateMany
   */
  export type dairyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dairies.
     */
    data: XOR<dairyUpdateManyMutationInput, dairyUncheckedUpdateManyInput>
    /**
     * Filter which dairies to update
     */
    where?: dairyWhereInput
    /**
     * Limit how many dairies to update.
     */
    limit?: number
  }

  /**
   * dairy updateManyAndReturn
   */
  export type dairyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * The data used to update dairies.
     */
    data: XOR<dairyUpdateManyMutationInput, dairyUncheckedUpdateManyInput>
    /**
     * Filter which dairies to update
     */
    where?: dairyWhereInput
    /**
     * Limit how many dairies to update.
     */
    limit?: number
  }

  /**
   * dairy upsert
   */
  export type dairyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * The filter to search for the dairy to update in case it exists.
     */
    where: dairyWhereUniqueInput
    /**
     * In case the dairy found by the `where` argument doesn't exist, create a new dairy with this data.
     */
    create: XOR<dairyCreateInput, dairyUncheckedCreateInput>
    /**
     * In case the dairy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dairyUpdateInput, dairyUncheckedUpdateInput>
  }

  /**
   * dairy delete
   */
  export type dairyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
    /**
     * Filter which dairy to delete.
     */
    where: dairyWhereUniqueInput
  }

  /**
   * dairy deleteMany
   */
  export type dairyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dairies to delete
     */
    where?: dairyWhereInput
    /**
     * Limit how many dairies to delete.
     */
    limit?: number
  }

  /**
   * dairy without action
   */
  export type dairyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dairy
     */
    select?: dairySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dairy
     */
    omit?: dairyOmit<ExtArgs> | null
  }


  /**
   * Model drinks
   */

  export type AggregateDrinks = {
    _count: DrinksCountAggregateOutputType | null
    _avg: DrinksAvgAggregateOutputType | null
    _sum: DrinksSumAggregateOutputType | null
    _min: DrinksMinAggregateOutputType | null
    _max: DrinksMaxAggregateOutputType | null
  }

  export type DrinksAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type DrinksSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type DrinksMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type DrinksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type DrinksCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type DrinksAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type DrinksSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type DrinksMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type DrinksMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type DrinksCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type DrinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drinks to aggregate.
     */
    where?: drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drinks to fetch.
     */
    orderBy?: drinksOrderByWithRelationInput | drinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drinks
    **/
    _count?: true | DrinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinksMaxAggregateInputType
  }

  export type GetDrinksAggregateType<T extends DrinksAggregateArgs> = {
        [P in keyof T & keyof AggregateDrinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrinks[P]>
      : GetScalarType<T[P], AggregateDrinks[P]>
  }




  export type drinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: drinksWhereInput
    orderBy?: drinksOrderByWithAggregationInput | drinksOrderByWithAggregationInput[]
    by: DrinksScalarFieldEnum[] | DrinksScalarFieldEnum
    having?: drinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinksCountAggregateInputType | true
    _avg?: DrinksAvgAggregateInputType
    _sum?: DrinksSumAggregateInputType
    _min?: DrinksMinAggregateInputType
    _max?: DrinksMaxAggregateInputType
  }

  export type DrinksGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: DrinksCountAggregateOutputType | null
    _avg: DrinksAvgAggregateOutputType | null
    _sum: DrinksSumAggregateOutputType | null
    _min: DrinksMinAggregateOutputType | null
    _max: DrinksMaxAggregateOutputType | null
  }

  type GetDrinksGroupByPayload<T extends drinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinksGroupByOutputType[P]>
            : GetScalarType<T[P], DrinksGroupByOutputType[P]>
        }
      >
    >


  export type drinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["drinks"]>

  export type drinksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["drinks"]>

  export type drinksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["drinks"]>

  export type drinksSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type drinksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["drinks"]>

  export type $drinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drinks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["drinks"]>
    composites: {}
  }

  type drinksGetPayload<S extends boolean | null | undefined | drinksDefaultArgs> = $Result.GetResult<Prisma.$drinksPayload, S>

  type drinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<drinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinksCountAggregateInputType | true
    }

  export interface drinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drinks'], meta: { name: 'drinks' } }
    /**
     * Find zero or one Drinks that matches the filter.
     * @param {drinksFindUniqueArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends drinksFindUniqueArgs>(args: SelectSubset<T, drinksFindUniqueArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drinks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {drinksFindUniqueOrThrowArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends drinksFindUniqueOrThrowArgs>(args: SelectSubset<T, drinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksFindFirstArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends drinksFindFirstArgs>(args?: SelectSubset<T, drinksFindFirstArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksFindFirstOrThrowArgs} args - Arguments to find a Drinks
     * @example
     * // Get one Drinks
     * const drinks = await prisma.drinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends drinksFindFirstOrThrowArgs>(args?: SelectSubset<T, drinksFindFirstOrThrowArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drinks
     * const drinks = await prisma.drinks.findMany()
     * 
     * // Get first 10 Drinks
     * const drinks = await prisma.drinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinksWithIdOnly = await prisma.drinks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends drinksFindManyArgs>(args?: SelectSubset<T, drinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drinks.
     * @param {drinksCreateArgs} args - Arguments to create a Drinks.
     * @example
     * // Create one Drinks
     * const Drinks = await prisma.drinks.create({
     *   data: {
     *     // ... data to create a Drinks
     *   }
     * })
     * 
     */
    create<T extends drinksCreateArgs>(args: SelectSubset<T, drinksCreateArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drinks.
     * @param {drinksCreateManyArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drinks = await prisma.drinks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends drinksCreateManyArgs>(args?: SelectSubset<T, drinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drinks and returns the data saved in the database.
     * @param {drinksCreateManyAndReturnArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drinks = await prisma.drinks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drinks and only return the `id`
     * const drinksWithIdOnly = await prisma.drinks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends drinksCreateManyAndReturnArgs>(args?: SelectSubset<T, drinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drinks.
     * @param {drinksDeleteArgs} args - Arguments to delete one Drinks.
     * @example
     * // Delete one Drinks
     * const Drinks = await prisma.drinks.delete({
     *   where: {
     *     // ... filter to delete one Drinks
     *   }
     * })
     * 
     */
    delete<T extends drinksDeleteArgs>(args: SelectSubset<T, drinksDeleteArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drinks.
     * @param {drinksUpdateArgs} args - Arguments to update one Drinks.
     * @example
     * // Update one Drinks
     * const drinks = await prisma.drinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends drinksUpdateArgs>(args: SelectSubset<T, drinksUpdateArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drinks.
     * @param {drinksDeleteManyArgs} args - Arguments to filter Drinks to delete.
     * @example
     * // Delete a few Drinks
     * const { count } = await prisma.drinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends drinksDeleteManyArgs>(args?: SelectSubset<T, drinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drinks
     * const drinks = await prisma.drinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends drinksUpdateManyArgs>(args: SelectSubset<T, drinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks and returns the data updated in the database.
     * @param {drinksUpdateManyAndReturnArgs} args - Arguments to update many Drinks.
     * @example
     * // Update many Drinks
     * const drinks = await prisma.drinks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drinks and only return the `id`
     * const drinksWithIdOnly = await prisma.drinks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends drinksUpdateManyAndReturnArgs>(args: SelectSubset<T, drinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drinks.
     * @param {drinksUpsertArgs} args - Arguments to update or create a Drinks.
     * @example
     * // Update or create a Drinks
     * const drinks = await prisma.drinks.upsert({
     *   create: {
     *     // ... data to create a Drinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drinks we want to update
     *   }
     * })
     */
    upsert<T extends drinksUpsertArgs>(args: SelectSubset<T, drinksUpsertArgs<ExtArgs>>): Prisma__drinksClient<$Result.GetResult<Prisma.$drinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksCountArgs} args - Arguments to filter Drinks to count.
     * @example
     * // Count the number of Drinks
     * const count = await prisma.drinks.count({
     *   where: {
     *     // ... the filter for the Drinks we want to count
     *   }
     * })
    **/
    count<T extends drinksCountArgs>(
      args?: Subset<T, drinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrinksAggregateArgs>(args: Subset<T, DrinksAggregateArgs>): Prisma.PrismaPromise<GetDrinksAggregateType<T>>

    /**
     * Group by Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {drinksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends drinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: drinksGroupByArgs['orderBy'] }
        : { orderBy?: drinksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, drinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drinks model
   */
  readonly fields: drinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__drinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the drinks model
   */
  interface drinksFieldRefs {
    readonly id: FieldRef<"drinks", 'Int'>
    readonly name: FieldRef<"drinks", 'String'>
    readonly energy: FieldRef<"drinks", 'Float'>
    readonly protein: FieldRef<"drinks", 'Float'>
    readonly total_fat: FieldRef<"drinks", 'Float'>
    readonly total_carbohydrates: FieldRef<"drinks", 'Float'>
    readonly fibra: FieldRef<"drinks", 'Float'>
    readonly calcium: FieldRef<"drinks", 'Float'>
    readonly fosforo: FieldRef<"drinks", 'Float'>
    readonly zinc: FieldRef<"drinks", 'Float'>
    readonly iron: FieldRef<"drinks", 'Float'>
    readonly sodium: FieldRef<"drinks", 'Float'>
    readonly potassium: FieldRef<"drinks", 'Float'>
    readonly image: FieldRef<"drinks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * drinks findUnique
   */
  export type drinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter, which drinks to fetch.
     */
    where: drinksWhereUniqueInput
  }

  /**
   * drinks findUniqueOrThrow
   */
  export type drinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter, which drinks to fetch.
     */
    where: drinksWhereUniqueInput
  }

  /**
   * drinks findFirst
   */
  export type drinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter, which drinks to fetch.
     */
    where?: drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drinks to fetch.
     */
    orderBy?: drinksOrderByWithRelationInput | drinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drinks.
     */
    cursor?: drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drinks.
     */
    distinct?: DrinksScalarFieldEnum | DrinksScalarFieldEnum[]
  }

  /**
   * drinks findFirstOrThrow
   */
  export type drinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter, which drinks to fetch.
     */
    where?: drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drinks to fetch.
     */
    orderBy?: drinksOrderByWithRelationInput | drinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drinks.
     */
    cursor?: drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drinks.
     */
    distinct?: DrinksScalarFieldEnum | DrinksScalarFieldEnum[]
  }

  /**
   * drinks findMany
   */
  export type drinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter, which drinks to fetch.
     */
    where?: drinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drinks to fetch.
     */
    orderBy?: drinksOrderByWithRelationInput | drinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drinks.
     */
    cursor?: drinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drinks.
     */
    skip?: number
    distinct?: DrinksScalarFieldEnum | DrinksScalarFieldEnum[]
  }

  /**
   * drinks create
   */
  export type drinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * The data needed to create a drinks.
     */
    data: XOR<drinksCreateInput, drinksUncheckedCreateInput>
  }

  /**
   * drinks createMany
   */
  export type drinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drinks.
     */
    data: drinksCreateManyInput | drinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drinks createManyAndReturn
   */
  export type drinksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * The data used to create many drinks.
     */
    data: drinksCreateManyInput | drinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drinks update
   */
  export type drinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * The data needed to update a drinks.
     */
    data: XOR<drinksUpdateInput, drinksUncheckedUpdateInput>
    /**
     * Choose, which drinks to update.
     */
    where: drinksWhereUniqueInput
  }

  /**
   * drinks updateMany
   */
  export type drinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drinks.
     */
    data: XOR<drinksUpdateManyMutationInput, drinksUncheckedUpdateManyInput>
    /**
     * Filter which drinks to update
     */
    where?: drinksWhereInput
    /**
     * Limit how many drinks to update.
     */
    limit?: number
  }

  /**
   * drinks updateManyAndReturn
   */
  export type drinksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * The data used to update drinks.
     */
    data: XOR<drinksUpdateManyMutationInput, drinksUncheckedUpdateManyInput>
    /**
     * Filter which drinks to update
     */
    where?: drinksWhereInput
    /**
     * Limit how many drinks to update.
     */
    limit?: number
  }

  /**
   * drinks upsert
   */
  export type drinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * The filter to search for the drinks to update in case it exists.
     */
    where: drinksWhereUniqueInput
    /**
     * In case the drinks found by the `where` argument doesn't exist, create a new drinks with this data.
     */
    create: XOR<drinksCreateInput, drinksUncheckedCreateInput>
    /**
     * In case the drinks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<drinksUpdateInput, drinksUncheckedUpdateInput>
  }

  /**
   * drinks delete
   */
  export type drinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
    /**
     * Filter which drinks to delete.
     */
    where: drinksWhereUniqueInput
  }

  /**
   * drinks deleteMany
   */
  export type drinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drinks to delete
     */
    where?: drinksWhereInput
    /**
     * Limit how many drinks to delete.
     */
    limit?: number
  }

  /**
   * drinks without action
   */
  export type drinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drinks
     */
    select?: drinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drinks
     */
    omit?: drinksOmit<ExtArgs> | null
  }


  /**
   * Model eggs
   */

  export type AggregateEggs = {
    _count: EggsCountAggregateOutputType | null
    _avg: EggsAvgAggregateOutputType | null
    _sum: EggsSumAggregateOutputType | null
    _min: EggsMinAggregateOutputType | null
    _max: EggsMaxAggregateOutputType | null
  }

  export type EggsAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type EggsSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type EggsMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type EggsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type EggsCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type EggsAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type EggsSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type EggsMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type EggsMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type EggsCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type EggsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eggs to aggregate.
     */
    where?: eggsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eggs to fetch.
     */
    orderBy?: eggsOrderByWithRelationInput | eggsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eggsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eggs
    **/
    _count?: true | EggsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EggsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EggsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EggsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EggsMaxAggregateInputType
  }

  export type GetEggsAggregateType<T extends EggsAggregateArgs> = {
        [P in keyof T & keyof AggregateEggs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEggs[P]>
      : GetScalarType<T[P], AggregateEggs[P]>
  }




  export type eggsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eggsWhereInput
    orderBy?: eggsOrderByWithAggregationInput | eggsOrderByWithAggregationInput[]
    by: EggsScalarFieldEnum[] | EggsScalarFieldEnum
    having?: eggsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EggsCountAggregateInputType | true
    _avg?: EggsAvgAggregateInputType
    _sum?: EggsSumAggregateInputType
    _min?: EggsMinAggregateInputType
    _max?: EggsMaxAggregateInputType
  }

  export type EggsGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: EggsCountAggregateOutputType | null
    _avg: EggsAvgAggregateOutputType | null
    _sum: EggsSumAggregateOutputType | null
    _min: EggsMinAggregateOutputType | null
    _max: EggsMaxAggregateOutputType | null
  }

  type GetEggsGroupByPayload<T extends eggsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EggsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EggsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EggsGroupByOutputType[P]>
            : GetScalarType<T[P], EggsGroupByOutputType[P]>
        }
      >
    >


  export type eggsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["eggs"]>

  export type eggsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["eggs"]>

  export type eggsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["eggs"]>

  export type eggsSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type eggsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["eggs"]>

  export type $eggsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eggs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["eggs"]>
    composites: {}
  }

  type eggsGetPayload<S extends boolean | null | undefined | eggsDefaultArgs> = $Result.GetResult<Prisma.$eggsPayload, S>

  type eggsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eggsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EggsCountAggregateInputType | true
    }

  export interface eggsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eggs'], meta: { name: 'eggs' } }
    /**
     * Find zero or one Eggs that matches the filter.
     * @param {eggsFindUniqueArgs} args - Arguments to find a Eggs
     * @example
     * // Get one Eggs
     * const eggs = await prisma.eggs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eggsFindUniqueArgs>(args: SelectSubset<T, eggsFindUniqueArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eggs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eggsFindUniqueOrThrowArgs} args - Arguments to find a Eggs
     * @example
     * // Get one Eggs
     * const eggs = await prisma.eggs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eggsFindUniqueOrThrowArgs>(args: SelectSubset<T, eggsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eggs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsFindFirstArgs} args - Arguments to find a Eggs
     * @example
     * // Get one Eggs
     * const eggs = await prisma.eggs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eggsFindFirstArgs>(args?: SelectSubset<T, eggsFindFirstArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eggs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsFindFirstOrThrowArgs} args - Arguments to find a Eggs
     * @example
     * // Get one Eggs
     * const eggs = await prisma.eggs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eggsFindFirstOrThrowArgs>(args?: SelectSubset<T, eggsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eggs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eggs
     * const eggs = await prisma.eggs.findMany()
     * 
     * // Get first 10 Eggs
     * const eggs = await prisma.eggs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eggsWithIdOnly = await prisma.eggs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eggsFindManyArgs>(args?: SelectSubset<T, eggsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eggs.
     * @param {eggsCreateArgs} args - Arguments to create a Eggs.
     * @example
     * // Create one Eggs
     * const Eggs = await prisma.eggs.create({
     *   data: {
     *     // ... data to create a Eggs
     *   }
     * })
     * 
     */
    create<T extends eggsCreateArgs>(args: SelectSubset<T, eggsCreateArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eggs.
     * @param {eggsCreateManyArgs} args - Arguments to create many Eggs.
     * @example
     * // Create many Eggs
     * const eggs = await prisma.eggs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eggsCreateManyArgs>(args?: SelectSubset<T, eggsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eggs and returns the data saved in the database.
     * @param {eggsCreateManyAndReturnArgs} args - Arguments to create many Eggs.
     * @example
     * // Create many Eggs
     * const eggs = await prisma.eggs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eggs and only return the `id`
     * const eggsWithIdOnly = await prisma.eggs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eggsCreateManyAndReturnArgs>(args?: SelectSubset<T, eggsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eggs.
     * @param {eggsDeleteArgs} args - Arguments to delete one Eggs.
     * @example
     * // Delete one Eggs
     * const Eggs = await prisma.eggs.delete({
     *   where: {
     *     // ... filter to delete one Eggs
     *   }
     * })
     * 
     */
    delete<T extends eggsDeleteArgs>(args: SelectSubset<T, eggsDeleteArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eggs.
     * @param {eggsUpdateArgs} args - Arguments to update one Eggs.
     * @example
     * // Update one Eggs
     * const eggs = await prisma.eggs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eggsUpdateArgs>(args: SelectSubset<T, eggsUpdateArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eggs.
     * @param {eggsDeleteManyArgs} args - Arguments to filter Eggs to delete.
     * @example
     * // Delete a few Eggs
     * const { count } = await prisma.eggs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eggsDeleteManyArgs>(args?: SelectSubset<T, eggsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eggs
     * const eggs = await prisma.eggs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eggsUpdateManyArgs>(args: SelectSubset<T, eggsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eggs and returns the data updated in the database.
     * @param {eggsUpdateManyAndReturnArgs} args - Arguments to update many Eggs.
     * @example
     * // Update many Eggs
     * const eggs = await prisma.eggs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eggs and only return the `id`
     * const eggsWithIdOnly = await prisma.eggs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eggsUpdateManyAndReturnArgs>(args: SelectSubset<T, eggsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eggs.
     * @param {eggsUpsertArgs} args - Arguments to update or create a Eggs.
     * @example
     * // Update or create a Eggs
     * const eggs = await prisma.eggs.upsert({
     *   create: {
     *     // ... data to create a Eggs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eggs we want to update
     *   }
     * })
     */
    upsert<T extends eggsUpsertArgs>(args: SelectSubset<T, eggsUpsertArgs<ExtArgs>>): Prisma__eggsClient<$Result.GetResult<Prisma.$eggsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsCountArgs} args - Arguments to filter Eggs to count.
     * @example
     * // Count the number of Eggs
     * const count = await prisma.eggs.count({
     *   where: {
     *     // ... the filter for the Eggs we want to count
     *   }
     * })
    **/
    count<T extends eggsCountArgs>(
      args?: Subset<T, eggsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EggsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EggsAggregateArgs>(args: Subset<T, EggsAggregateArgs>): Prisma.PrismaPromise<GetEggsAggregateType<T>>

    /**
     * Group by Eggs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eggsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eggsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eggsGroupByArgs['orderBy'] }
        : { orderBy?: eggsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eggsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEggsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eggs model
   */
  readonly fields: eggsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eggs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eggsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eggs model
   */
  interface eggsFieldRefs {
    readonly id: FieldRef<"eggs", 'Int'>
    readonly name: FieldRef<"eggs", 'String'>
    readonly energy: FieldRef<"eggs", 'Float'>
    readonly protein: FieldRef<"eggs", 'Float'>
    readonly total_fat: FieldRef<"eggs", 'Float'>
    readonly total_carbohydrates: FieldRef<"eggs", 'Float'>
    readonly fibra: FieldRef<"eggs", 'Float'>
    readonly calcium: FieldRef<"eggs", 'Float'>
    readonly fosforo: FieldRef<"eggs", 'Float'>
    readonly zinc: FieldRef<"eggs", 'Float'>
    readonly iron: FieldRef<"eggs", 'Float'>
    readonly sodium: FieldRef<"eggs", 'Float'>
    readonly potassium: FieldRef<"eggs", 'Float'>
    readonly image: FieldRef<"eggs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * eggs findUnique
   */
  export type eggsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter, which eggs to fetch.
     */
    where: eggsWhereUniqueInput
  }

  /**
   * eggs findUniqueOrThrow
   */
  export type eggsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter, which eggs to fetch.
     */
    where: eggsWhereUniqueInput
  }

  /**
   * eggs findFirst
   */
  export type eggsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter, which eggs to fetch.
     */
    where?: eggsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eggs to fetch.
     */
    orderBy?: eggsOrderByWithRelationInput | eggsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eggs.
     */
    cursor?: eggsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eggs.
     */
    distinct?: EggsScalarFieldEnum | EggsScalarFieldEnum[]
  }

  /**
   * eggs findFirstOrThrow
   */
  export type eggsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter, which eggs to fetch.
     */
    where?: eggsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eggs to fetch.
     */
    orderBy?: eggsOrderByWithRelationInput | eggsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eggs.
     */
    cursor?: eggsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eggs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eggs.
     */
    distinct?: EggsScalarFieldEnum | EggsScalarFieldEnum[]
  }

  /**
   * eggs findMany
   */
  export type eggsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter, which eggs to fetch.
     */
    where?: eggsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eggs to fetch.
     */
    orderBy?: eggsOrderByWithRelationInput | eggsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eggs.
     */
    cursor?: eggsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eggs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eggs.
     */
    skip?: number
    distinct?: EggsScalarFieldEnum | EggsScalarFieldEnum[]
  }

  /**
   * eggs create
   */
  export type eggsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * The data needed to create a eggs.
     */
    data: XOR<eggsCreateInput, eggsUncheckedCreateInput>
  }

  /**
   * eggs createMany
   */
  export type eggsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eggs.
     */
    data: eggsCreateManyInput | eggsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eggs createManyAndReturn
   */
  export type eggsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * The data used to create many eggs.
     */
    data: eggsCreateManyInput | eggsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eggs update
   */
  export type eggsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * The data needed to update a eggs.
     */
    data: XOR<eggsUpdateInput, eggsUncheckedUpdateInput>
    /**
     * Choose, which eggs to update.
     */
    where: eggsWhereUniqueInput
  }

  /**
   * eggs updateMany
   */
  export type eggsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eggs.
     */
    data: XOR<eggsUpdateManyMutationInput, eggsUncheckedUpdateManyInput>
    /**
     * Filter which eggs to update
     */
    where?: eggsWhereInput
    /**
     * Limit how many eggs to update.
     */
    limit?: number
  }

  /**
   * eggs updateManyAndReturn
   */
  export type eggsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * The data used to update eggs.
     */
    data: XOR<eggsUpdateManyMutationInput, eggsUncheckedUpdateManyInput>
    /**
     * Filter which eggs to update
     */
    where?: eggsWhereInput
    /**
     * Limit how many eggs to update.
     */
    limit?: number
  }

  /**
   * eggs upsert
   */
  export type eggsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * The filter to search for the eggs to update in case it exists.
     */
    where: eggsWhereUniqueInput
    /**
     * In case the eggs found by the `where` argument doesn't exist, create a new eggs with this data.
     */
    create: XOR<eggsCreateInput, eggsUncheckedCreateInput>
    /**
     * In case the eggs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eggsUpdateInput, eggsUncheckedUpdateInput>
  }

  /**
   * eggs delete
   */
  export type eggsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
    /**
     * Filter which eggs to delete.
     */
    where: eggsWhereUniqueInput
  }

  /**
   * eggs deleteMany
   */
  export type eggsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eggs to delete
     */
    where?: eggsWhereInput
    /**
     * Limit how many eggs to delete.
     */
    limit?: number
  }

  /**
   * eggs without action
   */
  export type eggsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eggs
     */
    select?: eggsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eggs
     */
    omit?: eggsOmit<ExtArgs> | null
  }


  /**
   * Model fats
   */

  export type AggregateFats = {
    _count: FatsCountAggregateOutputType | null
    _avg: FatsAvgAggregateOutputType | null
    _sum: FatsSumAggregateOutputType | null
    _min: FatsMinAggregateOutputType | null
    _max: FatsMaxAggregateOutputType | null
  }

  export type FatsAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type FatsSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type FatsMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type FatsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type FatsCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type FatsAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type FatsSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type FatsMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type FatsMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type FatsCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type FatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fats to aggregate.
     */
    where?: fatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fats to fetch.
     */
    orderBy?: fatsOrderByWithRelationInput | fatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fats
    **/
    _count?: true | FatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FatsMaxAggregateInputType
  }

  export type GetFatsAggregateType<T extends FatsAggregateArgs> = {
        [P in keyof T & keyof AggregateFats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFats[P]>
      : GetScalarType<T[P], AggregateFats[P]>
  }




  export type fatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fatsWhereInput
    orderBy?: fatsOrderByWithAggregationInput | fatsOrderByWithAggregationInput[]
    by: FatsScalarFieldEnum[] | FatsScalarFieldEnum
    having?: fatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FatsCountAggregateInputType | true
    _avg?: FatsAvgAggregateInputType
    _sum?: FatsSumAggregateInputType
    _min?: FatsMinAggregateInputType
    _max?: FatsMaxAggregateInputType
  }

  export type FatsGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: FatsCountAggregateOutputType | null
    _avg: FatsAvgAggregateOutputType | null
    _sum: FatsSumAggregateOutputType | null
    _min: FatsMinAggregateOutputType | null
    _max: FatsMaxAggregateOutputType | null
  }

  type GetFatsGroupByPayload<T extends fatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FatsGroupByOutputType[P]>
            : GetScalarType<T[P], FatsGroupByOutputType[P]>
        }
      >
    >


  export type fatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fats"]>

  export type fatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fats"]>

  export type fatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fats"]>

  export type fatsSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type fatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["fats"]>

  export type $fatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["fats"]>
    composites: {}
  }

  type fatsGetPayload<S extends boolean | null | undefined | fatsDefaultArgs> = $Result.GetResult<Prisma.$fatsPayload, S>

  type fatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FatsCountAggregateInputType | true
    }

  export interface fatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fats'], meta: { name: 'fats' } }
    /**
     * Find zero or one Fats that matches the filter.
     * @param {fatsFindUniqueArgs} args - Arguments to find a Fats
     * @example
     * // Get one Fats
     * const fats = await prisma.fats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fatsFindUniqueArgs>(args: SelectSubset<T, fatsFindUniqueArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fatsFindUniqueOrThrowArgs} args - Arguments to find a Fats
     * @example
     * // Get one Fats
     * const fats = await prisma.fats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fatsFindUniqueOrThrowArgs>(args: SelectSubset<T, fatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsFindFirstArgs} args - Arguments to find a Fats
     * @example
     * // Get one Fats
     * const fats = await prisma.fats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fatsFindFirstArgs>(args?: SelectSubset<T, fatsFindFirstArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsFindFirstOrThrowArgs} args - Arguments to find a Fats
     * @example
     * // Get one Fats
     * const fats = await prisma.fats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fatsFindFirstOrThrowArgs>(args?: SelectSubset<T, fatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fats
     * const fats = await prisma.fats.findMany()
     * 
     * // Get first 10 Fats
     * const fats = await prisma.fats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fatsWithIdOnly = await prisma.fats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fatsFindManyArgs>(args?: SelectSubset<T, fatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fats.
     * @param {fatsCreateArgs} args - Arguments to create a Fats.
     * @example
     * // Create one Fats
     * const Fats = await prisma.fats.create({
     *   data: {
     *     // ... data to create a Fats
     *   }
     * })
     * 
     */
    create<T extends fatsCreateArgs>(args: SelectSubset<T, fatsCreateArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fats.
     * @param {fatsCreateManyArgs} args - Arguments to create many Fats.
     * @example
     * // Create many Fats
     * const fats = await prisma.fats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fatsCreateManyArgs>(args?: SelectSubset<T, fatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fats and returns the data saved in the database.
     * @param {fatsCreateManyAndReturnArgs} args - Arguments to create many Fats.
     * @example
     * // Create many Fats
     * const fats = await prisma.fats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fats and only return the `id`
     * const fatsWithIdOnly = await prisma.fats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fatsCreateManyAndReturnArgs>(args?: SelectSubset<T, fatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fats.
     * @param {fatsDeleteArgs} args - Arguments to delete one Fats.
     * @example
     * // Delete one Fats
     * const Fats = await prisma.fats.delete({
     *   where: {
     *     // ... filter to delete one Fats
     *   }
     * })
     * 
     */
    delete<T extends fatsDeleteArgs>(args: SelectSubset<T, fatsDeleteArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fats.
     * @param {fatsUpdateArgs} args - Arguments to update one Fats.
     * @example
     * // Update one Fats
     * const fats = await prisma.fats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fatsUpdateArgs>(args: SelectSubset<T, fatsUpdateArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fats.
     * @param {fatsDeleteManyArgs} args - Arguments to filter Fats to delete.
     * @example
     * // Delete a few Fats
     * const { count } = await prisma.fats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fatsDeleteManyArgs>(args?: SelectSubset<T, fatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fats
     * const fats = await prisma.fats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fatsUpdateManyArgs>(args: SelectSubset<T, fatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fats and returns the data updated in the database.
     * @param {fatsUpdateManyAndReturnArgs} args - Arguments to update many Fats.
     * @example
     * // Update many Fats
     * const fats = await prisma.fats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fats and only return the `id`
     * const fatsWithIdOnly = await prisma.fats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fatsUpdateManyAndReturnArgs>(args: SelectSubset<T, fatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fats.
     * @param {fatsUpsertArgs} args - Arguments to update or create a Fats.
     * @example
     * // Update or create a Fats
     * const fats = await prisma.fats.upsert({
     *   create: {
     *     // ... data to create a Fats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fats we want to update
     *   }
     * })
     */
    upsert<T extends fatsUpsertArgs>(args: SelectSubset<T, fatsUpsertArgs<ExtArgs>>): Prisma__fatsClient<$Result.GetResult<Prisma.$fatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsCountArgs} args - Arguments to filter Fats to count.
     * @example
     * // Count the number of Fats
     * const count = await prisma.fats.count({
     *   where: {
     *     // ... the filter for the Fats we want to count
     *   }
     * })
    **/
    count<T extends fatsCountArgs>(
      args?: Subset<T, fatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FatsAggregateArgs>(args: Subset<T, FatsAggregateArgs>): Prisma.PrismaPromise<GetFatsAggregateType<T>>

    /**
     * Group by Fats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fatsGroupByArgs['orderBy'] }
        : { orderBy?: fatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fats model
   */
  readonly fields: fatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fats model
   */
  interface fatsFieldRefs {
    readonly id: FieldRef<"fats", 'Int'>
    readonly name: FieldRef<"fats", 'String'>
    readonly energy: FieldRef<"fats", 'Float'>
    readonly protein: FieldRef<"fats", 'Float'>
    readonly total_fat: FieldRef<"fats", 'Float'>
    readonly total_carbohydrates: FieldRef<"fats", 'Float'>
    readonly fibra: FieldRef<"fats", 'Float'>
    readonly calcium: FieldRef<"fats", 'Float'>
    readonly fosforo: FieldRef<"fats", 'Float'>
    readonly zinc: FieldRef<"fats", 'Float'>
    readonly iron: FieldRef<"fats", 'Float'>
    readonly sodium: FieldRef<"fats", 'Float'>
    readonly potassium: FieldRef<"fats", 'Float'>
    readonly image: FieldRef<"fats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * fats findUnique
   */
  export type fatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter, which fats to fetch.
     */
    where: fatsWhereUniqueInput
  }

  /**
   * fats findUniqueOrThrow
   */
  export type fatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter, which fats to fetch.
     */
    where: fatsWhereUniqueInput
  }

  /**
   * fats findFirst
   */
  export type fatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter, which fats to fetch.
     */
    where?: fatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fats to fetch.
     */
    orderBy?: fatsOrderByWithRelationInput | fatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fats.
     */
    cursor?: fatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fats.
     */
    distinct?: FatsScalarFieldEnum | FatsScalarFieldEnum[]
  }

  /**
   * fats findFirstOrThrow
   */
  export type fatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter, which fats to fetch.
     */
    where?: fatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fats to fetch.
     */
    orderBy?: fatsOrderByWithRelationInput | fatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fats.
     */
    cursor?: fatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fats.
     */
    distinct?: FatsScalarFieldEnum | FatsScalarFieldEnum[]
  }

  /**
   * fats findMany
   */
  export type fatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter, which fats to fetch.
     */
    where?: fatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fats to fetch.
     */
    orderBy?: fatsOrderByWithRelationInput | fatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fats.
     */
    cursor?: fatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fats.
     */
    skip?: number
    distinct?: FatsScalarFieldEnum | FatsScalarFieldEnum[]
  }

  /**
   * fats create
   */
  export type fatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * The data needed to create a fats.
     */
    data: XOR<fatsCreateInput, fatsUncheckedCreateInput>
  }

  /**
   * fats createMany
   */
  export type fatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fats.
     */
    data: fatsCreateManyInput | fatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fats createManyAndReturn
   */
  export type fatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * The data used to create many fats.
     */
    data: fatsCreateManyInput | fatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fats update
   */
  export type fatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * The data needed to update a fats.
     */
    data: XOR<fatsUpdateInput, fatsUncheckedUpdateInput>
    /**
     * Choose, which fats to update.
     */
    where: fatsWhereUniqueInput
  }

  /**
   * fats updateMany
   */
  export type fatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fats.
     */
    data: XOR<fatsUpdateManyMutationInput, fatsUncheckedUpdateManyInput>
    /**
     * Filter which fats to update
     */
    where?: fatsWhereInput
    /**
     * Limit how many fats to update.
     */
    limit?: number
  }

  /**
   * fats updateManyAndReturn
   */
  export type fatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * The data used to update fats.
     */
    data: XOR<fatsUpdateManyMutationInput, fatsUncheckedUpdateManyInput>
    /**
     * Filter which fats to update
     */
    where?: fatsWhereInput
    /**
     * Limit how many fats to update.
     */
    limit?: number
  }

  /**
   * fats upsert
   */
  export type fatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * The filter to search for the fats to update in case it exists.
     */
    where: fatsWhereUniqueInput
    /**
     * In case the fats found by the `where` argument doesn't exist, create a new fats with this data.
     */
    create: XOR<fatsCreateInput, fatsUncheckedCreateInput>
    /**
     * In case the fats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fatsUpdateInput, fatsUncheckedUpdateInput>
  }

  /**
   * fats delete
   */
  export type fatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
    /**
     * Filter which fats to delete.
     */
    where: fatsWhereUniqueInput
  }

  /**
   * fats deleteMany
   */
  export type fatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fats to delete
     */
    where?: fatsWhereInput
    /**
     * Limit how many fats to delete.
     */
    limit?: number
  }

  /**
   * fats without action
   */
  export type fatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fats
     */
    select?: fatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fats
     */
    omit?: fatsOmit<ExtArgs> | null
  }


  /**
   * Model fruits
   */

  export type AggregateFruits = {
    _count: FruitsCountAggregateOutputType | null
    _avg: FruitsAvgAggregateOutputType | null
    _sum: FruitsSumAggregateOutputType | null
    _min: FruitsMinAggregateOutputType | null
    _max: FruitsMaxAggregateOutputType | null
  }

  export type FruitsAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type FruitsSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type FruitsMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type FruitsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type FruitsCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type FruitsAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type FruitsSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type FruitsMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type FruitsMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type FruitsCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type FruitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruits to aggregate.
     */
    where?: fruitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruits to fetch.
     */
    orderBy?: fruitsOrderByWithRelationInput | fruitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruits
    **/
    _count?: true | FruitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FruitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FruitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitsMaxAggregateInputType
  }

  export type GetFruitsAggregateType<T extends FruitsAggregateArgs> = {
        [P in keyof T & keyof AggregateFruits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruits[P]>
      : GetScalarType<T[P], AggregateFruits[P]>
  }




  export type fruitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fruitsWhereInput
    orderBy?: fruitsOrderByWithAggregationInput | fruitsOrderByWithAggregationInput[]
    by: FruitsScalarFieldEnum[] | FruitsScalarFieldEnum
    having?: fruitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitsCountAggregateInputType | true
    _avg?: FruitsAvgAggregateInputType
    _sum?: FruitsSumAggregateInputType
    _min?: FruitsMinAggregateInputType
    _max?: FruitsMaxAggregateInputType
  }

  export type FruitsGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: FruitsCountAggregateOutputType | null
    _avg: FruitsAvgAggregateOutputType | null
    _sum: FruitsSumAggregateOutputType | null
    _min: FruitsMinAggregateOutputType | null
    _max: FruitsMaxAggregateOutputType | null
  }

  type GetFruitsGroupByPayload<T extends fruitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitsGroupByOutputType[P]>
            : GetScalarType<T[P], FruitsGroupByOutputType[P]>
        }
      >
    >


  export type fruitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fruits"]>

  export type fruitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fruits"]>

  export type fruitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["fruits"]>

  export type fruitsSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type fruitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["fruits"]>

  export type $fruitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fruits"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["fruits"]>
    composites: {}
  }

  type fruitsGetPayload<S extends boolean | null | undefined | fruitsDefaultArgs> = $Result.GetResult<Prisma.$fruitsPayload, S>

  type fruitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fruitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FruitsCountAggregateInputType | true
    }

  export interface fruitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruits'], meta: { name: 'fruits' } }
    /**
     * Find zero or one Fruits that matches the filter.
     * @param {fruitsFindUniqueArgs} args - Arguments to find a Fruits
     * @example
     * // Get one Fruits
     * const fruits = await prisma.fruits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fruitsFindUniqueArgs>(args: SelectSubset<T, fruitsFindUniqueArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fruits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fruitsFindUniqueOrThrowArgs} args - Arguments to find a Fruits
     * @example
     * // Get one Fruits
     * const fruits = await prisma.fruits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fruitsFindUniqueOrThrowArgs>(args: SelectSubset<T, fruitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fruits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsFindFirstArgs} args - Arguments to find a Fruits
     * @example
     * // Get one Fruits
     * const fruits = await prisma.fruits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fruitsFindFirstArgs>(args?: SelectSubset<T, fruitsFindFirstArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fruits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsFindFirstOrThrowArgs} args - Arguments to find a Fruits
     * @example
     * // Get one Fruits
     * const fruits = await prisma.fruits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fruitsFindFirstOrThrowArgs>(args?: SelectSubset<T, fruitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fruits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fruits
     * const fruits = await prisma.fruits.findMany()
     * 
     * // Get first 10 Fruits
     * const fruits = await prisma.fruits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitsWithIdOnly = await prisma.fruits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fruitsFindManyArgs>(args?: SelectSubset<T, fruitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fruits.
     * @param {fruitsCreateArgs} args - Arguments to create a Fruits.
     * @example
     * // Create one Fruits
     * const Fruits = await prisma.fruits.create({
     *   data: {
     *     // ... data to create a Fruits
     *   }
     * })
     * 
     */
    create<T extends fruitsCreateArgs>(args: SelectSubset<T, fruitsCreateArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fruits.
     * @param {fruitsCreateManyArgs} args - Arguments to create many Fruits.
     * @example
     * // Create many Fruits
     * const fruits = await prisma.fruits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fruitsCreateManyArgs>(args?: SelectSubset<T, fruitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fruits and returns the data saved in the database.
     * @param {fruitsCreateManyAndReturnArgs} args - Arguments to create many Fruits.
     * @example
     * // Create many Fruits
     * const fruits = await prisma.fruits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fruits and only return the `id`
     * const fruitsWithIdOnly = await prisma.fruits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fruitsCreateManyAndReturnArgs>(args?: SelectSubset<T, fruitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fruits.
     * @param {fruitsDeleteArgs} args - Arguments to delete one Fruits.
     * @example
     * // Delete one Fruits
     * const Fruits = await prisma.fruits.delete({
     *   where: {
     *     // ... filter to delete one Fruits
     *   }
     * })
     * 
     */
    delete<T extends fruitsDeleteArgs>(args: SelectSubset<T, fruitsDeleteArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fruits.
     * @param {fruitsUpdateArgs} args - Arguments to update one Fruits.
     * @example
     * // Update one Fruits
     * const fruits = await prisma.fruits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fruitsUpdateArgs>(args: SelectSubset<T, fruitsUpdateArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fruits.
     * @param {fruitsDeleteManyArgs} args - Arguments to filter Fruits to delete.
     * @example
     * // Delete a few Fruits
     * const { count } = await prisma.fruits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fruitsDeleteManyArgs>(args?: SelectSubset<T, fruitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fruits
     * const fruits = await prisma.fruits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fruitsUpdateManyArgs>(args: SelectSubset<T, fruitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fruits and returns the data updated in the database.
     * @param {fruitsUpdateManyAndReturnArgs} args - Arguments to update many Fruits.
     * @example
     * // Update many Fruits
     * const fruits = await prisma.fruits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fruits and only return the `id`
     * const fruitsWithIdOnly = await prisma.fruits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fruitsUpdateManyAndReturnArgs>(args: SelectSubset<T, fruitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fruits.
     * @param {fruitsUpsertArgs} args - Arguments to update or create a Fruits.
     * @example
     * // Update or create a Fruits
     * const fruits = await prisma.fruits.upsert({
     *   create: {
     *     // ... data to create a Fruits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fruits we want to update
     *   }
     * })
     */
    upsert<T extends fruitsUpsertArgs>(args: SelectSubset<T, fruitsUpsertArgs<ExtArgs>>): Prisma__fruitsClient<$Result.GetResult<Prisma.$fruitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsCountArgs} args - Arguments to filter Fruits to count.
     * @example
     * // Count the number of Fruits
     * const count = await prisma.fruits.count({
     *   where: {
     *     // ... the filter for the Fruits we want to count
     *   }
     * })
    **/
    count<T extends fruitsCountArgs>(
      args?: Subset<T, fruitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitsAggregateArgs>(args: Subset<T, FruitsAggregateArgs>): Prisma.PrismaPromise<GetFruitsAggregateType<T>>

    /**
     * Group by Fruits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitsGroupByArgs['orderBy'] }
        : { orderBy?: fruitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruits model
   */
  readonly fields: fruitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fruits model
   */
  interface fruitsFieldRefs {
    readonly id: FieldRef<"fruits", 'Int'>
    readonly name: FieldRef<"fruits", 'String'>
    readonly energy: FieldRef<"fruits", 'Float'>
    readonly protein: FieldRef<"fruits", 'Float'>
    readonly total_fat: FieldRef<"fruits", 'Float'>
    readonly total_carbohydrates: FieldRef<"fruits", 'Float'>
    readonly fibra: FieldRef<"fruits", 'Float'>
    readonly calcium: FieldRef<"fruits", 'Float'>
    readonly fosforo: FieldRef<"fruits", 'Float'>
    readonly zinc: FieldRef<"fruits", 'Float'>
    readonly iron: FieldRef<"fruits", 'Float'>
    readonly sodium: FieldRef<"fruits", 'Float'>
    readonly potassium: FieldRef<"fruits", 'Float'>
    readonly image: FieldRef<"fruits", 'String'>
  }
    

  // Custom InputTypes
  /**
   * fruits findUnique
   */
  export type fruitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter, which fruits to fetch.
     */
    where: fruitsWhereUniqueInput
  }

  /**
   * fruits findUniqueOrThrow
   */
  export type fruitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter, which fruits to fetch.
     */
    where: fruitsWhereUniqueInput
  }

  /**
   * fruits findFirst
   */
  export type fruitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter, which fruits to fetch.
     */
    where?: fruitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruits to fetch.
     */
    orderBy?: fruitsOrderByWithRelationInput | fruitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruits.
     */
    cursor?: fruitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruits.
     */
    distinct?: FruitsScalarFieldEnum | FruitsScalarFieldEnum[]
  }

  /**
   * fruits findFirstOrThrow
   */
  export type fruitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter, which fruits to fetch.
     */
    where?: fruitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruits to fetch.
     */
    orderBy?: fruitsOrderByWithRelationInput | fruitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruits.
     */
    cursor?: fruitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruits.
     */
    distinct?: FruitsScalarFieldEnum | FruitsScalarFieldEnum[]
  }

  /**
   * fruits findMany
   */
  export type fruitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter, which fruits to fetch.
     */
    where?: fruitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruits to fetch.
     */
    orderBy?: fruitsOrderByWithRelationInput | fruitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruits.
     */
    cursor?: fruitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruits.
     */
    skip?: number
    distinct?: FruitsScalarFieldEnum | FruitsScalarFieldEnum[]
  }

  /**
   * fruits create
   */
  export type fruitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * The data needed to create a fruits.
     */
    data: XOR<fruitsCreateInput, fruitsUncheckedCreateInput>
  }

  /**
   * fruits createMany
   */
  export type fruitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruits.
     */
    data: fruitsCreateManyInput | fruitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fruits createManyAndReturn
   */
  export type fruitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * The data used to create many fruits.
     */
    data: fruitsCreateManyInput | fruitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fruits update
   */
  export type fruitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * The data needed to update a fruits.
     */
    data: XOR<fruitsUpdateInput, fruitsUncheckedUpdateInput>
    /**
     * Choose, which fruits to update.
     */
    where: fruitsWhereUniqueInput
  }

  /**
   * fruits updateMany
   */
  export type fruitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruits.
     */
    data: XOR<fruitsUpdateManyMutationInput, fruitsUncheckedUpdateManyInput>
    /**
     * Filter which fruits to update
     */
    where?: fruitsWhereInput
    /**
     * Limit how many fruits to update.
     */
    limit?: number
  }

  /**
   * fruits updateManyAndReturn
   */
  export type fruitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * The data used to update fruits.
     */
    data: XOR<fruitsUpdateManyMutationInput, fruitsUncheckedUpdateManyInput>
    /**
     * Filter which fruits to update
     */
    where?: fruitsWhereInput
    /**
     * Limit how many fruits to update.
     */
    limit?: number
  }

  /**
   * fruits upsert
   */
  export type fruitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * The filter to search for the fruits to update in case it exists.
     */
    where: fruitsWhereUniqueInput
    /**
     * In case the fruits found by the `where` argument doesn't exist, create a new fruits with this data.
     */
    create: XOR<fruitsCreateInput, fruitsUncheckedCreateInput>
    /**
     * In case the fruits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitsUpdateInput, fruitsUncheckedUpdateInput>
  }

  /**
   * fruits delete
   */
  export type fruitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
    /**
     * Filter which fruits to delete.
     */
    where: fruitsWhereUniqueInput
  }

  /**
   * fruits deleteMany
   */
  export type fruitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruits to delete
     */
    where?: fruitsWhereInput
    /**
     * Limit how many fruits to delete.
     */
    limit?: number
  }

  /**
   * fruits without action
   */
  export type fruitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruits
     */
    select?: fruitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fruits
     */
    omit?: fruitsOmit<ExtArgs> | null
  }


  /**
   * Model legumes
   */

  export type AggregateLegumes = {
    _count: LegumesCountAggregateOutputType | null
    _avg: LegumesAvgAggregateOutputType | null
    _sum: LegumesSumAggregateOutputType | null
    _min: LegumesMinAggregateOutputType | null
    _max: LegumesMaxAggregateOutputType | null
  }

  export type LegumesAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type LegumesSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type LegumesMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type LegumesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type LegumesCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type LegumesAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type LegumesSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type LegumesMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type LegumesMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type LegumesCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type LegumesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legumes to aggregate.
     */
    where?: legumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legumes to fetch.
     */
    orderBy?: legumesOrderByWithRelationInput | legumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: legumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned legumes
    **/
    _count?: true | LegumesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegumesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegumesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegumesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegumesMaxAggregateInputType
  }

  export type GetLegumesAggregateType<T extends LegumesAggregateArgs> = {
        [P in keyof T & keyof AggregateLegumes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegumes[P]>
      : GetScalarType<T[P], AggregateLegumes[P]>
  }




  export type legumesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: legumesWhereInput
    orderBy?: legumesOrderByWithAggregationInput | legumesOrderByWithAggregationInput[]
    by: LegumesScalarFieldEnum[] | LegumesScalarFieldEnum
    having?: legumesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegumesCountAggregateInputType | true
    _avg?: LegumesAvgAggregateInputType
    _sum?: LegumesSumAggregateInputType
    _min?: LegumesMinAggregateInputType
    _max?: LegumesMaxAggregateInputType
  }

  export type LegumesGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: LegumesCountAggregateOutputType | null
    _avg: LegumesAvgAggregateOutputType | null
    _sum: LegumesSumAggregateOutputType | null
    _min: LegumesMinAggregateOutputType | null
    _max: LegumesMaxAggregateOutputType | null
  }

  type GetLegumesGroupByPayload<T extends legumesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegumesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegumesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegumesGroupByOutputType[P]>
            : GetScalarType<T[P], LegumesGroupByOutputType[P]>
        }
      >
    >


  export type legumesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["legumes"]>

  export type legumesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["legumes"]>

  export type legumesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["legumes"]>

  export type legumesSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type legumesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["legumes"]>

  export type $legumesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "legumes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["legumes"]>
    composites: {}
  }

  type legumesGetPayload<S extends boolean | null | undefined | legumesDefaultArgs> = $Result.GetResult<Prisma.$legumesPayload, S>

  type legumesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<legumesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegumesCountAggregateInputType | true
    }

  export interface legumesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['legumes'], meta: { name: 'legumes' } }
    /**
     * Find zero or one Legumes that matches the filter.
     * @param {legumesFindUniqueArgs} args - Arguments to find a Legumes
     * @example
     * // Get one Legumes
     * const legumes = await prisma.legumes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends legumesFindUniqueArgs>(args: SelectSubset<T, legumesFindUniqueArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Legumes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {legumesFindUniqueOrThrowArgs} args - Arguments to find a Legumes
     * @example
     * // Get one Legumes
     * const legumes = await prisma.legumes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends legumesFindUniqueOrThrowArgs>(args: SelectSubset<T, legumesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesFindFirstArgs} args - Arguments to find a Legumes
     * @example
     * // Get one Legumes
     * const legumes = await prisma.legumes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends legumesFindFirstArgs>(args?: SelectSubset<T, legumesFindFirstArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legumes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesFindFirstOrThrowArgs} args - Arguments to find a Legumes
     * @example
     * // Get one Legumes
     * const legumes = await prisma.legumes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends legumesFindFirstOrThrowArgs>(args?: SelectSubset<T, legumesFindFirstOrThrowArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Legumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legumes
     * const legumes = await prisma.legumes.findMany()
     * 
     * // Get first 10 Legumes
     * const legumes = await prisma.legumes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legumesWithIdOnly = await prisma.legumes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends legumesFindManyArgs>(args?: SelectSubset<T, legumesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Legumes.
     * @param {legumesCreateArgs} args - Arguments to create a Legumes.
     * @example
     * // Create one Legumes
     * const Legumes = await prisma.legumes.create({
     *   data: {
     *     // ... data to create a Legumes
     *   }
     * })
     * 
     */
    create<T extends legumesCreateArgs>(args: SelectSubset<T, legumesCreateArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Legumes.
     * @param {legumesCreateManyArgs} args - Arguments to create many Legumes.
     * @example
     * // Create many Legumes
     * const legumes = await prisma.legumes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends legumesCreateManyArgs>(args?: SelectSubset<T, legumesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Legumes and returns the data saved in the database.
     * @param {legumesCreateManyAndReturnArgs} args - Arguments to create many Legumes.
     * @example
     * // Create many Legumes
     * const legumes = await prisma.legumes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Legumes and only return the `id`
     * const legumesWithIdOnly = await prisma.legumes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends legumesCreateManyAndReturnArgs>(args?: SelectSubset<T, legumesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Legumes.
     * @param {legumesDeleteArgs} args - Arguments to delete one Legumes.
     * @example
     * // Delete one Legumes
     * const Legumes = await prisma.legumes.delete({
     *   where: {
     *     // ... filter to delete one Legumes
     *   }
     * })
     * 
     */
    delete<T extends legumesDeleteArgs>(args: SelectSubset<T, legumesDeleteArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Legumes.
     * @param {legumesUpdateArgs} args - Arguments to update one Legumes.
     * @example
     * // Update one Legumes
     * const legumes = await prisma.legumes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends legumesUpdateArgs>(args: SelectSubset<T, legumesUpdateArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Legumes.
     * @param {legumesDeleteManyArgs} args - Arguments to filter Legumes to delete.
     * @example
     * // Delete a few Legumes
     * const { count } = await prisma.legumes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends legumesDeleteManyArgs>(args?: SelectSubset<T, legumesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legumes
     * const legumes = await prisma.legumes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends legumesUpdateManyArgs>(args: SelectSubset<T, legumesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legumes and returns the data updated in the database.
     * @param {legumesUpdateManyAndReturnArgs} args - Arguments to update many Legumes.
     * @example
     * // Update many Legumes
     * const legumes = await prisma.legumes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Legumes and only return the `id`
     * const legumesWithIdOnly = await prisma.legumes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends legumesUpdateManyAndReturnArgs>(args: SelectSubset<T, legumesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Legumes.
     * @param {legumesUpsertArgs} args - Arguments to update or create a Legumes.
     * @example
     * // Update or create a Legumes
     * const legumes = await prisma.legumes.upsert({
     *   create: {
     *     // ... data to create a Legumes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legumes we want to update
     *   }
     * })
     */
    upsert<T extends legumesUpsertArgs>(args: SelectSubset<T, legumesUpsertArgs<ExtArgs>>): Prisma__legumesClient<$Result.GetResult<Prisma.$legumesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesCountArgs} args - Arguments to filter Legumes to count.
     * @example
     * // Count the number of Legumes
     * const count = await prisma.legumes.count({
     *   where: {
     *     // ... the filter for the Legumes we want to count
     *   }
     * })
    **/
    count<T extends legumesCountArgs>(
      args?: Subset<T, legumesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegumesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegumesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegumesAggregateArgs>(args: Subset<T, LegumesAggregateArgs>): Prisma.PrismaPromise<GetLegumesAggregateType<T>>

    /**
     * Group by Legumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legumesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends legumesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: legumesGroupByArgs['orderBy'] }
        : { orderBy?: legumesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, legumesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegumesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the legumes model
   */
  readonly fields: legumesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for legumes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__legumesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the legumes model
   */
  interface legumesFieldRefs {
    readonly id: FieldRef<"legumes", 'Int'>
    readonly name: FieldRef<"legumes", 'String'>
    readonly energy: FieldRef<"legumes", 'Float'>
    readonly protein: FieldRef<"legumes", 'Float'>
    readonly total_fat: FieldRef<"legumes", 'Float'>
    readonly total_carbohydrates: FieldRef<"legumes", 'Float'>
    readonly fibra: FieldRef<"legumes", 'Float'>
    readonly calcium: FieldRef<"legumes", 'Float'>
    readonly fosforo: FieldRef<"legumes", 'Float'>
    readonly zinc: FieldRef<"legumes", 'Float'>
    readonly iron: FieldRef<"legumes", 'Float'>
    readonly sodium: FieldRef<"legumes", 'Float'>
    readonly potassium: FieldRef<"legumes", 'Float'>
    readonly image: FieldRef<"legumes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * legumes findUnique
   */
  export type legumesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter, which legumes to fetch.
     */
    where: legumesWhereUniqueInput
  }

  /**
   * legumes findUniqueOrThrow
   */
  export type legumesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter, which legumes to fetch.
     */
    where: legumesWhereUniqueInput
  }

  /**
   * legumes findFirst
   */
  export type legumesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter, which legumes to fetch.
     */
    where?: legumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legumes to fetch.
     */
    orderBy?: legumesOrderByWithRelationInput | legumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legumes.
     */
    cursor?: legumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legumes.
     */
    distinct?: LegumesScalarFieldEnum | LegumesScalarFieldEnum[]
  }

  /**
   * legumes findFirstOrThrow
   */
  export type legumesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter, which legumes to fetch.
     */
    where?: legumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legumes to fetch.
     */
    orderBy?: legumesOrderByWithRelationInput | legumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legumes.
     */
    cursor?: legumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legumes.
     */
    distinct?: LegumesScalarFieldEnum | LegumesScalarFieldEnum[]
  }

  /**
   * legumes findMany
   */
  export type legumesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter, which legumes to fetch.
     */
    where?: legumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legumes to fetch.
     */
    orderBy?: legumesOrderByWithRelationInput | legumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing legumes.
     */
    cursor?: legumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legumes.
     */
    skip?: number
    distinct?: LegumesScalarFieldEnum | LegumesScalarFieldEnum[]
  }

  /**
   * legumes create
   */
  export type legumesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * The data needed to create a legumes.
     */
    data: XOR<legumesCreateInput, legumesUncheckedCreateInput>
  }

  /**
   * legumes createMany
   */
  export type legumesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many legumes.
     */
    data: legumesCreateManyInput | legumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * legumes createManyAndReturn
   */
  export type legumesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * The data used to create many legumes.
     */
    data: legumesCreateManyInput | legumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * legumes update
   */
  export type legumesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * The data needed to update a legumes.
     */
    data: XOR<legumesUpdateInput, legumesUncheckedUpdateInput>
    /**
     * Choose, which legumes to update.
     */
    where: legumesWhereUniqueInput
  }

  /**
   * legumes updateMany
   */
  export type legumesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update legumes.
     */
    data: XOR<legumesUpdateManyMutationInput, legumesUncheckedUpdateManyInput>
    /**
     * Filter which legumes to update
     */
    where?: legumesWhereInput
    /**
     * Limit how many legumes to update.
     */
    limit?: number
  }

  /**
   * legumes updateManyAndReturn
   */
  export type legumesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * The data used to update legumes.
     */
    data: XOR<legumesUpdateManyMutationInput, legumesUncheckedUpdateManyInput>
    /**
     * Filter which legumes to update
     */
    where?: legumesWhereInput
    /**
     * Limit how many legumes to update.
     */
    limit?: number
  }

  /**
   * legumes upsert
   */
  export type legumesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * The filter to search for the legumes to update in case it exists.
     */
    where: legumesWhereUniqueInput
    /**
     * In case the legumes found by the `where` argument doesn't exist, create a new legumes with this data.
     */
    create: XOR<legumesCreateInput, legumesUncheckedCreateInput>
    /**
     * In case the legumes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<legumesUpdateInput, legumesUncheckedUpdateInput>
  }

  /**
   * legumes delete
   */
  export type legumesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
    /**
     * Filter which legumes to delete.
     */
    where: legumesWhereUniqueInput
  }

  /**
   * legumes deleteMany
   */
  export type legumesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legumes to delete
     */
    where?: legumesWhereInput
    /**
     * Limit how many legumes to delete.
     */
    limit?: number
  }

  /**
   * legumes without action
   */
  export type legumesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legumes
     */
    select?: legumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legumes
     */
    omit?: legumesOmit<ExtArgs> | null
  }


  /**
   * Model meat
   */

  export type AggregateMeat = {
    _count: MeatCountAggregateOutputType | null
    _avg: MeatAvgAggregateOutputType | null
    _sum: MeatSumAggregateOutputType | null
    _min: MeatMinAggregateOutputType | null
    _max: MeatMaxAggregateOutputType | null
  }

  export type MeatAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type MeatSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type MeatMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type MeatMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type MeatCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type MeatAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type MeatSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type MeatMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type MeatMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type MeatCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type MeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meat to aggregate.
     */
    where?: meatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meats to fetch.
     */
    orderBy?: meatOrderByWithRelationInput | meatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meats
    **/
    _count?: true | MeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeatMaxAggregateInputType
  }

  export type GetMeatAggregateType<T extends MeatAggregateArgs> = {
        [P in keyof T & keyof AggregateMeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeat[P]>
      : GetScalarType<T[P], AggregateMeat[P]>
  }




  export type meatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meatWhereInput
    orderBy?: meatOrderByWithAggregationInput | meatOrderByWithAggregationInput[]
    by: MeatScalarFieldEnum[] | MeatScalarFieldEnum
    having?: meatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeatCountAggregateInputType | true
    _avg?: MeatAvgAggregateInputType
    _sum?: MeatSumAggregateInputType
    _min?: MeatMinAggregateInputType
    _max?: MeatMaxAggregateInputType
  }

  export type MeatGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: MeatCountAggregateOutputType | null
    _avg: MeatAvgAggregateOutputType | null
    _sum: MeatSumAggregateOutputType | null
    _min: MeatMinAggregateOutputType | null
    _max: MeatMaxAggregateOutputType | null
  }

  type GetMeatGroupByPayload<T extends meatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeatGroupByOutputType[P]>
            : GetScalarType<T[P], MeatGroupByOutputType[P]>
        }
      >
    >


  export type meatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["meat"]>

  export type meatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["meat"]>

  export type meatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["meat"]>

  export type meatSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type meatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["meat"]>

  export type $meatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["meat"]>
    composites: {}
  }

  type meatGetPayload<S extends boolean | null | undefined | meatDefaultArgs> = $Result.GetResult<Prisma.$meatPayload, S>

  type meatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeatCountAggregateInputType | true
    }

  export interface meatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meat'], meta: { name: 'meat' } }
    /**
     * Find zero or one Meat that matches the filter.
     * @param {meatFindUniqueArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meatFindUniqueArgs>(args: SelectSubset<T, meatFindUniqueArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meatFindUniqueOrThrowArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meatFindUniqueOrThrowArgs>(args: SelectSubset<T, meatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatFindFirstArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meatFindFirstArgs>(args?: SelectSubset<T, meatFindFirstArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatFindFirstOrThrowArgs} args - Arguments to find a Meat
     * @example
     * // Get one Meat
     * const meat = await prisma.meat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meatFindFirstOrThrowArgs>(args?: SelectSubset<T, meatFindFirstOrThrowArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meats
     * const meats = await prisma.meat.findMany()
     * 
     * // Get first 10 Meats
     * const meats = await prisma.meat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meatWithIdOnly = await prisma.meat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meatFindManyArgs>(args?: SelectSubset<T, meatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meat.
     * @param {meatCreateArgs} args - Arguments to create a Meat.
     * @example
     * // Create one Meat
     * const Meat = await prisma.meat.create({
     *   data: {
     *     // ... data to create a Meat
     *   }
     * })
     * 
     */
    create<T extends meatCreateArgs>(args: SelectSubset<T, meatCreateArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meats.
     * @param {meatCreateManyArgs} args - Arguments to create many Meats.
     * @example
     * // Create many Meats
     * const meat = await prisma.meat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meatCreateManyArgs>(args?: SelectSubset<T, meatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meats and returns the data saved in the database.
     * @param {meatCreateManyAndReturnArgs} args - Arguments to create many Meats.
     * @example
     * // Create many Meats
     * const meat = await prisma.meat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meats and only return the `id`
     * const meatWithIdOnly = await prisma.meat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meatCreateManyAndReturnArgs>(args?: SelectSubset<T, meatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meat.
     * @param {meatDeleteArgs} args - Arguments to delete one Meat.
     * @example
     * // Delete one Meat
     * const Meat = await prisma.meat.delete({
     *   where: {
     *     // ... filter to delete one Meat
     *   }
     * })
     * 
     */
    delete<T extends meatDeleteArgs>(args: SelectSubset<T, meatDeleteArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meat.
     * @param {meatUpdateArgs} args - Arguments to update one Meat.
     * @example
     * // Update one Meat
     * const meat = await prisma.meat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meatUpdateArgs>(args: SelectSubset<T, meatUpdateArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meats.
     * @param {meatDeleteManyArgs} args - Arguments to filter Meats to delete.
     * @example
     * // Delete a few Meats
     * const { count } = await prisma.meat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meatDeleteManyArgs>(args?: SelectSubset<T, meatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meats
     * const meat = await prisma.meat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meatUpdateManyArgs>(args: SelectSubset<T, meatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meats and returns the data updated in the database.
     * @param {meatUpdateManyAndReturnArgs} args - Arguments to update many Meats.
     * @example
     * // Update many Meats
     * const meat = await prisma.meat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meats and only return the `id`
     * const meatWithIdOnly = await prisma.meat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends meatUpdateManyAndReturnArgs>(args: SelectSubset<T, meatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meat.
     * @param {meatUpsertArgs} args - Arguments to update or create a Meat.
     * @example
     * // Update or create a Meat
     * const meat = await prisma.meat.upsert({
     *   create: {
     *     // ... data to create a Meat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meat we want to update
     *   }
     * })
     */
    upsert<T extends meatUpsertArgs>(args: SelectSubset<T, meatUpsertArgs<ExtArgs>>): Prisma__meatClient<$Result.GetResult<Prisma.$meatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatCountArgs} args - Arguments to filter Meats to count.
     * @example
     * // Count the number of Meats
     * const count = await prisma.meat.count({
     *   where: {
     *     // ... the filter for the Meats we want to count
     *   }
     * })
    **/
    count<T extends meatCountArgs>(
      args?: Subset<T, meatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeatAggregateArgs>(args: Subset<T, MeatAggregateArgs>): Prisma.PrismaPromise<GetMeatAggregateType<T>>

    /**
     * Group by Meat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meatGroupByArgs['orderBy'] }
        : { orderBy?: meatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meat model
   */
  readonly fields: meatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meat model
   */
  interface meatFieldRefs {
    readonly id: FieldRef<"meat", 'Int'>
    readonly name: FieldRef<"meat", 'String'>
    readonly energy: FieldRef<"meat", 'Float'>
    readonly protein: FieldRef<"meat", 'Float'>
    readonly total_fat: FieldRef<"meat", 'Float'>
    readonly total_carbohydrates: FieldRef<"meat", 'Float'>
    readonly fibra: FieldRef<"meat", 'Float'>
    readonly calcium: FieldRef<"meat", 'Float'>
    readonly fosforo: FieldRef<"meat", 'Float'>
    readonly zinc: FieldRef<"meat", 'Float'>
    readonly iron: FieldRef<"meat", 'Float'>
    readonly sodium: FieldRef<"meat", 'Float'>
    readonly potassium: FieldRef<"meat", 'Float'>
    readonly image: FieldRef<"meat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meat findUnique
   */
  export type meatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter, which meat to fetch.
     */
    where: meatWhereUniqueInput
  }

  /**
   * meat findUniqueOrThrow
   */
  export type meatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter, which meat to fetch.
     */
    where: meatWhereUniqueInput
  }

  /**
   * meat findFirst
   */
  export type meatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter, which meat to fetch.
     */
    where?: meatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meats to fetch.
     */
    orderBy?: meatOrderByWithRelationInput | meatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meats.
     */
    cursor?: meatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meats.
     */
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * meat findFirstOrThrow
   */
  export type meatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter, which meat to fetch.
     */
    where?: meatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meats to fetch.
     */
    orderBy?: meatOrderByWithRelationInput | meatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meats.
     */
    cursor?: meatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meats.
     */
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * meat findMany
   */
  export type meatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter, which meats to fetch.
     */
    where?: meatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meats to fetch.
     */
    orderBy?: meatOrderByWithRelationInput | meatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meats.
     */
    cursor?: meatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meats.
     */
    skip?: number
    distinct?: MeatScalarFieldEnum | MeatScalarFieldEnum[]
  }

  /**
   * meat create
   */
  export type meatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * The data needed to create a meat.
     */
    data: XOR<meatCreateInput, meatUncheckedCreateInput>
  }

  /**
   * meat createMany
   */
  export type meatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meats.
     */
    data: meatCreateManyInput | meatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meat createManyAndReturn
   */
  export type meatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * The data used to create many meats.
     */
    data: meatCreateManyInput | meatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meat update
   */
  export type meatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * The data needed to update a meat.
     */
    data: XOR<meatUpdateInput, meatUncheckedUpdateInput>
    /**
     * Choose, which meat to update.
     */
    where: meatWhereUniqueInput
  }

  /**
   * meat updateMany
   */
  export type meatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meats.
     */
    data: XOR<meatUpdateManyMutationInput, meatUncheckedUpdateManyInput>
    /**
     * Filter which meats to update
     */
    where?: meatWhereInput
    /**
     * Limit how many meats to update.
     */
    limit?: number
  }

  /**
   * meat updateManyAndReturn
   */
  export type meatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * The data used to update meats.
     */
    data: XOR<meatUpdateManyMutationInput, meatUncheckedUpdateManyInput>
    /**
     * Filter which meats to update
     */
    where?: meatWhereInput
    /**
     * Limit how many meats to update.
     */
    limit?: number
  }

  /**
   * meat upsert
   */
  export type meatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * The filter to search for the meat to update in case it exists.
     */
    where: meatWhereUniqueInput
    /**
     * In case the meat found by the `where` argument doesn't exist, create a new meat with this data.
     */
    create: XOR<meatCreateInput, meatUncheckedCreateInput>
    /**
     * In case the meat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meatUpdateInput, meatUncheckedUpdateInput>
  }

  /**
   * meat delete
   */
  export type meatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
    /**
     * Filter which meat to delete.
     */
    where: meatWhereUniqueInput
  }

  /**
   * meat deleteMany
   */
  export type meatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meats to delete
     */
    where?: meatWhereInput
    /**
     * Limit how many meats to delete.
     */
    limit?: number
  }

  /**
   * meat without action
   */
  export type meatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meat
     */
    select?: meatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meat
     */
    omit?: meatOmit<ExtArgs> | null
  }


  /**
   * Model miscellaneous
   */

  export type AggregateMiscellaneous = {
    _count: MiscellaneousCountAggregateOutputType | null
    _avg: MiscellaneousAvgAggregateOutputType | null
    _sum: MiscellaneousSumAggregateOutputType | null
    _min: MiscellaneousMinAggregateOutputType | null
    _max: MiscellaneousMaxAggregateOutputType | null
  }

  export type MiscellaneousAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type MiscellaneousSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type MiscellaneousMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type MiscellaneousMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type MiscellaneousCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type MiscellaneousAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type MiscellaneousSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type MiscellaneousMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type MiscellaneousMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type MiscellaneousCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type MiscellaneousAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which miscellaneous to aggregate.
     */
    where?: miscellaneousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miscellaneous to fetch.
     */
    orderBy?: miscellaneousOrderByWithRelationInput | miscellaneousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: miscellaneousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miscellaneous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miscellaneous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned miscellaneous
    **/
    _count?: true | MiscellaneousCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiscellaneousAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiscellaneousSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiscellaneousMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiscellaneousMaxAggregateInputType
  }

  export type GetMiscellaneousAggregateType<T extends MiscellaneousAggregateArgs> = {
        [P in keyof T & keyof AggregateMiscellaneous]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiscellaneous[P]>
      : GetScalarType<T[P], AggregateMiscellaneous[P]>
  }




  export type miscellaneousGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: miscellaneousWhereInput
    orderBy?: miscellaneousOrderByWithAggregationInput | miscellaneousOrderByWithAggregationInput[]
    by: MiscellaneousScalarFieldEnum[] | MiscellaneousScalarFieldEnum
    having?: miscellaneousScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiscellaneousCountAggregateInputType | true
    _avg?: MiscellaneousAvgAggregateInputType
    _sum?: MiscellaneousSumAggregateInputType
    _min?: MiscellaneousMinAggregateInputType
    _max?: MiscellaneousMaxAggregateInputType
  }

  export type MiscellaneousGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: MiscellaneousCountAggregateOutputType | null
    _avg: MiscellaneousAvgAggregateOutputType | null
    _sum: MiscellaneousSumAggregateOutputType | null
    _min: MiscellaneousMinAggregateOutputType | null
    _max: MiscellaneousMaxAggregateOutputType | null
  }

  type GetMiscellaneousGroupByPayload<T extends miscellaneousGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiscellaneousGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiscellaneousGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiscellaneousGroupByOutputType[P]>
            : GetScalarType<T[P], MiscellaneousGroupByOutputType[P]>
        }
      >
    >


  export type miscellaneousSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["miscellaneous"]>

  export type miscellaneousSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["miscellaneous"]>

  export type miscellaneousSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["miscellaneous"]>

  export type miscellaneousSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type miscellaneousOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["miscellaneous"]>

  export type $miscellaneousPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "miscellaneous"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["miscellaneous"]>
    composites: {}
  }

  type miscellaneousGetPayload<S extends boolean | null | undefined | miscellaneousDefaultArgs> = $Result.GetResult<Prisma.$miscellaneousPayload, S>

  type miscellaneousCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<miscellaneousFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiscellaneousCountAggregateInputType | true
    }

  export interface miscellaneousDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['miscellaneous'], meta: { name: 'miscellaneous' } }
    /**
     * Find zero or one Miscellaneous that matches the filter.
     * @param {miscellaneousFindUniqueArgs} args - Arguments to find a Miscellaneous
     * @example
     * // Get one Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends miscellaneousFindUniqueArgs>(args: SelectSubset<T, miscellaneousFindUniqueArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Miscellaneous that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {miscellaneousFindUniqueOrThrowArgs} args - Arguments to find a Miscellaneous
     * @example
     * // Get one Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends miscellaneousFindUniqueOrThrowArgs>(args: SelectSubset<T, miscellaneousFindUniqueOrThrowArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miscellaneous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousFindFirstArgs} args - Arguments to find a Miscellaneous
     * @example
     * // Get one Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends miscellaneousFindFirstArgs>(args?: SelectSubset<T, miscellaneousFindFirstArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miscellaneous that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousFindFirstOrThrowArgs} args - Arguments to find a Miscellaneous
     * @example
     * // Get one Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends miscellaneousFindFirstOrThrowArgs>(args?: SelectSubset<T, miscellaneousFindFirstOrThrowArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Miscellaneous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findMany()
     * 
     * // Get first 10 Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miscellaneousWithIdOnly = await prisma.miscellaneous.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends miscellaneousFindManyArgs>(args?: SelectSubset<T, miscellaneousFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Miscellaneous.
     * @param {miscellaneousCreateArgs} args - Arguments to create a Miscellaneous.
     * @example
     * // Create one Miscellaneous
     * const Miscellaneous = await prisma.miscellaneous.create({
     *   data: {
     *     // ... data to create a Miscellaneous
     *   }
     * })
     * 
     */
    create<T extends miscellaneousCreateArgs>(args: SelectSubset<T, miscellaneousCreateArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Miscellaneous.
     * @param {miscellaneousCreateManyArgs} args - Arguments to create many Miscellaneous.
     * @example
     * // Create many Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends miscellaneousCreateManyArgs>(args?: SelectSubset<T, miscellaneousCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Miscellaneous and returns the data saved in the database.
     * @param {miscellaneousCreateManyAndReturnArgs} args - Arguments to create many Miscellaneous.
     * @example
     * // Create many Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Miscellaneous and only return the `id`
     * const miscellaneousWithIdOnly = await prisma.miscellaneous.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends miscellaneousCreateManyAndReturnArgs>(args?: SelectSubset<T, miscellaneousCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Miscellaneous.
     * @param {miscellaneousDeleteArgs} args - Arguments to delete one Miscellaneous.
     * @example
     * // Delete one Miscellaneous
     * const Miscellaneous = await prisma.miscellaneous.delete({
     *   where: {
     *     // ... filter to delete one Miscellaneous
     *   }
     * })
     * 
     */
    delete<T extends miscellaneousDeleteArgs>(args: SelectSubset<T, miscellaneousDeleteArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Miscellaneous.
     * @param {miscellaneousUpdateArgs} args - Arguments to update one Miscellaneous.
     * @example
     * // Update one Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends miscellaneousUpdateArgs>(args: SelectSubset<T, miscellaneousUpdateArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Miscellaneous.
     * @param {miscellaneousDeleteManyArgs} args - Arguments to filter Miscellaneous to delete.
     * @example
     * // Delete a few Miscellaneous
     * const { count } = await prisma.miscellaneous.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends miscellaneousDeleteManyArgs>(args?: SelectSubset<T, miscellaneousDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Miscellaneous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends miscellaneousUpdateManyArgs>(args: SelectSubset<T, miscellaneousUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Miscellaneous and returns the data updated in the database.
     * @param {miscellaneousUpdateManyAndReturnArgs} args - Arguments to update many Miscellaneous.
     * @example
     * // Update many Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Miscellaneous and only return the `id`
     * const miscellaneousWithIdOnly = await prisma.miscellaneous.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends miscellaneousUpdateManyAndReturnArgs>(args: SelectSubset<T, miscellaneousUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Miscellaneous.
     * @param {miscellaneousUpsertArgs} args - Arguments to update or create a Miscellaneous.
     * @example
     * // Update or create a Miscellaneous
     * const miscellaneous = await prisma.miscellaneous.upsert({
     *   create: {
     *     // ... data to create a Miscellaneous
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Miscellaneous we want to update
     *   }
     * })
     */
    upsert<T extends miscellaneousUpsertArgs>(args: SelectSubset<T, miscellaneousUpsertArgs<ExtArgs>>): Prisma__miscellaneousClient<$Result.GetResult<Prisma.$miscellaneousPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Miscellaneous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousCountArgs} args - Arguments to filter Miscellaneous to count.
     * @example
     * // Count the number of Miscellaneous
     * const count = await prisma.miscellaneous.count({
     *   where: {
     *     // ... the filter for the Miscellaneous we want to count
     *   }
     * })
    **/
    count<T extends miscellaneousCountArgs>(
      args?: Subset<T, miscellaneousCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiscellaneousCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Miscellaneous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiscellaneousAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MiscellaneousAggregateArgs>(args: Subset<T, MiscellaneousAggregateArgs>): Prisma.PrismaPromise<GetMiscellaneousAggregateType<T>>

    /**
     * Group by Miscellaneous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {miscellaneousGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends miscellaneousGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: miscellaneousGroupByArgs['orderBy'] }
        : { orderBy?: miscellaneousGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, miscellaneousGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiscellaneousGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the miscellaneous model
   */
  readonly fields: miscellaneousFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for miscellaneous.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__miscellaneousClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the miscellaneous model
   */
  interface miscellaneousFieldRefs {
    readonly id: FieldRef<"miscellaneous", 'Int'>
    readonly name: FieldRef<"miscellaneous", 'String'>
    readonly energy: FieldRef<"miscellaneous", 'Float'>
    readonly protein: FieldRef<"miscellaneous", 'Float'>
    readonly total_fat: FieldRef<"miscellaneous", 'Float'>
    readonly total_carbohydrates: FieldRef<"miscellaneous", 'Float'>
    readonly fibra: FieldRef<"miscellaneous", 'Float'>
    readonly calcium: FieldRef<"miscellaneous", 'Float'>
    readonly fosforo: FieldRef<"miscellaneous", 'Float'>
    readonly zinc: FieldRef<"miscellaneous", 'Float'>
    readonly iron: FieldRef<"miscellaneous", 'Float'>
    readonly sodium: FieldRef<"miscellaneous", 'Float'>
    readonly potassium: FieldRef<"miscellaneous", 'Float'>
    readonly image: FieldRef<"miscellaneous", 'String'>
  }
    

  // Custom InputTypes
  /**
   * miscellaneous findUnique
   */
  export type miscellaneousFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter, which miscellaneous to fetch.
     */
    where: miscellaneousWhereUniqueInput
  }

  /**
   * miscellaneous findUniqueOrThrow
   */
  export type miscellaneousFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter, which miscellaneous to fetch.
     */
    where: miscellaneousWhereUniqueInput
  }

  /**
   * miscellaneous findFirst
   */
  export type miscellaneousFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter, which miscellaneous to fetch.
     */
    where?: miscellaneousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miscellaneous to fetch.
     */
    orderBy?: miscellaneousOrderByWithRelationInput | miscellaneousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for miscellaneous.
     */
    cursor?: miscellaneousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miscellaneous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miscellaneous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of miscellaneous.
     */
    distinct?: MiscellaneousScalarFieldEnum | MiscellaneousScalarFieldEnum[]
  }

  /**
   * miscellaneous findFirstOrThrow
   */
  export type miscellaneousFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter, which miscellaneous to fetch.
     */
    where?: miscellaneousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miscellaneous to fetch.
     */
    orderBy?: miscellaneousOrderByWithRelationInput | miscellaneousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for miscellaneous.
     */
    cursor?: miscellaneousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miscellaneous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miscellaneous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of miscellaneous.
     */
    distinct?: MiscellaneousScalarFieldEnum | MiscellaneousScalarFieldEnum[]
  }

  /**
   * miscellaneous findMany
   */
  export type miscellaneousFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter, which miscellaneous to fetch.
     */
    where?: miscellaneousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of miscellaneous to fetch.
     */
    orderBy?: miscellaneousOrderByWithRelationInput | miscellaneousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing miscellaneous.
     */
    cursor?: miscellaneousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` miscellaneous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` miscellaneous.
     */
    skip?: number
    distinct?: MiscellaneousScalarFieldEnum | MiscellaneousScalarFieldEnum[]
  }

  /**
   * miscellaneous create
   */
  export type miscellaneousCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * The data needed to create a miscellaneous.
     */
    data: XOR<miscellaneousCreateInput, miscellaneousUncheckedCreateInput>
  }

  /**
   * miscellaneous createMany
   */
  export type miscellaneousCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many miscellaneous.
     */
    data: miscellaneousCreateManyInput | miscellaneousCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * miscellaneous createManyAndReturn
   */
  export type miscellaneousCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * The data used to create many miscellaneous.
     */
    data: miscellaneousCreateManyInput | miscellaneousCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * miscellaneous update
   */
  export type miscellaneousUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * The data needed to update a miscellaneous.
     */
    data: XOR<miscellaneousUpdateInput, miscellaneousUncheckedUpdateInput>
    /**
     * Choose, which miscellaneous to update.
     */
    where: miscellaneousWhereUniqueInput
  }

  /**
   * miscellaneous updateMany
   */
  export type miscellaneousUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update miscellaneous.
     */
    data: XOR<miscellaneousUpdateManyMutationInput, miscellaneousUncheckedUpdateManyInput>
    /**
     * Filter which miscellaneous to update
     */
    where?: miscellaneousWhereInput
    /**
     * Limit how many miscellaneous to update.
     */
    limit?: number
  }

  /**
   * miscellaneous updateManyAndReturn
   */
  export type miscellaneousUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * The data used to update miscellaneous.
     */
    data: XOR<miscellaneousUpdateManyMutationInput, miscellaneousUncheckedUpdateManyInput>
    /**
     * Filter which miscellaneous to update
     */
    where?: miscellaneousWhereInput
    /**
     * Limit how many miscellaneous to update.
     */
    limit?: number
  }

  /**
   * miscellaneous upsert
   */
  export type miscellaneousUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * The filter to search for the miscellaneous to update in case it exists.
     */
    where: miscellaneousWhereUniqueInput
    /**
     * In case the miscellaneous found by the `where` argument doesn't exist, create a new miscellaneous with this data.
     */
    create: XOR<miscellaneousCreateInput, miscellaneousUncheckedCreateInput>
    /**
     * In case the miscellaneous was found with the provided `where` argument, update it with this data.
     */
    update: XOR<miscellaneousUpdateInput, miscellaneousUncheckedUpdateInput>
  }

  /**
   * miscellaneous delete
   */
  export type miscellaneousDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
    /**
     * Filter which miscellaneous to delete.
     */
    where: miscellaneousWhereUniqueInput
  }

  /**
   * miscellaneous deleteMany
   */
  export type miscellaneousDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which miscellaneous to delete
     */
    where?: miscellaneousWhereInput
    /**
     * Limit how many miscellaneous to delete.
     */
    limit?: number
  }

  /**
   * miscellaneous without action
   */
  export type miscellaneousDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the miscellaneous
     */
    select?: miscellaneousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the miscellaneous
     */
    omit?: miscellaneousOmit<ExtArgs> | null
  }


  /**
   * Model seafood
   */

  export type AggregateSeafood = {
    _count: SeafoodCountAggregateOutputType | null
    _avg: SeafoodAvgAggregateOutputType | null
    _sum: SeafoodSumAggregateOutputType | null
    _min: SeafoodMinAggregateOutputType | null
    _max: SeafoodMaxAggregateOutputType | null
  }

  export type SeafoodAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type SeafoodSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type SeafoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type SeafoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type SeafoodCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type SeafoodAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type SeafoodSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type SeafoodMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type SeafoodMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type SeafoodCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type SeafoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seafood to aggregate.
     */
    where?: seafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seafoods to fetch.
     */
    orderBy?: seafoodOrderByWithRelationInput | seafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seafoods
    **/
    _count?: true | SeafoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeafoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeafoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeafoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeafoodMaxAggregateInputType
  }

  export type GetSeafoodAggregateType<T extends SeafoodAggregateArgs> = {
        [P in keyof T & keyof AggregateSeafood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeafood[P]>
      : GetScalarType<T[P], AggregateSeafood[P]>
  }




  export type seafoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seafoodWhereInput
    orderBy?: seafoodOrderByWithAggregationInput | seafoodOrderByWithAggregationInput[]
    by: SeafoodScalarFieldEnum[] | SeafoodScalarFieldEnum
    having?: seafoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeafoodCountAggregateInputType | true
    _avg?: SeafoodAvgAggregateInputType
    _sum?: SeafoodSumAggregateInputType
    _min?: SeafoodMinAggregateInputType
    _max?: SeafoodMaxAggregateInputType
  }

  export type SeafoodGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: SeafoodCountAggregateOutputType | null
    _avg: SeafoodAvgAggregateOutputType | null
    _sum: SeafoodSumAggregateOutputType | null
    _min: SeafoodMinAggregateOutputType | null
    _max: SeafoodMaxAggregateOutputType | null
  }

  type GetSeafoodGroupByPayload<T extends seafoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeafoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeafoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeafoodGroupByOutputType[P]>
            : GetScalarType<T[P], SeafoodGroupByOutputType[P]>
        }
      >
    >


  export type seafoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["seafood"]>

  export type seafoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["seafood"]>

  export type seafoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["seafood"]>

  export type seafoodSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type seafoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["seafood"]>

  export type $seafoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seafood"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["seafood"]>
    composites: {}
  }

  type seafoodGetPayload<S extends boolean | null | undefined | seafoodDefaultArgs> = $Result.GetResult<Prisma.$seafoodPayload, S>

  type seafoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seafoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeafoodCountAggregateInputType | true
    }

  export interface seafoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seafood'], meta: { name: 'seafood' } }
    /**
     * Find zero or one Seafood that matches the filter.
     * @param {seafoodFindUniqueArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seafoodFindUniqueArgs>(args: SelectSubset<T, seafoodFindUniqueArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seafood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seafoodFindUniqueOrThrowArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seafoodFindUniqueOrThrowArgs>(args: SelectSubset<T, seafoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seafood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodFindFirstArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seafoodFindFirstArgs>(args?: SelectSubset<T, seafoodFindFirstArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seafood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodFindFirstOrThrowArgs} args - Arguments to find a Seafood
     * @example
     * // Get one Seafood
     * const seafood = await prisma.seafood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seafoodFindFirstOrThrowArgs>(args?: SelectSubset<T, seafoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seafoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seafoods
     * const seafoods = await prisma.seafood.findMany()
     * 
     * // Get first 10 Seafoods
     * const seafoods = await prisma.seafood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seafoodWithIdOnly = await prisma.seafood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seafoodFindManyArgs>(args?: SelectSubset<T, seafoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seafood.
     * @param {seafoodCreateArgs} args - Arguments to create a Seafood.
     * @example
     * // Create one Seafood
     * const Seafood = await prisma.seafood.create({
     *   data: {
     *     // ... data to create a Seafood
     *   }
     * })
     * 
     */
    create<T extends seafoodCreateArgs>(args: SelectSubset<T, seafoodCreateArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seafoods.
     * @param {seafoodCreateManyArgs} args - Arguments to create many Seafoods.
     * @example
     * // Create many Seafoods
     * const seafood = await prisma.seafood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seafoodCreateManyArgs>(args?: SelectSubset<T, seafoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seafoods and returns the data saved in the database.
     * @param {seafoodCreateManyAndReturnArgs} args - Arguments to create many Seafoods.
     * @example
     * // Create many Seafoods
     * const seafood = await prisma.seafood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seafoods and only return the `id`
     * const seafoodWithIdOnly = await prisma.seafood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seafoodCreateManyAndReturnArgs>(args?: SelectSubset<T, seafoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seafood.
     * @param {seafoodDeleteArgs} args - Arguments to delete one Seafood.
     * @example
     * // Delete one Seafood
     * const Seafood = await prisma.seafood.delete({
     *   where: {
     *     // ... filter to delete one Seafood
     *   }
     * })
     * 
     */
    delete<T extends seafoodDeleteArgs>(args: SelectSubset<T, seafoodDeleteArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seafood.
     * @param {seafoodUpdateArgs} args - Arguments to update one Seafood.
     * @example
     * // Update one Seafood
     * const seafood = await prisma.seafood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seafoodUpdateArgs>(args: SelectSubset<T, seafoodUpdateArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seafoods.
     * @param {seafoodDeleteManyArgs} args - Arguments to filter Seafoods to delete.
     * @example
     * // Delete a few Seafoods
     * const { count } = await prisma.seafood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seafoodDeleteManyArgs>(args?: SelectSubset<T, seafoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seafoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seafoods
     * const seafood = await prisma.seafood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seafoodUpdateManyArgs>(args: SelectSubset<T, seafoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seafoods and returns the data updated in the database.
     * @param {seafoodUpdateManyAndReturnArgs} args - Arguments to update many Seafoods.
     * @example
     * // Update many Seafoods
     * const seafood = await prisma.seafood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seafoods and only return the `id`
     * const seafoodWithIdOnly = await prisma.seafood.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends seafoodUpdateManyAndReturnArgs>(args: SelectSubset<T, seafoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seafood.
     * @param {seafoodUpsertArgs} args - Arguments to update or create a Seafood.
     * @example
     * // Update or create a Seafood
     * const seafood = await prisma.seafood.upsert({
     *   create: {
     *     // ... data to create a Seafood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seafood we want to update
     *   }
     * })
     */
    upsert<T extends seafoodUpsertArgs>(args: SelectSubset<T, seafoodUpsertArgs<ExtArgs>>): Prisma__seafoodClient<$Result.GetResult<Prisma.$seafoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seafoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodCountArgs} args - Arguments to filter Seafoods to count.
     * @example
     * // Count the number of Seafoods
     * const count = await prisma.seafood.count({
     *   where: {
     *     // ... the filter for the Seafoods we want to count
     *   }
     * })
    **/
    count<T extends seafoodCountArgs>(
      args?: Subset<T, seafoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeafoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seafood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeafoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeafoodAggregateArgs>(args: Subset<T, SeafoodAggregateArgs>): Prisma.PrismaPromise<GetSeafoodAggregateType<T>>

    /**
     * Group by Seafood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seafoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seafoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seafoodGroupByArgs['orderBy'] }
        : { orderBy?: seafoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seafoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeafoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seafood model
   */
  readonly fields: seafoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seafood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seafoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seafood model
   */
  interface seafoodFieldRefs {
    readonly id: FieldRef<"seafood", 'Int'>
    readonly name: FieldRef<"seafood", 'String'>
    readonly energy: FieldRef<"seafood", 'Float'>
    readonly protein: FieldRef<"seafood", 'Float'>
    readonly total_fat: FieldRef<"seafood", 'Float'>
    readonly total_carbohydrates: FieldRef<"seafood", 'Float'>
    readonly fibra: FieldRef<"seafood", 'Float'>
    readonly calcium: FieldRef<"seafood", 'Float'>
    readonly fosforo: FieldRef<"seafood", 'Float'>
    readonly zinc: FieldRef<"seafood", 'Float'>
    readonly iron: FieldRef<"seafood", 'Float'>
    readonly sodium: FieldRef<"seafood", 'Float'>
    readonly potassium: FieldRef<"seafood", 'Float'>
    readonly image: FieldRef<"seafood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * seafood findUnique
   */
  export type seafoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter, which seafood to fetch.
     */
    where: seafoodWhereUniqueInput
  }

  /**
   * seafood findUniqueOrThrow
   */
  export type seafoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter, which seafood to fetch.
     */
    where: seafoodWhereUniqueInput
  }

  /**
   * seafood findFirst
   */
  export type seafoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter, which seafood to fetch.
     */
    where?: seafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seafoods to fetch.
     */
    orderBy?: seafoodOrderByWithRelationInput | seafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seafoods.
     */
    cursor?: seafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seafoods.
     */
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * seafood findFirstOrThrow
   */
  export type seafoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter, which seafood to fetch.
     */
    where?: seafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seafoods to fetch.
     */
    orderBy?: seafoodOrderByWithRelationInput | seafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seafoods.
     */
    cursor?: seafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seafoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seafoods.
     */
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * seafood findMany
   */
  export type seafoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter, which seafoods to fetch.
     */
    where?: seafoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seafoods to fetch.
     */
    orderBy?: seafoodOrderByWithRelationInput | seafoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seafoods.
     */
    cursor?: seafoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seafoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seafoods.
     */
    skip?: number
    distinct?: SeafoodScalarFieldEnum | SeafoodScalarFieldEnum[]
  }

  /**
   * seafood create
   */
  export type seafoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * The data needed to create a seafood.
     */
    data: XOR<seafoodCreateInput, seafoodUncheckedCreateInput>
  }

  /**
   * seafood createMany
   */
  export type seafoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seafoods.
     */
    data: seafoodCreateManyInput | seafoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seafood createManyAndReturn
   */
  export type seafoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * The data used to create many seafoods.
     */
    data: seafoodCreateManyInput | seafoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seafood update
   */
  export type seafoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * The data needed to update a seafood.
     */
    data: XOR<seafoodUpdateInput, seafoodUncheckedUpdateInput>
    /**
     * Choose, which seafood to update.
     */
    where: seafoodWhereUniqueInput
  }

  /**
   * seafood updateMany
   */
  export type seafoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seafoods.
     */
    data: XOR<seafoodUpdateManyMutationInput, seafoodUncheckedUpdateManyInput>
    /**
     * Filter which seafoods to update
     */
    where?: seafoodWhereInput
    /**
     * Limit how many seafoods to update.
     */
    limit?: number
  }

  /**
   * seafood updateManyAndReturn
   */
  export type seafoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * The data used to update seafoods.
     */
    data: XOR<seafoodUpdateManyMutationInput, seafoodUncheckedUpdateManyInput>
    /**
     * Filter which seafoods to update
     */
    where?: seafoodWhereInput
    /**
     * Limit how many seafoods to update.
     */
    limit?: number
  }

  /**
   * seafood upsert
   */
  export type seafoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * The filter to search for the seafood to update in case it exists.
     */
    where: seafoodWhereUniqueInput
    /**
     * In case the seafood found by the `where` argument doesn't exist, create a new seafood with this data.
     */
    create: XOR<seafoodCreateInput, seafoodUncheckedCreateInput>
    /**
     * In case the seafood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seafoodUpdateInput, seafoodUncheckedUpdateInput>
  }

  /**
   * seafood delete
   */
  export type seafoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
    /**
     * Filter which seafood to delete.
     */
    where: seafoodWhereUniqueInput
  }

  /**
   * seafood deleteMany
   */
  export type seafoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seafoods to delete
     */
    where?: seafoodWhereInput
    /**
     * Limit how many seafoods to delete.
     */
    limit?: number
  }

  /**
   * seafood without action
   */
  export type seafoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seafood
     */
    select?: seafoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seafood
     */
    omit?: seafoodOmit<ExtArgs> | null
  }


  /**
   * Model sugar
   */

  export type AggregateSugar = {
    _count: SugarCountAggregateOutputType | null
    _avg: SugarAvgAggregateOutputType | null
    _sum: SugarSumAggregateOutputType | null
    _min: SugarMinAggregateOutputType | null
    _max: SugarMaxAggregateOutputType | null
  }

  export type SugarAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type SugarSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type SugarMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type SugarMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type SugarCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type SugarAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type SugarSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type SugarMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type SugarMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type SugarCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type SugarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sugar to aggregate.
     */
    where?: sugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sugars to fetch.
     */
    orderBy?: sugarOrderByWithRelationInput | sugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sugars
    **/
    _count?: true | SugarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SugarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SugarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SugarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SugarMaxAggregateInputType
  }

  export type GetSugarAggregateType<T extends SugarAggregateArgs> = {
        [P in keyof T & keyof AggregateSugar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSugar[P]>
      : GetScalarType<T[P], AggregateSugar[P]>
  }




  export type sugarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sugarWhereInput
    orderBy?: sugarOrderByWithAggregationInput | sugarOrderByWithAggregationInput[]
    by: SugarScalarFieldEnum[] | SugarScalarFieldEnum
    having?: sugarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SugarCountAggregateInputType | true
    _avg?: SugarAvgAggregateInputType
    _sum?: SugarSumAggregateInputType
    _min?: SugarMinAggregateInputType
    _max?: SugarMaxAggregateInputType
  }

  export type SugarGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: SugarCountAggregateOutputType | null
    _avg: SugarAvgAggregateOutputType | null
    _sum: SugarSumAggregateOutputType | null
    _min: SugarMinAggregateOutputType | null
    _max: SugarMaxAggregateOutputType | null
  }

  type GetSugarGroupByPayload<T extends sugarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SugarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SugarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SugarGroupByOutputType[P]>
            : GetScalarType<T[P], SugarGroupByOutputType[P]>
        }
      >
    >


  export type sugarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["sugar"]>

  export type sugarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["sugar"]>

  export type sugarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["sugar"]>

  export type sugarSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type sugarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["sugar"]>

  export type $sugarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sugar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["sugar"]>
    composites: {}
  }

  type sugarGetPayload<S extends boolean | null | undefined | sugarDefaultArgs> = $Result.GetResult<Prisma.$sugarPayload, S>

  type sugarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sugarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SugarCountAggregateInputType | true
    }

  export interface sugarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sugar'], meta: { name: 'sugar' } }
    /**
     * Find zero or one Sugar that matches the filter.
     * @param {sugarFindUniqueArgs} args - Arguments to find a Sugar
     * @example
     * // Get one Sugar
     * const sugar = await prisma.sugar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sugarFindUniqueArgs>(args: SelectSubset<T, sugarFindUniqueArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sugar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sugarFindUniqueOrThrowArgs} args - Arguments to find a Sugar
     * @example
     * // Get one Sugar
     * const sugar = await prisma.sugar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sugarFindUniqueOrThrowArgs>(args: SelectSubset<T, sugarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sugar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarFindFirstArgs} args - Arguments to find a Sugar
     * @example
     * // Get one Sugar
     * const sugar = await prisma.sugar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sugarFindFirstArgs>(args?: SelectSubset<T, sugarFindFirstArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sugar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarFindFirstOrThrowArgs} args - Arguments to find a Sugar
     * @example
     * // Get one Sugar
     * const sugar = await prisma.sugar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sugarFindFirstOrThrowArgs>(args?: SelectSubset<T, sugarFindFirstOrThrowArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sugars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sugars
     * const sugars = await prisma.sugar.findMany()
     * 
     * // Get first 10 Sugars
     * const sugars = await prisma.sugar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sugarWithIdOnly = await prisma.sugar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sugarFindManyArgs>(args?: SelectSubset<T, sugarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sugar.
     * @param {sugarCreateArgs} args - Arguments to create a Sugar.
     * @example
     * // Create one Sugar
     * const Sugar = await prisma.sugar.create({
     *   data: {
     *     // ... data to create a Sugar
     *   }
     * })
     * 
     */
    create<T extends sugarCreateArgs>(args: SelectSubset<T, sugarCreateArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sugars.
     * @param {sugarCreateManyArgs} args - Arguments to create many Sugars.
     * @example
     * // Create many Sugars
     * const sugar = await prisma.sugar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sugarCreateManyArgs>(args?: SelectSubset<T, sugarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sugars and returns the data saved in the database.
     * @param {sugarCreateManyAndReturnArgs} args - Arguments to create many Sugars.
     * @example
     * // Create many Sugars
     * const sugar = await prisma.sugar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sugars and only return the `id`
     * const sugarWithIdOnly = await prisma.sugar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sugarCreateManyAndReturnArgs>(args?: SelectSubset<T, sugarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sugar.
     * @param {sugarDeleteArgs} args - Arguments to delete one Sugar.
     * @example
     * // Delete one Sugar
     * const Sugar = await prisma.sugar.delete({
     *   where: {
     *     // ... filter to delete one Sugar
     *   }
     * })
     * 
     */
    delete<T extends sugarDeleteArgs>(args: SelectSubset<T, sugarDeleteArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sugar.
     * @param {sugarUpdateArgs} args - Arguments to update one Sugar.
     * @example
     * // Update one Sugar
     * const sugar = await prisma.sugar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sugarUpdateArgs>(args: SelectSubset<T, sugarUpdateArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sugars.
     * @param {sugarDeleteManyArgs} args - Arguments to filter Sugars to delete.
     * @example
     * // Delete a few Sugars
     * const { count } = await prisma.sugar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sugarDeleteManyArgs>(args?: SelectSubset<T, sugarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sugars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sugars
     * const sugar = await prisma.sugar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sugarUpdateManyArgs>(args: SelectSubset<T, sugarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sugars and returns the data updated in the database.
     * @param {sugarUpdateManyAndReturnArgs} args - Arguments to update many Sugars.
     * @example
     * // Update many Sugars
     * const sugar = await prisma.sugar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sugars and only return the `id`
     * const sugarWithIdOnly = await prisma.sugar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sugarUpdateManyAndReturnArgs>(args: SelectSubset<T, sugarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sugar.
     * @param {sugarUpsertArgs} args - Arguments to update or create a Sugar.
     * @example
     * // Update or create a Sugar
     * const sugar = await prisma.sugar.upsert({
     *   create: {
     *     // ... data to create a Sugar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sugar we want to update
     *   }
     * })
     */
    upsert<T extends sugarUpsertArgs>(args: SelectSubset<T, sugarUpsertArgs<ExtArgs>>): Prisma__sugarClient<$Result.GetResult<Prisma.$sugarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sugars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarCountArgs} args - Arguments to filter Sugars to count.
     * @example
     * // Count the number of Sugars
     * const count = await prisma.sugar.count({
     *   where: {
     *     // ... the filter for the Sugars we want to count
     *   }
     * })
    **/
    count<T extends sugarCountArgs>(
      args?: Subset<T, sugarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SugarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sugar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SugarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SugarAggregateArgs>(args: Subset<T, SugarAggregateArgs>): Prisma.PrismaPromise<GetSugarAggregateType<T>>

    /**
     * Group by Sugar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sugarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sugarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sugarGroupByArgs['orderBy'] }
        : { orderBy?: sugarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sugarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSugarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sugar model
   */
  readonly fields: sugarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sugar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sugarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sugar model
   */
  interface sugarFieldRefs {
    readonly id: FieldRef<"sugar", 'Int'>
    readonly name: FieldRef<"sugar", 'String'>
    readonly energy: FieldRef<"sugar", 'Float'>
    readonly protein: FieldRef<"sugar", 'Float'>
    readonly total_fat: FieldRef<"sugar", 'Float'>
    readonly total_carbohydrates: FieldRef<"sugar", 'Float'>
    readonly fibra: FieldRef<"sugar", 'Float'>
    readonly calcium: FieldRef<"sugar", 'Float'>
    readonly fosforo: FieldRef<"sugar", 'Float'>
    readonly zinc: FieldRef<"sugar", 'Float'>
    readonly iron: FieldRef<"sugar", 'Float'>
    readonly sodium: FieldRef<"sugar", 'Float'>
    readonly potassium: FieldRef<"sugar", 'Float'>
    readonly image: FieldRef<"sugar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sugar findUnique
   */
  export type sugarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter, which sugar to fetch.
     */
    where: sugarWhereUniqueInput
  }

  /**
   * sugar findUniqueOrThrow
   */
  export type sugarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter, which sugar to fetch.
     */
    where: sugarWhereUniqueInput
  }

  /**
   * sugar findFirst
   */
  export type sugarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter, which sugar to fetch.
     */
    where?: sugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sugars to fetch.
     */
    orderBy?: sugarOrderByWithRelationInput | sugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sugars.
     */
    cursor?: sugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sugars.
     */
    distinct?: SugarScalarFieldEnum | SugarScalarFieldEnum[]
  }

  /**
   * sugar findFirstOrThrow
   */
  export type sugarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter, which sugar to fetch.
     */
    where?: sugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sugars to fetch.
     */
    orderBy?: sugarOrderByWithRelationInput | sugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sugars.
     */
    cursor?: sugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sugars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sugars.
     */
    distinct?: SugarScalarFieldEnum | SugarScalarFieldEnum[]
  }

  /**
   * sugar findMany
   */
  export type sugarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter, which sugars to fetch.
     */
    where?: sugarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sugars to fetch.
     */
    orderBy?: sugarOrderByWithRelationInput | sugarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sugars.
     */
    cursor?: sugarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sugars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sugars.
     */
    skip?: number
    distinct?: SugarScalarFieldEnum | SugarScalarFieldEnum[]
  }

  /**
   * sugar create
   */
  export type sugarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * The data needed to create a sugar.
     */
    data: XOR<sugarCreateInput, sugarUncheckedCreateInput>
  }

  /**
   * sugar createMany
   */
  export type sugarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sugars.
     */
    data: sugarCreateManyInput | sugarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sugar createManyAndReturn
   */
  export type sugarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * The data used to create many sugars.
     */
    data: sugarCreateManyInput | sugarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sugar update
   */
  export type sugarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * The data needed to update a sugar.
     */
    data: XOR<sugarUpdateInput, sugarUncheckedUpdateInput>
    /**
     * Choose, which sugar to update.
     */
    where: sugarWhereUniqueInput
  }

  /**
   * sugar updateMany
   */
  export type sugarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sugars.
     */
    data: XOR<sugarUpdateManyMutationInput, sugarUncheckedUpdateManyInput>
    /**
     * Filter which sugars to update
     */
    where?: sugarWhereInput
    /**
     * Limit how many sugars to update.
     */
    limit?: number
  }

  /**
   * sugar updateManyAndReturn
   */
  export type sugarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * The data used to update sugars.
     */
    data: XOR<sugarUpdateManyMutationInput, sugarUncheckedUpdateManyInput>
    /**
     * Filter which sugars to update
     */
    where?: sugarWhereInput
    /**
     * Limit how many sugars to update.
     */
    limit?: number
  }

  /**
   * sugar upsert
   */
  export type sugarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * The filter to search for the sugar to update in case it exists.
     */
    where: sugarWhereUniqueInput
    /**
     * In case the sugar found by the `where` argument doesn't exist, create a new sugar with this data.
     */
    create: XOR<sugarCreateInput, sugarUncheckedCreateInput>
    /**
     * In case the sugar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sugarUpdateInput, sugarUncheckedUpdateInput>
  }

  /**
   * sugar delete
   */
  export type sugarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
    /**
     * Filter which sugar to delete.
     */
    where: sugarWhereUniqueInput
  }

  /**
   * sugar deleteMany
   */
  export type sugarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sugars to delete
     */
    where?: sugarWhereInput
    /**
     * Limit how many sugars to delete.
     */
    limit?: number
  }

  /**
   * sugar without action
   */
  export type sugarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sugar
     */
    select?: sugarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sugar
     */
    omit?: sugarOmit<ExtArgs> | null
  }


  /**
   * Model tubers
   */

  export type AggregateTubers = {
    _count: TubersCountAggregateOutputType | null
    _avg: TubersAvgAggregateOutputType | null
    _sum: TubersSumAggregateOutputType | null
    _min: TubersMinAggregateOutputType | null
    _max: TubersMaxAggregateOutputType | null
  }

  export type TubersAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type TubersSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type TubersMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type TubersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type TubersCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type TubersAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type TubersSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type TubersMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type TubersMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type TubersCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type TubersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tubers to aggregate.
     */
    where?: tubersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tubers to fetch.
     */
    orderBy?: tubersOrderByWithRelationInput | tubersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tubersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tubers
    **/
    _count?: true | TubersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TubersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TubersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TubersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TubersMaxAggregateInputType
  }

  export type GetTubersAggregateType<T extends TubersAggregateArgs> = {
        [P in keyof T & keyof AggregateTubers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTubers[P]>
      : GetScalarType<T[P], AggregateTubers[P]>
  }




  export type tubersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tubersWhereInput
    orderBy?: tubersOrderByWithAggregationInput | tubersOrderByWithAggregationInput[]
    by: TubersScalarFieldEnum[] | TubersScalarFieldEnum
    having?: tubersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TubersCountAggregateInputType | true
    _avg?: TubersAvgAggregateInputType
    _sum?: TubersSumAggregateInputType
    _min?: TubersMinAggregateInputType
    _max?: TubersMaxAggregateInputType
  }

  export type TubersGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: TubersCountAggregateOutputType | null
    _avg: TubersAvgAggregateOutputType | null
    _sum: TubersSumAggregateOutputType | null
    _min: TubersMinAggregateOutputType | null
    _max: TubersMaxAggregateOutputType | null
  }

  type GetTubersGroupByPayload<T extends tubersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TubersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TubersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TubersGroupByOutputType[P]>
            : GetScalarType<T[P], TubersGroupByOutputType[P]>
        }
      >
    >


  export type tubersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["tubers"]>

  export type tubersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["tubers"]>

  export type tubersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["tubers"]>

  export type tubersSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type tubersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["tubers"]>

  export type $tubersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tubers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["tubers"]>
    composites: {}
  }

  type tubersGetPayload<S extends boolean | null | undefined | tubersDefaultArgs> = $Result.GetResult<Prisma.$tubersPayload, S>

  type tubersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tubersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TubersCountAggregateInputType | true
    }

  export interface tubersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tubers'], meta: { name: 'tubers' } }
    /**
     * Find zero or one Tubers that matches the filter.
     * @param {tubersFindUniqueArgs} args - Arguments to find a Tubers
     * @example
     * // Get one Tubers
     * const tubers = await prisma.tubers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tubersFindUniqueArgs>(args: SelectSubset<T, tubersFindUniqueArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tubers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tubersFindUniqueOrThrowArgs} args - Arguments to find a Tubers
     * @example
     * // Get one Tubers
     * const tubers = await prisma.tubers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tubersFindUniqueOrThrowArgs>(args: SelectSubset<T, tubersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersFindFirstArgs} args - Arguments to find a Tubers
     * @example
     * // Get one Tubers
     * const tubers = await prisma.tubers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tubersFindFirstArgs>(args?: SelectSubset<T, tubersFindFirstArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tubers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersFindFirstOrThrowArgs} args - Arguments to find a Tubers
     * @example
     * // Get one Tubers
     * const tubers = await prisma.tubers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tubersFindFirstOrThrowArgs>(args?: SelectSubset<T, tubersFindFirstOrThrowArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tubers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tubers
     * const tubers = await prisma.tubers.findMany()
     * 
     * // Get first 10 Tubers
     * const tubers = await prisma.tubers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tubersWithIdOnly = await prisma.tubers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tubersFindManyArgs>(args?: SelectSubset<T, tubersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tubers.
     * @param {tubersCreateArgs} args - Arguments to create a Tubers.
     * @example
     * // Create one Tubers
     * const Tubers = await prisma.tubers.create({
     *   data: {
     *     // ... data to create a Tubers
     *   }
     * })
     * 
     */
    create<T extends tubersCreateArgs>(args: SelectSubset<T, tubersCreateArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tubers.
     * @param {tubersCreateManyArgs} args - Arguments to create many Tubers.
     * @example
     * // Create many Tubers
     * const tubers = await prisma.tubers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tubersCreateManyArgs>(args?: SelectSubset<T, tubersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tubers and returns the data saved in the database.
     * @param {tubersCreateManyAndReturnArgs} args - Arguments to create many Tubers.
     * @example
     * // Create many Tubers
     * const tubers = await prisma.tubers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tubers and only return the `id`
     * const tubersWithIdOnly = await prisma.tubers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tubersCreateManyAndReturnArgs>(args?: SelectSubset<T, tubersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tubers.
     * @param {tubersDeleteArgs} args - Arguments to delete one Tubers.
     * @example
     * // Delete one Tubers
     * const Tubers = await prisma.tubers.delete({
     *   where: {
     *     // ... filter to delete one Tubers
     *   }
     * })
     * 
     */
    delete<T extends tubersDeleteArgs>(args: SelectSubset<T, tubersDeleteArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tubers.
     * @param {tubersUpdateArgs} args - Arguments to update one Tubers.
     * @example
     * // Update one Tubers
     * const tubers = await prisma.tubers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tubersUpdateArgs>(args: SelectSubset<T, tubersUpdateArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tubers.
     * @param {tubersDeleteManyArgs} args - Arguments to filter Tubers to delete.
     * @example
     * // Delete a few Tubers
     * const { count } = await prisma.tubers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tubersDeleteManyArgs>(args?: SelectSubset<T, tubersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tubers
     * const tubers = await prisma.tubers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tubersUpdateManyArgs>(args: SelectSubset<T, tubersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tubers and returns the data updated in the database.
     * @param {tubersUpdateManyAndReturnArgs} args - Arguments to update many Tubers.
     * @example
     * // Update many Tubers
     * const tubers = await prisma.tubers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tubers and only return the `id`
     * const tubersWithIdOnly = await prisma.tubers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tubersUpdateManyAndReturnArgs>(args: SelectSubset<T, tubersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tubers.
     * @param {tubersUpsertArgs} args - Arguments to update or create a Tubers.
     * @example
     * // Update or create a Tubers
     * const tubers = await prisma.tubers.upsert({
     *   create: {
     *     // ... data to create a Tubers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tubers we want to update
     *   }
     * })
     */
    upsert<T extends tubersUpsertArgs>(args: SelectSubset<T, tubersUpsertArgs<ExtArgs>>): Prisma__tubersClient<$Result.GetResult<Prisma.$tubersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersCountArgs} args - Arguments to filter Tubers to count.
     * @example
     * // Count the number of Tubers
     * const count = await prisma.tubers.count({
     *   where: {
     *     // ... the filter for the Tubers we want to count
     *   }
     * })
    **/
    count<T extends tubersCountArgs>(
      args?: Subset<T, tubersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TubersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TubersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TubersAggregateArgs>(args: Subset<T, TubersAggregateArgs>): Prisma.PrismaPromise<GetTubersAggregateType<T>>

    /**
     * Group by Tubers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tubersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tubersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tubersGroupByArgs['orderBy'] }
        : { orderBy?: tubersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tubersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTubersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tubers model
   */
  readonly fields: tubersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tubers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tubersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tubers model
   */
  interface tubersFieldRefs {
    readonly id: FieldRef<"tubers", 'Int'>
    readonly name: FieldRef<"tubers", 'String'>
    readonly energy: FieldRef<"tubers", 'Float'>
    readonly protein: FieldRef<"tubers", 'Float'>
    readonly total_fat: FieldRef<"tubers", 'Float'>
    readonly total_carbohydrates: FieldRef<"tubers", 'Float'>
    readonly fibra: FieldRef<"tubers", 'Float'>
    readonly calcium: FieldRef<"tubers", 'Float'>
    readonly fosforo: FieldRef<"tubers", 'Float'>
    readonly zinc: FieldRef<"tubers", 'Float'>
    readonly iron: FieldRef<"tubers", 'Float'>
    readonly sodium: FieldRef<"tubers", 'Float'>
    readonly potassium: FieldRef<"tubers", 'Float'>
    readonly image: FieldRef<"tubers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tubers findUnique
   */
  export type tubersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter, which tubers to fetch.
     */
    where: tubersWhereUniqueInput
  }

  /**
   * tubers findUniqueOrThrow
   */
  export type tubersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter, which tubers to fetch.
     */
    where: tubersWhereUniqueInput
  }

  /**
   * tubers findFirst
   */
  export type tubersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter, which tubers to fetch.
     */
    where?: tubersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tubers to fetch.
     */
    orderBy?: tubersOrderByWithRelationInput | tubersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tubers.
     */
    cursor?: tubersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tubers.
     */
    distinct?: TubersScalarFieldEnum | TubersScalarFieldEnum[]
  }

  /**
   * tubers findFirstOrThrow
   */
  export type tubersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter, which tubers to fetch.
     */
    where?: tubersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tubers to fetch.
     */
    orderBy?: tubersOrderByWithRelationInput | tubersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tubers.
     */
    cursor?: tubersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tubers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tubers.
     */
    distinct?: TubersScalarFieldEnum | TubersScalarFieldEnum[]
  }

  /**
   * tubers findMany
   */
  export type tubersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter, which tubers to fetch.
     */
    where?: tubersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tubers to fetch.
     */
    orderBy?: tubersOrderByWithRelationInput | tubersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tubers.
     */
    cursor?: tubersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tubers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tubers.
     */
    skip?: number
    distinct?: TubersScalarFieldEnum | TubersScalarFieldEnum[]
  }

  /**
   * tubers create
   */
  export type tubersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * The data needed to create a tubers.
     */
    data: XOR<tubersCreateInput, tubersUncheckedCreateInput>
  }

  /**
   * tubers createMany
   */
  export type tubersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tubers.
     */
    data: tubersCreateManyInput | tubersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tubers createManyAndReturn
   */
  export type tubersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * The data used to create many tubers.
     */
    data: tubersCreateManyInput | tubersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tubers update
   */
  export type tubersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * The data needed to update a tubers.
     */
    data: XOR<tubersUpdateInput, tubersUncheckedUpdateInput>
    /**
     * Choose, which tubers to update.
     */
    where: tubersWhereUniqueInput
  }

  /**
   * tubers updateMany
   */
  export type tubersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tubers.
     */
    data: XOR<tubersUpdateManyMutationInput, tubersUncheckedUpdateManyInput>
    /**
     * Filter which tubers to update
     */
    where?: tubersWhereInput
    /**
     * Limit how many tubers to update.
     */
    limit?: number
  }

  /**
   * tubers updateManyAndReturn
   */
  export type tubersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * The data used to update tubers.
     */
    data: XOR<tubersUpdateManyMutationInput, tubersUncheckedUpdateManyInput>
    /**
     * Filter which tubers to update
     */
    where?: tubersWhereInput
    /**
     * Limit how many tubers to update.
     */
    limit?: number
  }

  /**
   * tubers upsert
   */
  export type tubersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * The filter to search for the tubers to update in case it exists.
     */
    where: tubersWhereUniqueInput
    /**
     * In case the tubers found by the `where` argument doesn't exist, create a new tubers with this data.
     */
    create: XOR<tubersCreateInput, tubersUncheckedCreateInput>
    /**
     * In case the tubers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tubersUpdateInput, tubersUncheckedUpdateInput>
  }

  /**
   * tubers delete
   */
  export type tubersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
    /**
     * Filter which tubers to delete.
     */
    where: tubersWhereUniqueInput
  }

  /**
   * tubers deleteMany
   */
  export type tubersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tubers to delete
     */
    where?: tubersWhereInput
    /**
     * Limit how many tubers to delete.
     */
    limit?: number
  }

  /**
   * tubers without action
   */
  export type tubersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tubers
     */
    select?: tubersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tubers
     */
    omit?: tubersOmit<ExtArgs> | null
  }


  /**
   * Model vegetables
   */

  export type AggregateVegetables = {
    _count: VegetablesCountAggregateOutputType | null
    _avg: VegetablesAvgAggregateOutputType | null
    _sum: VegetablesSumAggregateOutputType | null
    _min: VegetablesMinAggregateOutputType | null
    _max: VegetablesMaxAggregateOutputType | null
  }

  export type VegetablesAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type VegetablesSumAggregateOutputType = {
    id: number | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
  }

  export type VegetablesMinAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type VegetablesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    energy: number | null
    protein: number | null
    total_fat: number | null
    total_carbohydrates: number | null
    fibra: number | null
    calcium: number | null
    fosforo: number | null
    zinc: number | null
    iron: number | null
    sodium: number | null
    potassium: number | null
    image: string | null
  }

  export type VegetablesCountAggregateOutputType = {
    id: number
    name: number
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: number
    _all: number
  }


  export type VegetablesAvgAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type VegetablesSumAggregateInputType = {
    id?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
  }

  export type VegetablesMinAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type VegetablesMaxAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
  }

  export type VegetablesCountAggregateInputType = {
    id?: true
    name?: true
    energy?: true
    protein?: true
    total_fat?: true
    total_carbohydrates?: true
    fibra?: true
    calcium?: true
    fosforo?: true
    zinc?: true
    iron?: true
    sodium?: true
    potassium?: true
    image?: true
    _all?: true
  }

  export type VegetablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vegetables to aggregate.
     */
    where?: vegetablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vegetables to fetch.
     */
    orderBy?: vegetablesOrderByWithRelationInput | vegetablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vegetablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vegetables
    **/
    _count?: true | VegetablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VegetablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VegetablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VegetablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VegetablesMaxAggregateInputType
  }

  export type GetVegetablesAggregateType<T extends VegetablesAggregateArgs> = {
        [P in keyof T & keyof AggregateVegetables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVegetables[P]>
      : GetScalarType<T[P], AggregateVegetables[P]>
  }




  export type vegetablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vegetablesWhereInput
    orderBy?: vegetablesOrderByWithAggregationInput | vegetablesOrderByWithAggregationInput[]
    by: VegetablesScalarFieldEnum[] | VegetablesScalarFieldEnum
    having?: vegetablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VegetablesCountAggregateInputType | true
    _avg?: VegetablesAvgAggregateInputType
    _sum?: VegetablesSumAggregateInputType
    _min?: VegetablesMinAggregateInputType
    _max?: VegetablesMaxAggregateInputType
  }

  export type VegetablesGroupByOutputType = {
    id: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image: string
    _count: VegetablesCountAggregateOutputType | null
    _avg: VegetablesAvgAggregateOutputType | null
    _sum: VegetablesSumAggregateOutputType | null
    _min: VegetablesMinAggregateOutputType | null
    _max: VegetablesMaxAggregateOutputType | null
  }

  type GetVegetablesGroupByPayload<T extends vegetablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VegetablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VegetablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VegetablesGroupByOutputType[P]>
            : GetScalarType<T[P], VegetablesGroupByOutputType[P]>
        }
      >
    >


  export type vegetablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["vegetables"]>

  export type vegetablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["vegetables"]>

  export type vegetablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }, ExtArgs["result"]["vegetables"]>

  export type vegetablesSelectScalar = {
    id?: boolean
    name?: boolean
    energy?: boolean
    protein?: boolean
    total_fat?: boolean
    total_carbohydrates?: boolean
    fibra?: boolean
    calcium?: boolean
    fosforo?: boolean
    zinc?: boolean
    iron?: boolean
    sodium?: boolean
    potassium?: boolean
    image?: boolean
  }

  export type vegetablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "energy" | "protein" | "total_fat" | "total_carbohydrates" | "fibra" | "calcium" | "fosforo" | "zinc" | "iron" | "sodium" | "potassium" | "image", ExtArgs["result"]["vegetables"]>

  export type $vegetablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vegetables"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      energy: number
      protein: number
      total_fat: number
      total_carbohydrates: number
      fibra: number
      calcium: number
      fosforo: number
      zinc: number
      iron: number
      sodium: number
      potassium: number
      image: string
    }, ExtArgs["result"]["vegetables"]>
    composites: {}
  }

  type vegetablesGetPayload<S extends boolean | null | undefined | vegetablesDefaultArgs> = $Result.GetResult<Prisma.$vegetablesPayload, S>

  type vegetablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vegetablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VegetablesCountAggregateInputType | true
    }

  export interface vegetablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vegetables'], meta: { name: 'vegetables' } }
    /**
     * Find zero or one Vegetables that matches the filter.
     * @param {vegetablesFindUniqueArgs} args - Arguments to find a Vegetables
     * @example
     * // Get one Vegetables
     * const vegetables = await prisma.vegetables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vegetablesFindUniqueArgs>(args: SelectSubset<T, vegetablesFindUniqueArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vegetables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vegetablesFindUniqueOrThrowArgs} args - Arguments to find a Vegetables
     * @example
     * // Get one Vegetables
     * const vegetables = await prisma.vegetables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vegetablesFindUniqueOrThrowArgs>(args: SelectSubset<T, vegetablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesFindFirstArgs} args - Arguments to find a Vegetables
     * @example
     * // Get one Vegetables
     * const vegetables = await prisma.vegetables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vegetablesFindFirstArgs>(args?: SelectSubset<T, vegetablesFindFirstArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesFindFirstOrThrowArgs} args - Arguments to find a Vegetables
     * @example
     * // Get one Vegetables
     * const vegetables = await prisma.vegetables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vegetablesFindFirstOrThrowArgs>(args?: SelectSubset<T, vegetablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vegetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vegetables
     * const vegetables = await prisma.vegetables.findMany()
     * 
     * // Get first 10 Vegetables
     * const vegetables = await prisma.vegetables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vegetablesWithIdOnly = await prisma.vegetables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vegetablesFindManyArgs>(args?: SelectSubset<T, vegetablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vegetables.
     * @param {vegetablesCreateArgs} args - Arguments to create a Vegetables.
     * @example
     * // Create one Vegetables
     * const Vegetables = await prisma.vegetables.create({
     *   data: {
     *     // ... data to create a Vegetables
     *   }
     * })
     * 
     */
    create<T extends vegetablesCreateArgs>(args: SelectSubset<T, vegetablesCreateArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vegetables.
     * @param {vegetablesCreateManyArgs} args - Arguments to create many Vegetables.
     * @example
     * // Create many Vegetables
     * const vegetables = await prisma.vegetables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vegetablesCreateManyArgs>(args?: SelectSubset<T, vegetablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vegetables and returns the data saved in the database.
     * @param {vegetablesCreateManyAndReturnArgs} args - Arguments to create many Vegetables.
     * @example
     * // Create many Vegetables
     * const vegetables = await prisma.vegetables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vegetables and only return the `id`
     * const vegetablesWithIdOnly = await prisma.vegetables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vegetablesCreateManyAndReturnArgs>(args?: SelectSubset<T, vegetablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vegetables.
     * @param {vegetablesDeleteArgs} args - Arguments to delete one Vegetables.
     * @example
     * // Delete one Vegetables
     * const Vegetables = await prisma.vegetables.delete({
     *   where: {
     *     // ... filter to delete one Vegetables
     *   }
     * })
     * 
     */
    delete<T extends vegetablesDeleteArgs>(args: SelectSubset<T, vegetablesDeleteArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vegetables.
     * @param {vegetablesUpdateArgs} args - Arguments to update one Vegetables.
     * @example
     * // Update one Vegetables
     * const vegetables = await prisma.vegetables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vegetablesUpdateArgs>(args: SelectSubset<T, vegetablesUpdateArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vegetables.
     * @param {vegetablesDeleteManyArgs} args - Arguments to filter Vegetables to delete.
     * @example
     * // Delete a few Vegetables
     * const { count } = await prisma.vegetables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vegetablesDeleteManyArgs>(args?: SelectSubset<T, vegetablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vegetables
     * const vegetables = await prisma.vegetables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vegetablesUpdateManyArgs>(args: SelectSubset<T, vegetablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vegetables and returns the data updated in the database.
     * @param {vegetablesUpdateManyAndReturnArgs} args - Arguments to update many Vegetables.
     * @example
     * // Update many Vegetables
     * const vegetables = await prisma.vegetables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vegetables and only return the `id`
     * const vegetablesWithIdOnly = await prisma.vegetables.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vegetablesUpdateManyAndReturnArgs>(args: SelectSubset<T, vegetablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vegetables.
     * @param {vegetablesUpsertArgs} args - Arguments to update or create a Vegetables.
     * @example
     * // Update or create a Vegetables
     * const vegetables = await prisma.vegetables.upsert({
     *   create: {
     *     // ... data to create a Vegetables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vegetables we want to update
     *   }
     * })
     */
    upsert<T extends vegetablesUpsertArgs>(args: SelectSubset<T, vegetablesUpsertArgs<ExtArgs>>): Prisma__vegetablesClient<$Result.GetResult<Prisma.$vegetablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesCountArgs} args - Arguments to filter Vegetables to count.
     * @example
     * // Count the number of Vegetables
     * const count = await prisma.vegetables.count({
     *   where: {
     *     // ... the filter for the Vegetables we want to count
     *   }
     * })
    **/
    count<T extends vegetablesCountArgs>(
      args?: Subset<T, vegetablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VegetablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VegetablesAggregateArgs>(args: Subset<T, VegetablesAggregateArgs>): Prisma.PrismaPromise<GetVegetablesAggregateType<T>>

    /**
     * Group by Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vegetablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vegetablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vegetablesGroupByArgs['orderBy'] }
        : { orderBy?: vegetablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vegetablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVegetablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vegetables model
   */
  readonly fields: vegetablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vegetables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vegetablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vegetables model
   */
  interface vegetablesFieldRefs {
    readonly id: FieldRef<"vegetables", 'Int'>
    readonly name: FieldRef<"vegetables", 'String'>
    readonly energy: FieldRef<"vegetables", 'Float'>
    readonly protein: FieldRef<"vegetables", 'Float'>
    readonly total_fat: FieldRef<"vegetables", 'Float'>
    readonly total_carbohydrates: FieldRef<"vegetables", 'Float'>
    readonly fibra: FieldRef<"vegetables", 'Float'>
    readonly calcium: FieldRef<"vegetables", 'Float'>
    readonly fosforo: FieldRef<"vegetables", 'Float'>
    readonly zinc: FieldRef<"vegetables", 'Float'>
    readonly iron: FieldRef<"vegetables", 'Float'>
    readonly sodium: FieldRef<"vegetables", 'Float'>
    readonly potassium: FieldRef<"vegetables", 'Float'>
    readonly image: FieldRef<"vegetables", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vegetables findUnique
   */
  export type vegetablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter, which vegetables to fetch.
     */
    where: vegetablesWhereUniqueInput
  }

  /**
   * vegetables findUniqueOrThrow
   */
  export type vegetablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter, which vegetables to fetch.
     */
    where: vegetablesWhereUniqueInput
  }

  /**
   * vegetables findFirst
   */
  export type vegetablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter, which vegetables to fetch.
     */
    where?: vegetablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vegetables to fetch.
     */
    orderBy?: vegetablesOrderByWithRelationInput | vegetablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vegetables.
     */
    cursor?: vegetablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vegetables.
     */
    distinct?: VegetablesScalarFieldEnum | VegetablesScalarFieldEnum[]
  }

  /**
   * vegetables findFirstOrThrow
   */
  export type vegetablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter, which vegetables to fetch.
     */
    where?: vegetablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vegetables to fetch.
     */
    orderBy?: vegetablesOrderByWithRelationInput | vegetablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vegetables.
     */
    cursor?: vegetablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vegetables.
     */
    distinct?: VegetablesScalarFieldEnum | VegetablesScalarFieldEnum[]
  }

  /**
   * vegetables findMany
   */
  export type vegetablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter, which vegetables to fetch.
     */
    where?: vegetablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vegetables to fetch.
     */
    orderBy?: vegetablesOrderByWithRelationInput | vegetablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vegetables.
     */
    cursor?: vegetablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vegetables.
     */
    skip?: number
    distinct?: VegetablesScalarFieldEnum | VegetablesScalarFieldEnum[]
  }

  /**
   * vegetables create
   */
  export type vegetablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * The data needed to create a vegetables.
     */
    data: XOR<vegetablesCreateInput, vegetablesUncheckedCreateInput>
  }

  /**
   * vegetables createMany
   */
  export type vegetablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vegetables.
     */
    data: vegetablesCreateManyInput | vegetablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vegetables createManyAndReturn
   */
  export type vegetablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * The data used to create many vegetables.
     */
    data: vegetablesCreateManyInput | vegetablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vegetables update
   */
  export type vegetablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * The data needed to update a vegetables.
     */
    data: XOR<vegetablesUpdateInput, vegetablesUncheckedUpdateInput>
    /**
     * Choose, which vegetables to update.
     */
    where: vegetablesWhereUniqueInput
  }

  /**
   * vegetables updateMany
   */
  export type vegetablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vegetables.
     */
    data: XOR<vegetablesUpdateManyMutationInput, vegetablesUncheckedUpdateManyInput>
    /**
     * Filter which vegetables to update
     */
    where?: vegetablesWhereInput
    /**
     * Limit how many vegetables to update.
     */
    limit?: number
  }

  /**
   * vegetables updateManyAndReturn
   */
  export type vegetablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * The data used to update vegetables.
     */
    data: XOR<vegetablesUpdateManyMutationInput, vegetablesUncheckedUpdateManyInput>
    /**
     * Filter which vegetables to update
     */
    where?: vegetablesWhereInput
    /**
     * Limit how many vegetables to update.
     */
    limit?: number
  }

  /**
   * vegetables upsert
   */
  export type vegetablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * The filter to search for the vegetables to update in case it exists.
     */
    where: vegetablesWhereUniqueInput
    /**
     * In case the vegetables found by the `where` argument doesn't exist, create a new vegetables with this data.
     */
    create: XOR<vegetablesCreateInput, vegetablesUncheckedCreateInput>
    /**
     * In case the vegetables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vegetablesUpdateInput, vegetablesUncheckedUpdateInput>
  }

  /**
   * vegetables delete
   */
  export type vegetablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
    /**
     * Filter which vegetables to delete.
     */
    where: vegetablesWhereUniqueInput
  }

  /**
   * vegetables deleteMany
   */
  export type vegetablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vegetables to delete
     */
    where?: vegetablesWhereInput
    /**
     * Limit how many vegetables to delete.
     */
    limit?: number
  }

  /**
   * vegetables without action
   */
  export type vegetablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vegetables
     */
    select?: vegetablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vegetables
     */
    omit?: vegetablesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CerealsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type CerealsScalarFieldEnum = (typeof CerealsScalarFieldEnum)[keyof typeof CerealsScalarFieldEnum]


  export const DairyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type DairyScalarFieldEnum = (typeof DairyScalarFieldEnum)[keyof typeof DairyScalarFieldEnum]


  export const DrinksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type DrinksScalarFieldEnum = (typeof DrinksScalarFieldEnum)[keyof typeof DrinksScalarFieldEnum]


  export const EggsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type EggsScalarFieldEnum = (typeof EggsScalarFieldEnum)[keyof typeof EggsScalarFieldEnum]


  export const FatsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type FatsScalarFieldEnum = (typeof FatsScalarFieldEnum)[keyof typeof FatsScalarFieldEnum]


  export const FruitsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type FruitsScalarFieldEnum = (typeof FruitsScalarFieldEnum)[keyof typeof FruitsScalarFieldEnum]


  export const LegumesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type LegumesScalarFieldEnum = (typeof LegumesScalarFieldEnum)[keyof typeof LegumesScalarFieldEnum]


  export const MeatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type MeatScalarFieldEnum = (typeof MeatScalarFieldEnum)[keyof typeof MeatScalarFieldEnum]


  export const MiscellaneousScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type MiscellaneousScalarFieldEnum = (typeof MiscellaneousScalarFieldEnum)[keyof typeof MiscellaneousScalarFieldEnum]


  export const SeafoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type SeafoodScalarFieldEnum = (typeof SeafoodScalarFieldEnum)[keyof typeof SeafoodScalarFieldEnum]


  export const SugarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type SugarScalarFieldEnum = (typeof SugarScalarFieldEnum)[keyof typeof SugarScalarFieldEnum]


  export const TubersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type TubersScalarFieldEnum = (typeof TubersScalarFieldEnum)[keyof typeof TubersScalarFieldEnum]


  export const VegetablesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    energy: 'energy',
    protein: 'protein',
    total_fat: 'total_fat',
    total_carbohydrates: 'total_carbohydrates',
    fibra: 'fibra',
    calcium: 'calcium',
    fosforo: 'fosforo',
    zinc: 'zinc',
    iron: 'iron',
    sodium: 'sodium',
    potassium: 'potassium',
    image: 'image'
  };

  export type VegetablesScalarFieldEnum = (typeof VegetablesScalarFieldEnum)[keyof typeof VegetablesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cerealsWhereInput = {
    AND?: cerealsWhereInput | cerealsWhereInput[]
    OR?: cerealsWhereInput[]
    NOT?: cerealsWhereInput | cerealsWhereInput[]
    id?: IntFilter<"cereals"> | number
    name?: StringFilter<"cereals"> | string
    energy?: FloatFilter<"cereals"> | number
    protein?: FloatFilter<"cereals"> | number
    total_fat?: FloatFilter<"cereals"> | number
    total_carbohydrates?: FloatFilter<"cereals"> | number
    fibra?: FloatFilter<"cereals"> | number
    calcium?: FloatFilter<"cereals"> | number
    fosforo?: FloatFilter<"cereals"> | number
    zinc?: FloatFilter<"cereals"> | number
    iron?: FloatFilter<"cereals"> | number
    sodium?: FloatFilter<"cereals"> | number
    potassium?: FloatFilter<"cereals"> | number
    image?: StringFilter<"cereals"> | string
  }

  export type cerealsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type cerealsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cerealsWhereInput | cerealsWhereInput[]
    OR?: cerealsWhereInput[]
    NOT?: cerealsWhereInput | cerealsWhereInput[]
    name?: StringFilter<"cereals"> | string
    energy?: FloatFilter<"cereals"> | number
    protein?: FloatFilter<"cereals"> | number
    total_fat?: FloatFilter<"cereals"> | number
    total_carbohydrates?: FloatFilter<"cereals"> | number
    fibra?: FloatFilter<"cereals"> | number
    calcium?: FloatFilter<"cereals"> | number
    fosforo?: FloatFilter<"cereals"> | number
    zinc?: FloatFilter<"cereals"> | number
    iron?: FloatFilter<"cereals"> | number
    sodium?: FloatFilter<"cereals"> | number
    potassium?: FloatFilter<"cereals"> | number
    image?: StringFilter<"cereals"> | string
  }, "id">

  export type cerealsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: cerealsCountOrderByAggregateInput
    _avg?: cerealsAvgOrderByAggregateInput
    _max?: cerealsMaxOrderByAggregateInput
    _min?: cerealsMinOrderByAggregateInput
    _sum?: cerealsSumOrderByAggregateInput
  }

  export type cerealsScalarWhereWithAggregatesInput = {
    AND?: cerealsScalarWhereWithAggregatesInput | cerealsScalarWhereWithAggregatesInput[]
    OR?: cerealsScalarWhereWithAggregatesInput[]
    NOT?: cerealsScalarWhereWithAggregatesInput | cerealsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cereals"> | number
    name?: StringWithAggregatesFilter<"cereals"> | string
    energy?: FloatWithAggregatesFilter<"cereals"> | number
    protein?: FloatWithAggregatesFilter<"cereals"> | number
    total_fat?: FloatWithAggregatesFilter<"cereals"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"cereals"> | number
    fibra?: FloatWithAggregatesFilter<"cereals"> | number
    calcium?: FloatWithAggregatesFilter<"cereals"> | number
    fosforo?: FloatWithAggregatesFilter<"cereals"> | number
    zinc?: FloatWithAggregatesFilter<"cereals"> | number
    iron?: FloatWithAggregatesFilter<"cereals"> | number
    sodium?: FloatWithAggregatesFilter<"cereals"> | number
    potassium?: FloatWithAggregatesFilter<"cereals"> | number
    image?: StringWithAggregatesFilter<"cereals"> | string
  }

  export type dairyWhereInput = {
    AND?: dairyWhereInput | dairyWhereInput[]
    OR?: dairyWhereInput[]
    NOT?: dairyWhereInput | dairyWhereInput[]
    id?: IntFilter<"dairy"> | number
    name?: StringFilter<"dairy"> | string
    energy?: FloatFilter<"dairy"> | number
    protein?: FloatFilter<"dairy"> | number
    total_fat?: FloatFilter<"dairy"> | number
    total_carbohydrates?: FloatFilter<"dairy"> | number
    fibra?: FloatFilter<"dairy"> | number
    calcium?: FloatFilter<"dairy"> | number
    fosforo?: FloatFilter<"dairy"> | number
    zinc?: FloatFilter<"dairy"> | number
    iron?: FloatFilter<"dairy"> | number
    sodium?: FloatFilter<"dairy"> | number
    potassium?: FloatFilter<"dairy"> | number
    image?: StringFilter<"dairy"> | string
  }

  export type dairyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type dairyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dairyWhereInput | dairyWhereInput[]
    OR?: dairyWhereInput[]
    NOT?: dairyWhereInput | dairyWhereInput[]
    name?: StringFilter<"dairy"> | string
    energy?: FloatFilter<"dairy"> | number
    protein?: FloatFilter<"dairy"> | number
    total_fat?: FloatFilter<"dairy"> | number
    total_carbohydrates?: FloatFilter<"dairy"> | number
    fibra?: FloatFilter<"dairy"> | number
    calcium?: FloatFilter<"dairy"> | number
    fosforo?: FloatFilter<"dairy"> | number
    zinc?: FloatFilter<"dairy"> | number
    iron?: FloatFilter<"dairy"> | number
    sodium?: FloatFilter<"dairy"> | number
    potassium?: FloatFilter<"dairy"> | number
    image?: StringFilter<"dairy"> | string
  }, "id">

  export type dairyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: dairyCountOrderByAggregateInput
    _avg?: dairyAvgOrderByAggregateInput
    _max?: dairyMaxOrderByAggregateInput
    _min?: dairyMinOrderByAggregateInput
    _sum?: dairySumOrderByAggregateInput
  }

  export type dairyScalarWhereWithAggregatesInput = {
    AND?: dairyScalarWhereWithAggregatesInput | dairyScalarWhereWithAggregatesInput[]
    OR?: dairyScalarWhereWithAggregatesInput[]
    NOT?: dairyScalarWhereWithAggregatesInput | dairyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dairy"> | number
    name?: StringWithAggregatesFilter<"dairy"> | string
    energy?: FloatWithAggregatesFilter<"dairy"> | number
    protein?: FloatWithAggregatesFilter<"dairy"> | number
    total_fat?: FloatWithAggregatesFilter<"dairy"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"dairy"> | number
    fibra?: FloatWithAggregatesFilter<"dairy"> | number
    calcium?: FloatWithAggregatesFilter<"dairy"> | number
    fosforo?: FloatWithAggregatesFilter<"dairy"> | number
    zinc?: FloatWithAggregatesFilter<"dairy"> | number
    iron?: FloatWithAggregatesFilter<"dairy"> | number
    sodium?: FloatWithAggregatesFilter<"dairy"> | number
    potassium?: FloatWithAggregatesFilter<"dairy"> | number
    image?: StringWithAggregatesFilter<"dairy"> | string
  }

  export type drinksWhereInput = {
    AND?: drinksWhereInput | drinksWhereInput[]
    OR?: drinksWhereInput[]
    NOT?: drinksWhereInput | drinksWhereInput[]
    id?: IntFilter<"drinks"> | number
    name?: StringFilter<"drinks"> | string
    energy?: FloatFilter<"drinks"> | number
    protein?: FloatFilter<"drinks"> | number
    total_fat?: FloatFilter<"drinks"> | number
    total_carbohydrates?: FloatFilter<"drinks"> | number
    fibra?: FloatFilter<"drinks"> | number
    calcium?: FloatFilter<"drinks"> | number
    fosforo?: FloatFilter<"drinks"> | number
    zinc?: FloatFilter<"drinks"> | number
    iron?: FloatFilter<"drinks"> | number
    sodium?: FloatFilter<"drinks"> | number
    potassium?: FloatFilter<"drinks"> | number
    image?: StringFilter<"drinks"> | string
  }

  export type drinksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type drinksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: drinksWhereInput | drinksWhereInput[]
    OR?: drinksWhereInput[]
    NOT?: drinksWhereInput | drinksWhereInput[]
    name?: StringFilter<"drinks"> | string
    energy?: FloatFilter<"drinks"> | number
    protein?: FloatFilter<"drinks"> | number
    total_fat?: FloatFilter<"drinks"> | number
    total_carbohydrates?: FloatFilter<"drinks"> | number
    fibra?: FloatFilter<"drinks"> | number
    calcium?: FloatFilter<"drinks"> | number
    fosforo?: FloatFilter<"drinks"> | number
    zinc?: FloatFilter<"drinks"> | number
    iron?: FloatFilter<"drinks"> | number
    sodium?: FloatFilter<"drinks"> | number
    potassium?: FloatFilter<"drinks"> | number
    image?: StringFilter<"drinks"> | string
  }, "id">

  export type drinksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: drinksCountOrderByAggregateInput
    _avg?: drinksAvgOrderByAggregateInput
    _max?: drinksMaxOrderByAggregateInput
    _min?: drinksMinOrderByAggregateInput
    _sum?: drinksSumOrderByAggregateInput
  }

  export type drinksScalarWhereWithAggregatesInput = {
    AND?: drinksScalarWhereWithAggregatesInput | drinksScalarWhereWithAggregatesInput[]
    OR?: drinksScalarWhereWithAggregatesInput[]
    NOT?: drinksScalarWhereWithAggregatesInput | drinksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"drinks"> | number
    name?: StringWithAggregatesFilter<"drinks"> | string
    energy?: FloatWithAggregatesFilter<"drinks"> | number
    protein?: FloatWithAggregatesFilter<"drinks"> | number
    total_fat?: FloatWithAggregatesFilter<"drinks"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"drinks"> | number
    fibra?: FloatWithAggregatesFilter<"drinks"> | number
    calcium?: FloatWithAggregatesFilter<"drinks"> | number
    fosforo?: FloatWithAggregatesFilter<"drinks"> | number
    zinc?: FloatWithAggregatesFilter<"drinks"> | number
    iron?: FloatWithAggregatesFilter<"drinks"> | number
    sodium?: FloatWithAggregatesFilter<"drinks"> | number
    potassium?: FloatWithAggregatesFilter<"drinks"> | number
    image?: StringWithAggregatesFilter<"drinks"> | string
  }

  export type eggsWhereInput = {
    AND?: eggsWhereInput | eggsWhereInput[]
    OR?: eggsWhereInput[]
    NOT?: eggsWhereInput | eggsWhereInput[]
    id?: IntFilter<"eggs"> | number
    name?: StringFilter<"eggs"> | string
    energy?: FloatFilter<"eggs"> | number
    protein?: FloatFilter<"eggs"> | number
    total_fat?: FloatFilter<"eggs"> | number
    total_carbohydrates?: FloatFilter<"eggs"> | number
    fibra?: FloatFilter<"eggs"> | number
    calcium?: FloatFilter<"eggs"> | number
    fosforo?: FloatFilter<"eggs"> | number
    zinc?: FloatFilter<"eggs"> | number
    iron?: FloatFilter<"eggs"> | number
    sodium?: FloatFilter<"eggs"> | number
    potassium?: FloatFilter<"eggs"> | number
    image?: StringFilter<"eggs"> | string
  }

  export type eggsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type eggsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eggsWhereInput | eggsWhereInput[]
    OR?: eggsWhereInput[]
    NOT?: eggsWhereInput | eggsWhereInput[]
    name?: StringFilter<"eggs"> | string
    energy?: FloatFilter<"eggs"> | number
    protein?: FloatFilter<"eggs"> | number
    total_fat?: FloatFilter<"eggs"> | number
    total_carbohydrates?: FloatFilter<"eggs"> | number
    fibra?: FloatFilter<"eggs"> | number
    calcium?: FloatFilter<"eggs"> | number
    fosforo?: FloatFilter<"eggs"> | number
    zinc?: FloatFilter<"eggs"> | number
    iron?: FloatFilter<"eggs"> | number
    sodium?: FloatFilter<"eggs"> | number
    potassium?: FloatFilter<"eggs"> | number
    image?: StringFilter<"eggs"> | string
  }, "id">

  export type eggsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: eggsCountOrderByAggregateInput
    _avg?: eggsAvgOrderByAggregateInput
    _max?: eggsMaxOrderByAggregateInput
    _min?: eggsMinOrderByAggregateInput
    _sum?: eggsSumOrderByAggregateInput
  }

  export type eggsScalarWhereWithAggregatesInput = {
    AND?: eggsScalarWhereWithAggregatesInput | eggsScalarWhereWithAggregatesInput[]
    OR?: eggsScalarWhereWithAggregatesInput[]
    NOT?: eggsScalarWhereWithAggregatesInput | eggsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"eggs"> | number
    name?: StringWithAggregatesFilter<"eggs"> | string
    energy?: FloatWithAggregatesFilter<"eggs"> | number
    protein?: FloatWithAggregatesFilter<"eggs"> | number
    total_fat?: FloatWithAggregatesFilter<"eggs"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"eggs"> | number
    fibra?: FloatWithAggregatesFilter<"eggs"> | number
    calcium?: FloatWithAggregatesFilter<"eggs"> | number
    fosforo?: FloatWithAggregatesFilter<"eggs"> | number
    zinc?: FloatWithAggregatesFilter<"eggs"> | number
    iron?: FloatWithAggregatesFilter<"eggs"> | number
    sodium?: FloatWithAggregatesFilter<"eggs"> | number
    potassium?: FloatWithAggregatesFilter<"eggs"> | number
    image?: StringWithAggregatesFilter<"eggs"> | string
  }

  export type fatsWhereInput = {
    AND?: fatsWhereInput | fatsWhereInput[]
    OR?: fatsWhereInput[]
    NOT?: fatsWhereInput | fatsWhereInput[]
    id?: IntFilter<"fats"> | number
    name?: StringFilter<"fats"> | string
    energy?: FloatFilter<"fats"> | number
    protein?: FloatFilter<"fats"> | number
    total_fat?: FloatFilter<"fats"> | number
    total_carbohydrates?: FloatFilter<"fats"> | number
    fibra?: FloatFilter<"fats"> | number
    calcium?: FloatFilter<"fats"> | number
    fosforo?: FloatFilter<"fats"> | number
    zinc?: FloatFilter<"fats"> | number
    iron?: FloatFilter<"fats"> | number
    sodium?: FloatFilter<"fats"> | number
    potassium?: FloatFilter<"fats"> | number
    image?: StringFilter<"fats"> | string
  }

  export type fatsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fatsWhereInput | fatsWhereInput[]
    OR?: fatsWhereInput[]
    NOT?: fatsWhereInput | fatsWhereInput[]
    name?: StringFilter<"fats"> | string
    energy?: FloatFilter<"fats"> | number
    protein?: FloatFilter<"fats"> | number
    total_fat?: FloatFilter<"fats"> | number
    total_carbohydrates?: FloatFilter<"fats"> | number
    fibra?: FloatFilter<"fats"> | number
    calcium?: FloatFilter<"fats"> | number
    fosforo?: FloatFilter<"fats"> | number
    zinc?: FloatFilter<"fats"> | number
    iron?: FloatFilter<"fats"> | number
    sodium?: FloatFilter<"fats"> | number
    potassium?: FloatFilter<"fats"> | number
    image?: StringFilter<"fats"> | string
  }, "id">

  export type fatsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: fatsCountOrderByAggregateInput
    _avg?: fatsAvgOrderByAggregateInput
    _max?: fatsMaxOrderByAggregateInput
    _min?: fatsMinOrderByAggregateInput
    _sum?: fatsSumOrderByAggregateInput
  }

  export type fatsScalarWhereWithAggregatesInput = {
    AND?: fatsScalarWhereWithAggregatesInput | fatsScalarWhereWithAggregatesInput[]
    OR?: fatsScalarWhereWithAggregatesInput[]
    NOT?: fatsScalarWhereWithAggregatesInput | fatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fats"> | number
    name?: StringWithAggregatesFilter<"fats"> | string
    energy?: FloatWithAggregatesFilter<"fats"> | number
    protein?: FloatWithAggregatesFilter<"fats"> | number
    total_fat?: FloatWithAggregatesFilter<"fats"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"fats"> | number
    fibra?: FloatWithAggregatesFilter<"fats"> | number
    calcium?: FloatWithAggregatesFilter<"fats"> | number
    fosforo?: FloatWithAggregatesFilter<"fats"> | number
    zinc?: FloatWithAggregatesFilter<"fats"> | number
    iron?: FloatWithAggregatesFilter<"fats"> | number
    sodium?: FloatWithAggregatesFilter<"fats"> | number
    potassium?: FloatWithAggregatesFilter<"fats"> | number
    image?: StringWithAggregatesFilter<"fats"> | string
  }

  export type fruitsWhereInput = {
    AND?: fruitsWhereInput | fruitsWhereInput[]
    OR?: fruitsWhereInput[]
    NOT?: fruitsWhereInput | fruitsWhereInput[]
    id?: IntFilter<"fruits"> | number
    name?: StringFilter<"fruits"> | string
    energy?: FloatFilter<"fruits"> | number
    protein?: FloatFilter<"fruits"> | number
    total_fat?: FloatFilter<"fruits"> | number
    total_carbohydrates?: FloatFilter<"fruits"> | number
    fibra?: FloatFilter<"fruits"> | number
    calcium?: FloatFilter<"fruits"> | number
    fosforo?: FloatFilter<"fruits"> | number
    zinc?: FloatFilter<"fruits"> | number
    iron?: FloatFilter<"fruits"> | number
    sodium?: FloatFilter<"fruits"> | number
    potassium?: FloatFilter<"fruits"> | number
    image?: StringFilter<"fruits"> | string
  }

  export type fruitsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fruitsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fruitsWhereInput | fruitsWhereInput[]
    OR?: fruitsWhereInput[]
    NOT?: fruitsWhereInput | fruitsWhereInput[]
    name?: StringFilter<"fruits"> | string
    energy?: FloatFilter<"fruits"> | number
    protein?: FloatFilter<"fruits"> | number
    total_fat?: FloatFilter<"fruits"> | number
    total_carbohydrates?: FloatFilter<"fruits"> | number
    fibra?: FloatFilter<"fruits"> | number
    calcium?: FloatFilter<"fruits"> | number
    fosforo?: FloatFilter<"fruits"> | number
    zinc?: FloatFilter<"fruits"> | number
    iron?: FloatFilter<"fruits"> | number
    sodium?: FloatFilter<"fruits"> | number
    potassium?: FloatFilter<"fruits"> | number
    image?: StringFilter<"fruits"> | string
  }, "id">

  export type fruitsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: fruitsCountOrderByAggregateInput
    _avg?: fruitsAvgOrderByAggregateInput
    _max?: fruitsMaxOrderByAggregateInput
    _min?: fruitsMinOrderByAggregateInput
    _sum?: fruitsSumOrderByAggregateInput
  }

  export type fruitsScalarWhereWithAggregatesInput = {
    AND?: fruitsScalarWhereWithAggregatesInput | fruitsScalarWhereWithAggregatesInput[]
    OR?: fruitsScalarWhereWithAggregatesInput[]
    NOT?: fruitsScalarWhereWithAggregatesInput | fruitsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fruits"> | number
    name?: StringWithAggregatesFilter<"fruits"> | string
    energy?: FloatWithAggregatesFilter<"fruits"> | number
    protein?: FloatWithAggregatesFilter<"fruits"> | number
    total_fat?: FloatWithAggregatesFilter<"fruits"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"fruits"> | number
    fibra?: FloatWithAggregatesFilter<"fruits"> | number
    calcium?: FloatWithAggregatesFilter<"fruits"> | number
    fosforo?: FloatWithAggregatesFilter<"fruits"> | number
    zinc?: FloatWithAggregatesFilter<"fruits"> | number
    iron?: FloatWithAggregatesFilter<"fruits"> | number
    sodium?: FloatWithAggregatesFilter<"fruits"> | number
    potassium?: FloatWithAggregatesFilter<"fruits"> | number
    image?: StringWithAggregatesFilter<"fruits"> | string
  }

  export type legumesWhereInput = {
    AND?: legumesWhereInput | legumesWhereInput[]
    OR?: legumesWhereInput[]
    NOT?: legumesWhereInput | legumesWhereInput[]
    id?: IntFilter<"legumes"> | number
    name?: StringFilter<"legumes"> | string
    energy?: FloatFilter<"legumes"> | number
    protein?: FloatFilter<"legumes"> | number
    total_fat?: FloatFilter<"legumes"> | number
    total_carbohydrates?: FloatFilter<"legumes"> | number
    fibra?: FloatFilter<"legumes"> | number
    calcium?: FloatFilter<"legumes"> | number
    fosforo?: FloatFilter<"legumes"> | number
    zinc?: FloatFilter<"legumes"> | number
    iron?: FloatFilter<"legumes"> | number
    sodium?: FloatFilter<"legumes"> | number
    potassium?: FloatFilter<"legumes"> | number
    image?: StringFilter<"legumes"> | string
  }

  export type legumesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type legumesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: legumesWhereInput | legumesWhereInput[]
    OR?: legumesWhereInput[]
    NOT?: legumesWhereInput | legumesWhereInput[]
    name?: StringFilter<"legumes"> | string
    energy?: FloatFilter<"legumes"> | number
    protein?: FloatFilter<"legumes"> | number
    total_fat?: FloatFilter<"legumes"> | number
    total_carbohydrates?: FloatFilter<"legumes"> | number
    fibra?: FloatFilter<"legumes"> | number
    calcium?: FloatFilter<"legumes"> | number
    fosforo?: FloatFilter<"legumes"> | number
    zinc?: FloatFilter<"legumes"> | number
    iron?: FloatFilter<"legumes"> | number
    sodium?: FloatFilter<"legumes"> | number
    potassium?: FloatFilter<"legumes"> | number
    image?: StringFilter<"legumes"> | string
  }, "id">

  export type legumesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: legumesCountOrderByAggregateInput
    _avg?: legumesAvgOrderByAggregateInput
    _max?: legumesMaxOrderByAggregateInput
    _min?: legumesMinOrderByAggregateInput
    _sum?: legumesSumOrderByAggregateInput
  }

  export type legumesScalarWhereWithAggregatesInput = {
    AND?: legumesScalarWhereWithAggregatesInput | legumesScalarWhereWithAggregatesInput[]
    OR?: legumesScalarWhereWithAggregatesInput[]
    NOT?: legumesScalarWhereWithAggregatesInput | legumesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"legumes"> | number
    name?: StringWithAggregatesFilter<"legumes"> | string
    energy?: FloatWithAggregatesFilter<"legumes"> | number
    protein?: FloatWithAggregatesFilter<"legumes"> | number
    total_fat?: FloatWithAggregatesFilter<"legumes"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"legumes"> | number
    fibra?: FloatWithAggregatesFilter<"legumes"> | number
    calcium?: FloatWithAggregatesFilter<"legumes"> | number
    fosforo?: FloatWithAggregatesFilter<"legumes"> | number
    zinc?: FloatWithAggregatesFilter<"legumes"> | number
    iron?: FloatWithAggregatesFilter<"legumes"> | number
    sodium?: FloatWithAggregatesFilter<"legumes"> | number
    potassium?: FloatWithAggregatesFilter<"legumes"> | number
    image?: StringWithAggregatesFilter<"legumes"> | string
  }

  export type meatWhereInput = {
    AND?: meatWhereInput | meatWhereInput[]
    OR?: meatWhereInput[]
    NOT?: meatWhereInput | meatWhereInput[]
    id?: IntFilter<"meat"> | number
    name?: StringFilter<"meat"> | string
    energy?: FloatFilter<"meat"> | number
    protein?: FloatFilter<"meat"> | number
    total_fat?: FloatFilter<"meat"> | number
    total_carbohydrates?: FloatFilter<"meat"> | number
    fibra?: FloatFilter<"meat"> | number
    calcium?: FloatFilter<"meat"> | number
    fosforo?: FloatFilter<"meat"> | number
    zinc?: FloatFilter<"meat"> | number
    iron?: FloatFilter<"meat"> | number
    sodium?: FloatFilter<"meat"> | number
    potassium?: FloatFilter<"meat"> | number
    image?: StringFilter<"meat"> | string
  }

  export type meatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type meatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: meatWhereInput | meatWhereInput[]
    OR?: meatWhereInput[]
    NOT?: meatWhereInput | meatWhereInput[]
    name?: StringFilter<"meat"> | string
    energy?: FloatFilter<"meat"> | number
    protein?: FloatFilter<"meat"> | number
    total_fat?: FloatFilter<"meat"> | number
    total_carbohydrates?: FloatFilter<"meat"> | number
    fibra?: FloatFilter<"meat"> | number
    calcium?: FloatFilter<"meat"> | number
    fosforo?: FloatFilter<"meat"> | number
    zinc?: FloatFilter<"meat"> | number
    iron?: FloatFilter<"meat"> | number
    sodium?: FloatFilter<"meat"> | number
    potassium?: FloatFilter<"meat"> | number
    image?: StringFilter<"meat"> | string
  }, "id">

  export type meatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: meatCountOrderByAggregateInput
    _avg?: meatAvgOrderByAggregateInput
    _max?: meatMaxOrderByAggregateInput
    _min?: meatMinOrderByAggregateInput
    _sum?: meatSumOrderByAggregateInput
  }

  export type meatScalarWhereWithAggregatesInput = {
    AND?: meatScalarWhereWithAggregatesInput | meatScalarWhereWithAggregatesInput[]
    OR?: meatScalarWhereWithAggregatesInput[]
    NOT?: meatScalarWhereWithAggregatesInput | meatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meat"> | number
    name?: StringWithAggregatesFilter<"meat"> | string
    energy?: FloatWithAggregatesFilter<"meat"> | number
    protein?: FloatWithAggregatesFilter<"meat"> | number
    total_fat?: FloatWithAggregatesFilter<"meat"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"meat"> | number
    fibra?: FloatWithAggregatesFilter<"meat"> | number
    calcium?: FloatWithAggregatesFilter<"meat"> | number
    fosforo?: FloatWithAggregatesFilter<"meat"> | number
    zinc?: FloatWithAggregatesFilter<"meat"> | number
    iron?: FloatWithAggregatesFilter<"meat"> | number
    sodium?: FloatWithAggregatesFilter<"meat"> | number
    potassium?: FloatWithAggregatesFilter<"meat"> | number
    image?: StringWithAggregatesFilter<"meat"> | string
  }

  export type miscellaneousWhereInput = {
    AND?: miscellaneousWhereInput | miscellaneousWhereInput[]
    OR?: miscellaneousWhereInput[]
    NOT?: miscellaneousWhereInput | miscellaneousWhereInput[]
    id?: IntFilter<"miscellaneous"> | number
    name?: StringFilter<"miscellaneous"> | string
    energy?: FloatFilter<"miscellaneous"> | number
    protein?: FloatFilter<"miscellaneous"> | number
    total_fat?: FloatFilter<"miscellaneous"> | number
    total_carbohydrates?: FloatFilter<"miscellaneous"> | number
    fibra?: FloatFilter<"miscellaneous"> | number
    calcium?: FloatFilter<"miscellaneous"> | number
    fosforo?: FloatFilter<"miscellaneous"> | number
    zinc?: FloatFilter<"miscellaneous"> | number
    iron?: FloatFilter<"miscellaneous"> | number
    sodium?: FloatFilter<"miscellaneous"> | number
    potassium?: FloatFilter<"miscellaneous"> | number
    image?: StringFilter<"miscellaneous"> | string
  }

  export type miscellaneousOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type miscellaneousWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: miscellaneousWhereInput | miscellaneousWhereInput[]
    OR?: miscellaneousWhereInput[]
    NOT?: miscellaneousWhereInput | miscellaneousWhereInput[]
    name?: StringFilter<"miscellaneous"> | string
    energy?: FloatFilter<"miscellaneous"> | number
    protein?: FloatFilter<"miscellaneous"> | number
    total_fat?: FloatFilter<"miscellaneous"> | number
    total_carbohydrates?: FloatFilter<"miscellaneous"> | number
    fibra?: FloatFilter<"miscellaneous"> | number
    calcium?: FloatFilter<"miscellaneous"> | number
    fosforo?: FloatFilter<"miscellaneous"> | number
    zinc?: FloatFilter<"miscellaneous"> | number
    iron?: FloatFilter<"miscellaneous"> | number
    sodium?: FloatFilter<"miscellaneous"> | number
    potassium?: FloatFilter<"miscellaneous"> | number
    image?: StringFilter<"miscellaneous"> | string
  }, "id">

  export type miscellaneousOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: miscellaneousCountOrderByAggregateInput
    _avg?: miscellaneousAvgOrderByAggregateInput
    _max?: miscellaneousMaxOrderByAggregateInput
    _min?: miscellaneousMinOrderByAggregateInput
    _sum?: miscellaneousSumOrderByAggregateInput
  }

  export type miscellaneousScalarWhereWithAggregatesInput = {
    AND?: miscellaneousScalarWhereWithAggregatesInput | miscellaneousScalarWhereWithAggregatesInput[]
    OR?: miscellaneousScalarWhereWithAggregatesInput[]
    NOT?: miscellaneousScalarWhereWithAggregatesInput | miscellaneousScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"miscellaneous"> | number
    name?: StringWithAggregatesFilter<"miscellaneous"> | string
    energy?: FloatWithAggregatesFilter<"miscellaneous"> | number
    protein?: FloatWithAggregatesFilter<"miscellaneous"> | number
    total_fat?: FloatWithAggregatesFilter<"miscellaneous"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"miscellaneous"> | number
    fibra?: FloatWithAggregatesFilter<"miscellaneous"> | number
    calcium?: FloatWithAggregatesFilter<"miscellaneous"> | number
    fosforo?: FloatWithAggregatesFilter<"miscellaneous"> | number
    zinc?: FloatWithAggregatesFilter<"miscellaneous"> | number
    iron?: FloatWithAggregatesFilter<"miscellaneous"> | number
    sodium?: FloatWithAggregatesFilter<"miscellaneous"> | number
    potassium?: FloatWithAggregatesFilter<"miscellaneous"> | number
    image?: StringWithAggregatesFilter<"miscellaneous"> | string
  }

  export type seafoodWhereInput = {
    AND?: seafoodWhereInput | seafoodWhereInput[]
    OR?: seafoodWhereInput[]
    NOT?: seafoodWhereInput | seafoodWhereInput[]
    id?: IntFilter<"seafood"> | number
    name?: StringFilter<"seafood"> | string
    energy?: FloatFilter<"seafood"> | number
    protein?: FloatFilter<"seafood"> | number
    total_fat?: FloatFilter<"seafood"> | number
    total_carbohydrates?: FloatFilter<"seafood"> | number
    fibra?: FloatFilter<"seafood"> | number
    calcium?: FloatFilter<"seafood"> | number
    fosforo?: FloatFilter<"seafood"> | number
    zinc?: FloatFilter<"seafood"> | number
    iron?: FloatFilter<"seafood"> | number
    sodium?: FloatFilter<"seafood"> | number
    potassium?: FloatFilter<"seafood"> | number
    image?: StringFilter<"seafood"> | string
  }

  export type seafoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type seafoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: seafoodWhereInput | seafoodWhereInput[]
    OR?: seafoodWhereInput[]
    NOT?: seafoodWhereInput | seafoodWhereInput[]
    name?: StringFilter<"seafood"> | string
    energy?: FloatFilter<"seafood"> | number
    protein?: FloatFilter<"seafood"> | number
    total_fat?: FloatFilter<"seafood"> | number
    total_carbohydrates?: FloatFilter<"seafood"> | number
    fibra?: FloatFilter<"seafood"> | number
    calcium?: FloatFilter<"seafood"> | number
    fosforo?: FloatFilter<"seafood"> | number
    zinc?: FloatFilter<"seafood"> | number
    iron?: FloatFilter<"seafood"> | number
    sodium?: FloatFilter<"seafood"> | number
    potassium?: FloatFilter<"seafood"> | number
    image?: StringFilter<"seafood"> | string
  }, "id">

  export type seafoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: seafoodCountOrderByAggregateInput
    _avg?: seafoodAvgOrderByAggregateInput
    _max?: seafoodMaxOrderByAggregateInput
    _min?: seafoodMinOrderByAggregateInput
    _sum?: seafoodSumOrderByAggregateInput
  }

  export type seafoodScalarWhereWithAggregatesInput = {
    AND?: seafoodScalarWhereWithAggregatesInput | seafoodScalarWhereWithAggregatesInput[]
    OR?: seafoodScalarWhereWithAggregatesInput[]
    NOT?: seafoodScalarWhereWithAggregatesInput | seafoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"seafood"> | number
    name?: StringWithAggregatesFilter<"seafood"> | string
    energy?: FloatWithAggregatesFilter<"seafood"> | number
    protein?: FloatWithAggregatesFilter<"seafood"> | number
    total_fat?: FloatWithAggregatesFilter<"seafood"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"seafood"> | number
    fibra?: FloatWithAggregatesFilter<"seafood"> | number
    calcium?: FloatWithAggregatesFilter<"seafood"> | number
    fosforo?: FloatWithAggregatesFilter<"seafood"> | number
    zinc?: FloatWithAggregatesFilter<"seafood"> | number
    iron?: FloatWithAggregatesFilter<"seafood"> | number
    sodium?: FloatWithAggregatesFilter<"seafood"> | number
    potassium?: FloatWithAggregatesFilter<"seafood"> | number
    image?: StringWithAggregatesFilter<"seafood"> | string
  }

  export type sugarWhereInput = {
    AND?: sugarWhereInput | sugarWhereInput[]
    OR?: sugarWhereInput[]
    NOT?: sugarWhereInput | sugarWhereInput[]
    id?: IntFilter<"sugar"> | number
    name?: StringFilter<"sugar"> | string
    energy?: FloatFilter<"sugar"> | number
    protein?: FloatFilter<"sugar"> | number
    total_fat?: FloatFilter<"sugar"> | number
    total_carbohydrates?: FloatFilter<"sugar"> | number
    fibra?: FloatFilter<"sugar"> | number
    calcium?: FloatFilter<"sugar"> | number
    fosforo?: FloatFilter<"sugar"> | number
    zinc?: FloatFilter<"sugar"> | number
    iron?: FloatFilter<"sugar"> | number
    sodium?: FloatFilter<"sugar"> | number
    potassium?: FloatFilter<"sugar"> | number
    image?: StringFilter<"sugar"> | string
  }

  export type sugarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type sugarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sugarWhereInput | sugarWhereInput[]
    OR?: sugarWhereInput[]
    NOT?: sugarWhereInput | sugarWhereInput[]
    name?: StringFilter<"sugar"> | string
    energy?: FloatFilter<"sugar"> | number
    protein?: FloatFilter<"sugar"> | number
    total_fat?: FloatFilter<"sugar"> | number
    total_carbohydrates?: FloatFilter<"sugar"> | number
    fibra?: FloatFilter<"sugar"> | number
    calcium?: FloatFilter<"sugar"> | number
    fosforo?: FloatFilter<"sugar"> | number
    zinc?: FloatFilter<"sugar"> | number
    iron?: FloatFilter<"sugar"> | number
    sodium?: FloatFilter<"sugar"> | number
    potassium?: FloatFilter<"sugar"> | number
    image?: StringFilter<"sugar"> | string
  }, "id">

  export type sugarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: sugarCountOrderByAggregateInput
    _avg?: sugarAvgOrderByAggregateInput
    _max?: sugarMaxOrderByAggregateInput
    _min?: sugarMinOrderByAggregateInput
    _sum?: sugarSumOrderByAggregateInput
  }

  export type sugarScalarWhereWithAggregatesInput = {
    AND?: sugarScalarWhereWithAggregatesInput | sugarScalarWhereWithAggregatesInput[]
    OR?: sugarScalarWhereWithAggregatesInput[]
    NOT?: sugarScalarWhereWithAggregatesInput | sugarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sugar"> | number
    name?: StringWithAggregatesFilter<"sugar"> | string
    energy?: FloatWithAggregatesFilter<"sugar"> | number
    protein?: FloatWithAggregatesFilter<"sugar"> | number
    total_fat?: FloatWithAggregatesFilter<"sugar"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"sugar"> | number
    fibra?: FloatWithAggregatesFilter<"sugar"> | number
    calcium?: FloatWithAggregatesFilter<"sugar"> | number
    fosforo?: FloatWithAggregatesFilter<"sugar"> | number
    zinc?: FloatWithAggregatesFilter<"sugar"> | number
    iron?: FloatWithAggregatesFilter<"sugar"> | number
    sodium?: FloatWithAggregatesFilter<"sugar"> | number
    potassium?: FloatWithAggregatesFilter<"sugar"> | number
    image?: StringWithAggregatesFilter<"sugar"> | string
  }

  export type tubersWhereInput = {
    AND?: tubersWhereInput | tubersWhereInput[]
    OR?: tubersWhereInput[]
    NOT?: tubersWhereInput | tubersWhereInput[]
    id?: IntFilter<"tubers"> | number
    name?: StringFilter<"tubers"> | string
    energy?: FloatFilter<"tubers"> | number
    protein?: FloatFilter<"tubers"> | number
    total_fat?: FloatFilter<"tubers"> | number
    total_carbohydrates?: FloatFilter<"tubers"> | number
    fibra?: FloatFilter<"tubers"> | number
    calcium?: FloatFilter<"tubers"> | number
    fosforo?: FloatFilter<"tubers"> | number
    zinc?: FloatFilter<"tubers"> | number
    iron?: FloatFilter<"tubers"> | number
    sodium?: FloatFilter<"tubers"> | number
    potassium?: FloatFilter<"tubers"> | number
    image?: StringFilter<"tubers"> | string
  }

  export type tubersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type tubersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tubersWhereInput | tubersWhereInput[]
    OR?: tubersWhereInput[]
    NOT?: tubersWhereInput | tubersWhereInput[]
    name?: StringFilter<"tubers"> | string
    energy?: FloatFilter<"tubers"> | number
    protein?: FloatFilter<"tubers"> | number
    total_fat?: FloatFilter<"tubers"> | number
    total_carbohydrates?: FloatFilter<"tubers"> | number
    fibra?: FloatFilter<"tubers"> | number
    calcium?: FloatFilter<"tubers"> | number
    fosforo?: FloatFilter<"tubers"> | number
    zinc?: FloatFilter<"tubers"> | number
    iron?: FloatFilter<"tubers"> | number
    sodium?: FloatFilter<"tubers"> | number
    potassium?: FloatFilter<"tubers"> | number
    image?: StringFilter<"tubers"> | string
  }, "id">

  export type tubersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: tubersCountOrderByAggregateInput
    _avg?: tubersAvgOrderByAggregateInput
    _max?: tubersMaxOrderByAggregateInput
    _min?: tubersMinOrderByAggregateInput
    _sum?: tubersSumOrderByAggregateInput
  }

  export type tubersScalarWhereWithAggregatesInput = {
    AND?: tubersScalarWhereWithAggregatesInput | tubersScalarWhereWithAggregatesInput[]
    OR?: tubersScalarWhereWithAggregatesInput[]
    NOT?: tubersScalarWhereWithAggregatesInput | tubersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tubers"> | number
    name?: StringWithAggregatesFilter<"tubers"> | string
    energy?: FloatWithAggregatesFilter<"tubers"> | number
    protein?: FloatWithAggregatesFilter<"tubers"> | number
    total_fat?: FloatWithAggregatesFilter<"tubers"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"tubers"> | number
    fibra?: FloatWithAggregatesFilter<"tubers"> | number
    calcium?: FloatWithAggregatesFilter<"tubers"> | number
    fosforo?: FloatWithAggregatesFilter<"tubers"> | number
    zinc?: FloatWithAggregatesFilter<"tubers"> | number
    iron?: FloatWithAggregatesFilter<"tubers"> | number
    sodium?: FloatWithAggregatesFilter<"tubers"> | number
    potassium?: FloatWithAggregatesFilter<"tubers"> | number
    image?: StringWithAggregatesFilter<"tubers"> | string
  }

  export type vegetablesWhereInput = {
    AND?: vegetablesWhereInput | vegetablesWhereInput[]
    OR?: vegetablesWhereInput[]
    NOT?: vegetablesWhereInput | vegetablesWhereInput[]
    id?: IntFilter<"vegetables"> | number
    name?: StringFilter<"vegetables"> | string
    energy?: FloatFilter<"vegetables"> | number
    protein?: FloatFilter<"vegetables"> | number
    total_fat?: FloatFilter<"vegetables"> | number
    total_carbohydrates?: FloatFilter<"vegetables"> | number
    fibra?: FloatFilter<"vegetables"> | number
    calcium?: FloatFilter<"vegetables"> | number
    fosforo?: FloatFilter<"vegetables"> | number
    zinc?: FloatFilter<"vegetables"> | number
    iron?: FloatFilter<"vegetables"> | number
    sodium?: FloatFilter<"vegetables"> | number
    potassium?: FloatFilter<"vegetables"> | number
    image?: StringFilter<"vegetables"> | string
  }

  export type vegetablesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type vegetablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vegetablesWhereInput | vegetablesWhereInput[]
    OR?: vegetablesWhereInput[]
    NOT?: vegetablesWhereInput | vegetablesWhereInput[]
    name?: StringFilter<"vegetables"> | string
    energy?: FloatFilter<"vegetables"> | number
    protein?: FloatFilter<"vegetables"> | number
    total_fat?: FloatFilter<"vegetables"> | number
    total_carbohydrates?: FloatFilter<"vegetables"> | number
    fibra?: FloatFilter<"vegetables"> | number
    calcium?: FloatFilter<"vegetables"> | number
    fosforo?: FloatFilter<"vegetables"> | number
    zinc?: FloatFilter<"vegetables"> | number
    iron?: FloatFilter<"vegetables"> | number
    sodium?: FloatFilter<"vegetables"> | number
    potassium?: FloatFilter<"vegetables"> | number
    image?: StringFilter<"vegetables"> | string
  }, "id">

  export type vegetablesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
    _count?: vegetablesCountOrderByAggregateInput
    _avg?: vegetablesAvgOrderByAggregateInput
    _max?: vegetablesMaxOrderByAggregateInput
    _min?: vegetablesMinOrderByAggregateInput
    _sum?: vegetablesSumOrderByAggregateInput
  }

  export type vegetablesScalarWhereWithAggregatesInput = {
    AND?: vegetablesScalarWhereWithAggregatesInput | vegetablesScalarWhereWithAggregatesInput[]
    OR?: vegetablesScalarWhereWithAggregatesInput[]
    NOT?: vegetablesScalarWhereWithAggregatesInput | vegetablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vegetables"> | number
    name?: StringWithAggregatesFilter<"vegetables"> | string
    energy?: FloatWithAggregatesFilter<"vegetables"> | number
    protein?: FloatWithAggregatesFilter<"vegetables"> | number
    total_fat?: FloatWithAggregatesFilter<"vegetables"> | number
    total_carbohydrates?: FloatWithAggregatesFilter<"vegetables"> | number
    fibra?: FloatWithAggregatesFilter<"vegetables"> | number
    calcium?: FloatWithAggregatesFilter<"vegetables"> | number
    fosforo?: FloatWithAggregatesFilter<"vegetables"> | number
    zinc?: FloatWithAggregatesFilter<"vegetables"> | number
    iron?: FloatWithAggregatesFilter<"vegetables"> | number
    sodium?: FloatWithAggregatesFilter<"vegetables"> | number
    potassium?: FloatWithAggregatesFilter<"vegetables"> | number
    image?: StringWithAggregatesFilter<"vegetables"> | string
  }

  export type cerealsCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type cerealsUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type cerealsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type cerealsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type cerealsCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type cerealsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type cerealsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type dairyCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type dairyUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type dairyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type dairyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type dairyCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type dairyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type dairyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type drinksCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type drinksUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type drinksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type drinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type drinksCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type drinksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type drinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type eggsCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type eggsUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type eggsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type eggsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type eggsCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type eggsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type eggsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fatsCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fatsUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fatsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fatsCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fatsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fruitsCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fruitsUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fruitsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fruitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fruitsCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type fruitsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type fruitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type legumesCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type legumesUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type legumesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type legumesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type legumesCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type legumesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type legumesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type meatCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type meatUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type meatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type meatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type meatCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type meatUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type meatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type miscellaneousCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type miscellaneousUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type miscellaneousUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type miscellaneousUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type miscellaneousCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type miscellaneousUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type miscellaneousUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type seafoodCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type seafoodUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type seafoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type seafoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type seafoodCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type seafoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type seafoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type sugarCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type sugarUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type sugarUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type sugarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type sugarCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type sugarUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type sugarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type tubersCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type tubersUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type tubersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type tubersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type tubersCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type tubersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type tubersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type vegetablesCreateInput = {
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type vegetablesUncheckedCreateInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type vegetablesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type vegetablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type vegetablesCreateManyInput = {
    id?: number
    name: string
    energy: number
    protein: number
    total_fat: number
    total_carbohydrates: number
    fibra: number
    calcium: number
    fosforo: number
    zinc: number
    iron: number
    sodium: number
    potassium: number
    image?: string
  }

  export type vegetablesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type vegetablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    energy?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    total_fat?: FloatFieldUpdateOperationsInput | number
    total_carbohydrates?: FloatFieldUpdateOperationsInput | number
    fibra?: FloatFieldUpdateOperationsInput | number
    calcium?: FloatFieldUpdateOperationsInput | number
    fosforo?: FloatFieldUpdateOperationsInput | number
    zinc?: FloatFieldUpdateOperationsInput | number
    iron?: FloatFieldUpdateOperationsInput | number
    sodium?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type cerealsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type cerealsAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type cerealsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type cerealsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type cerealsSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type dairyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type dairyAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type dairyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type dairyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type dairySumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type drinksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type drinksAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type drinksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type drinksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type drinksSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type eggsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type eggsAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type eggsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type eggsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type eggsSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type fatsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fatsAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type fatsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fatsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fatsSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type fruitsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fruitsAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type fruitsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fruitsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type fruitsSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type legumesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type legumesAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type legumesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type legumesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type legumesSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type meatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type meatAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type meatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type meatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type meatSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type miscellaneousCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type miscellaneousAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type miscellaneousMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type miscellaneousMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type miscellaneousSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type seafoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type seafoodAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type seafoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type seafoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type seafoodSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type sugarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type sugarAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type sugarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type sugarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type sugarSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type tubersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type tubersAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type tubersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type tubersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type tubersSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type vegetablesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type vegetablesAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type vegetablesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type vegetablesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
    image?: SortOrder
  }

  export type vegetablesSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    protein?: SortOrder
    total_fat?: SortOrder
    total_carbohydrates?: SortOrder
    fibra?: SortOrder
    calcium?: SortOrder
    fosforo?: SortOrder
    zinc?: SortOrder
    iron?: SortOrder
    sodium?: SortOrder
    potassium?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}