
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
 * Model clasificacion_doc
 * 
 */
export type clasificacion_doc = $Result.DefaultSelection<Prisma.$clasificacion_docPayload>
/**
 * Model documento
 * 
 */
export type documento = $Result.DefaultSelection<Prisma.$documentoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clasificacion_docs
 * const clasificacion_docs = await prisma.clasificacion_doc.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Clasificacion_docs
   * const clasificacion_docs = await prisma.clasificacion_doc.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clasificacion_doc`: Exposes CRUD operations for the **clasificacion_doc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clasificacion_docs
    * const clasificacion_docs = await prisma.clasificacion_doc.findMany()
    * ```
    */
  get clasificacion_doc(): Prisma.clasificacion_docDelegate<ExtArgs>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.documentoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    clasificacion_doc: 'clasificacion_doc',
    documento: 'documento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'clasificacion_doc' | 'documento'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      clasificacion_doc: {
        payload: Prisma.$clasificacion_docPayload<ExtArgs>
        fields: Prisma.clasificacion_docFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clasificacion_docFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clasificacion_docFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          findFirst: {
            args: Prisma.clasificacion_docFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clasificacion_docFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          findMany: {
            args: Prisma.clasificacion_docFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>[]
          }
          create: {
            args: Prisma.clasificacion_docCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          createMany: {
            args: Prisma.clasificacion_docCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.clasificacion_docDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          update: {
            args: Prisma.clasificacion_docUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          deleteMany: {
            args: Prisma.clasificacion_docDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clasificacion_docUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clasificacion_docUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clasificacion_docPayload>
          }
          aggregate: {
            args: Prisma.Clasificacion_docAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClasificacion_doc>
          }
          groupBy: {
            args: Prisma.clasificacion_docGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Clasificacion_docGroupByOutputType>[]
          }
          count: {
            args: Prisma.clasificacion_docCountArgs<ExtArgs>,
            result: $Utils.Optional<Clasificacion_docCountAggregateOutputType> | number
          }
        }
      }
      documento: {
        payload: Prisma.$documentoPayload<ExtArgs>
        fields: Prisma.documentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          findFirst: {
            args: Prisma.documentoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          findMany: {
            args: Prisma.documentoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>[]
          }
          create: {
            args: Prisma.documentoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          createMany: {
            args: Prisma.documentoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.documentoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          update: {
            args: Prisma.documentoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          deleteMany: {
            args: Prisma.documentoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.documentoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.documentoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$documentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.documentoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentoCountArgs<ExtArgs>,
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Model clasificacion_doc
   */

  export type AggregateClasificacion_doc = {
    _count: Clasificacion_docCountAggregateOutputType | null
    _avg: Clasificacion_docAvgAggregateOutputType | null
    _sum: Clasificacion_docSumAggregateOutputType | null
    _min: Clasificacion_docMinAggregateOutputType | null
    _max: Clasificacion_docMaxAggregateOutputType | null
  }

  export type Clasificacion_docAvgAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
  }

  export type Clasificacion_docSumAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
  }

  export type Clasificacion_docMinAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
    DESC_CORTA_V: string | null
    DESC_LARGA_V: string | null
    ESTADO_B: boolean | null
  }

  export type Clasificacion_docMaxAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
    DESC_CORTA_V: string | null
    DESC_LARGA_V: string | null
    ESTADO_B: boolean | null
  }

  export type Clasificacion_docCountAggregateOutputType = {
    ID_CLASIFI_DOC_I: number
    DESC_CORTA_V: number
    DESC_LARGA_V: number
    ESTADO_B: number
    _all: number
  }


  export type Clasificacion_docAvgAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
  }

  export type Clasificacion_docSumAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
  }

  export type Clasificacion_docMinAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
  }

  export type Clasificacion_docMaxAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
  }

  export type Clasificacion_docCountAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
    _all?: true
  }

  export type Clasificacion_docAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clasificacion_doc to aggregate.
     */
    where?: clasificacion_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clasificacion_docs to fetch.
     */
    orderBy?: clasificacion_docOrderByWithRelationInput | clasificacion_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clasificacion_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clasificacion_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clasificacion_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clasificacion_docs
    **/
    _count?: true | Clasificacion_docCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Clasificacion_docAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Clasificacion_docSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clasificacion_docMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clasificacion_docMaxAggregateInputType
  }

  export type GetClasificacion_docAggregateType<T extends Clasificacion_docAggregateArgs> = {
        [P in keyof T & keyof AggregateClasificacion_doc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasificacion_doc[P]>
      : GetScalarType<T[P], AggregateClasificacion_doc[P]>
  }




  export type clasificacion_docGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clasificacion_docWhereInput
    orderBy?: clasificacion_docOrderByWithAggregationInput | clasificacion_docOrderByWithAggregationInput[]
    by: Clasificacion_docScalarFieldEnum[] | Clasificacion_docScalarFieldEnum
    having?: clasificacion_docScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clasificacion_docCountAggregateInputType | true
    _avg?: Clasificacion_docAvgAggregateInputType
    _sum?: Clasificacion_docSumAggregateInputType
    _min?: Clasificacion_docMinAggregateInputType
    _max?: Clasificacion_docMaxAggregateInputType
  }

  export type Clasificacion_docGroupByOutputType = {
    ID_CLASIFI_DOC_I: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B: boolean | null
    _count: Clasificacion_docCountAggregateOutputType | null
    _avg: Clasificacion_docAvgAggregateOutputType | null
    _sum: Clasificacion_docSumAggregateOutputType | null
    _min: Clasificacion_docMinAggregateOutputType | null
    _max: Clasificacion_docMaxAggregateOutputType | null
  }

  type GetClasificacion_docGroupByPayload<T extends clasificacion_docGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clasificacion_docGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clasificacion_docGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clasificacion_docGroupByOutputType[P]>
            : GetScalarType<T[P], Clasificacion_docGroupByOutputType[P]>
        }
      >
    >


  export type clasificacion_docSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_CLASIFI_DOC_I?: boolean
    DESC_CORTA_V?: boolean
    DESC_LARGA_V?: boolean
    ESTADO_B?: boolean
  }, ExtArgs["result"]["clasificacion_doc"]>

  export type clasificacion_docSelectScalar = {
    ID_CLASIFI_DOC_I?: boolean
    DESC_CORTA_V?: boolean
    DESC_LARGA_V?: boolean
    ESTADO_B?: boolean
  }


  export type $clasificacion_docPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clasificacion_doc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_CLASIFI_DOC_I: number
      DESC_CORTA_V: string
      DESC_LARGA_V: string
      ESTADO_B: boolean | null
    }, ExtArgs["result"]["clasificacion_doc"]>
    composites: {}
  }


  type clasificacion_docGetPayload<S extends boolean | null | undefined | clasificacion_docDefaultArgs> = $Result.GetResult<Prisma.$clasificacion_docPayload, S>

  type clasificacion_docCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clasificacion_docFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Clasificacion_docCountAggregateInputType | true
    }

  export interface clasificacion_docDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clasificacion_doc'], meta: { name: 'clasificacion_doc' } }
    /**
     * Find zero or one Clasificacion_doc that matches the filter.
     * @param {clasificacion_docFindUniqueArgs} args - Arguments to find a Clasificacion_doc
     * @example
     * // Get one Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clasificacion_docFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docFindUniqueArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clasificacion_doc that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clasificacion_docFindUniqueOrThrowArgs} args - Arguments to find a Clasificacion_doc
     * @example
     * // Get one Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clasificacion_docFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clasificacion_doc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docFindFirstArgs} args - Arguments to find a Clasificacion_doc
     * @example
     * // Get one Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clasificacion_docFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docFindFirstArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clasificacion_doc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docFindFirstOrThrowArgs} args - Arguments to find a Clasificacion_doc
     * @example
     * // Get one Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clasificacion_docFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clasificacion_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clasificacion_docs
     * const clasificacion_docs = await prisma.clasificacion_doc.findMany()
     * 
     * // Get first 10 Clasificacion_docs
     * const clasificacion_docs = await prisma.clasificacion_doc.findMany({ take: 10 })
     * 
     * // Only select the `ID_CLASIFI_DOC_I`
     * const clasificacion_docWithID_CLASIFI_DOC_IOnly = await prisma.clasificacion_doc.findMany({ select: { ID_CLASIFI_DOC_I: true } })
     * 
    **/
    findMany<T extends clasificacion_docFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clasificacion_doc.
     * @param {clasificacion_docCreateArgs} args - Arguments to create a Clasificacion_doc.
     * @example
     * // Create one Clasificacion_doc
     * const Clasificacion_doc = await prisma.clasificacion_doc.create({
     *   data: {
     *     // ... data to create a Clasificacion_doc
     *   }
     * })
     * 
    **/
    create<T extends clasificacion_docCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docCreateArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clasificacion_docs.
     *     @param {clasificacion_docCreateManyArgs} args - Arguments to create many Clasificacion_docs.
     *     @example
     *     // Create many Clasificacion_docs
     *     const clasificacion_doc = await prisma.clasificacion_doc.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clasificacion_docCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clasificacion_doc.
     * @param {clasificacion_docDeleteArgs} args - Arguments to delete one Clasificacion_doc.
     * @example
     * // Delete one Clasificacion_doc
     * const Clasificacion_doc = await prisma.clasificacion_doc.delete({
     *   where: {
     *     // ... filter to delete one Clasificacion_doc
     *   }
     * })
     * 
    **/
    delete<T extends clasificacion_docDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docDeleteArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clasificacion_doc.
     * @param {clasificacion_docUpdateArgs} args - Arguments to update one Clasificacion_doc.
     * @example
     * // Update one Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clasificacion_docUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docUpdateArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clasificacion_docs.
     * @param {clasificacion_docDeleteManyArgs} args - Arguments to filter Clasificacion_docs to delete.
     * @example
     * // Delete a few Clasificacion_docs
     * const { count } = await prisma.clasificacion_doc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clasificacion_docDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clasificacion_docDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clasificacion_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clasificacion_docs
     * const clasificacion_doc = await prisma.clasificacion_doc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clasificacion_docUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clasificacion_doc.
     * @param {clasificacion_docUpsertArgs} args - Arguments to update or create a Clasificacion_doc.
     * @example
     * // Update or create a Clasificacion_doc
     * const clasificacion_doc = await prisma.clasificacion_doc.upsert({
     *   create: {
     *     // ... data to create a Clasificacion_doc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clasificacion_doc we want to update
     *   }
     * })
    **/
    upsert<T extends clasificacion_docUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clasificacion_docUpsertArgs<ExtArgs>>
    ): Prisma__clasificacion_docClient<$Result.GetResult<Prisma.$clasificacion_docPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clasificacion_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docCountArgs} args - Arguments to filter Clasificacion_docs to count.
     * @example
     * // Count the number of Clasificacion_docs
     * const count = await prisma.clasificacion_doc.count({
     *   where: {
     *     // ... the filter for the Clasificacion_docs we want to count
     *   }
     * })
    **/
    count<T extends clasificacion_docCountArgs>(
      args?: Subset<T, clasificacion_docCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clasificacion_docCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clasificacion_doc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clasificacion_docAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Clasificacion_docAggregateArgs>(args: Subset<T, Clasificacion_docAggregateArgs>): Prisma.PrismaPromise<GetClasificacion_docAggregateType<T>>

    /**
     * Group by Clasificacion_doc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clasificacion_docGroupByArgs} args - Group by arguments.
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
      T extends clasificacion_docGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clasificacion_docGroupByArgs['orderBy'] }
        : { orderBy?: clasificacion_docGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clasificacion_docGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasificacion_docGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clasificacion_doc model
   */
  readonly fields: clasificacion_docFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clasificacion_doc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clasificacion_docClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the clasificacion_doc model
   */ 
  interface clasificacion_docFieldRefs {
    readonly ID_CLASIFI_DOC_I: FieldRef<"clasificacion_doc", 'Int'>
    readonly DESC_CORTA_V: FieldRef<"clasificacion_doc", 'String'>
    readonly DESC_LARGA_V: FieldRef<"clasificacion_doc", 'String'>
    readonly ESTADO_B: FieldRef<"clasificacion_doc", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * clasificacion_doc findUnique
   */
  export type clasificacion_docFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter, which clasificacion_doc to fetch.
     */
    where: clasificacion_docWhereUniqueInput
  }


  /**
   * clasificacion_doc findUniqueOrThrow
   */
  export type clasificacion_docFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter, which clasificacion_doc to fetch.
     */
    where: clasificacion_docWhereUniqueInput
  }


  /**
   * clasificacion_doc findFirst
   */
  export type clasificacion_docFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter, which clasificacion_doc to fetch.
     */
    where?: clasificacion_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clasificacion_docs to fetch.
     */
    orderBy?: clasificacion_docOrderByWithRelationInput | clasificacion_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clasificacion_docs.
     */
    cursor?: clasificacion_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clasificacion_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clasificacion_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clasificacion_docs.
     */
    distinct?: Clasificacion_docScalarFieldEnum | Clasificacion_docScalarFieldEnum[]
  }


  /**
   * clasificacion_doc findFirstOrThrow
   */
  export type clasificacion_docFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter, which clasificacion_doc to fetch.
     */
    where?: clasificacion_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clasificacion_docs to fetch.
     */
    orderBy?: clasificacion_docOrderByWithRelationInput | clasificacion_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clasificacion_docs.
     */
    cursor?: clasificacion_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clasificacion_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clasificacion_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clasificacion_docs.
     */
    distinct?: Clasificacion_docScalarFieldEnum | Clasificacion_docScalarFieldEnum[]
  }


  /**
   * clasificacion_doc findMany
   */
  export type clasificacion_docFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter, which clasificacion_docs to fetch.
     */
    where?: clasificacion_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clasificacion_docs to fetch.
     */
    orderBy?: clasificacion_docOrderByWithRelationInput | clasificacion_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clasificacion_docs.
     */
    cursor?: clasificacion_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clasificacion_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clasificacion_docs.
     */
    skip?: number
    distinct?: Clasificacion_docScalarFieldEnum | Clasificacion_docScalarFieldEnum[]
  }


  /**
   * clasificacion_doc create
   */
  export type clasificacion_docCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * The data needed to create a clasificacion_doc.
     */
    data: XOR<clasificacion_docCreateInput, clasificacion_docUncheckedCreateInput>
  }


  /**
   * clasificacion_doc createMany
   */
  export type clasificacion_docCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clasificacion_docs.
     */
    data: clasificacion_docCreateManyInput | clasificacion_docCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * clasificacion_doc update
   */
  export type clasificacion_docUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * The data needed to update a clasificacion_doc.
     */
    data: XOR<clasificacion_docUpdateInput, clasificacion_docUncheckedUpdateInput>
    /**
     * Choose, which clasificacion_doc to update.
     */
    where: clasificacion_docWhereUniqueInput
  }


  /**
   * clasificacion_doc updateMany
   */
  export type clasificacion_docUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clasificacion_docs.
     */
    data: XOR<clasificacion_docUpdateManyMutationInput, clasificacion_docUncheckedUpdateManyInput>
    /**
     * Filter which clasificacion_docs to update
     */
    where?: clasificacion_docWhereInput
  }


  /**
   * clasificacion_doc upsert
   */
  export type clasificacion_docUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * The filter to search for the clasificacion_doc to update in case it exists.
     */
    where: clasificacion_docWhereUniqueInput
    /**
     * In case the clasificacion_doc found by the `where` argument doesn't exist, create a new clasificacion_doc with this data.
     */
    create: XOR<clasificacion_docCreateInput, clasificacion_docUncheckedCreateInput>
    /**
     * In case the clasificacion_doc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clasificacion_docUpdateInput, clasificacion_docUncheckedUpdateInput>
  }


  /**
   * clasificacion_doc delete
   */
  export type clasificacion_docDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
    /**
     * Filter which clasificacion_doc to delete.
     */
    where: clasificacion_docWhereUniqueInput
  }


  /**
   * clasificacion_doc deleteMany
   */
  export type clasificacion_docDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clasificacion_docs to delete
     */
    where?: clasificacion_docWhereInput
  }


  /**
   * clasificacion_doc without action
   */
  export type clasificacion_docDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clasificacion_doc
     */
    select?: clasificacion_docSelect<ExtArgs> | null
  }



  /**
   * Model documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoAvgAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
  }

  export type DocumentoSumAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
  }

  export type DocumentoMinAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
    DESC_CORTA_V: string | null
    DESC_LARGA_V: string | null
    ESTADO_B: boolean | null
  }

  export type DocumentoMaxAggregateOutputType = {
    ID_CLASIFI_DOC_I: number | null
    DESC_CORTA_V: string | null
    DESC_LARGA_V: string | null
    ESTADO_B: boolean | null
  }

  export type DocumentoCountAggregateOutputType = {
    ID_CLASIFI_DOC_I: number
    DESC_CORTA_V: number
    DESC_LARGA_V: number
    ESTADO_B: number
    _all: number
  }


  export type DocumentoAvgAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
  }

  export type DocumentoSumAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
  }

  export type DocumentoMinAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
  }

  export type DocumentoMaxAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
  }

  export type DocumentoCountAggregateInputType = {
    ID_CLASIFI_DOC_I?: true
    DESC_CORTA_V?: true
    DESC_LARGA_V?: true
    ESTADO_B?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documento to aggregate.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type documentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentoWhereInput
    orderBy?: documentoOrderByWithAggregationInput | documentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: documentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _avg?: DocumentoAvgAggregateInputType
    _sum?: DocumentoSumAggregateInputType
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    ID_CLASIFI_DOC_I: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B: boolean | null
    _count: DocumentoCountAggregateOutputType | null
    _avg: DocumentoAvgAggregateOutputType | null
    _sum: DocumentoSumAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends documentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type documentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_CLASIFI_DOC_I?: boolean
    DESC_CORTA_V?: boolean
    DESC_LARGA_V?: boolean
    ESTADO_B?: boolean
  }, ExtArgs["result"]["documento"]>

  export type documentoSelectScalar = {
    ID_CLASIFI_DOC_I?: boolean
    DESC_CORTA_V?: boolean
    DESC_LARGA_V?: boolean
    ESTADO_B?: boolean
  }


  export type $documentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_CLASIFI_DOC_I: number
      DESC_CORTA_V: string
      DESC_LARGA_V: string
      ESTADO_B: boolean | null
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }


  type documentoGetPayload<S extends boolean | null | undefined | documentoDefaultArgs> = $Result.GetResult<Prisma.$documentoPayload, S>

  type documentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<documentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface documentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documento'], meta: { name: 'documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {documentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends documentoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, documentoFindUniqueArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Documento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {documentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends documentoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends documentoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoFindFirstArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends documentoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `ID_CLASIFI_DOC_I`
     * const documentoWithID_CLASIFI_DOC_IOnly = await prisma.documento.findMany({ select: { ID_CLASIFI_DOC_I: true } })
     * 
    **/
    findMany<T extends documentoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Documento.
     * @param {documentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
    **/
    create<T extends documentoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, documentoCreateArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Documentos.
     *     @param {documentoCreateManyArgs} args - Arguments to create many Documentos.
     *     @example
     *     // Create many Documentos
     *     const documento = await prisma.documento.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends documentoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documento.
     * @param {documentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
    **/
    delete<T extends documentoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, documentoDeleteArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Documento.
     * @param {documentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends documentoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, documentoUpdateArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Documentos.
     * @param {documentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends documentoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends documentoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, documentoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documento.
     * @param {documentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
    **/
    upsert<T extends documentoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, documentoUpsertArgs<ExtArgs>>
    ): Prisma__documentoClient<$Result.GetResult<Prisma.$documentoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends documentoCountArgs>(
      args?: Subset<T, documentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentoGroupByArgs} args - Group by arguments.
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
      T extends documentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentoGroupByArgs['orderBy'] }
        : { orderBy?: documentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documento model
   */
  readonly fields: documentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the documento model
   */ 
  interface documentoFieldRefs {
    readonly ID_CLASIFI_DOC_I: FieldRef<"documento", 'Int'>
    readonly DESC_CORTA_V: FieldRef<"documento", 'String'>
    readonly DESC_LARGA_V: FieldRef<"documento", 'String'>
    readonly ESTADO_B: FieldRef<"documento", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * documento findUnique
   */
  export type documentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where: documentoWhereUniqueInput
  }


  /**
   * documento findUniqueOrThrow
   */
  export type documentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where: documentoWhereUniqueInput
  }


  /**
   * documento findFirst
   */
  export type documentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }


  /**
   * documento findFirstOrThrow
   */
  export type documentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter, which documento to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }


  /**
   * documento findMany
   */
  export type documentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where?: documentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentoOrderByWithRelationInput | documentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documentos.
     */
    cursor?: documentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }


  /**
   * documento create
   */
  export type documentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * The data needed to create a documento.
     */
    data: XOR<documentoCreateInput, documentoUncheckedCreateInput>
  }


  /**
   * documento createMany
   */
  export type documentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentos.
     */
    data: documentoCreateManyInput | documentoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * documento update
   */
  export type documentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * The data needed to update a documento.
     */
    data: XOR<documentoUpdateInput, documentoUncheckedUpdateInput>
    /**
     * Choose, which documento to update.
     */
    where: documentoWhereUniqueInput
  }


  /**
   * documento updateMany
   */
  export type documentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentos.
     */
    data: XOR<documentoUpdateManyMutationInput, documentoUncheckedUpdateManyInput>
    /**
     * Filter which documentos to update
     */
    where?: documentoWhereInput
  }


  /**
   * documento upsert
   */
  export type documentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * The filter to search for the documento to update in case it exists.
     */
    where: documentoWhereUniqueInput
    /**
     * In case the documento found by the `where` argument doesn't exist, create a new documento with this data.
     */
    create: XOR<documentoCreateInput, documentoUncheckedCreateInput>
    /**
     * In case the documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentoUpdateInput, documentoUncheckedUpdateInput>
  }


  /**
   * documento delete
   */
  export type documentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
    /**
     * Filter which documento to delete.
     */
    where: documentoWhereUniqueInput
  }


  /**
   * documento deleteMany
   */
  export type documentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentos to delete
     */
    where?: documentoWhereInput
  }


  /**
   * documento without action
   */
  export type documentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documento
     */
    select?: documentoSelect<ExtArgs> | null
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


  export const Clasificacion_docScalarFieldEnum: {
    ID_CLASIFI_DOC_I: 'ID_CLASIFI_DOC_I',
    DESC_CORTA_V: 'DESC_CORTA_V',
    DESC_LARGA_V: 'DESC_LARGA_V',
    ESTADO_B: 'ESTADO_B'
  };

  export type Clasificacion_docScalarFieldEnum = (typeof Clasificacion_docScalarFieldEnum)[keyof typeof Clasificacion_docScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    ID_CLASIFI_DOC_I: 'ID_CLASIFI_DOC_I',
    DESC_CORTA_V: 'DESC_CORTA_V',
    DESC_LARGA_V: 'DESC_LARGA_V',
    ESTADO_B: 'ESTADO_B'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type clasificacion_docWhereInput = {
    AND?: clasificacion_docWhereInput | clasificacion_docWhereInput[]
    OR?: clasificacion_docWhereInput[]
    NOT?: clasificacion_docWhereInput | clasificacion_docWhereInput[]
    ID_CLASIFI_DOC_I?: IntFilter<"clasificacion_doc"> | number
    DESC_CORTA_V?: StringFilter<"clasificacion_doc"> | string
    DESC_LARGA_V?: StringFilter<"clasificacion_doc"> | string
    ESTADO_B?: BoolNullableFilter<"clasificacion_doc"> | boolean | null
  }

  export type clasificacion_docOrderByWithRelationInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrderInput | SortOrder
  }

  export type clasificacion_docWhereUniqueInput = Prisma.AtLeast<{
    ID_CLASIFI_DOC_I?: number
    AND?: clasificacion_docWhereInput | clasificacion_docWhereInput[]
    OR?: clasificacion_docWhereInput[]
    NOT?: clasificacion_docWhereInput | clasificacion_docWhereInput[]
    DESC_CORTA_V?: StringFilter<"clasificacion_doc"> | string
    DESC_LARGA_V?: StringFilter<"clasificacion_doc"> | string
    ESTADO_B?: BoolNullableFilter<"clasificacion_doc"> | boolean | null
  }, "ID_CLASIFI_DOC_I">

  export type clasificacion_docOrderByWithAggregationInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrderInput | SortOrder
    _count?: clasificacion_docCountOrderByAggregateInput
    _avg?: clasificacion_docAvgOrderByAggregateInput
    _max?: clasificacion_docMaxOrderByAggregateInput
    _min?: clasificacion_docMinOrderByAggregateInput
    _sum?: clasificacion_docSumOrderByAggregateInput
  }

  export type clasificacion_docScalarWhereWithAggregatesInput = {
    AND?: clasificacion_docScalarWhereWithAggregatesInput | clasificacion_docScalarWhereWithAggregatesInput[]
    OR?: clasificacion_docScalarWhereWithAggregatesInput[]
    NOT?: clasificacion_docScalarWhereWithAggregatesInput | clasificacion_docScalarWhereWithAggregatesInput[]
    ID_CLASIFI_DOC_I?: IntWithAggregatesFilter<"clasificacion_doc"> | number
    DESC_CORTA_V?: StringWithAggregatesFilter<"clasificacion_doc"> | string
    DESC_LARGA_V?: StringWithAggregatesFilter<"clasificacion_doc"> | string
    ESTADO_B?: BoolNullableWithAggregatesFilter<"clasificacion_doc"> | boolean | null
  }

  export type documentoWhereInput = {
    AND?: documentoWhereInput | documentoWhereInput[]
    OR?: documentoWhereInput[]
    NOT?: documentoWhereInput | documentoWhereInput[]
    ID_CLASIFI_DOC_I?: IntFilter<"documento"> | number
    DESC_CORTA_V?: StringFilter<"documento"> | string
    DESC_LARGA_V?: StringFilter<"documento"> | string
    ESTADO_B?: BoolNullableFilter<"documento"> | boolean | null
  }

  export type documentoOrderByWithRelationInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrderInput | SortOrder
  }

  export type documentoWhereUniqueInput = Prisma.AtLeast<{
    ID_CLASIFI_DOC_I?: number
    AND?: documentoWhereInput | documentoWhereInput[]
    OR?: documentoWhereInput[]
    NOT?: documentoWhereInput | documentoWhereInput[]
    DESC_CORTA_V?: StringFilter<"documento"> | string
    DESC_LARGA_V?: StringFilter<"documento"> | string
    ESTADO_B?: BoolNullableFilter<"documento"> | boolean | null
  }, "ID_CLASIFI_DOC_I">

  export type documentoOrderByWithAggregationInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrderInput | SortOrder
    _count?: documentoCountOrderByAggregateInput
    _avg?: documentoAvgOrderByAggregateInput
    _max?: documentoMaxOrderByAggregateInput
    _min?: documentoMinOrderByAggregateInput
    _sum?: documentoSumOrderByAggregateInput
  }

  export type documentoScalarWhereWithAggregatesInput = {
    AND?: documentoScalarWhereWithAggregatesInput | documentoScalarWhereWithAggregatesInput[]
    OR?: documentoScalarWhereWithAggregatesInput[]
    NOT?: documentoScalarWhereWithAggregatesInput | documentoScalarWhereWithAggregatesInput[]
    ID_CLASIFI_DOC_I?: IntWithAggregatesFilter<"documento"> | number
    DESC_CORTA_V?: StringWithAggregatesFilter<"documento"> | string
    DESC_LARGA_V?: StringWithAggregatesFilter<"documento"> | string
    ESTADO_B?: BoolNullableWithAggregatesFilter<"documento"> | boolean | null
  }

  export type clasificacion_docCreateInput = {
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type clasificacion_docUncheckedCreateInput = {
    ID_CLASIFI_DOC_I?: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type clasificacion_docUpdateInput = {
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clasificacion_docUncheckedUpdateInput = {
    ID_CLASIFI_DOC_I?: IntFieldUpdateOperationsInput | number
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clasificacion_docCreateManyInput = {
    ID_CLASIFI_DOC_I?: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type clasificacion_docUpdateManyMutationInput = {
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clasificacion_docUncheckedUpdateManyInput = {
    ID_CLASIFI_DOC_I?: IntFieldUpdateOperationsInput | number
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type documentoCreateInput = {
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type documentoUncheckedCreateInput = {
    ID_CLASIFI_DOC_I?: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type documentoUpdateInput = {
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type documentoUncheckedUpdateInput = {
    ID_CLASIFI_DOC_I?: IntFieldUpdateOperationsInput | number
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type documentoCreateManyInput = {
    ID_CLASIFI_DOC_I?: number
    DESC_CORTA_V: string
    DESC_LARGA_V: string
    ESTADO_B?: boolean | null
  }

  export type documentoUpdateManyMutationInput = {
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type documentoUncheckedUpdateManyInput = {
    ID_CLASIFI_DOC_I?: IntFieldUpdateOperationsInput | number
    DESC_CORTA_V?: StringFieldUpdateOperationsInput | string
    DESC_LARGA_V?: StringFieldUpdateOperationsInput | string
    ESTADO_B?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type clasificacion_docCountOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type clasificacion_docAvgOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
  }

  export type clasificacion_docMaxOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type clasificacion_docMinOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type clasificacion_docSumOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type documentoCountOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type documentoAvgOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
  }

  export type documentoMaxOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type documentoMinOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
    DESC_CORTA_V?: SortOrder
    DESC_LARGA_V?: SortOrder
    ESTADO_B?: SortOrder
  }

  export type documentoSumOrderByAggregateInput = {
    ID_CLASIFI_DOC_I?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use clasificacion_docDefaultArgs instead
     */
    export type clasificacion_docArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clasificacion_docDefaultArgs<ExtArgs>
    /**
     * @deprecated Use documentoDefaultArgs instead
     */
    export type documentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = documentoDefaultArgs<ExtArgs>

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