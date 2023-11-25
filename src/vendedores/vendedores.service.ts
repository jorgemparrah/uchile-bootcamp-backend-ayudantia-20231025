import { Injectable } from '@nestjs/common';
import { Vendedor } from './entities/vendedor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VendedorMapper } from './mapper/vendedor.mapper';
import { VendedorDto } from './dto/vendedor.dto';

@Injectable()
export class VendedoresService {

  constructor(
    @InjectRepository(Vendedor)
    private vendedorRepository: Repository<Vendedor>
  ) {}

  async findAll(): Promise<VendedorDto[]> {
    const vendedores: Vendedor[] = await this.vendedorRepository.find({
      relations: {
        autos: true
      }
    });
    console.log(vendedores);
    return VendedorMapper.toDtoList(vendedores);
  }

  async findOne(rut: string): Promise<VendedorDto> {
    const vendedor: Vendedor = await this.vendedorRepository.findOne({
      where: {
        rut: rut
      },
      relations: {
        autos: true
      }
    });
    return VendedorMapper.toDto(vendedor);
  }

}
