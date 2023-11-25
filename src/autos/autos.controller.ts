import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutoDto } from './dto/auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';
import { RegistrarAutoDto } from './dto/registrar-auto.dto';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  async create(@Body() createAutoDto: CreateAutoDto): Promise<AutoDto> {
    const resultado = await this.autosService.create(createAutoDto);
    return resultado;
  }

  @Get()
  async findAll(): Promise<AutoDto[]> {
    const resultado = await this.autosService.findAll();
    return resultado;
  }

  @Get(':patente')
  async findOne(@Param('patente') patente: string): Promise<AutoDto> {
    const resultado = await this.autosService.findOne(patente);
    return resultado;
  }

  @Post('registrar')
  async registrar(@Body() createAutoDto: RegistrarAutoDto): Promise<AutoDto> {
    const resultado = await this.autosService.registrar(createAutoDto);
    return resultado;
  }

}
