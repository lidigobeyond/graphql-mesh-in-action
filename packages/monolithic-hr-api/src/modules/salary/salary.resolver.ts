import { Args, Query, Resolver } from '@nestjs/graphql';
import { SalaryService } from './salary.service';
import { SalaryLog } from './salary.dto';

@Resolver()
export class SalaryResolver {
  constructor(private readonly salaryService: SalaryService) {}

  @Query(() => [SalaryLog], { name: 'salaryLogs', description: '특정 직원의 연봉 내역을 조회' })
  async listLogByEmployeeId(
    @Args('employeeId', { type: () => String }) employeeId: string,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date
  ): Promise<SalaryLog[]> {
    return this.salaryService.listLogByEmployeeId(employeeId, from, to);
  }
}
