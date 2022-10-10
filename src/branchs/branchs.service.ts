import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchsService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchsRepository: Repository<Branch>,
  ) {}
  create(createBranchDto: CreateBranchDto) {
    const branch = this.branchsRepository.create(createBranchDto);
    return this.branchsRepository.save(branch);
  }

  findAll() {
    return this.branchsRepository.find();
  }

  async findOne(id: number) {
    const branch = await this.branchsRepository.findOne({
      where: { id: +id },
    });
    if (!branch) {
      throw new NotFoundException(`branch #${id} not found`);
    }
    return branch;
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    const branch = await this.branchsRepository.preload({
      id: +id,
      ...updateBranchDto,
    });
    if (!branch) {
      throw new NotFoundException(`branch #${id} not found`);
    }
    return this.branchsRepository.save(branch);
  }

  async remove(id: number) {
    const branch = await this.findOne(id);
    return this.branchsRepository.remove(branch);
  }
}
