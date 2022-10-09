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
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Branch } from './entities/branch.entity';
@ApiBearerAuth()
@ApiTags('branchs')
@UseGuards(AuthGuard('jwt'), PermissionsGuard)
@Controller('branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create branch',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Permissions('create:branchs')
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchsService.create(createBranchDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The List of branchs',
    type: Branch,
    isArray: true,
  })
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
