import { Person } from './person.interface';
import { Planet } from './planet.interface';

export interface PersonDetailsPageData {
  peopleAtSamePlanet: Person[];
  person: Person;
  planet: Planet;
}
