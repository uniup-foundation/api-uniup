import { IsString } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  readonly name: string;
}
