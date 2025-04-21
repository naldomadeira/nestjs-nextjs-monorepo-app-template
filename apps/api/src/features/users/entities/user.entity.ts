import { Base } from '@/common/entities';
import { hashString } from '@/common/utils';
import { Session } from '@/features/auth/entities/session.entity';
import { BeforeInsert, Column, Entity, OneToMany, Relation } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  emailVerificationToken: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    transformer: {
      to: (value: Date | null) => (value ? value.toISOString() : null),
      from: (value: string | null) => (value ? new Date(value) : null),
    },
  })
  emailVerificationTokenExpires: Date | null; // TODO: Review if string is the best approach

  @Column({ type: 'boolean', nullable: true, default: false })
  isEmailVerified: boolean;

  @Column({ type: 'varchar', nullable: true })
  passwordResetToken: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    transformer: {
      to: (value: Date | null) => (value ? value.toISOString() : null),
      from: (value: string | null) => (value ? new Date(value) : null),
    },
  })
  passwordResetTokenExpires: Date | null; // TODO: Review if string is the best approach

  @Column({ type: 'varchar', default: 'email' })
  provider: string;

  @Column({ type: 'varchar', nullable: true })
  providerId: string | null;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Relation<Session[]>;

  @BeforeInsert()
  async generateUserInfo() {
    if (!this.name) {
      this.name = this.email.split('@')[0];
    }
    if (!this.username) {
      this.username = this.email.split('@')[0];
    }
    if (this.password) {
      this.password = await hashString(this.password);
    }
  }
}
