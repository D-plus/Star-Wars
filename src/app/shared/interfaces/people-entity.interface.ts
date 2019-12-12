import { Person } from './person.interface';

export interface PeopleEntity {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}
