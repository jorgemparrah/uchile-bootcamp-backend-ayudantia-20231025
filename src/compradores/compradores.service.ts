import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comprador } from './entities/comprador.entity';
import { Repository } from 'typeorm';
import { CompradorMapper } from './mapper/comprador.mapper';
import { CompradorDto } from './dto/comprador.dto';

@Injectable()
export class CompradoresService {

  constructor(
    @InjectRepository(Comprador)
    private compradorRepository: Repository<Comprador>
  ) {}

  async findAll(): Promise<CompradorDto[]> {
    const compradores: Comprador[] = await this.compradorRepository.find({
      relations: {
        autos: true
      }
    });
    console.log(compradores);
    return CompradorMapper.toDtoList(compradores);
  }

  async findOne(rut: string): Promise<CompradorDto> {
    const comprador: Comprador = await this.compradorRepository.findOne({
      where: {
        rut: rut
      },
      relations: {
        autos: true
      }
    });
    return CompradorMapper.toDto(comprador);
  }

}
