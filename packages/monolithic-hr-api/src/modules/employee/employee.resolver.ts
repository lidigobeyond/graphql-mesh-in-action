import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Employee, Employees } from './employee.dto';
import { EmployeeService } from './employee.service';
import { Department, DepartmentLog } from '../department/department.dto';
import { SalaryLog } from '../salary/salary.dto';
import { SalaryService } from '../salary/salary.service';
import { TitleLog } from '../title/title.dto';
import { TitleService } from '../title/title.service';
import { DepartmentService } from '../department/department.service';
import { EmployeeLogs } from 'employee-api/dist/modules/employee/employee.dto';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly departmentService: DepartmentService,
    private readonly titleService: TitleService,
    private readonly salaryService: SalaryService,
  ) {}

  @Query(() => Employee, { name: 'employee', nullable: true })
  getById(@Args('id') id: string) {
    return this.employeeService.getById(id);
  }

  @Query(() => Employees, { name: 'employees' })
  list(
    @Args('offset', { type: () => Number, nullable: true }) offset = 0,
    @Args('limit', { type: () => Number, nullable: true }) limit = 10,
  ): Promise<Employees> {
    return this.employeeService.list(offset, limit);
  }

  @ResolveField(() => Department, {
    name: 'department',
    description: '소속 부서',
  })
  getDepartment(@Parent() employee: Employee): Promise<Department> {
    return this.departmentService.getById(employee.departmentId);
  }

  @ResolveField(() => [DepartmentLog], {
    name: 'departmentLogs',
    description: '소속 부서 내역',
  })
  listDepartmentLog(
    @Parent() employee: Employee,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<DepartmentLog[]> {
    return this.departmentService.listLogByEmployeeId(employee.id, from, to);
  }

  @ResolveField(() => [TitleLog], {
    name: 'titleLogs',
    description: '직책 내역',
  })
  listTitleLog(
    @Parent() employee: Employee,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<TitleLog[]> {
    return this.titleService.listLogByEmployeeId(employee.id, from, to);
  }

  @ResolveField(() => [SalaryLog], {
    name: 'salaryLogs',
    description: '연봉 내역',
  })
  listSalarLog(
    @Parent() employee: Employee,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<SalaryLog[]> {
    return this.salaryService.listLogByEmployeeId(employee.id, from, to);
  }

  @Query(() => Employees, { name: 'employeesByDepartment', description: '부서에 속한 직원 목록' })
  listByDepartment(
    @Args('departmentId') departmentId: string,
    @Args('offset', { type: () => Int, nullable: true }) offset = 0,
    @Args('limit', { type: () => Int, nullable: true }) limit = 10,
  ): Promise<Employees> {
    return this.employeeService.listByDepartmentId(departmentId, offset, limit);
  }

  @Query(() => EmployeeLogs, { name: 'employeeLogsByDepartment', description: '부서에 속한 직원 내역 목록' })
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
