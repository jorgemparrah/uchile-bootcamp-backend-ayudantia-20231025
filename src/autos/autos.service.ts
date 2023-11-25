import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutoDto } from './dto/auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';
import { Auto } from './entities/auto.entity';
import { Imagen } from './entities/imagen.entity';
import { AutoMapper } from './mapper/auto.mapper';
import { RegistrarAutoDto } from './dto/registrar-auto.dto';
import { promises as ARCHIVOS } from 'fs';
import { ImagenDto } from './dto/imagen.dto';
import { ImagenMapper } from './mapper/imagen.mapper';

@Injectable()
export class AutosService {
  
  constructor(
    @InjectRepository(Auto)
    private autoRepository: Repository<Auto>,
    @InjectRepository(Imagen)
    private imagenRepository: Repository<Imagen>
  ) {}

  async create(createAutoDto: CreateAutoDto): Promise<AutoDto> {
    const entity : Auto = AutoMapper.toEntity(createAutoDto);
    const guardado = await this.autoRepository.save(entity);
    return AutoMapper.toDto(guardado);
  }

  async registrar(createAutoDto: RegistrarAutoDto): Promise<AutoDto> {
    // FLUJO AUTO
    // REGISTRAR AUTO
    const entity : Auto = AutoMapper.toEntity(createAutoDto);
    const autoGuardado = await this.autoRepository.save(entity);

    // FLUJO IMAGENES
    // GUARDAR IMAGENES EN FS
    const imagenesPorGuardarEnDB : ImagenDto[] = [];
    try {
      await ARCHIVOS.mkdir(`../frontend/assets/autos/${autoGuardado.patente}`);
      for (const imagen of createAutoDto.imagenes) {
        const ruta = `./assets/autos/${autoGuardado.patente}/${imagen.nombre}`;
        await ARCHIVOS.writeFile(`../frontend/${ruta}`, imagen.base64, {
          encoding: 'base64'
        });
        imagenesPorGuardarEnDB.push(ImagenMapper.createDto(ruta, imagen.nombre));
      }
    } catch (error) {
      console.log(error);
    }
    // GUARDAR RUTAS EN DB
    const entitiesImagen: Imagen[] = ImagenMapper.toEntityList(imagenesPorGuardarEnDB, autoGuardado.patente);
    await this.imagenRepository.save(entitiesImagen);

    // DEVOLVER LOS DATOS DEL OBJETO GUARDADO
    return this.findOne(autoGuardado.patente);
  }

  async findAll(): Promise<AutoDto[]> {
    const autos: Auto[] = await this.autoRepository.find({
      relations: {
        imagenes: true
      }
    });
    console.log(autos);
    return AutoMapper.toDtoList(autos);
  }

  async findOne(patente: string): Promise<AutoDto> {
    const auto: Auto = await this.autoRepository.findOne({
      where: {
        patente: patente
      },
      relations: {
        imagenes: true
      }
    });
    return AutoMapper.toDto(auto);
  }

}
