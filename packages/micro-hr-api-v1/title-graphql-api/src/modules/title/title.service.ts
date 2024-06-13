import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { plainToInstance } from 'class-transformer';
import { TitleLog } from './title.dto';

@Injectable()
export class TitleService {
  constructor(private readonly prisma: PrismaService) {}

  async listLogByEmployeeId(
    employeeId: string,
    from: Date,
    to: Date,
  ): Promise<TitleLog[]> {
    const titles = await this.prisma.titles.findMany({
      where: {
        AND: {
          emp_no: parseInt(employeeId),
          OR: [
            {
              from_date: {
                gte: from,
              },
              to_date: {
                lte: to,
              },
            },
            {
              to_date: {
                lte: to,
              },
            },
          ],
        },
      },
      orderBy: {
        from_date: 'desc',
      },
    });

    return titles.map((title) =>
      plainToInstance(TitleLog, {
        fromDate: title.from_date,
        toDate: title.to_date,
        title: title.title,
      }),
    );
  }

  async listLogByEmployeeIds(
    employeeIds: string[],
    from: Date,
    to: Date,
  ): Promise<TitleLog[][]> {
    const titles = await this.prisma.titles.findMany({
      where: {
        AND: {
          emp_no: {
            in: employeeIds.map((id) => parseInt(id)),
          },
          OR: [
            {
              from_date: {
                gte: from,
              },
              to_date: {
                lte: to,
              },
            },
            {
              to_date: {
                lte: to,
              },
            },
          ],
        },
      },
      orderBy: {
        from_date: 'desc',
      },
    });

    return employeeIds.map((employeeId) => {
      return titles
        .filter((title) => title.emp_no === parseInt(employeeId))
        .map((title) =>
          plainToInstance(TitleLog, {
            fromDate: title.from_date,
            toDate: title.to_date,
            title: title.title,
          }),
        );
    });
  }
}
