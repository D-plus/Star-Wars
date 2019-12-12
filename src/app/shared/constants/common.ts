import { ListTitleItem } from '../components/app-list/list-title/list-title-item';

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

export const PEOPLE_LIST_COLUMNS_DETAILS_PAGE = [
  { label: 'name', value: 'name', sortable: true, },
  { label: 'hair color', value: 'hair_color', sortable: true, },
  { label: 'eye color', value: 'eye_color', sortable: true, },
  { label: 'gender', value: 'gender', sortable: true, },
];
