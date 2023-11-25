import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';
import { Imagen } from './entities/imagen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auto, Imagen])
  ],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
