import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Auto } from "./auto.entity";

@Entity({ name: "Imagenes" })
export class Imagen {

  @PrimaryColumn({ name: "ruta"})
  ruta: string;

  @Column({ name: "nombre"})
  nombre: string;

  @Column({ name: "patenteAuto"})
  patenteAuto: string;

  @ManyToOne(() => Auto)
  @JoinColumn({ name: "patenteAuto"})
  auto: Auto;

}