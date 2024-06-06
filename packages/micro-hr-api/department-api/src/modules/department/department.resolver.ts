import { Department, DepartmentLog, Departments } from './department.dto';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DepartmentService } from './department.service';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => Department, { name: 'department', nullable: true })
  getById(@Args('id') id: string): Promise<Department | null> {
    return this.departmentService.getById(id);
  }

  @Query(() => Departments, { name: 'departments' })
  list(
    @Args({ name: 'offset', type: () => Int, nullable: true })
    offset = 0,
    @Args({ name: 'limit', type: () => Int, nullable: true })
    limit = 10,
  ): Promise<Departments> {
    return this.departmentService.list(offset, limit);
  }

  @Query(() => [DepartmentLog], {
    name: 'listDepartmentLogByEmployeeId',
    description: '특정 직원의 부서 내역을 조회',
  })
  listDepartmentLog(
    @Args('employeeId', { type: () => String }) employeeId: string,
    @Args('fromDateTime', { type: () => Date }) from: Date,
    @Args('toDateTime', { type: () => Date }) to: Date,
  ): Promise<DepartmentLog[]> {
    return this.departmentService.listLogByEmployeeId(employeeId, from, to);
  }
}
