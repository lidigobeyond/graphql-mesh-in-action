// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace DepartmentTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Department = {
  /** 부서 ID */
  id: Scalars['ID']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
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

export type Query = {
  department?: Maybe<Department>;
  departments: Departments;
  /** 특정 직원의 부서 내역을 조회 */
  listDepartmentLogByEmployeeId: Array<DepartmentLog>;
};


export type QuerydepartmentArgs = {
  id: Scalars['String']['input'];
};


export type QuerydepartmentsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylistDepartmentLogByEmployeeIdArgs = {
  employeeId: Scalars['String']['input'];
  fromDateTime: Scalars['DateTime']['input'];
  toDateTime: Scalars['DateTime']['input'];
};

  export type QuerySdk = {
      /** null **/
  department: InContextSdkMethod<Query['department'], QuerydepartmentArgs, MeshContext>,
  /** null **/
  departments: InContextSdkMethod<Query['departments'], QuerydepartmentsArgs, MeshContext>,
  /** 특정 직원의 부서 내역을 조회 **/
  listDepartmentLogByEmployeeId: InContextSdkMethod<Query['listDepartmentLogByEmployeeId'], QuerylistDepartmentLogByEmployeeIdArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["department"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
