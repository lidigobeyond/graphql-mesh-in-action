import { Args, Query, Resolver } from '@nestjs/graphql';
import { TitleService } from './title.service';
import { TitleLog } from './title.dto';

@Resolver()
export class TitleResolver {
  constructor(private readonly titleService: TitleService) {}

  @Query(() => [TitleLog], {
    name: 'listTitleLogByEmployeeId',
    description: '특정 직원의 직급 내역을 조회',
  })
  listLogByEmployeeId(
    @Args('employeeId', { type: () => String }) employeeId: string,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<TitleLog[]> {
    return this.titleService.listLogByEmployeeId(employeeId, from, to);
  }

  @Query(() => [[TitleLog]], {
    name: 'listTitleLogByEmployeeIds',
    description: '여러 직원의 직급 내역을 조회',
  })
  listLogByEmployeeIds(
    @Args('employeeIds', { type: () => [String] }) employeeIds: string[],
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<TitleLog[][]> {
    return this.titleService.listLogByEmployeeIds(employeeIds, from, to);
  }
}
