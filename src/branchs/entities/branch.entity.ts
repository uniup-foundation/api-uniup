import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'INSAT Startup nation',
    description: 'The name of the branch',
  })
  @Column()
  name: string;
}
