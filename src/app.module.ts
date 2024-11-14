import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoriaModule } from "./modulos/categoria/categoria.module";
import { ProductoModule } from "./modulos/producto/producto.module";
import { ProductorModule } from "./modulos/productor/productor.module";
import { UsuarioModule } from "./modulos/usuario/usuario.module";

@Module({
  imports: [CategoriaModule, ProductoModule, ProductorModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
