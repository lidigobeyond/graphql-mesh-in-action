import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Employee, EmployeeLogs, Employees } from './employee.dto';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => Employee, { name: 'employee', nullable: true })
  getById(@Args('id') id: string) {
    return this.employeeService.getById(id);
  }

  @Query(() => Employees, { name: 'employees' })
  list(
    @Args('offset', { type: () => Int, nullable: true }) offset = 0,
    @Args('limit', { type: () => Int, nullable: true }) limit = 10,
  ): Promise<Employees> {
    return this.employeeService.list(offset, limit);
  }

  @Query(() => Employees, {
    name: 'listEmployeesByDepartmentId',
    description: '부서에 속한 직원 목록',
  })
  listByDepartment(
    @Args('departmentId') departmentId: string,
    @Args('offset', { type: () => Int, nullable: true }) offset = 0,
    @Args('limit', { type: () => Int, nullable: true }) limit = 10,
  ): Promise<Employees> {
    return this.employeeService.listByDepartmentId(departmentId, offset, limit);
  }

  @Query(() => EmployeeLogs, {
    name: 'listEmployeeLogsByDepartmentId',
    description: '부서에 속한 직원 내역 목록',
  })
  listLogs(
    @Args('departmentId') departmentId: string,
    @Args({ name: 'offset', type: () => Int, nullable: true }) offset = 0,
    @Args({ name: 'limit', type: () => Int, nullable: true }) limit = 10,
  ): Promise<EmployeeLogs> {
    return this.employeeService.listLogsByDepartmentId(
      departmentId,
      offset,
      limit,
    );
  }
}
