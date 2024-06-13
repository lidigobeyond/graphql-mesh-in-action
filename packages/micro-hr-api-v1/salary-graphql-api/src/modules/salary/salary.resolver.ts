import { Args, Query, Resolver } from '@nestjs/graphql';
import { SalaryService } from './salary.service';
import { SalaryLog } from './salary.dto';

@Resolver()
export class SalaryResolver {
  constructor(private readonly salaryService: SalaryService) {}

  @Query(() => [SalaryLog], {
    name: 'listSalaryLogByEmployeeId',
    description: '특정 직원의 연봉 내역을 조회',
  })
  listLogByEmployeeId(
    @Args('employeeId', { type: () => String }) employeeId: string,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<SalaryLog[]> {
    return this.salaryService.listLogByEmployeeId(employeeId, from, to);
  }

  @Query(() => [[SalaryLog]], {
    name: 'listSalaryLogByEmployeeIds',
    description: '여러 직원의 연봉 내역을 조회',
  })
  listLogByEmployeeIds(
    @Args('employeeIds', { type: () => [String] }) employeeIds: string[],
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<SalaryLog[][]> {
    return this.salaryService.listLogByEmployeeIds(employeeIds, from, to);
  }
}
