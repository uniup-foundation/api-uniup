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
import {
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('branchs')
@ApiForbiddenResponse({ description: 'Forbidden.' })
@UseGuards(AuthGuard('jwt'), PermissionsGuard)
@Controller('branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  @ApiOperation({ summary: 'Create branch' })
  @Permissions('create:branchs')
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchsService.create(createBranchDto);
  }

  @Get()
  @ApiOperation({ summary: 'Read all branchs' })
  @Permissions('read:branchs')
  findAll() {
    return this.branchsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'read branch' })
  @Permissions('read:branchs')
  findOne(@Param('id') id: string) {
    return this.branchsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update branch' })
  @Permissions('update:branchs')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchsService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete branch' })
  @Permissions('delete:branchs')
  remove(@Param('id') id: string) {
    return this.branchsService.remove(+id);
  }
}
