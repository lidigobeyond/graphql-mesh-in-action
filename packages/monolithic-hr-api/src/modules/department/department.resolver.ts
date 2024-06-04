import { Department, DepartmentLog, Departments } from './department.dto';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Employee, EmployeeLogs, Employees } from '../employee/employee.dto';
import { EmployeeService } from '../employee/employee.service';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly employeeService: EmployeeService
  ) {}

  @Query(() => Department, { name: 'department', nullable: true })
  getById(@Args('id') id: string): Promise<Department | null> {
    return this.departmentService.getById(id);
  }

  @Query(() => Departments, { name: 'departments' })
  list(
    @Args({ name: 'offset', type: () => Number, nullable: true })
    offset = 0,
    @Args({ name: 'limit', type: () => Number, nullable: true })
    limit = 10
  ): Promise<Departments> {
    return this.departmentService.list(offset, limit);
  }

  @Query(() => [DepartmentLog], { name: 'departmentLogs', description: '특정 직원의 부서 내역을 조회' })
  listDepartmentLog(
    @Args('employeeId', { type: () => String }) employeeId: string,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date
  ): Promise<DepartmentLog[]> {
    return this.departmentService.listLogByEmployeeId(employeeId, from, to);
  }

  @ResolveField(() => Employees, {
    name: 'employees',
    description: '현재 부서에 속한 직원 목록',
  })
  listEmployees(
    @Parent() department: Department,
    @Args({ name: 'offset', type: () => Number, nullable: true })
    offset = 0,
    @Args({ name: 'limit', type: () => Number, nullable: true })
    limit = 10
  ): Promise<Employees> {
    return this.employeeService.listByDepartmentId(
      department.id,
      offset,
      limit
    );
  }

  @ResolveField(() => EmployeeLogs, {
    name: 'employeeLogs',
    description: '부서에 속한 직원 이력 목록',
  })
  listEmployeeLogs(
    @Parent() department: Department,
    @Args({ name: 'offset', type: () => Number, nullable: true })
    offset: number | null,
    @Args({ name: 'limit', type: () => Number, nullable: true })
    limit: number | null
  ): Promise<EmployeeLogs> {
    return this.employeeService.listLogsByDepartmentId(
      department.id,
      offset,
      limit
    );
  }
}
