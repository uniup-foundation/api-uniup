import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Permissions } from 'src/permissions.decorator';
import { PermissionsGuard } from 'src/permissions.guard';
@UseGuards(AuthGuard('jwt'), PermissionsGuard)
@Controller('branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  @Permissions('create:branchs')
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchsService.create(createBranchDto);
  }

  @Get()
  @Permissions('read:branchs')
  findAll() {
    return this.branchsService.findAll();
  }

  @Get(':id')
  @Permissions('read:branchs')
  findOne(@Param('id') id: string) {
    return this.branchsService.findOne(+id);
  }

  @Patch(':id')
  @Permissions('update:branchs')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchsService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @Permissions('delete:branchs')
  remove(@Param('id') id: string) {
    return this.branchsService.remove(+id);
  }
}
