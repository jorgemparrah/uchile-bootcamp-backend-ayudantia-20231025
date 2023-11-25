import { AutoDto } from "src/autos/dto/auto.dto";

export class VendedorDto {

  rut: string;
  nombre: string;
  autos: AutoDto[];
}
