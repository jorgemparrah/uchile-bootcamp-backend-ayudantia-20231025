import { CompradorMapper } from 'src/compradores/mapper/comprador.mapper';
import { AutoDto } from '../dto/auto.dto';
import { Auto } from '../entities/auto.entity';
import { ImagenMapper } from './imagen.mapper';
import { CreateAutoDto } from '../dto/create-auto.dto';
import { RegistrarAutoDto } from '../dto/registrar-auto.dto';

export class AutoMapper {

  static toDto(entity: Auto) : AutoDto {
    const dto = new AutoDto();
    dto.patente = entity.patente;
    dto.marca = entity.marca;
    dto.modelo = entity.modelo;
    if (entity.comprador != null) {
      dto.comprador = CompradorMapper.toDto(entity.comprador);
    }
    if (entity.imagenes != null && entity.imagenes.length > 0) {
      dto.imagenes = ImagenMapper.toDtoList(entity.imagenes);
    }
    return dto;
  }

  static toDtoList(entities: Auto[]) : AutoDto[] {
    return entities.map(entity => this.toDto(entity));
  }

  static toEntity(dto: CreateAutoDto | RegistrarAutoDto) : Auto {
    const entity = new Auto();
    entity.patente = dto.patente;
    entity.marca = dto.marca;
    entity.modelo = dto.modelo;
    return entity;
  }

}