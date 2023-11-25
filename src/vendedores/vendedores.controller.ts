import { Controller, Get, Param } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { VendedorDto } from './dto/vendedor.dto';

@Controller('vendedores')
export class VendedoresController {
  constructor(private readonly vendedoresService: VendedoresService) {}

  @Get()
  async findAll(): Promise<VendedorDto[]> {
    const resultado = await this.vendedoresService.findAll();
    return resultado;
  }

  @Get(':rut')
  async findOne(@Param('rut') rut: string) {
    const resultado = await this.vendedoresService.findOne(rut);
    return resultado;
  }

}
