import { AutoDto } from "src/autos/dto/auto.dto";

export class CompradorDto {

  rut: string;
  nombre: string;
  autos: AutoDto[];
}
