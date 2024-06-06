// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EmployeeTypes {
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

export type Query = {
  employee?: Maybe<Employee>;
  employees: Employees;
  /** 부서에 속한 직원 목록 */
  listEmployeesByDepartmentId: Employees;
  /** 부서에 속한 직원 내역 목록 */
  listEmployeeLogsByDepartmentId: EmployeeLogs;
};


export type QueryemployeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryemployeesArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylistEmployeesByDepartmentIdArgs = {
  departmentId: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylistEmployeeLogsByDepartmentIdArgs = {
  departmentId: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

  export type QuerySdk = {
      /** null **/
  employee: InContextSdkMethod<Query['employee'], QueryemployeeArgs, MeshContext>,
  /** null **/
  employees: InContextSdkMethod<Query['employees'], QueryemployeesArgs, MeshContext>,
  /** 부서에 속한 직원 목록 **/
  listEmployeesByDepartmentId: InContextSdkMethod<Query['listEmployeesByDepartmentId'], QuerylistEmployeesByDepartmentIdArgs, MeshContext>,
  /** 부서에 속한 직원 내역 목록 **/
  listEmployeeLogsByDepartmentId: InContextSdkMethod<Query['listEmployeeLogsByDepartmentId'], QuerylistEmployeeLogsByDepartmentIdArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["employee"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
