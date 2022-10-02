import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return `This action updates a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
