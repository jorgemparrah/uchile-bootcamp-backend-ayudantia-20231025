import { Module } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradoresController } from './compradores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comprador } from './entities/comprador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comprador])
  ],
  controllers: [CompradoresController],
  providers: [CompradoresService],
})
export class CompradoresModule {}
