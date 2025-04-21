import { Base } from '@/common/entities';
import { User } from '@/features/users/entities/user.entity';
import { Column, Entity, ManyToOne, Relation } from 'typeorm';

@Entity()
export class Session extends Base {
  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  ip: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  location: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  device_os: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  device_name: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  device_type: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  browser: string;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  userAgent: string;

  @Column({ type: 'text' })
  refresh_token: string;

  @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  user: Relation<User>;

  @Column({ type: 'varchar' })
  user_id: string;
}
