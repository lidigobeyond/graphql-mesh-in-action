// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { DepartmentTypes } from './sources/department/types';
import type { SalaryTypes } from './sources/salary/types';
import type { EmployeeTypes } from './sources/employee/types';
import type { TitleTypes } from './sources/title/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  ResolveToSourceArgs: { input: any; output: any; }
};

export type Query = {
  department?: Maybe<Department>;
  departments: Departments;
  employee?: Maybe<Employee>;
  employees: Employees;
};


export type QuerydepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QuerydepartmentsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryemployeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryemployeesArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Department = {
  /** 부서 ID */
  id: Scalars['ID']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
  /** 현재 부서에 속한 직원 목록 */
  employees: Employees;
  /** 부서에 속한 직원 내역 목록 */
  employeeLogs: EmployeeLogs;
};


export type DepartmentemployeesArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type DepartmentemployeeLogsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** (Paginated) 부서 목록 */
export type Departments = {
  /** 총 개수 */
  total: Scalars['Int']['output'];
  /** 페이지 */
  offset: Scalars['Int']['output'];
  /** 페이지당 개수 */
  limit: Scalars['Int']['output'];
  items: Array<Department>;
};

/** 부서 내역 */
export type DepartmentLog = {
  /** 시작일 */
  fromDate: Scalars['DateTime']['output'];
  /** 종료일 */
  toDate: Scalars['DateTime']['output'];
  /** 부서 */
  department: Department;
};

export type Employee = {
  /** 사번 */
  id: Scalars['ID']['output'];
  /** 생년월일 */
  birthDate: Scalars['DateTime']['output'];
  /** 이름 */
  firstName: Scalars['String']['output'];
  /** 성 */
  lastName: Scalars['String']['output'];
  /** 성별 */
  gender: Gender;
  /** 입사일 */
  hireDate: Scalars['DateTime']['output'];
  /** 소속 부서 ID */
  departmentId: Scalars['String']['output'];
  /** 직책 */
  title: Scalars['String']['output'];
  /** 연봉 */
  salary: Scalars['Int']['output'];
  /** 소속 부서 */
  department: Department;
  /** 소속 부서 내역 */
  departmentLogs: Array<DepartmentLog>;
  /** 연봉 내역 */
  salaryLogs: Array<SalaryLog>;
  /** 직급 내역 */
  titleLogs: Array<TitleLog>;
};


export type EmployeedepartmentLogsArgs = {
  fromDateTime: Scalars['DateTime']['input'];
  toDateTime: Scalars['DateTime']['input'];
};


export type EmployeesalaryLogsArgs = {
  fromDateTime: Scalars['DateTime']['input'];
  toDateTime: Scalars['DateTime']['input'];
};


export type EmployeetitleLogsArgs = {
  fromDateTime: Scalars['DateTime']['input'];
  toDateTime: Scalars['DateTime']['input'];
};

/** 성별 */
export type Gender =
  /** 남성 */
  | 'MALE'
  /** 여성 */
  | 'FEMALE';

/** (Paginated) 직원 목록 */
export type Employees = {
  /** 총 개수 */
  total: Scalars['Int']['output'];
  /** 페이지 */
  offset: Scalars['Int']['output'];
  /** 페이지당 개수 */
  limit: Scalars['Int']['output'];
  items: Array<Employee>;
};

/** 부서에 속한 직원 이력 */
export type EmployeeLog = {
  /** 시작일 */
  fromDate: Scalars['DateTime']['output'];
  /** 종료일 */
  toDate: Scalars['DateTime']['output'];
  /** 직원 */
  employee: Employee;
};

/** (Paginated) 부서에 속한 직원 이력 */
export type EmployeeLogs = {
  /** 총 개수 */
  total: Scalars['Int']['output'];
  /** 페이지 */
  offset: Scalars['Int']['output'];
  /** 페이지당 개수 */
  limit: Scalars['Int']['output'];
  items: Array<EmployeeLog>;
};

/** 연봉 내역 */
export type SalaryLog = {
  /** 시작일 */
  fromDate: Scalars['DateTime']['output'];
  /** 종료일 */
  toDate: Scalars['DateTime']['output'];
  /** 연봉 */
  amount: Scalars['Int']['output'];
};

/** 직책 내역 */
export type TitleLog = {
  /** 시작일 */
  fromDate: Scalars['DateTime']['output'];
  /** 종료일 */
  toDate: Scalars['DateTime']['output'];
  /** 직책 */
  title: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Department: ResolverTypeWrapper<Department>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Departments: ResolverTypeWrapper<Departments>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  DepartmentLog: ResolverTypeWrapper<DepartmentLog>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Employee: ResolverTypeWrapper<Employee>;
  Gender: Gender;
  Employees: ResolverTypeWrapper<Employees>;
  EmployeeLog: ResolverTypeWrapper<EmployeeLog>;
  EmployeeLogs: ResolverTypeWrapper<EmployeeLogs>;
  SalaryLog: ResolverTypeWrapper<SalaryLog>;
  TitleLog: ResolverTypeWrapper<TitleLog>;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Department: Department;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  Departments: Departments;
  Int: Scalars['Int']['output'];
  DepartmentLog: DepartmentLog;
  DateTime: Scalars['DateTime']['output'];
  Boolean: Scalars['Boolean']['output'];
  Employee: Employee;
  Employees: Employees;
  EmployeeLog: EmployeeLog;
  EmployeeLogs: EmployeeLogs;
  SalaryLog: SalaryLog;
  TitleLog: TitleLog;
  ResolveToSourceArgs: Scalars['ResolveToSourceArgs']['output'];
}>;

export type resolveToDirectiveArgs = {
  requiredSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceName: Scalars['String']['input'];
  sourceTypeName: Scalars['String']['input'];
  sourceFieldName: Scalars['String']['input'];
  sourceSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  keyField?: Maybe<Scalars['String']['input']>;
  keysArg?: Maybe<Scalars['String']['input']>;
  pubsubTopic?: Maybe<Scalars['String']['input']>;
  filterBy?: Maybe<Scalars['String']['input']>;
  additionalArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  result?: Maybe<Scalars['String']['input']>;
  resultType?: Maybe<Scalars['String']['input']>;
};

export type resolveToDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveToDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QuerydepartmentArgs, 'id'>>;
  departments?: Resolver<ResolversTypes['Departments'], ParentType, ContextType, Partial<QuerydepartmentsArgs>>;
  employee?: Resolver<Maybe<ResolversTypes['Employee']>, ParentType, ContextType, RequireFields<QueryemployeeArgs, 'id'>>;
  employees?: Resolver<ResolversTypes['Employees'], ParentType, ContextType, Partial<QueryemployeesArgs>>;
}>;

export type DepartmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  employees?: Resolver<ResolversTypes['Employees'], ParentType, ContextType, Partial<DepartmentemployeesArgs>>;
  employeeLogs?: Resolver<ResolversTypes['EmployeeLogs'], ParentType, ContextType, Partial<DepartmentemployeeLogsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepartmentsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Departments'] = ResolversParentTypes['Departments']> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepartmentLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DepartmentLog'] = ResolversParentTypes['DepartmentLog']> = ResolversObject<{
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['Department'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EmployeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  hireDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  departmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salary?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['Department'], ParentType, ContextType>;
  departmentLogs?: Resolver<Array<ResolversTypes['DepartmentLog']>, ParentType, ContextType, RequireFields<EmployeedepartmentLogsArgs, 'fromDateTime' | 'toDateTime'>>;
  salaryLogs?: Resolver<Array<ResolversTypes['SalaryLog']>, ParentType, ContextType, RequireFields<EmployeesalaryLogsArgs, 'fromDateTime' | 'toDateTime'>>;
  titleLogs?: Resolver<Array<ResolversTypes['TitleLog']>, ParentType, ContextType, RequireFields<EmployeetitleLogsArgs, 'fromDateTime' | 'toDateTime'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Employees'] = ResolversParentTypes['Employees']> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmployeeLog'] = ResolversParentTypes['EmployeeLog']> = ResolversObject<{
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  employee?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeLogsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmployeeLogs'] = ResolversParentTypes['EmployeeLogs']> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['EmployeeLog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalaryLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SalaryLog'] = ResolversParentTypes['SalaryLog']> = ResolversObject<{
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TitleLogResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TitleLog'] = ResolversParentTypes['TitleLog']> = ResolversObject<{
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  Departments?: DepartmentsResolvers<ContextType>;
  DepartmentLog?: DepartmentLogResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Employee?: EmployeeResolvers<ContextType>;
  Employees?: EmployeesResolvers<ContextType>;
  EmployeeLog?: EmployeeLogResolvers<ContextType>;
  EmployeeLogs?: EmployeeLogsResolvers<ContextType>;
  SalaryLog?: SalaryLogResolvers<ContextType>;
  TitleLog?: TitleLogResolvers<ContextType>;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = DepartmentTypes.Context & EmployeeTypes.Context & SalaryTypes.Context & TitleTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"port":3000},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));