import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosModule } from './autos/autos.module';
import { CompradoresModule } from './compradores/compradores.module';
import { VendedoresModule } from './vendedores/vendedores.module';
import { Vendedor } from './vendedores/entities/vendedor.entity';
import { Comprador } from './compradores/entities/comprador.entity';
import { Auto } from './autos/entities/auto.entity';
import { Imagen } from './autos/entities/imagen.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'clave123',
      database: 'Concesionaria',
      entities: [
        Vendedor,
        Comprador,
        Auto,
        Imagen
      ]
    }),
    CompradoresModule,
    AutosModule,
    VendedoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
