import { AutoMapper } from 'src/autos/mapper/auto.mapper';
import { VendedorDto } from '../dto/vendedor.dto';
import { Vendedor } from '../entities/vendedor.entity';

export class VendedorMapper {

  static toDto(entity: Vendedor) : VendedorDto {
    const dto = new VendedorDto();
    dto.rut = entity.rut;
    dto.nombre = entity.nombre;
    if (entity.autos != null && entity.autos.length > 0) {
      dto.autos = AutoMapper.toDtoList(entity.autos);
    }
    return dto;
  }

  static toDtoList(entities: Vendedor[]) : VendedorDto[] {
    return entities.map(entity => this.toDto(entity));
  }

}