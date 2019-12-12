import { ListTitleItem } from '../components/list/list-title/list-title-item.interface';

export const PEOPLE_LIST_COLUMNS: ListTitleItem[] = [
  { label: 'name', value: 'name', sortable: true, },
  { label: 'height', value: 'height', sortable: true, sortValuesType: 'number', },
  { label: 'skin color', value: 'skin_color', sortable: true, },
  { label: 'hair color', value: 'hair_color', sortable: true, },
  { label: 'eye color', value: 'eye_color' },
  { label: 'gender', value: 'gender' },
];

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

export const DETAILS_PAGE_FIELDS_CONFIG = [
  { label: 'name', value: 'name' },
  { label: 'birth year', value: 'birth_year' },
  { label: 'gender', value: 'gender' },
  { label: 'created', value: 'created' },
  { label: 'hair color', value: 'hair_color' },
  { label: 'eye color', value: 'eye_color' },
  { label: 'skin color', value: 'skin_color' },
  { label: 'mass', value: 'mass' },
  { label: 'height', value: 'height' },
];

export const DIALOG_DETAILS_FIELDS_CONFIG = [
  { label: 'name', value: 'name' },
  { label: 'climate', value: 'climate' },
  { label: 'diameter', value: 'diameter' },
  { label: 'gravity', value: 'gravity' },
  { label: 'orbital period', value: 'orbital_period' },
  { label: 'population', value: 'population' },
  { label: 'rotation period', value: 'rotation_period' },
  { label: 'surface water', value: 'surface_water' },
  { label: 'terrain', value: 'terrain' },
];

export const PEOPLE_LIST_COLUMNS_DETAILS_PAGE = [
  { label: 'name', value: 'name', sortable: true, },
  { label: 'hair color', value: 'hair_color', sortable: true, },
  { label: 'eye color', value: 'eye_color', sortable: true, },
  { label: 'gender', value: 'gender', sortable: true, },
];

export const ERROR = {
  TITLE: 'Oops!',
  MESSAGE: 'Something went wrong',
};
