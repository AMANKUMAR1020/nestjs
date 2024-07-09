// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { DatabaseModule } from './database/database.module';
// import { EmployeesModule } from './employees/employees.module';
// import { ThrottlerModule,ThrottlerGuard } from '@nestjs/throttler';
// import { APP_GUARD } from '@nestjs/core';

// @Module({
//   imports: [UsersModule,
//     DatabaseModule,
//     EmployeesModule,
//     ThrottlerModule.forRoot([{
//       name:'short',
//       ttl:1000,
//       limit:2,
//     },{
//       name:'long',
//       ttl:60000,
//       limit:3,
//     }])
//   ],
//   controllers: [AppController],
//   providers: [AppService, {
//     provide:APP_GUARD,
//     useClass:ThrottlerGuard,
//   }],
// })
// export class AppModule {}












import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
