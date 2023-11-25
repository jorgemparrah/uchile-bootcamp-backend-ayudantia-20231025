import { AutoMapper } from 'src/autos/mapper/auto.mapper';
import { CompradorDto } from '../dto/comprador.dto';
import { Comprador } from '../entities/comprador.entity';

export class CompradorMapper {

  static toDto(entity: Comprador) : CompradorDto {
    const dto = new CompradorDto();
    dto.rut = entity.rut;
    dto.nombre = entity.nombre;
    if (entity.autos != null && entity.autos.length > 0) {
      dto.autos = AutoMapper.toDtoList(entity.autos);
    }
    return dto;
  }

  static toDtoList(entities: Comprador[]) : CompradorDto[] {
    return entities.map(entity => this.toDto(entity));
  }

}