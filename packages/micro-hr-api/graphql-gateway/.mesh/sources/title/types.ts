// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TitleTypes {
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

/** 직책 내역 */
export type TitleLog = {
  /** 시작일 */
  fromDate: Scalars['DateTime']['output'];
  /** 종료일 */
  toDate: Scalars['DateTime']['output'];
  /** 직책 */
  title: Scalars['String']['output'];
};

export type Query = {
  /** 특정 직원의 직급 내역을 조회 */
  listTitleLogByEmployeeId: Array<TitleLog>;
};


export type QuerylistTitleLogByEmployeeIdArgs = {
  employeeId: Scalars['String']['input'];
  fromDateTime: Scalars['DateTime']['input'];
  toDateTime: Scalars['DateTime']['input'];
};

  export type QuerySdk = {
      /** 특정 직원의 직급 내역을 조회 **/
  listTitleLogByEmployeeId: InContextSdkMethod<Query['listTitleLogByEmployeeId'], QuerylistTitleLogByEmployeeIdArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["title"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
