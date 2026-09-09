
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
 * Model Faculty
 * 
 */
export type Faculty = $Result.DefaultSelection<Prisma.$FacultyPayload>
/**
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model EventRequest
 * 
 */
export type EventRequest = $Result.DefaultSelection<Prisma.$EventRequestPayload>
/**
 * Model DocRule
 * 
 */
export type DocRule = $Result.DefaultSelection<Prisma.$DocRulePayload>
/**
 * Model RequestRequirement
 * 
 */
export type RequestRequirement = $Result.DefaultSelection<Prisma.$RequestRequirementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  FACULTY: 'FACULTY',
  PRINCIPAL: 'PRINCIPAL'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VenueType: {
  AUDI: 'AUDI',
  OTHER: 'OTHER'
};

export type VenueType = (typeof VenueType)[keyof typeof VenueType]


export const RequestStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const RuleKind: {
  UPLOAD: 'UPLOAD',
  SIGNATURE: 'SIGNATURE'
};

export type RuleKind = (typeof RuleKind)[keyof typeof RuleKind]


export const RequirementStatus: {
  NOT_UPLOADED: 'NOT_UPLOADED',
  UPLOADED: 'UPLOADED',
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type RequirementStatus = (typeof RequirementStatus)[keyof typeof RequirementStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VenueType = $Enums.VenueType

export const VenueType: typeof $Enums.VenueType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type RuleKind = $Enums.RuleKind

export const RuleKind: typeof $Enums.RuleKind

export type RequirementStatus = $Enums.RequirementStatus

export const RequirementStatus: typeof $Enums.RequirementStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Faculties
 * const faculties = await prisma.faculty.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Faculties
   * const faculties = await prisma.faculty.findMany()
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
   * `prisma.faculty`: Exposes CRUD operations for the **Faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.FacultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRequest`: Exposes CRUD operations for the **EventRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRequests
    * const eventRequests = await prisma.eventRequest.findMany()
    * ```
    */
  get eventRequest(): Prisma.EventRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docRule`: Exposes CRUD operations for the **DocRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocRules
    * const docRules = await prisma.docRule.findMany()
    * ```
    */
  get docRule(): Prisma.DocRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestRequirement`: Exposes CRUD operations for the **RequestRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestRequirements
    * const requestRequirements = await prisma.requestRequirement.findMany()
    * ```
    */
  get requestRequirement(): Prisma.RequestRequirementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Faculty: 'Faculty',
    Club: 'Club',
    Venue: 'Venue',
    EventRequest: 'EventRequest',
    DocRule: 'DocRule',
    RequestRequirement: 'RequestRequirement'
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
      modelProps: "faculty" | "club" | "venue" | "eventRequest" | "docRule" | "requestRequirement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Faculty: {
        payload: Prisma.$FacultyPayload<ExtArgs>
        fields: Prisma.FacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findFirst: {
            args: Prisma.FacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findMany: {
            args: Prisma.FacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          create: {
            args: Prisma.FacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          createMany: {
            args: Prisma.FacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          delete: {
            args: Prisma.FacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          update: {
            args: Prisma.FacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          deleteMany: {
            args: Prisma.FacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          upsert: {
            args: Prisma.FacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          aggregate: {
            args: Prisma.FacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculty>
          }
          groupBy: {
            args: Prisma.FacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      EventRequest: {
        payload: Prisma.$EventRequestPayload<ExtArgs>
        fields: Prisma.EventRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          findFirst: {
            args: Prisma.EventRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          findMany: {
            args: Prisma.EventRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          create: {
            args: Prisma.EventRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          createMany: {
            args: Prisma.EventRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          delete: {
            args: Prisma.EventRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          update: {
            args: Prisma.EventRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          deleteMany: {
            args: Prisma.EventRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          upsert: {
            args: Prisma.EventRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          aggregate: {
            args: Prisma.EventRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRequest>
          }
          groupBy: {
            args: Prisma.EventRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EventRequestCountAggregateOutputType> | number
          }
        }
      }
      DocRule: {
        payload: Prisma.$DocRulePayload<ExtArgs>
        fields: Prisma.DocRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          findFirst: {
            args: Prisma.DocRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          findMany: {
            args: Prisma.DocRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>[]
          }
          create: {
            args: Prisma.DocRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          createMany: {
            args: Prisma.DocRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>[]
          }
          delete: {
            args: Prisma.DocRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          update: {
            args: Prisma.DocRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          deleteMany: {
            args: Prisma.DocRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>[]
          }
          upsert: {
            args: Prisma.DocRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocRulePayload>
          }
          aggregate: {
            args: Prisma.DocRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocRule>
          }
          groupBy: {
            args: Prisma.DocRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocRuleCountArgs<ExtArgs>
            result: $Utils.Optional<DocRuleCountAggregateOutputType> | number
          }
        }
      }
      RequestRequirement: {
        payload: Prisma.$RequestRequirementPayload<ExtArgs>
        fields: Prisma.RequestRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          findFirst: {
            args: Prisma.RequestRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          findMany: {
            args: Prisma.RequestRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>[]
          }
          create: {
            args: Prisma.RequestRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          createMany: {
            args: Prisma.RequestRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>[]
          }
          delete: {
            args: Prisma.RequestRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          update: {
            args: Prisma.RequestRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          deleteMany: {
            args: Prisma.RequestRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>[]
          }
          upsert: {
            args: Prisma.RequestRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestRequirementPayload>
          }
          aggregate: {
            args: Prisma.RequestRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestRequirement>
          }
          groupBy: {
            args: Prisma.RequestRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<RequestRequirementCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    faculty?: FacultyOmit
    club?: ClubOmit
    venue?: VenueOmit
    eventRequest?: EventRequestOmit
    docRule?: DocRuleOmit
    requestRequirement?: RequestRequirementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type FacultyCountOutputType
   */

  export type FacultyCountOutputType = {
    clubs: number
    signedRequirements: number
  }

  export type FacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | FacultyCountOutputTypeCountClubsArgs
    signedRequirements?: boolean | FacultyCountOutputTypeCountSignedRequirementsArgs
  }

  // Custom InputTypes
  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     */
    select?: FacultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountClubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountSignedRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestRequirementWhereInput
  }


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    requests: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ClubCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    requests: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | VenueCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
  }


  /**
   * Count Type EventRequestCountOutputType
   */

  export type EventRequestCountOutputType = {
    requirements: number
  }

  export type EventRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requirements?: boolean | EventRequestCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * EventRequestCountOutputType without action
   */
  export type EventRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequestCountOutputType
     */
    select?: EventRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventRequestCountOutputType without action
   */
  export type EventRequestCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestRequirementWhereInput
  }


  /**
   * Count Type DocRuleCountOutputType
   */

  export type DocRuleCountOutputType = {
    requirements: number
  }

  export type DocRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requirements?: boolean | DocRuleCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * DocRuleCountOutputType without action
   */
  export type DocRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRuleCountOutputType
     */
    select?: DocRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocRuleCountOutputType without action
   */
  export type DocRuleCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestRequirementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Faculty
   */

  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type FacultyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type FacultyCountAggregateOutputType = {
    id: number
    name: number
    role: number
    _all: number
  }


  export type FacultyMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
  }

  export type FacultyMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
  }

  export type FacultyCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    _all?: true
  }

  export type FacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculty to aggregate.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type FacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithAggregationInput | FacultyOrderByWithAggregationInput[]
    by: FacultyScalarFieldEnum[] | FacultyScalarFieldEnum
    having?: FacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }

  export type FacultyGroupByOutputType = {
    id: string
    name: string
    role: $Enums.Role
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type FacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    clubs?: boolean | Faculty$clubsArgs<ExtArgs>
    signedRequirements?: boolean | Faculty$signedRequirementsArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
  }

  export type FacultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role", ExtArgs["result"]["faculty"]>
  export type FacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | Faculty$clubsArgs<ExtArgs>
    signedRequirements?: boolean | Faculty$signedRequirementsArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacultyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculty"
    objects: {
      clubs: Prisma.$ClubPayload<ExtArgs>[]
      signedRequirements: Prisma.$RequestRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.Role
    }, ExtArgs["result"]["faculty"]>
    composites: {}
  }

  type FacultyGetPayload<S extends boolean | null | undefined | FacultyDefaultArgs> = $Result.GetResult<Prisma.$FacultyPayload, S>

  type FacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyCountAggregateInputType | true
    }

  export interface FacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculty'], meta: { name: 'Faculty' } }
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {FacultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyFindUniqueArgs>(args: SelectSubset<T, FacultyFindUniqueArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyFindFirstArgs>(args?: SelectSubset<T, FacultyFindFirstArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyWithIdOnly = await prisma.faculty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyFindManyArgs>(args?: SelectSubset<T, FacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculty.
     * @param {FacultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
     */
    create<T extends FacultyCreateArgs>(args: SelectSubset<T, FacultyCreateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculties.
     * @param {FacultyCreateManyArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyCreateManyArgs>(args?: SelectSubset<T, FacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculties and returns the data saved in the database.
     * @param {FacultyCreateManyAndReturnArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculties and only return the `id`
     * const facultyWithIdOnly = await prisma.faculty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculty.
     * @param {FacultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
     */
    delete<T extends FacultyDeleteArgs>(args: SelectSubset<T, FacultyDeleteArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculty.
     * @param {FacultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyUpdateArgs>(args: SelectSubset<T, FacultyUpdateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculties.
     * @param {FacultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyDeleteManyArgs>(args?: SelectSubset<T, FacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyUpdateManyArgs>(args: SelectSubset<T, FacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties and returns the data updated in the database.
     * @param {FacultyUpdateManyAndReturnArgs} args - Arguments to update many Faculties.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculties and only return the `id`
     * const facultyWithIdOnly = await prisma.faculty.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacultyUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculty.
     * @param {FacultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
     */
    upsert<T extends FacultyUpsertArgs>(args: SelectSubset<T, FacultyUpsertArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends FacultyCountArgs>(
      args?: Subset<T, FacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyGroupByArgs} args - Group by arguments.
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
      T extends FacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyGroupByArgs['orderBy'] }
        : { orderBy?: FacultyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculty model
   */
  readonly fields: FacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clubs<T extends Faculty$clubsArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signedRequirements<T extends Faculty$signedRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$signedRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Faculty model
   */
  interface FacultyFieldRefs {
    readonly id: FieldRef<"Faculty", 'String'>
    readonly name: FieldRef<"Faculty", 'String'>
    readonly role: FieldRef<"Faculty", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Faculty findUnique
   */
  export type FacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findUniqueOrThrow
   */
  export type FacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findFirst
   */
  export type FacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findFirstOrThrow
   */
  export type FacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findMany
   */
  export type FacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculties to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty create
   */
  export type FacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculty.
     */
    data: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
  }

  /**
   * Faculty createMany
   */
  export type FacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculty createManyAndReturn
   */
  export type FacultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculty update
   */
  export type FacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculty.
     */
    data: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
    /**
     * Choose, which Faculty to update.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty updateMany
   */
  export type FacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to update.
     */
    limit?: number
  }

  /**
   * Faculty updateManyAndReturn
   */
  export type FacultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to update.
     */
    limit?: number
  }

  /**
   * Faculty upsert
   */
  export type FacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculty to update in case it exists.
     */
    where: FacultyWhereUniqueInput
    /**
     * In case the Faculty found by the `where` argument doesn't exist, create a new Faculty with this data.
     */
    create: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
    /**
     * In case the Faculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
  }

  /**
   * Faculty delete
   */
  export type FacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter which Faculty to delete.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty deleteMany
   */
  export type FacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculties to delete
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to delete.
     */
    limit?: number
  }

  /**
   * Faculty.clubs
   */
  export type Faculty$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Faculty.signedRequirements
   */
  export type Faculty$signedRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    where?: RequestRequirementWhereInput
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    cursor?: RequestRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * Faculty without action
   */
  export type FacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
  }


  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    name: string | null
    facultyInChargeId: string | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    name: string | null
    facultyInChargeId: string | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    name: number
    facultyInChargeId: number
    _all: number
  }


  export type ClubMinAggregateInputType = {
    id?: true
    name?: true
    facultyInChargeId?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    name?: true
    facultyInChargeId?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    name?: true
    facultyInChargeId?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    name: string
    facultyInChargeId: string
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyInChargeId?: boolean
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
    requests?: boolean | Club$requestsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyInChargeId?: boolean
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    facultyInChargeId?: boolean
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    name?: boolean
    facultyInChargeId?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "facultyInChargeId", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
    requests?: boolean | Club$requestsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
  }
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultyInCharge?: boolean | FacultyDefaultArgs<ExtArgs>
  }

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      facultyInCharge: Prisma.$FacultyPayload<ExtArgs>
      requests: Prisma.$EventRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      facultyInChargeId: string
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facultyInCharge<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends Club$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Club$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly name: FieldRef<"Club", 'String'>
    readonly facultyInChargeId: FieldRef<"Club", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.requests
   */
  export type Club$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    cursor?: EventRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    capacity: number | null
  }

  export type VenueSumAggregateOutputType = {
    capacity: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.VenueType | null
    capacity: number | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.VenueType | null
    capacity: number | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    type: number
    capacity: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    capacity?: true
  }

  export type VenueSumAggregateInputType = {
    capacity?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    capacity?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    capacity?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    capacity?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    type: $Enums.VenueType
    capacity: number
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
    requests?: boolean | Venue$requestsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    capacity?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "capacity", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Venue$requestsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      requests: Prisma.$EventRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.VenueType
      capacity: number
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
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
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Venue$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly type: FieldRef<"Venue", 'VenueType'>
    readonly capacity: FieldRef<"Venue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.requests
   */
  export type Venue$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    cursor?: EventRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model EventRequest
   */

  export type AggregateEventRequest = {
    _count: EventRequestCountAggregateOutputType | null
    _avg: EventRequestAvgAggregateOutputType | null
    _sum: EventRequestSumAggregateOutputType | null
    _min: EventRequestMinAggregateOutputType | null
    _max: EventRequestMaxAggregateOutputType | null
  }

  export type EventRequestAvgAggregateOutputType = {
    footfall: number | null
  }

  export type EventRequestSumAggregateOutputType = {
    footfall: number | null
  }

  export type EventRequestMinAggregateOutputType = {
    id: string | null
    clubId: string | null
    eventName: string | null
    venueId: string | null
    startTime: Date | null
    endTime: Date | null
    footfall: number | null
    hasExternalGuest: boolean | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type EventRequestMaxAggregateOutputType = {
    id: string | null
    clubId: string | null
    eventName: string | null
    venueId: string | null
    startTime: Date | null
    endTime: Date | null
    footfall: number | null
    hasExternalGuest: boolean | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type EventRequestCountAggregateOutputType = {
    id: number
    clubId: number
    eventName: number
    venueId: number
    startTime: number
    endTime: number
    footfall: number
    hasExternalGuest: number
    equipment: number
    status: number
    createdAt: number
    _all: number
  }


  export type EventRequestAvgAggregateInputType = {
    footfall?: true
  }

  export type EventRequestSumAggregateInputType = {
    footfall?: true
  }

  export type EventRequestMinAggregateInputType = {
    id?: true
    clubId?: true
    eventName?: true
    venueId?: true
    startTime?: true
    endTime?: true
    footfall?: true
    hasExternalGuest?: true
    status?: true
    createdAt?: true
  }

  export type EventRequestMaxAggregateInputType = {
    id?: true
    clubId?: true
    eventName?: true
    venueId?: true
    startTime?: true
    endTime?: true
    footfall?: true
    hasExternalGuest?: true
    status?: true
    createdAt?: true
  }

  export type EventRequestCountAggregateInputType = {
    id?: true
    clubId?: true
    eventName?: true
    venueId?: true
    startTime?: true
    endTime?: true
    footfall?: true
    hasExternalGuest?: true
    equipment?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EventRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRequest to aggregate.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRequests
    **/
    _count?: true | EventRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRequestMaxAggregateInputType
  }

  export type GetEventRequestAggregateType<T extends EventRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRequest[P]>
      : GetScalarType<T[P], AggregateEventRequest[P]>
  }




  export type EventRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithAggregationInput | EventRequestOrderByWithAggregationInput[]
    by: EventRequestScalarFieldEnum[] | EventRequestScalarFieldEnum
    having?: EventRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRequestCountAggregateInputType | true
    _avg?: EventRequestAvgAggregateInputType
    _sum?: EventRequestSumAggregateInputType
    _min?: EventRequestMinAggregateInputType
    _max?: EventRequestMaxAggregateInputType
  }

  export type EventRequestGroupByOutputType = {
    id: string
    clubId: string
    eventName: string
    venueId: string
    startTime: Date
    endTime: Date
    footfall: number
    hasExternalGuest: boolean
    equipment: string[]
    status: $Enums.RequestStatus
    createdAt: Date
    _count: EventRequestCountAggregateOutputType | null
    _avg: EventRequestAvgAggregateOutputType | null
    _sum: EventRequestSumAggregateOutputType | null
    _min: EventRequestMinAggregateOutputType | null
    _max: EventRequestMaxAggregateOutputType | null
  }

  type GetEventRequestGroupByPayload<T extends EventRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EventRequestGroupByOutputType[P]>
        }
      >
    >


  export type EventRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    eventName?: boolean
    venueId?: boolean
    startTime?: boolean
    endTime?: boolean
    footfall?: boolean
    hasExternalGuest?: boolean
    equipment?: boolean
    status?: boolean
    createdAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    requirements?: boolean | EventRequest$requirementsArgs<ExtArgs>
    _count?: boolean | EventRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    eventName?: boolean
    venueId?: boolean
    startTime?: boolean
    endTime?: boolean
    footfall?: boolean
    hasExternalGuest?: boolean
    equipment?: boolean
    status?: boolean
    createdAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubId?: boolean
    eventName?: boolean
    venueId?: boolean
    startTime?: boolean
    endTime?: boolean
    footfall?: boolean
    hasExternalGuest?: boolean
    equipment?: boolean
    status?: boolean
    createdAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectScalar = {
    id?: boolean
    clubId?: boolean
    eventName?: boolean
    venueId?: boolean
    startTime?: boolean
    endTime?: boolean
    footfall?: boolean
    hasExternalGuest?: boolean
    equipment?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EventRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubId" | "eventName" | "venueId" | "startTime" | "endTime" | "footfall" | "hasExternalGuest" | "equipment" | "status" | "createdAt", ExtArgs["result"]["eventRequest"]>
  export type EventRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    requirements?: boolean | EventRequest$requirementsArgs<ExtArgs>
    _count?: boolean | EventRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type EventRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $EventRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRequest"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
      requirements: Prisma.$RequestRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clubId: string
      eventName: string
      venueId: string
      startTime: Date
      endTime: Date
      footfall: number
      hasExternalGuest: boolean
      equipment: string[]
      status: $Enums.RequestStatus
      createdAt: Date
    }, ExtArgs["result"]["eventRequest"]>
    composites: {}
  }

  type EventRequestGetPayload<S extends boolean | null | undefined | EventRequestDefaultArgs> = $Result.GetResult<Prisma.$EventRequestPayload, S>

  type EventRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRequestCountAggregateInputType | true
    }

  export interface EventRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRequest'], meta: { name: 'EventRequest' } }
    /**
     * Find zero or one EventRequest that matches the filter.
     * @param {EventRequestFindUniqueArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRequestFindUniqueArgs>(args: SelectSubset<T, EventRequestFindUniqueArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRequestFindUniqueOrThrowArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindFirstArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRequestFindFirstArgs>(args?: SelectSubset<T, EventRequestFindFirstArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindFirstOrThrowArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRequests
     * const eventRequests = await prisma.eventRequest.findMany()
     * 
     * // Get first 10 EventRequests
     * const eventRequests = await prisma.eventRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRequestFindManyArgs>(args?: SelectSubset<T, EventRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRequest.
     * @param {EventRequestCreateArgs} args - Arguments to create a EventRequest.
     * @example
     * // Create one EventRequest
     * const EventRequest = await prisma.eventRequest.create({
     *   data: {
     *     // ... data to create a EventRequest
     *   }
     * })
     * 
     */
    create<T extends EventRequestCreateArgs>(args: SelectSubset<T, EventRequestCreateArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRequests.
     * @param {EventRequestCreateManyArgs} args - Arguments to create many EventRequests.
     * @example
     * // Create many EventRequests
     * const eventRequest = await prisma.eventRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRequestCreateManyArgs>(args?: SelectSubset<T, EventRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRequests and returns the data saved in the database.
     * @param {EventRequestCreateManyAndReturnArgs} args - Arguments to create many EventRequests.
     * @example
     * // Create many EventRequests
     * const eventRequest = await prisma.eventRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRequests and only return the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRequest.
     * @param {EventRequestDeleteArgs} args - Arguments to delete one EventRequest.
     * @example
     * // Delete one EventRequest
     * const EventRequest = await prisma.eventRequest.delete({
     *   where: {
     *     // ... filter to delete one EventRequest
     *   }
     * })
     * 
     */
    delete<T extends EventRequestDeleteArgs>(args: SelectSubset<T, EventRequestDeleteArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRequest.
     * @param {EventRequestUpdateArgs} args - Arguments to update one EventRequest.
     * @example
     * // Update one EventRequest
     * const eventRequest = await prisma.eventRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRequestUpdateArgs>(args: SelectSubset<T, EventRequestUpdateArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRequests.
     * @param {EventRequestDeleteManyArgs} args - Arguments to filter EventRequests to delete.
     * @example
     * // Delete a few EventRequests
     * const { count } = await prisma.eventRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRequestDeleteManyArgs>(args?: SelectSubset<T, EventRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRequests
     * const eventRequest = await prisma.eventRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRequestUpdateManyArgs>(args: SelectSubset<T, EventRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRequests and returns the data updated in the database.
     * @param {EventRequestUpdateManyAndReturnArgs} args - Arguments to update many EventRequests.
     * @example
     * // Update many EventRequests
     * const eventRequest = await prisma.eventRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRequests and only return the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRequest.
     * @param {EventRequestUpsertArgs} args - Arguments to update or create a EventRequest.
     * @example
     * // Update or create a EventRequest
     * const eventRequest = await prisma.eventRequest.upsert({
     *   create: {
     *     // ... data to create a EventRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRequest we want to update
     *   }
     * })
     */
    upsert<T extends EventRequestUpsertArgs>(args: SelectSubset<T, EventRequestUpsertArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestCountArgs} args - Arguments to filter EventRequests to count.
     * @example
     * // Count the number of EventRequests
     * const count = await prisma.eventRequest.count({
     *   where: {
     *     // ... the filter for the EventRequests we want to count
     *   }
     * })
    **/
    count<T extends EventRequestCountArgs>(
      args?: Subset<T, EventRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRequestAggregateArgs>(args: Subset<T, EventRequestAggregateArgs>): Prisma.PrismaPromise<GetEventRequestAggregateType<T>>

    /**
     * Group by EventRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestGroupByArgs} args - Group by arguments.
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
      T extends EventRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRequestGroupByArgs['orderBy'] }
        : { orderBy?: EventRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRequest model
   */
  readonly fields: EventRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requirements<T extends EventRequest$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, EventRequest$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventRequest model
   */
  interface EventRequestFieldRefs {
    readonly id: FieldRef<"EventRequest", 'String'>
    readonly clubId: FieldRef<"EventRequest", 'String'>
    readonly eventName: FieldRef<"EventRequest", 'String'>
    readonly venueId: FieldRef<"EventRequest", 'String'>
    readonly startTime: FieldRef<"EventRequest", 'DateTime'>
    readonly endTime: FieldRef<"EventRequest", 'DateTime'>
    readonly footfall: FieldRef<"EventRequest", 'Int'>
    readonly hasExternalGuest: FieldRef<"EventRequest", 'Boolean'>
    readonly equipment: FieldRef<"EventRequest", 'String[]'>
    readonly status: FieldRef<"EventRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"EventRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventRequest findUnique
   */
  export type EventRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest findUniqueOrThrow
   */
  export type EventRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest findFirst
   */
  export type EventRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRequests.
     */
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest findFirstOrThrow
   */
  export type EventRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRequests.
     */
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest findMany
   */
  export type EventRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequests to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest create
   */
  export type EventRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRequest.
     */
    data: XOR<EventRequestCreateInput, EventRequestUncheckedCreateInput>
  }

  /**
   * EventRequest createMany
   */
  export type EventRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRequests.
     */
    data: EventRequestCreateManyInput | EventRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRequest createManyAndReturn
   */
  export type EventRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EventRequests.
     */
    data: EventRequestCreateManyInput | EventRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRequest update
   */
  export type EventRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRequest.
     */
    data: XOR<EventRequestUpdateInput, EventRequestUncheckedUpdateInput>
    /**
     * Choose, which EventRequest to update.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest updateMany
   */
  export type EventRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRequests.
     */
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyInput>
    /**
     * Filter which EventRequests to update
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to update.
     */
    limit?: number
  }

  /**
   * EventRequest updateManyAndReturn
   */
  export type EventRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * The data used to update EventRequests.
     */
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyInput>
    /**
     * Filter which EventRequests to update
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRequest upsert
   */
  export type EventRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRequest to update in case it exists.
     */
    where: EventRequestWhereUniqueInput
    /**
     * In case the EventRequest found by the `where` argument doesn't exist, create a new EventRequest with this data.
     */
    create: XOR<EventRequestCreateInput, EventRequestUncheckedCreateInput>
    /**
     * In case the EventRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRequestUpdateInput, EventRequestUncheckedUpdateInput>
  }

  /**
   * EventRequest delete
   */
  export type EventRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter which EventRequest to delete.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest deleteMany
   */
  export type EventRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRequests to delete
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to delete.
     */
    limit?: number
  }

  /**
   * EventRequest.requirements
   */
  export type EventRequest$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    where?: RequestRequirementWhereInput
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    cursor?: RequestRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * EventRequest without action
   */
  export type EventRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
  }


  /**
   * Model DocRule
   */

  export type AggregateDocRule = {
    _count: DocRuleCountAggregateOutputType | null
    _avg: DocRuleAvgAggregateOutputType | null
    _sum: DocRuleSumAggregateOutputType | null
    _min: DocRuleMinAggregateOutputType | null
    _max: DocRuleMaxAggregateOutputType | null
  }

  export type DocRuleAvgAggregateOutputType = {
    minFootfall: number | null
  }

  export type DocRuleSumAggregateOutputType = {
    minFootfall: number | null
  }

  export type DocRuleMinAggregateOutputType = {
    id: string | null
    label: string | null
    kind: $Enums.RuleKind | null
    minFootfall: number | null
    requiresGuest: boolean | null
    audiOnly: boolean | null
    signerRole: $Enums.Role | null
  }

  export type DocRuleMaxAggregateOutputType = {
    id: string | null
    label: string | null
    kind: $Enums.RuleKind | null
    minFootfall: number | null
    requiresGuest: boolean | null
    audiOnly: boolean | null
    signerRole: $Enums.Role | null
  }

  export type DocRuleCountAggregateOutputType = {
    id: number
    label: number
    kind: number
    minFootfall: number
    requiresGuest: number
    audiOnly: number
    signerRole: number
    _all: number
  }


  export type DocRuleAvgAggregateInputType = {
    minFootfall?: true
  }

  export type DocRuleSumAggregateInputType = {
    minFootfall?: true
  }

  export type DocRuleMinAggregateInputType = {
    id?: true
    label?: true
    kind?: true
    minFootfall?: true
    requiresGuest?: true
    audiOnly?: true
    signerRole?: true
  }

  export type DocRuleMaxAggregateInputType = {
    id?: true
    label?: true
    kind?: true
    minFootfall?: true
    requiresGuest?: true
    audiOnly?: true
    signerRole?: true
  }

  export type DocRuleCountAggregateInputType = {
    id?: true
    label?: true
    kind?: true
    minFootfall?: true
    requiresGuest?: true
    audiOnly?: true
    signerRole?: true
    _all?: true
  }

  export type DocRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocRule to aggregate.
     */
    where?: DocRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocRules to fetch.
     */
    orderBy?: DocRuleOrderByWithRelationInput | DocRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocRules
    **/
    _count?: true | DocRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocRuleMaxAggregateInputType
  }

  export type GetDocRuleAggregateType<T extends DocRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateDocRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocRule[P]>
      : GetScalarType<T[P], AggregateDocRule[P]>
  }




  export type DocRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocRuleWhereInput
    orderBy?: DocRuleOrderByWithAggregationInput | DocRuleOrderByWithAggregationInput[]
    by: DocRuleScalarFieldEnum[] | DocRuleScalarFieldEnum
    having?: DocRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocRuleCountAggregateInputType | true
    _avg?: DocRuleAvgAggregateInputType
    _sum?: DocRuleSumAggregateInputType
    _min?: DocRuleMinAggregateInputType
    _max?: DocRuleMaxAggregateInputType
  }

  export type DocRuleGroupByOutputType = {
    id: string
    label: string
    kind: $Enums.RuleKind
    minFootfall: number | null
    requiresGuest: boolean
    audiOnly: boolean
    signerRole: $Enums.Role | null
    _count: DocRuleCountAggregateOutputType | null
    _avg: DocRuleAvgAggregateOutputType | null
    _sum: DocRuleSumAggregateOutputType | null
    _min: DocRuleMinAggregateOutputType | null
    _max: DocRuleMaxAggregateOutputType | null
  }

  type GetDocRuleGroupByPayload<T extends DocRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocRuleGroupByOutputType[P]>
            : GetScalarType<T[P], DocRuleGroupByOutputType[P]>
        }
      >
    >


  export type DocRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    kind?: boolean
    minFootfall?: boolean
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: boolean
    requirements?: boolean | DocRule$requirementsArgs<ExtArgs>
    _count?: boolean | DocRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docRule"]>

  export type DocRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    kind?: boolean
    minFootfall?: boolean
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: boolean
  }, ExtArgs["result"]["docRule"]>

  export type DocRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    kind?: boolean
    minFootfall?: boolean
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: boolean
  }, ExtArgs["result"]["docRule"]>

  export type DocRuleSelectScalar = {
    id?: boolean
    label?: boolean
    kind?: boolean
    minFootfall?: boolean
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: boolean
  }

  export type DocRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "kind" | "minFootfall" | "requiresGuest" | "audiOnly" | "signerRole", ExtArgs["result"]["docRule"]>
  export type DocRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requirements?: boolean | DocRule$requirementsArgs<ExtArgs>
    _count?: boolean | DocRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocRule"
    objects: {
      requirements: Prisma.$RequestRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      kind: $Enums.RuleKind
      minFootfall: number | null
      requiresGuest: boolean
      audiOnly: boolean
      signerRole: $Enums.Role | null
    }, ExtArgs["result"]["docRule"]>
    composites: {}
  }

  type DocRuleGetPayload<S extends boolean | null | undefined | DocRuleDefaultArgs> = $Result.GetResult<Prisma.$DocRulePayload, S>

  type DocRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocRuleCountAggregateInputType | true
    }

  export interface DocRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocRule'], meta: { name: 'DocRule' } }
    /**
     * Find zero or one DocRule that matches the filter.
     * @param {DocRuleFindUniqueArgs} args - Arguments to find a DocRule
     * @example
     * // Get one DocRule
     * const docRule = await prisma.docRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocRuleFindUniqueArgs>(args: SelectSubset<T, DocRuleFindUniqueArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocRuleFindUniqueOrThrowArgs} args - Arguments to find a DocRule
     * @example
     * // Get one DocRule
     * const docRule = await prisma.docRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, DocRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleFindFirstArgs} args - Arguments to find a DocRule
     * @example
     * // Get one DocRule
     * const docRule = await prisma.docRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocRuleFindFirstArgs>(args?: SelectSubset<T, DocRuleFindFirstArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleFindFirstOrThrowArgs} args - Arguments to find a DocRule
     * @example
     * // Get one DocRule
     * const docRule = await prisma.docRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, DocRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocRules
     * const docRules = await prisma.docRule.findMany()
     * 
     * // Get first 10 DocRules
     * const docRules = await prisma.docRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docRuleWithIdOnly = await prisma.docRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocRuleFindManyArgs>(args?: SelectSubset<T, DocRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocRule.
     * @param {DocRuleCreateArgs} args - Arguments to create a DocRule.
     * @example
     * // Create one DocRule
     * const DocRule = await prisma.docRule.create({
     *   data: {
     *     // ... data to create a DocRule
     *   }
     * })
     * 
     */
    create<T extends DocRuleCreateArgs>(args: SelectSubset<T, DocRuleCreateArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocRules.
     * @param {DocRuleCreateManyArgs} args - Arguments to create many DocRules.
     * @example
     * // Create many DocRules
     * const docRule = await prisma.docRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocRuleCreateManyArgs>(args?: SelectSubset<T, DocRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocRules and returns the data saved in the database.
     * @param {DocRuleCreateManyAndReturnArgs} args - Arguments to create many DocRules.
     * @example
     * // Create many DocRules
     * const docRule = await prisma.docRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocRules and only return the `id`
     * const docRuleWithIdOnly = await prisma.docRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, DocRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocRule.
     * @param {DocRuleDeleteArgs} args - Arguments to delete one DocRule.
     * @example
     * // Delete one DocRule
     * const DocRule = await prisma.docRule.delete({
     *   where: {
     *     // ... filter to delete one DocRule
     *   }
     * })
     * 
     */
    delete<T extends DocRuleDeleteArgs>(args: SelectSubset<T, DocRuleDeleteArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocRule.
     * @param {DocRuleUpdateArgs} args - Arguments to update one DocRule.
     * @example
     * // Update one DocRule
     * const docRule = await prisma.docRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocRuleUpdateArgs>(args: SelectSubset<T, DocRuleUpdateArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocRules.
     * @param {DocRuleDeleteManyArgs} args - Arguments to filter DocRules to delete.
     * @example
     * // Delete a few DocRules
     * const { count } = await prisma.docRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocRuleDeleteManyArgs>(args?: SelectSubset<T, DocRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocRules
     * const docRule = await prisma.docRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocRuleUpdateManyArgs>(args: SelectSubset<T, DocRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocRules and returns the data updated in the database.
     * @param {DocRuleUpdateManyAndReturnArgs} args - Arguments to update many DocRules.
     * @example
     * // Update many DocRules
     * const docRule = await prisma.docRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocRules and only return the `id`
     * const docRuleWithIdOnly = await prisma.docRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, DocRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocRule.
     * @param {DocRuleUpsertArgs} args - Arguments to update or create a DocRule.
     * @example
     * // Update or create a DocRule
     * const docRule = await prisma.docRule.upsert({
     *   create: {
     *     // ... data to create a DocRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocRule we want to update
     *   }
     * })
     */
    upsert<T extends DocRuleUpsertArgs>(args: SelectSubset<T, DocRuleUpsertArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleCountArgs} args - Arguments to filter DocRules to count.
     * @example
     * // Count the number of DocRules
     * const count = await prisma.docRule.count({
     *   where: {
     *     // ... the filter for the DocRules we want to count
     *   }
     * })
    **/
    count<T extends DocRuleCountArgs>(
      args?: Subset<T, DocRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocRuleAggregateArgs>(args: Subset<T, DocRuleAggregateArgs>): Prisma.PrismaPromise<GetDocRuleAggregateType<T>>

    /**
     * Group by DocRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocRuleGroupByArgs} args - Group by arguments.
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
      T extends DocRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocRuleGroupByArgs['orderBy'] }
        : { orderBy?: DocRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocRule model
   */
  readonly fields: DocRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requirements<T extends DocRule$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, DocRule$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DocRule model
   */
  interface DocRuleFieldRefs {
    readonly id: FieldRef<"DocRule", 'String'>
    readonly label: FieldRef<"DocRule", 'String'>
    readonly kind: FieldRef<"DocRule", 'RuleKind'>
    readonly minFootfall: FieldRef<"DocRule", 'Int'>
    readonly requiresGuest: FieldRef<"DocRule", 'Boolean'>
    readonly audiOnly: FieldRef<"DocRule", 'Boolean'>
    readonly signerRole: FieldRef<"DocRule", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * DocRule findUnique
   */
  export type DocRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter, which DocRule to fetch.
     */
    where: DocRuleWhereUniqueInput
  }

  /**
   * DocRule findUniqueOrThrow
   */
  export type DocRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter, which DocRule to fetch.
     */
    where: DocRuleWhereUniqueInput
  }

  /**
   * DocRule findFirst
   */
  export type DocRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter, which DocRule to fetch.
     */
    where?: DocRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocRules to fetch.
     */
    orderBy?: DocRuleOrderByWithRelationInput | DocRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocRules.
     */
    cursor?: DocRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocRules.
     */
    distinct?: DocRuleScalarFieldEnum | DocRuleScalarFieldEnum[]
  }

  /**
   * DocRule findFirstOrThrow
   */
  export type DocRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter, which DocRule to fetch.
     */
    where?: DocRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocRules to fetch.
     */
    orderBy?: DocRuleOrderByWithRelationInput | DocRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocRules.
     */
    cursor?: DocRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocRules.
     */
    distinct?: DocRuleScalarFieldEnum | DocRuleScalarFieldEnum[]
  }

  /**
   * DocRule findMany
   */
  export type DocRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter, which DocRules to fetch.
     */
    where?: DocRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocRules to fetch.
     */
    orderBy?: DocRuleOrderByWithRelationInput | DocRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocRules.
     */
    cursor?: DocRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocRules.
     */
    skip?: number
    distinct?: DocRuleScalarFieldEnum | DocRuleScalarFieldEnum[]
  }

  /**
   * DocRule create
   */
  export type DocRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a DocRule.
     */
    data: XOR<DocRuleCreateInput, DocRuleUncheckedCreateInput>
  }

  /**
   * DocRule createMany
   */
  export type DocRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocRules.
     */
    data: DocRuleCreateManyInput | DocRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocRule createManyAndReturn
   */
  export type DocRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * The data used to create many DocRules.
     */
    data: DocRuleCreateManyInput | DocRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocRule update
   */
  export type DocRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a DocRule.
     */
    data: XOR<DocRuleUpdateInput, DocRuleUncheckedUpdateInput>
    /**
     * Choose, which DocRule to update.
     */
    where: DocRuleWhereUniqueInput
  }

  /**
   * DocRule updateMany
   */
  export type DocRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocRules.
     */
    data: XOR<DocRuleUpdateManyMutationInput, DocRuleUncheckedUpdateManyInput>
    /**
     * Filter which DocRules to update
     */
    where?: DocRuleWhereInput
    /**
     * Limit how many DocRules to update.
     */
    limit?: number
  }

  /**
   * DocRule updateManyAndReturn
   */
  export type DocRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * The data used to update DocRules.
     */
    data: XOR<DocRuleUpdateManyMutationInput, DocRuleUncheckedUpdateManyInput>
    /**
     * Filter which DocRules to update
     */
    where?: DocRuleWhereInput
    /**
     * Limit how many DocRules to update.
     */
    limit?: number
  }

  /**
   * DocRule upsert
   */
  export type DocRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the DocRule to update in case it exists.
     */
    where: DocRuleWhereUniqueInput
    /**
     * In case the DocRule found by the `where` argument doesn't exist, create a new DocRule with this data.
     */
    create: XOR<DocRuleCreateInput, DocRuleUncheckedCreateInput>
    /**
     * In case the DocRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocRuleUpdateInput, DocRuleUncheckedUpdateInput>
  }

  /**
   * DocRule delete
   */
  export type DocRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
    /**
     * Filter which DocRule to delete.
     */
    where: DocRuleWhereUniqueInput
  }

  /**
   * DocRule deleteMany
   */
  export type DocRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocRules to delete
     */
    where?: DocRuleWhereInput
    /**
     * Limit how many DocRules to delete.
     */
    limit?: number
  }

  /**
   * DocRule.requirements
   */
  export type DocRule$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    where?: RequestRequirementWhereInput
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    cursor?: RequestRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * DocRule without action
   */
  export type DocRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocRule
     */
    select?: DocRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocRule
     */
    omit?: DocRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocRuleInclude<ExtArgs> | null
  }


  /**
   * Model RequestRequirement
   */

  export type AggregateRequestRequirement = {
    _count: RequestRequirementCountAggregateOutputType | null
    _min: RequestRequirementMinAggregateOutputType | null
    _max: RequestRequirementMaxAggregateOutputType | null
  }

  export type RequestRequirementMinAggregateOutputType = {
    id: string | null
    eventRequestId: string | null
    docRuleId: string | null
    status: $Enums.RequirementStatus | null
    fileUrl: string | null
    signedById: string | null
    updatedAt: Date | null
  }

  export type RequestRequirementMaxAggregateOutputType = {
    id: string | null
    eventRequestId: string | null
    docRuleId: string | null
    status: $Enums.RequirementStatus | null
    fileUrl: string | null
    signedById: string | null
    updatedAt: Date | null
  }

  export type RequestRequirementCountAggregateOutputType = {
    id: number
    eventRequestId: number
    docRuleId: number
    status: number
    fileUrl: number
    signedById: number
    updatedAt: number
    _all: number
  }


  export type RequestRequirementMinAggregateInputType = {
    id?: true
    eventRequestId?: true
    docRuleId?: true
    status?: true
    fileUrl?: true
    signedById?: true
    updatedAt?: true
  }

  export type RequestRequirementMaxAggregateInputType = {
    id?: true
    eventRequestId?: true
    docRuleId?: true
    status?: true
    fileUrl?: true
    signedById?: true
    updatedAt?: true
  }

  export type RequestRequirementCountAggregateInputType = {
    id?: true
    eventRequestId?: true
    docRuleId?: true
    status?: true
    fileUrl?: true
    signedById?: true
    updatedAt?: true
    _all?: true
  }

  export type RequestRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestRequirement to aggregate.
     */
    where?: RequestRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestRequirements to fetch.
     */
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestRequirements
    **/
    _count?: true | RequestRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestRequirementMaxAggregateInputType
  }

  export type GetRequestRequirementAggregateType<T extends RequestRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestRequirement[P]>
      : GetScalarType<T[P], AggregateRequestRequirement[P]>
  }




  export type RequestRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestRequirementWhereInput
    orderBy?: RequestRequirementOrderByWithAggregationInput | RequestRequirementOrderByWithAggregationInput[]
    by: RequestRequirementScalarFieldEnum[] | RequestRequirementScalarFieldEnum
    having?: RequestRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestRequirementCountAggregateInputType | true
    _min?: RequestRequirementMinAggregateInputType
    _max?: RequestRequirementMaxAggregateInputType
  }

  export type RequestRequirementGroupByOutputType = {
    id: string
    eventRequestId: string
    docRuleId: string
    status: $Enums.RequirementStatus
    fileUrl: string | null
    signedById: string | null
    updatedAt: Date
    _count: RequestRequirementCountAggregateOutputType | null
    _min: RequestRequirementMinAggregateOutputType | null
    _max: RequestRequirementMaxAggregateOutputType | null
  }

  type GetRequestRequirementGroupByPayload<T extends RequestRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], RequestRequirementGroupByOutputType[P]>
        }
      >
    >


  export type RequestRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventRequestId?: boolean
    docRuleId?: boolean
    status?: boolean
    fileUrl?: boolean
    signedById?: boolean
    updatedAt?: boolean
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }, ExtArgs["result"]["requestRequirement"]>

  export type RequestRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventRequestId?: boolean
    docRuleId?: boolean
    status?: boolean
    fileUrl?: boolean
    signedById?: boolean
    updatedAt?: boolean
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }, ExtArgs["result"]["requestRequirement"]>

  export type RequestRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventRequestId?: boolean
    docRuleId?: boolean
    status?: boolean
    fileUrl?: boolean
    signedById?: boolean
    updatedAt?: boolean
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }, ExtArgs["result"]["requestRequirement"]>

  export type RequestRequirementSelectScalar = {
    id?: boolean
    eventRequestId?: boolean
    docRuleId?: boolean
    status?: boolean
    fileUrl?: boolean
    signedById?: boolean
    updatedAt?: boolean
  }

  export type RequestRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventRequestId" | "docRuleId" | "status" | "fileUrl" | "signedById" | "updatedAt", ExtArgs["result"]["requestRequirement"]>
  export type RequestRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }
  export type RequestRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }
  export type RequestRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventRequest?: boolean | EventRequestDefaultArgs<ExtArgs>
    docRule?: boolean | DocRuleDefaultArgs<ExtArgs>
    signedBy?: boolean | RequestRequirement$signedByArgs<ExtArgs>
  }

  export type $RequestRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestRequirement"
    objects: {
      eventRequest: Prisma.$EventRequestPayload<ExtArgs>
      docRule: Prisma.$DocRulePayload<ExtArgs>
      signedBy: Prisma.$FacultyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventRequestId: string
      docRuleId: string
      status: $Enums.RequirementStatus
      fileUrl: string | null
      signedById: string | null
      updatedAt: Date
    }, ExtArgs["result"]["requestRequirement"]>
    composites: {}
  }

  type RequestRequirementGetPayload<S extends boolean | null | undefined | RequestRequirementDefaultArgs> = $Result.GetResult<Prisma.$RequestRequirementPayload, S>

  type RequestRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestRequirementCountAggregateInputType | true
    }

  export interface RequestRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestRequirement'], meta: { name: 'RequestRequirement' } }
    /**
     * Find zero or one RequestRequirement that matches the filter.
     * @param {RequestRequirementFindUniqueArgs} args - Arguments to find a RequestRequirement
     * @example
     * // Get one RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestRequirementFindUniqueArgs>(args: SelectSubset<T, RequestRequirementFindUniqueArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestRequirementFindUniqueOrThrowArgs} args - Arguments to find a RequestRequirement
     * @example
     * // Get one RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementFindFirstArgs} args - Arguments to find a RequestRequirement
     * @example
     * // Get one RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestRequirementFindFirstArgs>(args?: SelectSubset<T, RequestRequirementFindFirstArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementFindFirstOrThrowArgs} args - Arguments to find a RequestRequirement
     * @example
     * // Get one RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestRequirements
     * const requestRequirements = await prisma.requestRequirement.findMany()
     * 
     * // Get first 10 RequestRequirements
     * const requestRequirements = await prisma.requestRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestRequirementWithIdOnly = await prisma.requestRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestRequirementFindManyArgs>(args?: SelectSubset<T, RequestRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestRequirement.
     * @param {RequestRequirementCreateArgs} args - Arguments to create a RequestRequirement.
     * @example
     * // Create one RequestRequirement
     * const RequestRequirement = await prisma.requestRequirement.create({
     *   data: {
     *     // ... data to create a RequestRequirement
     *   }
     * })
     * 
     */
    create<T extends RequestRequirementCreateArgs>(args: SelectSubset<T, RequestRequirementCreateArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestRequirements.
     * @param {RequestRequirementCreateManyArgs} args - Arguments to create many RequestRequirements.
     * @example
     * // Create many RequestRequirements
     * const requestRequirement = await prisma.requestRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestRequirementCreateManyArgs>(args?: SelectSubset<T, RequestRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestRequirements and returns the data saved in the database.
     * @param {RequestRequirementCreateManyAndReturnArgs} args - Arguments to create many RequestRequirements.
     * @example
     * // Create many RequestRequirements
     * const requestRequirement = await prisma.requestRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestRequirements and only return the `id`
     * const requestRequirementWithIdOnly = await prisma.requestRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestRequirement.
     * @param {RequestRequirementDeleteArgs} args - Arguments to delete one RequestRequirement.
     * @example
     * // Delete one RequestRequirement
     * const RequestRequirement = await prisma.requestRequirement.delete({
     *   where: {
     *     // ... filter to delete one RequestRequirement
     *   }
     * })
     * 
     */
    delete<T extends RequestRequirementDeleteArgs>(args: SelectSubset<T, RequestRequirementDeleteArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestRequirement.
     * @param {RequestRequirementUpdateArgs} args - Arguments to update one RequestRequirement.
     * @example
     * // Update one RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestRequirementUpdateArgs>(args: SelectSubset<T, RequestRequirementUpdateArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestRequirements.
     * @param {RequestRequirementDeleteManyArgs} args - Arguments to filter RequestRequirements to delete.
     * @example
     * // Delete a few RequestRequirements
     * const { count } = await prisma.requestRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestRequirementDeleteManyArgs>(args?: SelectSubset<T, RequestRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestRequirements
     * const requestRequirement = await prisma.requestRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestRequirementUpdateManyArgs>(args: SelectSubset<T, RequestRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestRequirements and returns the data updated in the database.
     * @param {RequestRequirementUpdateManyAndReturnArgs} args - Arguments to update many RequestRequirements.
     * @example
     * // Update many RequestRequirements
     * const requestRequirement = await prisma.requestRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestRequirements and only return the `id`
     * const requestRequirementWithIdOnly = await prisma.requestRequirement.updateManyAndReturn({
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
    updateManyAndReturn<T extends RequestRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestRequirement.
     * @param {RequestRequirementUpsertArgs} args - Arguments to update or create a RequestRequirement.
     * @example
     * // Update or create a RequestRequirement
     * const requestRequirement = await prisma.requestRequirement.upsert({
     *   create: {
     *     // ... data to create a RequestRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestRequirement we want to update
     *   }
     * })
     */
    upsert<T extends RequestRequirementUpsertArgs>(args: SelectSubset<T, RequestRequirementUpsertArgs<ExtArgs>>): Prisma__RequestRequirementClient<$Result.GetResult<Prisma.$RequestRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementCountArgs} args - Arguments to filter RequestRequirements to count.
     * @example
     * // Count the number of RequestRequirements
     * const count = await prisma.requestRequirement.count({
     *   where: {
     *     // ... the filter for the RequestRequirements we want to count
     *   }
     * })
    **/
    count<T extends RequestRequirementCountArgs>(
      args?: Subset<T, RequestRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestRequirementAggregateArgs>(args: Subset<T, RequestRequirementAggregateArgs>): Prisma.PrismaPromise<GetRequestRequirementAggregateType<T>>

    /**
     * Group by RequestRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestRequirementGroupByArgs} args - Group by arguments.
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
      T extends RequestRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestRequirementGroupByArgs['orderBy'] }
        : { orderBy?: RequestRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestRequirement model
   */
  readonly fields: RequestRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventRequest<T extends EventRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventRequestDefaultArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    docRule<T extends DocRuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocRuleDefaultArgs<ExtArgs>>): Prisma__DocRuleClient<$Result.GetResult<Prisma.$DocRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signedBy<T extends RequestRequirement$signedByArgs<ExtArgs> = {}>(args?: Subset<T, RequestRequirement$signedByArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RequestRequirement model
   */
  interface RequestRequirementFieldRefs {
    readonly id: FieldRef<"RequestRequirement", 'String'>
    readonly eventRequestId: FieldRef<"RequestRequirement", 'String'>
    readonly docRuleId: FieldRef<"RequestRequirement", 'String'>
    readonly status: FieldRef<"RequestRequirement", 'RequirementStatus'>
    readonly fileUrl: FieldRef<"RequestRequirement", 'String'>
    readonly signedById: FieldRef<"RequestRequirement", 'String'>
    readonly updatedAt: FieldRef<"RequestRequirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestRequirement findUnique
   */
  export type RequestRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter, which RequestRequirement to fetch.
     */
    where: RequestRequirementWhereUniqueInput
  }

  /**
   * RequestRequirement findUniqueOrThrow
   */
  export type RequestRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter, which RequestRequirement to fetch.
     */
    where: RequestRequirementWhereUniqueInput
  }

  /**
   * RequestRequirement findFirst
   */
  export type RequestRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter, which RequestRequirement to fetch.
     */
    where?: RequestRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestRequirements to fetch.
     */
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestRequirements.
     */
    cursor?: RequestRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestRequirements.
     */
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * RequestRequirement findFirstOrThrow
   */
  export type RequestRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter, which RequestRequirement to fetch.
     */
    where?: RequestRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestRequirements to fetch.
     */
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestRequirements.
     */
    cursor?: RequestRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestRequirements.
     */
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * RequestRequirement findMany
   */
  export type RequestRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter, which RequestRequirements to fetch.
     */
    where?: RequestRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestRequirements to fetch.
     */
    orderBy?: RequestRequirementOrderByWithRelationInput | RequestRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestRequirements.
     */
    cursor?: RequestRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestRequirements.
     */
    skip?: number
    distinct?: RequestRequirementScalarFieldEnum | RequestRequirementScalarFieldEnum[]
  }

  /**
   * RequestRequirement create
   */
  export type RequestRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestRequirement.
     */
    data: XOR<RequestRequirementCreateInput, RequestRequirementUncheckedCreateInput>
  }

  /**
   * RequestRequirement createMany
   */
  export type RequestRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestRequirements.
     */
    data: RequestRequirementCreateManyInput | RequestRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestRequirement createManyAndReturn
   */
  export type RequestRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many RequestRequirements.
     */
    data: RequestRequirementCreateManyInput | RequestRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestRequirement update
   */
  export type RequestRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestRequirement.
     */
    data: XOR<RequestRequirementUpdateInput, RequestRequirementUncheckedUpdateInput>
    /**
     * Choose, which RequestRequirement to update.
     */
    where: RequestRequirementWhereUniqueInput
  }

  /**
   * RequestRequirement updateMany
   */
  export type RequestRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestRequirements.
     */
    data: XOR<RequestRequirementUpdateManyMutationInput, RequestRequirementUncheckedUpdateManyInput>
    /**
     * Filter which RequestRequirements to update
     */
    where?: RequestRequirementWhereInput
    /**
     * Limit how many RequestRequirements to update.
     */
    limit?: number
  }

  /**
   * RequestRequirement updateManyAndReturn
   */
  export type RequestRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * The data used to update RequestRequirements.
     */
    data: XOR<RequestRequirementUpdateManyMutationInput, RequestRequirementUncheckedUpdateManyInput>
    /**
     * Filter which RequestRequirements to update
     */
    where?: RequestRequirementWhereInput
    /**
     * Limit how many RequestRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestRequirement upsert
   */
  export type RequestRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestRequirement to update in case it exists.
     */
    where: RequestRequirementWhereUniqueInput
    /**
     * In case the RequestRequirement found by the `where` argument doesn't exist, create a new RequestRequirement with this data.
     */
    create: XOR<RequestRequirementCreateInput, RequestRequirementUncheckedCreateInput>
    /**
     * In case the RequestRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestRequirementUpdateInput, RequestRequirementUncheckedUpdateInput>
  }

  /**
   * RequestRequirement delete
   */
  export type RequestRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
    /**
     * Filter which RequestRequirement to delete.
     */
    where: RequestRequirementWhereUniqueInput
  }

  /**
   * RequestRequirement deleteMany
   */
  export type RequestRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestRequirements to delete
     */
    where?: RequestRequirementWhereInput
    /**
     * Limit how many RequestRequirements to delete.
     */
    limit?: number
  }

  /**
   * RequestRequirement.signedBy
   */
  export type RequestRequirement$signedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
  }

  /**
   * RequestRequirement without action
   */
  export type RequestRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestRequirement
     */
    select?: RequestRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestRequirement
     */
    omit?: RequestRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestRequirementInclude<ExtArgs> | null
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


  export const FacultyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    name: 'name',
    facultyInChargeId: 'facultyInChargeId'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    capacity: 'capacity'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const EventRequestScalarFieldEnum: {
    id: 'id',
    clubId: 'clubId',
    eventName: 'eventName',
    venueId: 'venueId',
    startTime: 'startTime',
    endTime: 'endTime',
    footfall: 'footfall',
    hasExternalGuest: 'hasExternalGuest',
    equipment: 'equipment',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EventRequestScalarFieldEnum = (typeof EventRequestScalarFieldEnum)[keyof typeof EventRequestScalarFieldEnum]


  export const DocRuleScalarFieldEnum: {
    id: 'id',
    label: 'label',
    kind: 'kind',
    minFootfall: 'minFootfall',
    requiresGuest: 'requiresGuest',
    audiOnly: 'audiOnly',
    signerRole: 'signerRole'
  };

  export type DocRuleScalarFieldEnum = (typeof DocRuleScalarFieldEnum)[keyof typeof DocRuleScalarFieldEnum]


  export const RequestRequirementScalarFieldEnum: {
    id: 'id',
    eventRequestId: 'eventRequestId',
    docRuleId: 'docRuleId',
    status: 'status',
    fileUrl: 'fileUrl',
    signedById: 'signedById',
    updatedAt: 'updatedAt'
  };

  export type RequestRequirementScalarFieldEnum = (typeof RequestRequirementScalarFieldEnum)[keyof typeof RequestRequirementScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'VenueType'
   */
  export type EnumVenueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueType'>
    


  /**
   * Reference to a field of type 'VenueType[]'
   */
  export type ListEnumVenueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'RuleKind'
   */
  export type EnumRuleKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleKind'>
    


  /**
   * Reference to a field of type 'RuleKind[]'
   */
  export type ListEnumRuleKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleKind[]'>
    


  /**
   * Reference to a field of type 'RequirementStatus'
   */
  export type EnumRequirementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementStatus'>
    


  /**
   * Reference to a field of type 'RequirementStatus[]'
   */
  export type ListEnumRequirementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementStatus[]'>
    


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


  export type FacultyWhereInput = {
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    id?: StringFilter<"Faculty"> | string
    name?: StringFilter<"Faculty"> | string
    role?: EnumRoleFilter<"Faculty"> | $Enums.Role
    clubs?: ClubListRelationFilter
    signedRequirements?: RequestRequirementListRelationFilter
  }

  export type FacultyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clubs?: ClubOrderByRelationAggregateInput
    signedRequirements?: RequestRequirementOrderByRelationAggregateInput
  }

  export type FacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    name?: StringFilter<"Faculty"> | string
    role?: EnumRoleFilter<"Faculty"> | $Enums.Role
    clubs?: ClubListRelationFilter
    signedRequirements?: RequestRequirementListRelationFilter
  }, "id">

  export type FacultyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: FacultyCountOrderByAggregateInput
    _max?: FacultyMaxOrderByAggregateInput
    _min?: FacultyMinOrderByAggregateInput
  }

  export type FacultyScalarWhereWithAggregatesInput = {
    AND?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    OR?: FacultyScalarWhereWithAggregatesInput[]
    NOT?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Faculty"> | string
    name?: StringWithAggregatesFilter<"Faculty"> | string
    role?: EnumRoleWithAggregatesFilter<"Faculty"> | $Enums.Role
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    facultyInChargeId?: StringFilter<"Club"> | string
    facultyInCharge?: XOR<FacultyScalarRelationFilter, FacultyWhereInput>
    requests?: EventRequestListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    facultyInChargeId?: SortOrder
    facultyInCharge?: FacultyOrderByWithRelationInput
    requests?: EventRequestOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    name?: StringFilter<"Club"> | string
    facultyInChargeId?: StringFilter<"Club"> | string
    facultyInCharge?: XOR<FacultyScalarRelationFilter, FacultyWhereInput>
    requests?: EventRequestListRelationFilter
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    facultyInChargeId?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    name?: StringWithAggregatesFilter<"Club"> | string
    facultyInChargeId?: StringWithAggregatesFilter<"Club"> | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    type?: EnumVenueTypeFilter<"Venue"> | $Enums.VenueType
    capacity?: IntFilter<"Venue"> | number
    requests?: EventRequestListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    requests?: EventRequestOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    type?: EnumVenueTypeFilter<"Venue"> | $Enums.VenueType
    capacity?: IntFilter<"Venue"> | number
    requests?: EventRequestListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    type?: EnumVenueTypeWithAggregatesFilter<"Venue"> | $Enums.VenueType
    capacity?: IntWithAggregatesFilter<"Venue"> | number
  }

  export type EventRequestWhereInput = {
    AND?: EventRequestWhereInput | EventRequestWhereInput[]
    OR?: EventRequestWhereInput[]
    NOT?: EventRequestWhereInput | EventRequestWhereInput[]
    id?: StringFilter<"EventRequest"> | string
    clubId?: StringFilter<"EventRequest"> | string
    eventName?: StringFilter<"EventRequest"> | string
    venueId?: StringFilter<"EventRequest"> | string
    startTime?: DateTimeFilter<"EventRequest"> | Date | string
    endTime?: DateTimeFilter<"EventRequest"> | Date | string
    footfall?: IntFilter<"EventRequest"> | number
    hasExternalGuest?: BoolFilter<"EventRequest"> | boolean
    equipment?: StringNullableListFilter<"EventRequest">
    status?: EnumRequestStatusFilter<"EventRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"EventRequest"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    requirements?: RequestRequirementListRelationFilter
  }

  export type EventRequestOrderByWithRelationInput = {
    id?: SortOrder
    clubId?: SortOrder
    eventName?: SortOrder
    venueId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    footfall?: SortOrder
    hasExternalGuest?: SortOrder
    equipment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    club?: ClubOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
    requirements?: RequestRequirementOrderByRelationAggregateInput
  }

  export type EventRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventRequestWhereInput | EventRequestWhereInput[]
    OR?: EventRequestWhereInput[]
    NOT?: EventRequestWhereInput | EventRequestWhereInput[]
    clubId?: StringFilter<"EventRequest"> | string
    eventName?: StringFilter<"EventRequest"> | string
    venueId?: StringFilter<"EventRequest"> | string
    startTime?: DateTimeFilter<"EventRequest"> | Date | string
    endTime?: DateTimeFilter<"EventRequest"> | Date | string
    footfall?: IntFilter<"EventRequest"> | number
    hasExternalGuest?: BoolFilter<"EventRequest"> | boolean
    equipment?: StringNullableListFilter<"EventRequest">
    status?: EnumRequestStatusFilter<"EventRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"EventRequest"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    requirements?: RequestRequirementListRelationFilter
  }, "id">

  export type EventRequestOrderByWithAggregationInput = {
    id?: SortOrder
    clubId?: SortOrder
    eventName?: SortOrder
    venueId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    footfall?: SortOrder
    hasExternalGuest?: SortOrder
    equipment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EventRequestCountOrderByAggregateInput
    _avg?: EventRequestAvgOrderByAggregateInput
    _max?: EventRequestMaxOrderByAggregateInput
    _min?: EventRequestMinOrderByAggregateInput
    _sum?: EventRequestSumOrderByAggregateInput
  }

  export type EventRequestScalarWhereWithAggregatesInput = {
    AND?: EventRequestScalarWhereWithAggregatesInput | EventRequestScalarWhereWithAggregatesInput[]
    OR?: EventRequestScalarWhereWithAggregatesInput[]
    NOT?: EventRequestScalarWhereWithAggregatesInput | EventRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventRequest"> | string
    clubId?: StringWithAggregatesFilter<"EventRequest"> | string
    eventName?: StringWithAggregatesFilter<"EventRequest"> | string
    venueId?: StringWithAggregatesFilter<"EventRequest"> | string
    startTime?: DateTimeWithAggregatesFilter<"EventRequest"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"EventRequest"> | Date | string
    footfall?: IntWithAggregatesFilter<"EventRequest"> | number
    hasExternalGuest?: BoolWithAggregatesFilter<"EventRequest"> | boolean
    equipment?: StringNullableListFilter<"EventRequest">
    status?: EnumRequestStatusWithAggregatesFilter<"EventRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"EventRequest"> | Date | string
  }

  export type DocRuleWhereInput = {
    AND?: DocRuleWhereInput | DocRuleWhereInput[]
    OR?: DocRuleWhereInput[]
    NOT?: DocRuleWhereInput | DocRuleWhereInput[]
    id?: StringFilter<"DocRule"> | string
    label?: StringFilter<"DocRule"> | string
    kind?: EnumRuleKindFilter<"DocRule"> | $Enums.RuleKind
    minFootfall?: IntNullableFilter<"DocRule"> | number | null
    requiresGuest?: BoolFilter<"DocRule"> | boolean
    audiOnly?: BoolFilter<"DocRule"> | boolean
    signerRole?: EnumRoleNullableFilter<"DocRule"> | $Enums.Role | null
    requirements?: RequestRequirementListRelationFilter
  }

  export type DocRuleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    kind?: SortOrder
    minFootfall?: SortOrderInput | SortOrder
    requiresGuest?: SortOrder
    audiOnly?: SortOrder
    signerRole?: SortOrderInput | SortOrder
    requirements?: RequestRequirementOrderByRelationAggregateInput
  }

  export type DocRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocRuleWhereInput | DocRuleWhereInput[]
    OR?: DocRuleWhereInput[]
    NOT?: DocRuleWhereInput | DocRuleWhereInput[]
    label?: StringFilter<"DocRule"> | string
    kind?: EnumRuleKindFilter<"DocRule"> | $Enums.RuleKind
    minFootfall?: IntNullableFilter<"DocRule"> | number | null
    requiresGuest?: BoolFilter<"DocRule"> | boolean
    audiOnly?: BoolFilter<"DocRule"> | boolean
    signerRole?: EnumRoleNullableFilter<"DocRule"> | $Enums.Role | null
    requirements?: RequestRequirementListRelationFilter
  }, "id">

  export type DocRuleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    kind?: SortOrder
    minFootfall?: SortOrderInput | SortOrder
    requiresGuest?: SortOrder
    audiOnly?: SortOrder
    signerRole?: SortOrderInput | SortOrder
    _count?: DocRuleCountOrderByAggregateInput
    _avg?: DocRuleAvgOrderByAggregateInput
    _max?: DocRuleMaxOrderByAggregateInput
    _min?: DocRuleMinOrderByAggregateInput
    _sum?: DocRuleSumOrderByAggregateInput
  }

  export type DocRuleScalarWhereWithAggregatesInput = {
    AND?: DocRuleScalarWhereWithAggregatesInput | DocRuleScalarWhereWithAggregatesInput[]
    OR?: DocRuleScalarWhereWithAggregatesInput[]
    NOT?: DocRuleScalarWhereWithAggregatesInput | DocRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocRule"> | string
    label?: StringWithAggregatesFilter<"DocRule"> | string
    kind?: EnumRuleKindWithAggregatesFilter<"DocRule"> | $Enums.RuleKind
    minFootfall?: IntNullableWithAggregatesFilter<"DocRule"> | number | null
    requiresGuest?: BoolWithAggregatesFilter<"DocRule"> | boolean
    audiOnly?: BoolWithAggregatesFilter<"DocRule"> | boolean
    signerRole?: EnumRoleNullableWithAggregatesFilter<"DocRule"> | $Enums.Role | null
  }

  export type RequestRequirementWhereInput = {
    AND?: RequestRequirementWhereInput | RequestRequirementWhereInput[]
    OR?: RequestRequirementWhereInput[]
    NOT?: RequestRequirementWhereInput | RequestRequirementWhereInput[]
    id?: StringFilter<"RequestRequirement"> | string
    eventRequestId?: StringFilter<"RequestRequirement"> | string
    docRuleId?: StringFilter<"RequestRequirement"> | string
    status?: EnumRequirementStatusFilter<"RequestRequirement"> | $Enums.RequirementStatus
    fileUrl?: StringNullableFilter<"RequestRequirement"> | string | null
    signedById?: StringNullableFilter<"RequestRequirement"> | string | null
    updatedAt?: DateTimeFilter<"RequestRequirement"> | Date | string
    eventRequest?: XOR<EventRequestScalarRelationFilter, EventRequestWhereInput>
    docRule?: XOR<DocRuleScalarRelationFilter, DocRuleWhereInput>
    signedBy?: XOR<FacultyNullableScalarRelationFilter, FacultyWhereInput> | null
  }

  export type RequestRequirementOrderByWithRelationInput = {
    id?: SortOrder
    eventRequestId?: SortOrder
    docRuleId?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    signedById?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    eventRequest?: EventRequestOrderByWithRelationInput
    docRule?: DocRuleOrderByWithRelationInput
    signedBy?: FacultyOrderByWithRelationInput
  }

  export type RequestRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestRequirementWhereInput | RequestRequirementWhereInput[]
    OR?: RequestRequirementWhereInput[]
    NOT?: RequestRequirementWhereInput | RequestRequirementWhereInput[]
    eventRequestId?: StringFilter<"RequestRequirement"> | string
    docRuleId?: StringFilter<"RequestRequirement"> | string
    status?: EnumRequirementStatusFilter<"RequestRequirement"> | $Enums.RequirementStatus
    fileUrl?: StringNullableFilter<"RequestRequirement"> | string | null
    signedById?: StringNullableFilter<"RequestRequirement"> | string | null
    updatedAt?: DateTimeFilter<"RequestRequirement"> | Date | string
    eventRequest?: XOR<EventRequestScalarRelationFilter, EventRequestWhereInput>
    docRule?: XOR<DocRuleScalarRelationFilter, DocRuleWhereInput>
    signedBy?: XOR<FacultyNullableScalarRelationFilter, FacultyWhereInput> | null
  }, "id">

  export type RequestRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    eventRequestId?: SortOrder
    docRuleId?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    signedById?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: RequestRequirementCountOrderByAggregateInput
    _max?: RequestRequirementMaxOrderByAggregateInput
    _min?: RequestRequirementMinOrderByAggregateInput
  }

  export type RequestRequirementScalarWhereWithAggregatesInput = {
    AND?: RequestRequirementScalarWhereWithAggregatesInput | RequestRequirementScalarWhereWithAggregatesInput[]
    OR?: RequestRequirementScalarWhereWithAggregatesInput[]
    NOT?: RequestRequirementScalarWhereWithAggregatesInput | RequestRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestRequirement"> | string
    eventRequestId?: StringWithAggregatesFilter<"RequestRequirement"> | string
    docRuleId?: StringWithAggregatesFilter<"RequestRequirement"> | string
    status?: EnumRequirementStatusWithAggregatesFilter<"RequestRequirement"> | $Enums.RequirementStatus
    fileUrl?: StringNullableWithAggregatesFilter<"RequestRequirement"> | string | null
    signedById?: StringNullableWithAggregatesFilter<"RequestRequirement"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"RequestRequirement"> | Date | string
  }

  export type FacultyCreateInput = {
    id?: string
    name: string
    role?: $Enums.Role
    clubs?: ClubCreateNestedManyWithoutFacultyInChargeInput
    signedRequirements?: RequestRequirementCreateNestedManyWithoutSignedByInput
  }

  export type FacultyUncheckedCreateInput = {
    id?: string
    name: string
    role?: $Enums.Role
    clubs?: ClubUncheckedCreateNestedManyWithoutFacultyInChargeInput
    signedRequirements?: RequestRequirementUncheckedCreateNestedManyWithoutSignedByInput
  }

  export type FacultyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubs?: ClubUpdateManyWithoutFacultyInChargeNestedInput
    signedRequirements?: RequestRequirementUpdateManyWithoutSignedByNestedInput
  }

  export type FacultyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubs?: ClubUncheckedUpdateManyWithoutFacultyInChargeNestedInput
    signedRequirements?: RequestRequirementUncheckedUpdateManyWithoutSignedByNestedInput
  }

  export type FacultyCreateManyInput = {
    id?: string
    name: string
    role?: $Enums.Role
  }

  export type FacultyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type FacultyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ClubCreateInput = {
    id?: string
    name: string
    facultyInCharge: FacultyCreateNestedOneWithoutClubsInput
    requests?: EventRequestCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    name: string
    facultyInChargeId: string
    requests?: EventRequestUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyInCharge?: FacultyUpdateOneRequiredWithoutClubsNestedInput
    requests?: EventRequestUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyInChargeId?: StringFieldUpdateOperationsInput | string
    requests?: EventRequestUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: string
    name: string
    facultyInChargeId: string
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyInChargeId?: StringFieldUpdateOperationsInput | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    type: $Enums.VenueType
    capacity: number
    requests?: EventRequestCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.VenueType
    capacity: number
    requests?: EventRequestUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
    requests?: EventRequestUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
    requests?: EventRequestUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    type: $Enums.VenueType
    capacity: number
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type EventRequestCreateInput = {
    id?: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    club: ClubCreateNestedOneWithoutRequestsInput
    venue: VenueCreateNestedOneWithoutRequestsInput
    requirements?: RequestRequirementCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestUncheckedCreateInput = {
    id?: string
    clubId: string
    eventName: string
    venueId: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    requirements?: RequestRequirementUncheckedCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutRequestsNestedInput
    venue?: VenueUpdateOneRequiredWithoutRequestsNestedInput
    requirements?: RequestRequirementUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequestRequirementUncheckedUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestCreateManyInput = {
    id?: string
    clubId: string
    eventName: string
    venueId: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type EventRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocRuleCreateInput = {
    id?: string
    label: string
    kind: $Enums.RuleKind
    minFootfall?: number | null
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: $Enums.Role | null
    requirements?: RequestRequirementCreateNestedManyWithoutDocRuleInput
  }

  export type DocRuleUncheckedCreateInput = {
    id?: string
    label: string
    kind: $Enums.RuleKind
    minFootfall?: number | null
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: $Enums.Role | null
    requirements?: RequestRequirementUncheckedCreateNestedManyWithoutDocRuleInput
  }

  export type DocRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    requirements?: RequestRequirementUpdateManyWithoutDocRuleNestedInput
  }

  export type DocRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    requirements?: RequestRequirementUncheckedUpdateManyWithoutDocRuleNestedInput
  }

  export type DocRuleCreateManyInput = {
    id?: string
    label: string
    kind: $Enums.RuleKind
    minFootfall?: number | null
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: $Enums.Role | null
  }

  export type DocRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type DocRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type RequestRequirementCreateInput = {
    id?: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
    eventRequest: EventRequestCreateNestedOneWithoutRequirementsInput
    docRule: DocRuleCreateNestedOneWithoutRequirementsInput
    signedBy?: FacultyCreateNestedOneWithoutSignedRequirementsInput
  }

  export type RequestRequirementUncheckedCreateInput = {
    id?: string
    eventRequestId: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventRequest?: EventRequestUpdateOneRequiredWithoutRequirementsNestedInput
    docRule?: DocRuleUpdateOneRequiredWithoutRequirementsNestedInput
    signedBy?: FacultyUpdateOneWithoutSignedRequirementsNestedInput
  }

  export type RequestRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementCreateManyInput = {
    id?: string
    eventRequestId: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ClubListRelationFilter = {
    every?: ClubWhereInput
    some?: ClubWhereInput
    none?: ClubWhereInput
  }

  export type RequestRequirementListRelationFilter = {
    every?: RequestRequirementWhereInput
    some?: RequestRequirementWhereInput
    none?: RequestRequirementWhereInput
  }

  export type ClubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type FacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type FacultyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FacultyScalarRelationFilter = {
    is?: FacultyWhereInput
    isNot?: FacultyWhereInput
  }

  export type EventRequestListRelationFilter = {
    every?: EventRequestWhereInput
    some?: EventRequestWhereInput
    none?: EventRequestWhereInput
  }

  export type EventRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyInChargeId?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyInChargeId?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    facultyInChargeId?: SortOrder
  }

  export type EnumVenueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeFilter<$PrismaModel> | $Enums.VenueType
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

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type EnumVenueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel> | $Enums.VenueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueTypeFilter<$PrismaModel>
    _max?: NestedEnumVenueTypeFilter<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type EventRequestCountOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    eventName?: SortOrder
    venueId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    footfall?: SortOrder
    hasExternalGuest?: SortOrder
    equipment?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventRequestAvgOrderByAggregateInput = {
    footfall?: SortOrder
  }

  export type EventRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    eventName?: SortOrder
    venueId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    footfall?: SortOrder
    hasExternalGuest?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventRequestMinOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
    eventName?: SortOrder
    venueId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    footfall?: SortOrder
    hasExternalGuest?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EventRequestSumOrderByAggregateInput = {
    footfall?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumRuleKindFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindFilter<$PrismaModel> | $Enums.RuleKind
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocRuleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    kind?: SortOrder
    minFootfall?: SortOrder
    requiresGuest?: SortOrder
    audiOnly?: SortOrder
    signerRole?: SortOrder
  }

  export type DocRuleAvgOrderByAggregateInput = {
    minFootfall?: SortOrder
  }

  export type DocRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    kind?: SortOrder
    minFootfall?: SortOrder
    requiresGuest?: SortOrder
    audiOnly?: SortOrder
    signerRole?: SortOrder
  }

  export type DocRuleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    kind?: SortOrder
    minFootfall?: SortOrder
    requiresGuest?: SortOrder
    audiOnly?: SortOrder
    signerRole?: SortOrder
  }

  export type DocRuleSumOrderByAggregateInput = {
    minFootfall?: SortOrder
  }

  export type EnumRuleKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindWithAggregatesFilter<$PrismaModel> | $Enums.RuleKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleKindFilter<$PrismaModel>
    _max?: NestedEnumRuleKindFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type EnumRequirementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | EnumRequirementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequirementStatusFilter<$PrismaModel> | $Enums.RequirementStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventRequestScalarRelationFilter = {
    is?: EventRequestWhereInput
    isNot?: EventRequestWhereInput
  }

  export type DocRuleScalarRelationFilter = {
    is?: DocRuleWhereInput
    isNot?: DocRuleWhereInput
  }

  export type FacultyNullableScalarRelationFilter = {
    is?: FacultyWhereInput | null
    isNot?: FacultyWhereInput | null
  }

  export type RequestRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    eventRequestId?: SortOrder
    docRuleId?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    signedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    eventRequestId?: SortOrder
    docRuleId?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    signedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequestRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    eventRequestId?: SortOrder
    docRuleId?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    signedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequirementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | EnumRequirementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequirementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequirementStatusFilter<$PrismaModel>
    _max?: NestedEnumRequirementStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClubCreateNestedManyWithoutFacultyInChargeInput = {
    create?: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput> | ClubCreateWithoutFacultyInChargeInput[] | ClubUncheckedCreateWithoutFacultyInChargeInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutFacultyInChargeInput | ClubCreateOrConnectWithoutFacultyInChargeInput[]
    createMany?: ClubCreateManyFacultyInChargeInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type RequestRequirementCreateNestedManyWithoutSignedByInput = {
    create?: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput> | RequestRequirementCreateWithoutSignedByInput[] | RequestRequirementUncheckedCreateWithoutSignedByInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutSignedByInput | RequestRequirementCreateOrConnectWithoutSignedByInput[]
    createMany?: RequestRequirementCreateManySignedByInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type ClubUncheckedCreateNestedManyWithoutFacultyInChargeInput = {
    create?: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput> | ClubCreateWithoutFacultyInChargeInput[] | ClubUncheckedCreateWithoutFacultyInChargeInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutFacultyInChargeInput | ClubCreateOrConnectWithoutFacultyInChargeInput[]
    createMany?: ClubCreateManyFacultyInChargeInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type RequestRequirementUncheckedCreateNestedManyWithoutSignedByInput = {
    create?: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput> | RequestRequirementCreateWithoutSignedByInput[] | RequestRequirementUncheckedCreateWithoutSignedByInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutSignedByInput | RequestRequirementCreateOrConnectWithoutSignedByInput[]
    createMany?: RequestRequirementCreateManySignedByInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ClubUpdateManyWithoutFacultyInChargeNestedInput = {
    create?: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput> | ClubCreateWithoutFacultyInChargeInput[] | ClubUncheckedCreateWithoutFacultyInChargeInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutFacultyInChargeInput | ClubCreateOrConnectWithoutFacultyInChargeInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutFacultyInChargeInput | ClubUpsertWithWhereUniqueWithoutFacultyInChargeInput[]
    createMany?: ClubCreateManyFacultyInChargeInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutFacultyInChargeInput | ClubUpdateWithWhereUniqueWithoutFacultyInChargeInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutFacultyInChargeInput | ClubUpdateManyWithWhereWithoutFacultyInChargeInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type RequestRequirementUpdateManyWithoutSignedByNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput> | RequestRequirementCreateWithoutSignedByInput[] | RequestRequirementUncheckedCreateWithoutSignedByInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutSignedByInput | RequestRequirementCreateOrConnectWithoutSignedByInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutSignedByInput | RequestRequirementUpsertWithWhereUniqueWithoutSignedByInput[]
    createMany?: RequestRequirementCreateManySignedByInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutSignedByInput | RequestRequirementUpdateWithWhereUniqueWithoutSignedByInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutSignedByInput | RequestRequirementUpdateManyWithWhereWithoutSignedByInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type ClubUncheckedUpdateManyWithoutFacultyInChargeNestedInput = {
    create?: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput> | ClubCreateWithoutFacultyInChargeInput[] | ClubUncheckedCreateWithoutFacultyInChargeInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutFacultyInChargeInput | ClubCreateOrConnectWithoutFacultyInChargeInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutFacultyInChargeInput | ClubUpsertWithWhereUniqueWithoutFacultyInChargeInput[]
    createMany?: ClubCreateManyFacultyInChargeInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutFacultyInChargeInput | ClubUpdateWithWhereUniqueWithoutFacultyInChargeInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutFacultyInChargeInput | ClubUpdateManyWithWhereWithoutFacultyInChargeInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type RequestRequirementUncheckedUpdateManyWithoutSignedByNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput> | RequestRequirementCreateWithoutSignedByInput[] | RequestRequirementUncheckedCreateWithoutSignedByInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutSignedByInput | RequestRequirementCreateOrConnectWithoutSignedByInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutSignedByInput | RequestRequirementUpsertWithWhereUniqueWithoutSignedByInput[]
    createMany?: RequestRequirementCreateManySignedByInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutSignedByInput | RequestRequirementUpdateWithWhereUniqueWithoutSignedByInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutSignedByInput | RequestRequirementUpdateManyWithWhereWithoutSignedByInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type FacultyCreateNestedOneWithoutClubsInput = {
    create?: XOR<FacultyCreateWithoutClubsInput, FacultyUncheckedCreateWithoutClubsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutClubsInput
    connect?: FacultyWhereUniqueInput
  }

  export type EventRequestCreateNestedManyWithoutClubInput = {
    create?: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput> | EventRequestCreateWithoutClubInput[] | EventRequestUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutClubInput | EventRequestCreateOrConnectWithoutClubInput[]
    createMany?: EventRequestCreateManyClubInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type EventRequestUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput> | EventRequestCreateWithoutClubInput[] | EventRequestUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutClubInput | EventRequestCreateOrConnectWithoutClubInput[]
    createMany?: EventRequestCreateManyClubInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type FacultyUpdateOneRequiredWithoutClubsNestedInput = {
    create?: XOR<FacultyCreateWithoutClubsInput, FacultyUncheckedCreateWithoutClubsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutClubsInput
    upsert?: FacultyUpsertWithoutClubsInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutClubsInput, FacultyUpdateWithoutClubsInput>, FacultyUncheckedUpdateWithoutClubsInput>
  }

  export type EventRequestUpdateManyWithoutClubNestedInput = {
    create?: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput> | EventRequestCreateWithoutClubInput[] | EventRequestUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutClubInput | EventRequestCreateOrConnectWithoutClubInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutClubInput | EventRequestUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: EventRequestCreateManyClubInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutClubInput | EventRequestUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutClubInput | EventRequestUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type EventRequestUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput> | EventRequestCreateWithoutClubInput[] | EventRequestUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutClubInput | EventRequestCreateOrConnectWithoutClubInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutClubInput | EventRequestUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: EventRequestCreateManyClubInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutClubInput | EventRequestUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutClubInput | EventRequestUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type EventRequestCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput> | EventRequestCreateWithoutVenueInput[] | EventRequestUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutVenueInput | EventRequestCreateOrConnectWithoutVenueInput[]
    createMany?: EventRequestCreateManyVenueInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type EventRequestUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput> | EventRequestCreateWithoutVenueInput[] | EventRequestUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutVenueInput | EventRequestCreateOrConnectWithoutVenueInput[]
    createMany?: EventRequestCreateManyVenueInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type EnumVenueTypeFieldUpdateOperationsInput = {
    set?: $Enums.VenueType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventRequestUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput> | EventRequestCreateWithoutVenueInput[] | EventRequestUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutVenueInput | EventRequestCreateOrConnectWithoutVenueInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutVenueInput | EventRequestUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventRequestCreateManyVenueInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutVenueInput | EventRequestUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutVenueInput | EventRequestUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type EventRequestUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput> | EventRequestCreateWithoutVenueInput[] | EventRequestUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutVenueInput | EventRequestCreateOrConnectWithoutVenueInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutVenueInput | EventRequestUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventRequestCreateManyVenueInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutVenueInput | EventRequestUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutVenueInput | EventRequestUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type EventRequestCreateequipmentInput = {
    set: string[]
  }

  export type ClubCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ClubCreateWithoutRequestsInput, ClubUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutRequestsInput
    connect?: ClubWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutRequestsInput = {
    create?: XOR<VenueCreateWithoutRequestsInput, VenueUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutRequestsInput
    connect?: VenueWhereUniqueInput
  }

  export type RequestRequirementCreateNestedManyWithoutEventRequestInput = {
    create?: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput> | RequestRequirementCreateWithoutEventRequestInput[] | RequestRequirementUncheckedCreateWithoutEventRequestInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutEventRequestInput | RequestRequirementCreateOrConnectWithoutEventRequestInput[]
    createMany?: RequestRequirementCreateManyEventRequestInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type RequestRequirementUncheckedCreateNestedManyWithoutEventRequestInput = {
    create?: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput> | RequestRequirementCreateWithoutEventRequestInput[] | RequestRequirementUncheckedCreateWithoutEventRequestInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutEventRequestInput | RequestRequirementCreateOrConnectWithoutEventRequestInput[]
    createMany?: RequestRequirementCreateManyEventRequestInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventRequestUpdateequipmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type ClubUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ClubCreateWithoutRequestsInput, ClubUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutRequestsInput
    upsert?: ClubUpsertWithoutRequestsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutRequestsInput, ClubUpdateWithoutRequestsInput>, ClubUncheckedUpdateWithoutRequestsInput>
  }

  export type VenueUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<VenueCreateWithoutRequestsInput, VenueUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutRequestsInput
    upsert?: VenueUpsertWithoutRequestsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutRequestsInput, VenueUpdateWithoutRequestsInput>, VenueUncheckedUpdateWithoutRequestsInput>
  }

  export type RequestRequirementUpdateManyWithoutEventRequestNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput> | RequestRequirementCreateWithoutEventRequestInput[] | RequestRequirementUncheckedCreateWithoutEventRequestInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutEventRequestInput | RequestRequirementCreateOrConnectWithoutEventRequestInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutEventRequestInput | RequestRequirementUpsertWithWhereUniqueWithoutEventRequestInput[]
    createMany?: RequestRequirementCreateManyEventRequestInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutEventRequestInput | RequestRequirementUpdateWithWhereUniqueWithoutEventRequestInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutEventRequestInput | RequestRequirementUpdateManyWithWhereWithoutEventRequestInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type RequestRequirementUncheckedUpdateManyWithoutEventRequestNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput> | RequestRequirementCreateWithoutEventRequestInput[] | RequestRequirementUncheckedCreateWithoutEventRequestInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutEventRequestInput | RequestRequirementCreateOrConnectWithoutEventRequestInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutEventRequestInput | RequestRequirementUpsertWithWhereUniqueWithoutEventRequestInput[]
    createMany?: RequestRequirementCreateManyEventRequestInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutEventRequestInput | RequestRequirementUpdateWithWhereUniqueWithoutEventRequestInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutEventRequestInput | RequestRequirementUpdateManyWithWhereWithoutEventRequestInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type RequestRequirementCreateNestedManyWithoutDocRuleInput = {
    create?: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput> | RequestRequirementCreateWithoutDocRuleInput[] | RequestRequirementUncheckedCreateWithoutDocRuleInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutDocRuleInput | RequestRequirementCreateOrConnectWithoutDocRuleInput[]
    createMany?: RequestRequirementCreateManyDocRuleInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type RequestRequirementUncheckedCreateNestedManyWithoutDocRuleInput = {
    create?: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput> | RequestRequirementCreateWithoutDocRuleInput[] | RequestRequirementUncheckedCreateWithoutDocRuleInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutDocRuleInput | RequestRequirementCreateOrConnectWithoutDocRuleInput[]
    createMany?: RequestRequirementCreateManyDocRuleInputEnvelope
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
  }

  export type EnumRuleKindFieldUpdateOperationsInput = {
    set?: $Enums.RuleKind
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type RequestRequirementUpdateManyWithoutDocRuleNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput> | RequestRequirementCreateWithoutDocRuleInput[] | RequestRequirementUncheckedCreateWithoutDocRuleInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutDocRuleInput | RequestRequirementCreateOrConnectWithoutDocRuleInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutDocRuleInput | RequestRequirementUpsertWithWhereUniqueWithoutDocRuleInput[]
    createMany?: RequestRequirementCreateManyDocRuleInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutDocRuleInput | RequestRequirementUpdateWithWhereUniqueWithoutDocRuleInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutDocRuleInput | RequestRequirementUpdateManyWithWhereWithoutDocRuleInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type RequestRequirementUncheckedUpdateManyWithoutDocRuleNestedInput = {
    create?: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput> | RequestRequirementCreateWithoutDocRuleInput[] | RequestRequirementUncheckedCreateWithoutDocRuleInput[]
    connectOrCreate?: RequestRequirementCreateOrConnectWithoutDocRuleInput | RequestRequirementCreateOrConnectWithoutDocRuleInput[]
    upsert?: RequestRequirementUpsertWithWhereUniqueWithoutDocRuleInput | RequestRequirementUpsertWithWhereUniqueWithoutDocRuleInput[]
    createMany?: RequestRequirementCreateManyDocRuleInputEnvelope
    set?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    disconnect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    delete?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    connect?: RequestRequirementWhereUniqueInput | RequestRequirementWhereUniqueInput[]
    update?: RequestRequirementUpdateWithWhereUniqueWithoutDocRuleInput | RequestRequirementUpdateWithWhereUniqueWithoutDocRuleInput[]
    updateMany?: RequestRequirementUpdateManyWithWhereWithoutDocRuleInput | RequestRequirementUpdateManyWithWhereWithoutDocRuleInput[]
    deleteMany?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
  }

  export type EventRequestCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<EventRequestCreateWithoutRequirementsInput, EventRequestUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: EventRequestCreateOrConnectWithoutRequirementsInput
    connect?: EventRequestWhereUniqueInput
  }

  export type DocRuleCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<DocRuleCreateWithoutRequirementsInput, DocRuleUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: DocRuleCreateOrConnectWithoutRequirementsInput
    connect?: DocRuleWhereUniqueInput
  }

  export type FacultyCreateNestedOneWithoutSignedRequirementsInput = {
    create?: XOR<FacultyCreateWithoutSignedRequirementsInput, FacultyUncheckedCreateWithoutSignedRequirementsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutSignedRequirementsInput
    connect?: FacultyWhereUniqueInput
  }

  export type EnumRequirementStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequirementStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventRequestUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<EventRequestCreateWithoutRequirementsInput, EventRequestUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: EventRequestCreateOrConnectWithoutRequirementsInput
    upsert?: EventRequestUpsertWithoutRequirementsInput
    connect?: EventRequestWhereUniqueInput
    update?: XOR<XOR<EventRequestUpdateToOneWithWhereWithoutRequirementsInput, EventRequestUpdateWithoutRequirementsInput>, EventRequestUncheckedUpdateWithoutRequirementsInput>
  }

  export type DocRuleUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<DocRuleCreateWithoutRequirementsInput, DocRuleUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: DocRuleCreateOrConnectWithoutRequirementsInput
    upsert?: DocRuleUpsertWithoutRequirementsInput
    connect?: DocRuleWhereUniqueInput
    update?: XOR<XOR<DocRuleUpdateToOneWithWhereWithoutRequirementsInput, DocRuleUpdateWithoutRequirementsInput>, DocRuleUncheckedUpdateWithoutRequirementsInput>
  }

  export type FacultyUpdateOneWithoutSignedRequirementsNestedInput = {
    create?: XOR<FacultyCreateWithoutSignedRequirementsInput, FacultyUncheckedCreateWithoutSignedRequirementsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutSignedRequirementsInput
    upsert?: FacultyUpsertWithoutSignedRequirementsInput
    disconnect?: FacultyWhereInput | boolean
    delete?: FacultyWhereInput | boolean
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutSignedRequirementsInput, FacultyUpdateWithoutSignedRequirementsInput>, FacultyUncheckedUpdateWithoutSignedRequirementsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumVenueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeFilter<$PrismaModel> | $Enums.VenueType
  }

  export type NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueType | EnumVenueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueType[] | ListEnumVenueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueTypeWithAggregatesFilter<$PrismaModel> | $Enums.VenueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueTypeFilter<$PrismaModel>
    _max?: NestedEnumVenueTypeFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumRuleKindFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindFilter<$PrismaModel> | $Enums.RuleKind
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

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRuleKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindWithAggregatesFilter<$PrismaModel> | $Enums.RuleKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleKindFilter<$PrismaModel>
    _max?: NestedEnumRuleKindFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequirementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | EnumRequirementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequirementStatusFilter<$PrismaModel> | $Enums.RequirementStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | EnumRequirementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequirementStatus[] | ListEnumRequirementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequirementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequirementStatusFilter<$PrismaModel>
    _max?: NestedEnumRequirementStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type ClubCreateWithoutFacultyInChargeInput = {
    id?: string
    name: string
    requests?: EventRequestCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutFacultyInChargeInput = {
    id?: string
    name: string
    requests?: EventRequestUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutFacultyInChargeInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput>
  }

  export type ClubCreateManyFacultyInChargeInputEnvelope = {
    data: ClubCreateManyFacultyInChargeInput | ClubCreateManyFacultyInChargeInput[]
    skipDuplicates?: boolean
  }

  export type RequestRequirementCreateWithoutSignedByInput = {
    id?: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
    eventRequest: EventRequestCreateNestedOneWithoutRequirementsInput
    docRule: DocRuleCreateNestedOneWithoutRequirementsInput
  }

  export type RequestRequirementUncheckedCreateWithoutSignedByInput = {
    id?: string
    eventRequestId: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementCreateOrConnectWithoutSignedByInput = {
    where: RequestRequirementWhereUniqueInput
    create: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput>
  }

  export type RequestRequirementCreateManySignedByInputEnvelope = {
    data: RequestRequirementCreateManySignedByInput | RequestRequirementCreateManySignedByInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithWhereUniqueWithoutFacultyInChargeInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutFacultyInChargeInput, ClubUncheckedUpdateWithoutFacultyInChargeInput>
    create: XOR<ClubCreateWithoutFacultyInChargeInput, ClubUncheckedCreateWithoutFacultyInChargeInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutFacultyInChargeInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutFacultyInChargeInput, ClubUncheckedUpdateWithoutFacultyInChargeInput>
  }

  export type ClubUpdateManyWithWhereWithoutFacultyInChargeInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutFacultyInChargeInput>
  }

  export type ClubScalarWhereInput = {
    AND?: ClubScalarWhereInput | ClubScalarWhereInput[]
    OR?: ClubScalarWhereInput[]
    NOT?: ClubScalarWhereInput | ClubScalarWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    facultyInChargeId?: StringFilter<"Club"> | string
  }

  export type RequestRequirementUpsertWithWhereUniqueWithoutSignedByInput = {
    where: RequestRequirementWhereUniqueInput
    update: XOR<RequestRequirementUpdateWithoutSignedByInput, RequestRequirementUncheckedUpdateWithoutSignedByInput>
    create: XOR<RequestRequirementCreateWithoutSignedByInput, RequestRequirementUncheckedCreateWithoutSignedByInput>
  }

  export type RequestRequirementUpdateWithWhereUniqueWithoutSignedByInput = {
    where: RequestRequirementWhereUniqueInput
    data: XOR<RequestRequirementUpdateWithoutSignedByInput, RequestRequirementUncheckedUpdateWithoutSignedByInput>
  }

  export type RequestRequirementUpdateManyWithWhereWithoutSignedByInput = {
    where: RequestRequirementScalarWhereInput
    data: XOR<RequestRequirementUpdateManyMutationInput, RequestRequirementUncheckedUpdateManyWithoutSignedByInput>
  }

  export type RequestRequirementScalarWhereInput = {
    AND?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
    OR?: RequestRequirementScalarWhereInput[]
    NOT?: RequestRequirementScalarWhereInput | RequestRequirementScalarWhereInput[]
    id?: StringFilter<"RequestRequirement"> | string
    eventRequestId?: StringFilter<"RequestRequirement"> | string
    docRuleId?: StringFilter<"RequestRequirement"> | string
    status?: EnumRequirementStatusFilter<"RequestRequirement"> | $Enums.RequirementStatus
    fileUrl?: StringNullableFilter<"RequestRequirement"> | string | null
    signedById?: StringNullableFilter<"RequestRequirement"> | string | null
    updatedAt?: DateTimeFilter<"RequestRequirement"> | Date | string
  }

  export type FacultyCreateWithoutClubsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    signedRequirements?: RequestRequirementCreateNestedManyWithoutSignedByInput
  }

  export type FacultyUncheckedCreateWithoutClubsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    signedRequirements?: RequestRequirementUncheckedCreateNestedManyWithoutSignedByInput
  }

  export type FacultyCreateOrConnectWithoutClubsInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutClubsInput, FacultyUncheckedCreateWithoutClubsInput>
  }

  export type EventRequestCreateWithoutClubInput = {
    id?: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutRequestsInput
    requirements?: RequestRequirementCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestUncheckedCreateWithoutClubInput = {
    id?: string
    eventName: string
    venueId: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    requirements?: RequestRequirementUncheckedCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestCreateOrConnectWithoutClubInput = {
    where: EventRequestWhereUniqueInput
    create: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput>
  }

  export type EventRequestCreateManyClubInputEnvelope = {
    data: EventRequestCreateManyClubInput | EventRequestCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type FacultyUpsertWithoutClubsInput = {
    update: XOR<FacultyUpdateWithoutClubsInput, FacultyUncheckedUpdateWithoutClubsInput>
    create: XOR<FacultyCreateWithoutClubsInput, FacultyUncheckedCreateWithoutClubsInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutClubsInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutClubsInput, FacultyUncheckedUpdateWithoutClubsInput>
  }

  export type FacultyUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    signedRequirements?: RequestRequirementUpdateManyWithoutSignedByNestedInput
  }

  export type FacultyUncheckedUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    signedRequirements?: RequestRequirementUncheckedUpdateManyWithoutSignedByNestedInput
  }

  export type EventRequestUpsertWithWhereUniqueWithoutClubInput = {
    where: EventRequestWhereUniqueInput
    update: XOR<EventRequestUpdateWithoutClubInput, EventRequestUncheckedUpdateWithoutClubInput>
    create: XOR<EventRequestCreateWithoutClubInput, EventRequestUncheckedCreateWithoutClubInput>
  }

  export type EventRequestUpdateWithWhereUniqueWithoutClubInput = {
    where: EventRequestWhereUniqueInput
    data: XOR<EventRequestUpdateWithoutClubInput, EventRequestUncheckedUpdateWithoutClubInput>
  }

  export type EventRequestUpdateManyWithWhereWithoutClubInput = {
    where: EventRequestScalarWhereInput
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyWithoutClubInput>
  }

  export type EventRequestScalarWhereInput = {
    AND?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
    OR?: EventRequestScalarWhereInput[]
    NOT?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
    id?: StringFilter<"EventRequest"> | string
    clubId?: StringFilter<"EventRequest"> | string
    eventName?: StringFilter<"EventRequest"> | string
    venueId?: StringFilter<"EventRequest"> | string
    startTime?: DateTimeFilter<"EventRequest"> | Date | string
    endTime?: DateTimeFilter<"EventRequest"> | Date | string
    footfall?: IntFilter<"EventRequest"> | number
    hasExternalGuest?: BoolFilter<"EventRequest"> | boolean
    equipment?: StringNullableListFilter<"EventRequest">
    status?: EnumRequestStatusFilter<"EventRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"EventRequest"> | Date | string
  }

  export type EventRequestCreateWithoutVenueInput = {
    id?: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    club: ClubCreateNestedOneWithoutRequestsInput
    requirements?: RequestRequirementCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestUncheckedCreateWithoutVenueInput = {
    id?: string
    clubId: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    requirements?: RequestRequirementUncheckedCreateNestedManyWithoutEventRequestInput
  }

  export type EventRequestCreateOrConnectWithoutVenueInput = {
    where: EventRequestWhereUniqueInput
    create: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput>
  }

  export type EventRequestCreateManyVenueInputEnvelope = {
    data: EventRequestCreateManyVenueInput | EventRequestCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type EventRequestUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventRequestWhereUniqueInput
    update: XOR<EventRequestUpdateWithoutVenueInput, EventRequestUncheckedUpdateWithoutVenueInput>
    create: XOR<EventRequestCreateWithoutVenueInput, EventRequestUncheckedCreateWithoutVenueInput>
  }

  export type EventRequestUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventRequestWhereUniqueInput
    data: XOR<EventRequestUpdateWithoutVenueInput, EventRequestUncheckedUpdateWithoutVenueInput>
  }

  export type EventRequestUpdateManyWithWhereWithoutVenueInput = {
    where: EventRequestScalarWhereInput
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyWithoutVenueInput>
  }

  export type ClubCreateWithoutRequestsInput = {
    id?: string
    name: string
    facultyInCharge: FacultyCreateNestedOneWithoutClubsInput
  }

  export type ClubUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    facultyInChargeId: string
  }

  export type ClubCreateOrConnectWithoutRequestsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutRequestsInput, ClubUncheckedCreateWithoutRequestsInput>
  }

  export type VenueCreateWithoutRequestsInput = {
    id?: string
    name: string
    type: $Enums.VenueType
    capacity: number
  }

  export type VenueUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    type: $Enums.VenueType
    capacity: number
  }

  export type VenueCreateOrConnectWithoutRequestsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutRequestsInput, VenueUncheckedCreateWithoutRequestsInput>
  }

  export type RequestRequirementCreateWithoutEventRequestInput = {
    id?: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
    docRule: DocRuleCreateNestedOneWithoutRequirementsInput
    signedBy?: FacultyCreateNestedOneWithoutSignedRequirementsInput
  }

  export type RequestRequirementUncheckedCreateWithoutEventRequestInput = {
    id?: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementCreateOrConnectWithoutEventRequestInput = {
    where: RequestRequirementWhereUniqueInput
    create: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput>
  }

  export type RequestRequirementCreateManyEventRequestInputEnvelope = {
    data: RequestRequirementCreateManyEventRequestInput | RequestRequirementCreateManyEventRequestInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutRequestsInput = {
    update: XOR<ClubUpdateWithoutRequestsInput, ClubUncheckedUpdateWithoutRequestsInput>
    create: XOR<ClubCreateWithoutRequestsInput, ClubUncheckedCreateWithoutRequestsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutRequestsInput, ClubUncheckedUpdateWithoutRequestsInput>
  }

  export type ClubUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyInCharge?: FacultyUpdateOneRequiredWithoutClubsNestedInput
  }

  export type ClubUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    facultyInChargeId?: StringFieldUpdateOperationsInput | string
  }

  export type VenueUpsertWithoutRequestsInput = {
    update: XOR<VenueUpdateWithoutRequestsInput, VenueUncheckedUpdateWithoutRequestsInput>
    create: XOR<VenueCreateWithoutRequestsInput, VenueUncheckedCreateWithoutRequestsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutRequestsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutRequestsInput, VenueUncheckedUpdateWithoutRequestsInput>
  }

  export type VenueUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type VenueUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVenueTypeFieldUpdateOperationsInput | $Enums.VenueType
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type RequestRequirementUpsertWithWhereUniqueWithoutEventRequestInput = {
    where: RequestRequirementWhereUniqueInput
    update: XOR<RequestRequirementUpdateWithoutEventRequestInput, RequestRequirementUncheckedUpdateWithoutEventRequestInput>
    create: XOR<RequestRequirementCreateWithoutEventRequestInput, RequestRequirementUncheckedCreateWithoutEventRequestInput>
  }

  export type RequestRequirementUpdateWithWhereUniqueWithoutEventRequestInput = {
    where: RequestRequirementWhereUniqueInput
    data: XOR<RequestRequirementUpdateWithoutEventRequestInput, RequestRequirementUncheckedUpdateWithoutEventRequestInput>
  }

  export type RequestRequirementUpdateManyWithWhereWithoutEventRequestInput = {
    where: RequestRequirementScalarWhereInput
    data: XOR<RequestRequirementUpdateManyMutationInput, RequestRequirementUncheckedUpdateManyWithoutEventRequestInput>
  }

  export type RequestRequirementCreateWithoutDocRuleInput = {
    id?: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
    eventRequest: EventRequestCreateNestedOneWithoutRequirementsInput
    signedBy?: FacultyCreateNestedOneWithoutSignedRequirementsInput
  }

  export type RequestRequirementUncheckedCreateWithoutDocRuleInput = {
    id?: string
    eventRequestId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementCreateOrConnectWithoutDocRuleInput = {
    where: RequestRequirementWhereUniqueInput
    create: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput>
  }

  export type RequestRequirementCreateManyDocRuleInputEnvelope = {
    data: RequestRequirementCreateManyDocRuleInput | RequestRequirementCreateManyDocRuleInput[]
    skipDuplicates?: boolean
  }

  export type RequestRequirementUpsertWithWhereUniqueWithoutDocRuleInput = {
    where: RequestRequirementWhereUniqueInput
    update: XOR<RequestRequirementUpdateWithoutDocRuleInput, RequestRequirementUncheckedUpdateWithoutDocRuleInput>
    create: XOR<RequestRequirementCreateWithoutDocRuleInput, RequestRequirementUncheckedCreateWithoutDocRuleInput>
  }

  export type RequestRequirementUpdateWithWhereUniqueWithoutDocRuleInput = {
    where: RequestRequirementWhereUniqueInput
    data: XOR<RequestRequirementUpdateWithoutDocRuleInput, RequestRequirementUncheckedUpdateWithoutDocRuleInput>
  }

  export type RequestRequirementUpdateManyWithWhereWithoutDocRuleInput = {
    where: RequestRequirementScalarWhereInput
    data: XOR<RequestRequirementUpdateManyMutationInput, RequestRequirementUncheckedUpdateManyWithoutDocRuleInput>
  }

  export type EventRequestCreateWithoutRequirementsInput = {
    id?: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    club: ClubCreateNestedOneWithoutRequestsInput
    venue: VenueCreateNestedOneWithoutRequestsInput
  }

  export type EventRequestUncheckedCreateWithoutRequirementsInput = {
    id?: string
    clubId: string
    eventName: string
    venueId: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type EventRequestCreateOrConnectWithoutRequirementsInput = {
    where: EventRequestWhereUniqueInput
    create: XOR<EventRequestCreateWithoutRequirementsInput, EventRequestUncheckedCreateWithoutRequirementsInput>
  }

  export type DocRuleCreateWithoutRequirementsInput = {
    id?: string
    label: string
    kind: $Enums.RuleKind
    minFootfall?: number | null
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: $Enums.Role | null
  }

  export type DocRuleUncheckedCreateWithoutRequirementsInput = {
    id?: string
    label: string
    kind: $Enums.RuleKind
    minFootfall?: number | null
    requiresGuest?: boolean
    audiOnly?: boolean
    signerRole?: $Enums.Role | null
  }

  export type DocRuleCreateOrConnectWithoutRequirementsInput = {
    where: DocRuleWhereUniqueInput
    create: XOR<DocRuleCreateWithoutRequirementsInput, DocRuleUncheckedCreateWithoutRequirementsInput>
  }

  export type FacultyCreateWithoutSignedRequirementsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    clubs?: ClubCreateNestedManyWithoutFacultyInChargeInput
  }

  export type FacultyUncheckedCreateWithoutSignedRequirementsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    clubs?: ClubUncheckedCreateNestedManyWithoutFacultyInChargeInput
  }

  export type FacultyCreateOrConnectWithoutSignedRequirementsInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutSignedRequirementsInput, FacultyUncheckedCreateWithoutSignedRequirementsInput>
  }

  export type EventRequestUpsertWithoutRequirementsInput = {
    update: XOR<EventRequestUpdateWithoutRequirementsInput, EventRequestUncheckedUpdateWithoutRequirementsInput>
    create: XOR<EventRequestCreateWithoutRequirementsInput, EventRequestUncheckedCreateWithoutRequirementsInput>
    where?: EventRequestWhereInput
  }

  export type EventRequestUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: EventRequestWhereInput
    data: XOR<EventRequestUpdateWithoutRequirementsInput, EventRequestUncheckedUpdateWithoutRequirementsInput>
  }

  export type EventRequestUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutRequestsNestedInput
    venue?: VenueUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type EventRequestUncheckedUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocRuleUpsertWithoutRequirementsInput = {
    update: XOR<DocRuleUpdateWithoutRequirementsInput, DocRuleUncheckedUpdateWithoutRequirementsInput>
    create: XOR<DocRuleCreateWithoutRequirementsInput, DocRuleUncheckedCreateWithoutRequirementsInput>
    where?: DocRuleWhereInput
  }

  export type DocRuleUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: DocRuleWhereInput
    data: XOR<DocRuleUpdateWithoutRequirementsInput, DocRuleUncheckedUpdateWithoutRequirementsInput>
  }

  export type DocRuleUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type DocRuleUncheckedUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    minFootfall?: NullableIntFieldUpdateOperationsInput | number | null
    requiresGuest?: BoolFieldUpdateOperationsInput | boolean
    audiOnly?: BoolFieldUpdateOperationsInput | boolean
    signerRole?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type FacultyUpsertWithoutSignedRequirementsInput = {
    update: XOR<FacultyUpdateWithoutSignedRequirementsInput, FacultyUncheckedUpdateWithoutSignedRequirementsInput>
    create: XOR<FacultyCreateWithoutSignedRequirementsInput, FacultyUncheckedCreateWithoutSignedRequirementsInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutSignedRequirementsInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutSignedRequirementsInput, FacultyUncheckedUpdateWithoutSignedRequirementsInput>
  }

  export type FacultyUpdateWithoutSignedRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubs?: ClubUpdateManyWithoutFacultyInChargeNestedInput
  }

  export type FacultyUncheckedUpdateWithoutSignedRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubs?: ClubUncheckedUpdateManyWithoutFacultyInChargeNestedInput
  }

  export type ClubCreateManyFacultyInChargeInput = {
    id?: string
    name: string
  }

  export type RequestRequirementCreateManySignedByInput = {
    id?: string
    eventRequestId: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    updatedAt?: Date | string
  }

  export type ClubUpdateWithoutFacultyInChargeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requests?: EventRequestUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutFacultyInChargeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requests?: EventRequestUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutFacultyInChargeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RequestRequirementUpdateWithoutSignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventRequest?: EventRequestUpdateOneRequiredWithoutRequirementsNestedInput
    docRule?: DocRuleUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type RequestRequirementUncheckedUpdateWithoutSignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementUncheckedUpdateManyWithoutSignedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRequestCreateManyClubInput = {
    id?: string
    eventName: string
    venueId: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type EventRequestUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutRequestsNestedInput
    requirements?: RequestRequirementUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequestRequirementUncheckedUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRequestCreateManyVenueInput = {
    id?: string
    clubId: string
    eventName: string
    startTime: Date | string
    endTime: Date | string
    footfall: number
    hasExternalGuest?: boolean
    equipment?: EventRequestCreateequipmentInput | string[]
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type EventRequestUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutRequestsNestedInput
    requirements?: RequestRequirementUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequestRequirementUncheckedUpdateManyWithoutEventRequestNestedInput
  }

  export type EventRequestUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    clubId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    footfall?: IntFieldUpdateOperationsInput | number
    hasExternalGuest?: BoolFieldUpdateOperationsInput | boolean
    equipment?: EventRequestUpdateequipmentInput | string[]
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementCreateManyEventRequestInput = {
    id?: string
    docRuleId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementUpdateWithoutEventRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docRule?: DocRuleUpdateOneRequiredWithoutRequirementsNestedInput
    signedBy?: FacultyUpdateOneWithoutSignedRequirementsNestedInput
  }

  export type RequestRequirementUncheckedUpdateWithoutEventRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementUncheckedUpdateManyWithoutEventRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    docRuleId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementCreateManyDocRuleInput = {
    id?: string
    eventRequestId: string
    status?: $Enums.RequirementStatus
    fileUrl?: string | null
    signedById?: string | null
    updatedAt?: Date | string
  }

  export type RequestRequirementUpdateWithoutDocRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventRequest?: EventRequestUpdateOneRequiredWithoutRequirementsNestedInput
    signedBy?: FacultyUpdateOneWithoutSignedRequirementsNestedInput
  }

  export type RequestRequirementUncheckedUpdateWithoutDocRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestRequirementUncheckedUpdateManyWithoutDocRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequirementStatusFieldUpdateOperationsInput | $Enums.RequirementStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    signedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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