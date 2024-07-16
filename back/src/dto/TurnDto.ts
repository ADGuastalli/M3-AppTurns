export enum appointmentStatus {
  ACTIVE = "active",
  CACELLED = "cancelled",
}

export enum appointmenCoach {
  NICOLAS = "Nicolas",
  GISELA = "Gisela",
  JIMENA = "Jimena",
  MARCOS = "Marcos",
}

export interface TurnDto {
  date: Date;
  time: string;
  userId: number;
  status: appointmentStatus;
  description: string;
  coach: appointmenCoach;
}
