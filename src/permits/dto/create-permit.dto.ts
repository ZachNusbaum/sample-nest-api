import { Ulid } from 'id128';

export class CreatePermitDto {
  firstName: string;
  lastName: string;
  active: boolean = true;
  createdAt: Date = new Date();
  expiresAt: Date | null = null;
  permitNumber: string;
}
