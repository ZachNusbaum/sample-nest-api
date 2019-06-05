export interface Permit {
  _id?: string;
  firstName: string;
  lastName: string;
  permitNumber?: string;
  active: boolean;
  createdAt?: Date;
  expiresAt?: Date;
}
