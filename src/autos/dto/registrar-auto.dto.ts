import { ApiProperty } from "@nestjs/swagger";
import { RegistrarImagenDto } from "./registrar-imagen.dto";

export class RegistrarAutoDto {

  @ApiProperty()
  patente: string;

  @ApiProperty()
  marca: string;

  @ApiProperty()
  modelo: string;

  @ApiProperty({ type: RegistrarImagenDto, isArray: true })
  imagenes: RegistrarImagenDto[];

}
