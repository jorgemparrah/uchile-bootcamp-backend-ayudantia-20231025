import { ImagenDto } from '../dto/imagen.dto';
import { Imagen } from '../entities/imagen.entity';

export class ImagenMapper {

  static toDto(entity: Imagen) : ImagenDto {
    const dto = new ImagenDto();
    dto.ruta = entity.ruta;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entities: Imagen[]) : ImagenDto[] {
    return entities.map(entity => this.toDto(entity));
  }

  static toEntity(dto: ImagenDto, patenteAuto: string) : Imagen {
    const entity = new Imagen();
    entity.ruta = dto.ruta;
    entity.nombre = dto.nombre;
    entity.patenteAuto = patenteAuto;
    return entity;
  }

  static toEntityList(dtos: ImagenDto[], patenteAuto: string) : Imagen[] {
    return dtos.map(dto => this.toEntity(dto, patenteAuto));
  }

  static createDto(ruta: string, nombre: string) : ImagenDto {
    const dto = new ImagenDto();
    dto.ruta = ruta;
    dto.nombre = nombre;
    return dto;
  }

}