import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateItemDto } from "./dto";
import { ItemsService } from "./items.service";
import { Item } from "./models";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
