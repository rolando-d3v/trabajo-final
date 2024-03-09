
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
 * Model doc_usuarios
 * 
 */
export type doc_usuarios = $Result.DefaultSelection<Prisma.$doc_usuariosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model pepe
 * 
 */
export type pepe = $Result.DefaultSelection<Prisma.$pepePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doc_usuarios
 * const doc_usuarios = await prisma.doc_usuarios.findMany()
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
   * // Fetch zero or more Doc_usuarios
   * const doc_usuarios = await prisma.doc_usuarios.findMany()
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
   * `prisma.doc_usuarios`: Exposes CRUD operations for the **doc_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doc_usuarios
    * const doc_usuarios = await prisma.doc_usuarios.findMany()
    * ```
    */
  get doc_usuarios(): Prisma.doc_usuariosDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs>;

  /**
   * `prisma.pepe`: Exposes CRUD operations for the **pepe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pepes
    * const pepes = await prisma.pepe.findMany()
    * ```
    */
  get pepe(): Prisma.pepeDelegate<ExtArgs>;
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
    doc_usuarios: 'doc_usuarios',
    usuarios: 'usuarios',
    pepe: 'pepe'
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
      modelProps: 'doc_usuarios' | 'usuarios' | 'pepe'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      doc_usuarios: {
        payload: Prisma.$doc_usuariosPayload<ExtArgs>
        fields: Prisma.doc_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doc_usuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doc_usuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          findFirst: {
            args: Prisma.doc_usuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doc_usuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          findMany: {
            args: Prisma.doc_usuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>[]
          }
          create: {
            args: Prisma.doc_usuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          createMany: {
            args: Prisma.doc_usuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.doc_usuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          update: {
            args: Prisma.doc_usuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.doc_usuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.doc_usuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.doc_usuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$doc_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Doc_usuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDoc_usuarios>
          }
          groupBy: {
            args: Prisma.doc_usuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Doc_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.doc_usuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<Doc_usuariosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      pepe: {
        payload: Prisma.$pepePayload<ExtArgs>
        fields: Prisma.pepeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pepeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pepeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          findFirst: {
            args: Prisma.pepeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pepeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          findMany: {
            args: Prisma.pepeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>[]
          }
          create: {
            args: Prisma.pepeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          createMany: {
            args: Prisma.pepeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pepeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          update: {
            args: Prisma.pepeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          deleteMany: {
            args: Prisma.pepeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pepeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pepeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$pepePayload>
          }
          aggregate: {
            args: Prisma.PepeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePepe>
          }
          groupBy: {
            args: Prisma.pepeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PepeGroupByOutputType>[]
          }
          count: {
            args: Prisma.pepeCountArgs<ExtArgs>,
            result: $Utils.Optional<PepeCountAggregateOutputType> | number
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
   * Model doc_usuarios
   */

  export type AggregateDoc_usuarios = {
    _count: Doc_usuariosCountAggregateOutputType | null
    _avg: Doc_usuariosAvgAggregateOutputType | null
    _sum: Doc_usuariosSumAggregateOutputType | null
    _min: Doc_usuariosMinAggregateOutputType | null
    _max: Doc_usuariosMaxAggregateOutputType | null
  }

  export type Doc_usuariosAvgAggregateOutputType = {
    ID_USER: number | null
  }

  export type Doc_usuariosSumAggregateOutputType = {
    ID_USER: number | null
  }

  export type Doc_usuariosMinAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type Doc_usuariosMaxAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type Doc_usuariosCountAggregateOutputType = {
    ID_USER: number
    NAME: number
    DNI: number
    _all: number
  }


  export type Doc_usuariosAvgAggregateInputType = {
    ID_USER?: true
  }

  export type Doc_usuariosSumAggregateInputType = {
    ID_USER?: true
  }

  export type Doc_usuariosMinAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type Doc_usuariosMaxAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type Doc_usuariosCountAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
    _all?: true
  }

  export type Doc_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doc_usuarios to aggregate.
     */
    where?: doc_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doc_usuarios to fetch.
     */
    orderBy?: doc_usuariosOrderByWithRelationInput | doc_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doc_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doc_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doc_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doc_usuarios
    **/
    _count?: true | Doc_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Doc_usuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Doc_usuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Doc_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Doc_usuariosMaxAggregateInputType
  }

  export type GetDoc_usuariosAggregateType<T extends Doc_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateDoc_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoc_usuarios[P]>
      : GetScalarType<T[P], AggregateDoc_usuarios[P]>
  }




  export type doc_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doc_usuariosWhereInput
    orderBy?: doc_usuariosOrderByWithAggregationInput | doc_usuariosOrderByWithAggregationInput[]
    by: Doc_usuariosScalarFieldEnum[] | Doc_usuariosScalarFieldEnum
    having?: doc_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Doc_usuariosCountAggregateInputType | true
    _avg?: Doc_usuariosAvgAggregateInputType
    _sum?: Doc_usuariosSumAggregateInputType
    _min?: Doc_usuariosMinAggregateInputType
    _max?: Doc_usuariosMaxAggregateInputType
  }

  export type Doc_usuariosGroupByOutputType = {
    ID_USER: number
    NAME: string | null
    DNI: string | null
    _count: Doc_usuariosCountAggregateOutputType | null
    _avg: Doc_usuariosAvgAggregateOutputType | null
    _sum: Doc_usuariosSumAggregateOutputType | null
    _min: Doc_usuariosMinAggregateOutputType | null
    _max: Doc_usuariosMaxAggregateOutputType | null
  }

  type GetDoc_usuariosGroupByPayload<T extends doc_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Doc_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Doc_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Doc_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Doc_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type doc_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }, ExtArgs["result"]["doc_usuarios"]>

  export type doc_usuariosSelectScalar = {
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }


  export type $doc_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doc_usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_USER: number
      NAME: string | null
      DNI: string | null
    }, ExtArgs["result"]["doc_usuarios"]>
    composites: {}
  }


  type doc_usuariosGetPayload<S extends boolean | null | undefined | doc_usuariosDefaultArgs> = $Result.GetResult<Prisma.$doc_usuariosPayload, S>

  type doc_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<doc_usuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Doc_usuariosCountAggregateInputType | true
    }

  export interface doc_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doc_usuarios'], meta: { name: 'doc_usuarios' } }
    /**
     * Find zero or one Doc_usuarios that matches the filter.
     * @param {doc_usuariosFindUniqueArgs} args - Arguments to find a Doc_usuarios
     * @example
     * // Get one Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends doc_usuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Doc_usuarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {doc_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Doc_usuarios
     * @example
     * // Get one Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends doc_usuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Doc_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosFindFirstArgs} args - Arguments to find a Doc_usuarios
     * @example
     * // Get one Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends doc_usuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosFindFirstArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Doc_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosFindFirstOrThrowArgs} args - Arguments to find a Doc_usuarios
     * @example
     * // Get one Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends doc_usuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Doc_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findMany()
     * 
     * // Get first 10 Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `ID_USER`
     * const doc_usuariosWithID_USEROnly = await prisma.doc_usuarios.findMany({ select: { ID_USER: true } })
     * 
    **/
    findMany<T extends doc_usuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Doc_usuarios.
     * @param {doc_usuariosCreateArgs} args - Arguments to create a Doc_usuarios.
     * @example
     * // Create one Doc_usuarios
     * const Doc_usuarios = await prisma.doc_usuarios.create({
     *   data: {
     *     // ... data to create a Doc_usuarios
     *   }
     * })
     * 
    **/
    create<T extends doc_usuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosCreateArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Doc_usuarios.
     *     @param {doc_usuariosCreateManyArgs} args - Arguments to create many Doc_usuarios.
     *     @example
     *     // Create many Doc_usuarios
     *     const doc_usuarios = await prisma.doc_usuarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends doc_usuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doc_usuarios.
     * @param {doc_usuariosDeleteArgs} args - Arguments to delete one Doc_usuarios.
     * @example
     * // Delete one Doc_usuarios
     * const Doc_usuarios = await prisma.doc_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Doc_usuarios
     *   }
     * })
     * 
    **/
    delete<T extends doc_usuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosDeleteArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Doc_usuarios.
     * @param {doc_usuariosUpdateArgs} args - Arguments to update one Doc_usuarios.
     * @example
     * // Update one Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends doc_usuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosUpdateArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Doc_usuarios.
     * @param {doc_usuariosDeleteManyArgs} args - Arguments to filter Doc_usuarios to delete.
     * @example
     * // Delete a few Doc_usuarios
     * const { count } = await prisma.doc_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends doc_usuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doc_usuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doc_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends doc_usuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doc_usuarios.
     * @param {doc_usuariosUpsertArgs} args - Arguments to update or create a Doc_usuarios.
     * @example
     * // Update or create a Doc_usuarios
     * const doc_usuarios = await prisma.doc_usuarios.upsert({
     *   create: {
     *     // ... data to create a Doc_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doc_usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends doc_usuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, doc_usuariosUpsertArgs<ExtArgs>>
    ): Prisma__doc_usuariosClient<$Result.GetResult<Prisma.$doc_usuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Doc_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosCountArgs} args - Arguments to filter Doc_usuarios to count.
     * @example
     * // Count the number of Doc_usuarios
     * const count = await prisma.doc_usuarios.count({
     *   where: {
     *     // ... the filter for the Doc_usuarios we want to count
     *   }
     * })
    **/
    count<T extends doc_usuariosCountArgs>(
      args?: Subset<T, doc_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Doc_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doc_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Doc_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Doc_usuariosAggregateArgs>(args: Subset<T, Doc_usuariosAggregateArgs>): Prisma.PrismaPromise<GetDoc_usuariosAggregateType<T>>

    /**
     * Group by Doc_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doc_usuariosGroupByArgs} args - Group by arguments.
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
      T extends doc_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doc_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: doc_usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, doc_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoc_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doc_usuarios model
   */
  readonly fields: doc_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doc_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doc_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the doc_usuarios model
   */ 
  interface doc_usuariosFieldRefs {
    readonly ID_USER: FieldRef<"doc_usuarios", 'Int'>
    readonly NAME: FieldRef<"doc_usuarios", 'String'>
    readonly DNI: FieldRef<"doc_usuarios", 'String'>
  }
    

  // Custom InputTypes

  /**
   * doc_usuarios findUnique
   */
  export type doc_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter, which doc_usuarios to fetch.
     */
    where: doc_usuariosWhereUniqueInput
  }


  /**
   * doc_usuarios findUniqueOrThrow
   */
  export type doc_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter, which doc_usuarios to fetch.
     */
    where: doc_usuariosWhereUniqueInput
  }


  /**
   * doc_usuarios findFirst
   */
  export type doc_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter, which doc_usuarios to fetch.
     */
    where?: doc_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doc_usuarios to fetch.
     */
    orderBy?: doc_usuariosOrderByWithRelationInput | doc_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doc_usuarios.
     */
    cursor?: doc_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doc_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doc_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doc_usuarios.
     */
    distinct?: Doc_usuariosScalarFieldEnum | Doc_usuariosScalarFieldEnum[]
  }


  /**
   * doc_usuarios findFirstOrThrow
   */
  export type doc_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter, which doc_usuarios to fetch.
     */
    where?: doc_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doc_usuarios to fetch.
     */
    orderBy?: doc_usuariosOrderByWithRelationInput | doc_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doc_usuarios.
     */
    cursor?: doc_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doc_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doc_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doc_usuarios.
     */
    distinct?: Doc_usuariosScalarFieldEnum | Doc_usuariosScalarFieldEnum[]
  }


  /**
   * doc_usuarios findMany
   */
  export type doc_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter, which doc_usuarios to fetch.
     */
    where?: doc_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doc_usuarios to fetch.
     */
    orderBy?: doc_usuariosOrderByWithRelationInput | doc_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doc_usuarios.
     */
    cursor?: doc_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doc_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doc_usuarios.
     */
    skip?: number
    distinct?: Doc_usuariosScalarFieldEnum | Doc_usuariosScalarFieldEnum[]
  }


  /**
   * doc_usuarios create
   */
  export type doc_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * The data needed to create a doc_usuarios.
     */
    data?: XOR<doc_usuariosCreateInput, doc_usuariosUncheckedCreateInput>
  }


  /**
   * doc_usuarios createMany
   */
  export type doc_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doc_usuarios.
     */
    data: doc_usuariosCreateManyInput | doc_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * doc_usuarios update
   */
  export type doc_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * The data needed to update a doc_usuarios.
     */
    data: XOR<doc_usuariosUpdateInput, doc_usuariosUncheckedUpdateInput>
    /**
     * Choose, which doc_usuarios to update.
     */
    where: doc_usuariosWhereUniqueInput
  }


  /**
   * doc_usuarios updateMany
   */
  export type doc_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doc_usuarios.
     */
    data: XOR<doc_usuariosUpdateManyMutationInput, doc_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which doc_usuarios to update
     */
    where?: doc_usuariosWhereInput
  }


  /**
   * doc_usuarios upsert
   */
  export type doc_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * The filter to search for the doc_usuarios to update in case it exists.
     */
    where: doc_usuariosWhereUniqueInput
    /**
     * In case the doc_usuarios found by the `where` argument doesn't exist, create a new doc_usuarios with this data.
     */
    create: XOR<doc_usuariosCreateInput, doc_usuariosUncheckedCreateInput>
    /**
     * In case the doc_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doc_usuariosUpdateInput, doc_usuariosUncheckedUpdateInput>
  }


  /**
   * doc_usuarios delete
   */
  export type doc_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
    /**
     * Filter which doc_usuarios to delete.
     */
    where: doc_usuariosWhereUniqueInput
  }


  /**
   * doc_usuarios deleteMany
   */
  export type doc_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doc_usuarios to delete
     */
    where?: doc_usuariosWhereInput
  }


  /**
   * doc_usuarios without action
   */
  export type doc_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doc_usuarios
     */
    select?: doc_usuariosSelect<ExtArgs> | null
  }



  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    ID_USER: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    ID_USER: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    ID_USER: number
    NAME: number
    DNI: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    ID_USER?: true
  }

  export type UsuariosSumAggregateInputType = {
    ID_USER?: true
  }

  export type UsuariosMinAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type UsuariosMaxAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type UsuariosCountAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    ID_USER: number
    NAME: string | null
    DNI: string | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }


  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_USER: number
      NAME: string | null
      DNI: string | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }


  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `ID_USER`
     * const usuariosWithID_USEROnly = await prisma.usuarios.findMany({ select: { ID_USER: true } })
     * 
    **/
    findMany<T extends usuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
    **/
    create<T extends usuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuarios = await prisma.usuarios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
    **/
    delete<T extends usuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends usuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>
    ): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuarios model
   */ 
  interface usuariosFieldRefs {
    readonly ID_USER: FieldRef<"usuarios", 'Int'>
    readonly NAME: FieldRef<"usuarios", 'String'>
    readonly DNI: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes

  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }


  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data?: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }


  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
  }


  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }


  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }


  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
  }


  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
  }



  /**
   * Model pepe
   */

  export type AggregatePepe = {
    _count: PepeCountAggregateOutputType | null
    _avg: PepeAvgAggregateOutputType | null
    _sum: PepeSumAggregateOutputType | null
    _min: PepeMinAggregateOutputType | null
    _max: PepeMaxAggregateOutputType | null
  }

  export type PepeAvgAggregateOutputType = {
    ID_USER: number | null
  }

  export type PepeSumAggregateOutputType = {
    ID_USER: number | null
  }

  export type PepeMinAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type PepeMaxAggregateOutputType = {
    ID_USER: number | null
    NAME: string | null
    DNI: string | null
  }

  export type PepeCountAggregateOutputType = {
    ID_USER: number
    NAME: number
    DNI: number
    _all: number
  }


  export type PepeAvgAggregateInputType = {
    ID_USER?: true
  }

  export type PepeSumAggregateInputType = {
    ID_USER?: true
  }

  export type PepeMinAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type PepeMaxAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
  }

  export type PepeCountAggregateInputType = {
    ID_USER?: true
    NAME?: true
    DNI?: true
    _all?: true
  }

  export type PepeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pepe to aggregate.
     */
    where?: pepeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pepes to fetch.
     */
    orderBy?: pepeOrderByWithRelationInput | pepeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pepeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pepes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pepes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pepes
    **/
    _count?: true | PepeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PepeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PepeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PepeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PepeMaxAggregateInputType
  }

  export type GetPepeAggregateType<T extends PepeAggregateArgs> = {
        [P in keyof T & keyof AggregatePepe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePepe[P]>
      : GetScalarType<T[P], AggregatePepe[P]>
  }




  export type pepeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pepeWhereInput
    orderBy?: pepeOrderByWithAggregationInput | pepeOrderByWithAggregationInput[]
    by: PepeScalarFieldEnum[] | PepeScalarFieldEnum
    having?: pepeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PepeCountAggregateInputType | true
    _avg?: PepeAvgAggregateInputType
    _sum?: PepeSumAggregateInputType
    _min?: PepeMinAggregateInputType
    _max?: PepeMaxAggregateInputType
  }

  export type PepeGroupByOutputType = {
    ID_USER: number
    NAME: string | null
    DNI: string | null
    _count: PepeCountAggregateOutputType | null
    _avg: PepeAvgAggregateOutputType | null
    _sum: PepeSumAggregateOutputType | null
    _min: PepeMinAggregateOutputType | null
    _max: PepeMaxAggregateOutputType | null
  }

  type GetPepeGroupByPayload<T extends pepeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PepeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PepeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PepeGroupByOutputType[P]>
            : GetScalarType<T[P], PepeGroupByOutputType[P]>
        }
      >
    >


  export type pepeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }, ExtArgs["result"]["pepe"]>

  export type pepeSelectScalar = {
    ID_USER?: boolean
    NAME?: boolean
    DNI?: boolean
  }


  export type $pepePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pepe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_USER: number
      NAME: string | null
      DNI: string | null
    }, ExtArgs["result"]["pepe"]>
    composites: {}
  }


  type pepeGetPayload<S extends boolean | null | undefined | pepeDefaultArgs> = $Result.GetResult<Prisma.$pepePayload, S>

  type pepeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pepeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PepeCountAggregateInputType | true
    }

  export interface pepeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pepe'], meta: { name: 'pepe' } }
    /**
     * Find zero or one Pepe that matches the filter.
     * @param {pepeFindUniqueArgs} args - Arguments to find a Pepe
     * @example
     * // Get one Pepe
     * const pepe = await prisma.pepe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pepeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pepeFindUniqueArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pepe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pepeFindUniqueOrThrowArgs} args - Arguments to find a Pepe
     * @example
     * // Get one Pepe
     * const pepe = await prisma.pepe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pepeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pepe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeFindFirstArgs} args - Arguments to find a Pepe
     * @example
     * // Get one Pepe
     * const pepe = await prisma.pepe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pepeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeFindFirstArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pepe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeFindFirstOrThrowArgs} args - Arguments to find a Pepe
     * @example
     * // Get one Pepe
     * const pepe = await prisma.pepe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pepeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pepes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pepes
     * const pepes = await prisma.pepe.findMany()
     * 
     * // Get first 10 Pepes
     * const pepes = await prisma.pepe.findMany({ take: 10 })
     * 
     * // Only select the `ID_USER`
     * const pepeWithID_USEROnly = await prisma.pepe.findMany({ select: { ID_USER: true } })
     * 
    **/
    findMany<T extends pepeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pepe.
     * @param {pepeCreateArgs} args - Arguments to create a Pepe.
     * @example
     * // Create one Pepe
     * const Pepe = await prisma.pepe.create({
     *   data: {
     *     // ... data to create a Pepe
     *   }
     * })
     * 
    **/
    create<T extends pepeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pepeCreateArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pepes.
     *     @param {pepeCreateManyArgs} args - Arguments to create many Pepes.
     *     @example
     *     // Create many Pepes
     *     const pepe = await prisma.pepe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pepeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pepe.
     * @param {pepeDeleteArgs} args - Arguments to delete one Pepe.
     * @example
     * // Delete one Pepe
     * const Pepe = await prisma.pepe.delete({
     *   where: {
     *     // ... filter to delete one Pepe
     *   }
     * })
     * 
    **/
    delete<T extends pepeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pepeDeleteArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pepe.
     * @param {pepeUpdateArgs} args - Arguments to update one Pepe.
     * @example
     * // Update one Pepe
     * const pepe = await prisma.pepe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pepeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pepeUpdateArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pepes.
     * @param {pepeDeleteManyArgs} args - Arguments to filter Pepes to delete.
     * @example
     * // Delete a few Pepes
     * const { count } = await prisma.pepe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pepeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pepeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pepes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pepes
     * const pepe = await prisma.pepe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pepeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pepeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pepe.
     * @param {pepeUpsertArgs} args - Arguments to update or create a Pepe.
     * @example
     * // Update or create a Pepe
     * const pepe = await prisma.pepe.upsert({
     *   create: {
     *     // ... data to create a Pepe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pepe we want to update
     *   }
     * })
    **/
    upsert<T extends pepeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pepeUpsertArgs<ExtArgs>>
    ): Prisma__pepeClient<$Result.GetResult<Prisma.$pepePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pepes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeCountArgs} args - Arguments to filter Pepes to count.
     * @example
     * // Count the number of Pepes
     * const count = await prisma.pepe.count({
     *   where: {
     *     // ... the filter for the Pepes we want to count
     *   }
     * })
    **/
    count<T extends pepeCountArgs>(
      args?: Subset<T, pepeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PepeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pepe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PepeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PepeAggregateArgs>(args: Subset<T, PepeAggregateArgs>): Prisma.PrismaPromise<GetPepeAggregateType<T>>

    /**
     * Group by Pepe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pepeGroupByArgs} args - Group by arguments.
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
      T extends pepeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pepeGroupByArgs['orderBy'] }
        : { orderBy?: pepeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pepeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPepeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pepe model
   */
  readonly fields: pepeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pepe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pepeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the pepe model
   */ 
  interface pepeFieldRefs {
    readonly ID_USER: FieldRef<"pepe", 'Int'>
    readonly NAME: FieldRef<"pepe", 'String'>
    readonly DNI: FieldRef<"pepe", 'String'>
  }
    

  // Custom InputTypes

  /**
   * pepe findUnique
   */
  export type pepeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter, which pepe to fetch.
     */
    where: pepeWhereUniqueInput
  }


  /**
   * pepe findUniqueOrThrow
   */
  export type pepeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter, which pepe to fetch.
     */
    where: pepeWhereUniqueInput
  }


  /**
   * pepe findFirst
   */
  export type pepeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter, which pepe to fetch.
     */
    where?: pepeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pepes to fetch.
     */
    orderBy?: pepeOrderByWithRelationInput | pepeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pepes.
     */
    cursor?: pepeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pepes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pepes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pepes.
     */
    distinct?: PepeScalarFieldEnum | PepeScalarFieldEnum[]
  }


  /**
   * pepe findFirstOrThrow
   */
  export type pepeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter, which pepe to fetch.
     */
    where?: pepeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pepes to fetch.
     */
    orderBy?: pepeOrderByWithRelationInput | pepeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pepes.
     */
    cursor?: pepeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pepes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pepes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pepes.
     */
    distinct?: PepeScalarFieldEnum | PepeScalarFieldEnum[]
  }


  /**
   * pepe findMany
   */
  export type pepeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter, which pepes to fetch.
     */
    where?: pepeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pepes to fetch.
     */
    orderBy?: pepeOrderByWithRelationInput | pepeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pepes.
     */
    cursor?: pepeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pepes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pepes.
     */
    skip?: number
    distinct?: PepeScalarFieldEnum | PepeScalarFieldEnum[]
  }


  /**
   * pepe create
   */
  export type pepeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * The data needed to create a pepe.
     */
    data?: XOR<pepeCreateInput, pepeUncheckedCreateInput>
  }


  /**
   * pepe createMany
   */
  export type pepeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pepes.
     */
    data: pepeCreateManyInput | pepeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pepe update
   */
  export type pepeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * The data needed to update a pepe.
     */
    data: XOR<pepeUpdateInput, pepeUncheckedUpdateInput>
    /**
     * Choose, which pepe to update.
     */
    where: pepeWhereUniqueInput
  }


  /**
   * pepe updateMany
   */
  export type pepeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pepes.
     */
    data: XOR<pepeUpdateManyMutationInput, pepeUncheckedUpdateManyInput>
    /**
     * Filter which pepes to update
     */
    where?: pepeWhereInput
  }


  /**
   * pepe upsert
   */
  export type pepeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * The filter to search for the pepe to update in case it exists.
     */
    where: pepeWhereUniqueInput
    /**
     * In case the pepe found by the `where` argument doesn't exist, create a new pepe with this data.
     */
    create: XOR<pepeCreateInput, pepeUncheckedCreateInput>
    /**
     * In case the pepe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pepeUpdateInput, pepeUncheckedUpdateInput>
  }


  /**
   * pepe delete
   */
  export type pepeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
    /**
     * Filter which pepe to delete.
     */
    where: pepeWhereUniqueInput
  }


  /**
   * pepe deleteMany
   */
  export type pepeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pepes to delete
     */
    where?: pepeWhereInput
  }


  /**
   * pepe without action
   */
  export type pepeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pepe
     */
    select?: pepeSelect<ExtArgs> | null
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


  export const Doc_usuariosScalarFieldEnum: {
    ID_USER: 'ID_USER',
    NAME: 'NAME',
    DNI: 'DNI'
  };

  export type Doc_usuariosScalarFieldEnum = (typeof Doc_usuariosScalarFieldEnum)[keyof typeof Doc_usuariosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    ID_USER: 'ID_USER',
    NAME: 'NAME',
    DNI: 'DNI'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const PepeScalarFieldEnum: {
    ID_USER: 'ID_USER',
    NAME: 'NAME',
    DNI: 'DNI'
  };

  export type PepeScalarFieldEnum = (typeof PepeScalarFieldEnum)[keyof typeof PepeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type doc_usuariosWhereInput = {
    AND?: doc_usuariosWhereInput | doc_usuariosWhereInput[]
    OR?: doc_usuariosWhereInput[]
    NOT?: doc_usuariosWhereInput | doc_usuariosWhereInput[]
    ID_USER?: IntFilter<"doc_usuarios"> | number
    NAME?: StringNullableFilter<"doc_usuarios"> | string | null
    DNI?: StringNullableFilter<"doc_usuarios"> | string | null
  }

  export type doc_usuariosOrderByWithRelationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
  }

  export type doc_usuariosWhereUniqueInput = Prisma.AtLeast<{
    ID_USER?: number
    AND?: doc_usuariosWhereInput | doc_usuariosWhereInput[]
    OR?: doc_usuariosWhereInput[]
    NOT?: doc_usuariosWhereInput | doc_usuariosWhereInput[]
    NAME?: StringNullableFilter<"doc_usuarios"> | string | null
    DNI?: StringNullableFilter<"doc_usuarios"> | string | null
  }, "ID_USER">

  export type doc_usuariosOrderByWithAggregationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
    _count?: doc_usuariosCountOrderByAggregateInput
    _avg?: doc_usuariosAvgOrderByAggregateInput
    _max?: doc_usuariosMaxOrderByAggregateInput
    _min?: doc_usuariosMinOrderByAggregateInput
    _sum?: doc_usuariosSumOrderByAggregateInput
  }

  export type doc_usuariosScalarWhereWithAggregatesInput = {
    AND?: doc_usuariosScalarWhereWithAggregatesInput | doc_usuariosScalarWhereWithAggregatesInput[]
    OR?: doc_usuariosScalarWhereWithAggregatesInput[]
    NOT?: doc_usuariosScalarWhereWithAggregatesInput | doc_usuariosScalarWhereWithAggregatesInput[]
    ID_USER?: IntWithAggregatesFilter<"doc_usuarios"> | number
    NAME?: StringNullableWithAggregatesFilter<"doc_usuarios"> | string | null
    DNI?: StringNullableWithAggregatesFilter<"doc_usuarios"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    ID_USER?: IntFilter<"usuarios"> | number
    NAME?: StringNullableFilter<"usuarios"> | string | null
    DNI?: StringNullableFilter<"usuarios"> | string | null
  }

  export type usuariosOrderByWithRelationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    ID_USER?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    NAME?: StringNullableFilter<"usuarios"> | string | null
    DNI?: StringNullableFilter<"usuarios"> | string | null
  }, "ID_USER">

  export type usuariosOrderByWithAggregationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    ID_USER?: IntWithAggregatesFilter<"usuarios"> | number
    NAME?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    DNI?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
  }

  export type pepeWhereInput = {
    AND?: pepeWhereInput | pepeWhereInput[]
    OR?: pepeWhereInput[]
    NOT?: pepeWhereInput | pepeWhereInput[]
    ID_USER?: IntFilter<"pepe"> | number
    NAME?: StringNullableFilter<"pepe"> | string | null
    DNI?: StringNullableFilter<"pepe"> | string | null
  }

  export type pepeOrderByWithRelationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
  }

  export type pepeWhereUniqueInput = Prisma.AtLeast<{
    ID_USER?: number
    AND?: pepeWhereInput | pepeWhereInput[]
    OR?: pepeWhereInput[]
    NOT?: pepeWhereInput | pepeWhereInput[]
    NAME?: StringNullableFilter<"pepe"> | string | null
    DNI?: StringNullableFilter<"pepe"> | string | null
  }, "ID_USER">

  export type pepeOrderByWithAggregationInput = {
    ID_USER?: SortOrder
    NAME?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
    _count?: pepeCountOrderByAggregateInput
    _avg?: pepeAvgOrderByAggregateInput
    _max?: pepeMaxOrderByAggregateInput
    _min?: pepeMinOrderByAggregateInput
    _sum?: pepeSumOrderByAggregateInput
  }

  export type pepeScalarWhereWithAggregatesInput = {
    AND?: pepeScalarWhereWithAggregatesInput | pepeScalarWhereWithAggregatesInput[]
    OR?: pepeScalarWhereWithAggregatesInput[]
    NOT?: pepeScalarWhereWithAggregatesInput | pepeScalarWhereWithAggregatesInput[]
    ID_USER?: IntWithAggregatesFilter<"pepe"> | number
    NAME?: StringNullableWithAggregatesFilter<"pepe"> | string | null
    DNI?: StringNullableWithAggregatesFilter<"pepe"> | string | null
  }

  export type doc_usuariosCreateInput = {
    NAME?: string | null
    DNI?: string | null
  }

  export type doc_usuariosUncheckedCreateInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type doc_usuariosUpdateInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doc_usuariosUncheckedUpdateInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doc_usuariosCreateManyInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type doc_usuariosUpdateManyMutationInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doc_usuariosUncheckedUpdateManyInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    NAME?: string | null
    DNI?: string | null
  }

  export type usuariosUncheckedCreateInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type usuariosUpdateInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateManyInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type usuariosUpdateManyMutationInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pepeCreateInput = {
    NAME?: string | null
    DNI?: string | null
  }

  export type pepeUncheckedCreateInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type pepeUpdateInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pepeUncheckedUpdateInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pepeCreateManyInput = {
    ID_USER?: number
    NAME?: string | null
    DNI?: string | null
  }

  export type pepeUpdateManyMutationInput = {
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pepeUncheckedUpdateManyInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAME?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type doc_usuariosCountOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type doc_usuariosAvgOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type doc_usuariosMaxOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type doc_usuariosMinOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type doc_usuariosSumOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type usuariosCountOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type pepeCountOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type pepeAvgOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type pepeMaxOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type pepeMinOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAME?: SortOrder
    DNI?: SortOrder
  }

  export type pepeSumOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
     * @deprecated Use doc_usuariosDefaultArgs instead
     */
    export type doc_usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = doc_usuariosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuariosDefaultArgs instead
     */
    export type usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuariosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pepeDefaultArgs instead
     */
    export type pepeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pepeDefaultArgs<ExtArgs>

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