import { ApiProperty } from "@nestjs/swagger";

export class CreateAutoDto {

  @ApiProperty()
  patente: string;

  @ApiProperty()
  marca: string;

  @ApiProperty()
  modelo: string;

}
