import { Controller, Get, Param } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradorDto } from './dto/comprador.dto';

@Controller('compradores')
export class CompradoresController {
  constructor(private readonly compradoresService: CompradoresService) {}

  @Get()
  async findAll(): Promise<CompradorDto[]> {
    const resultado = await this.compradoresService.findAll();
    return resultado;
  }

  @Get(':rut')
  async findOne(@Param('rut') rut: string): Promise<CompradorDto> {
    const resultado = await this.compradoresService.findOne(rut);
    return resultado;
  }

}
