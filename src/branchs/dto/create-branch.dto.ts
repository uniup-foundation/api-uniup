import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({
    example: 'INSAT Startup nation',
    description: 'The name of the branch',
  })
  @IsString()
  readonly name: string;
}
