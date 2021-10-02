import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemsModule } from "./items/items.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URL } from "configs";

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
