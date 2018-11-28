/**
 * @prettier
 * @flow
 */

export interface IProps {
  label: string;
  version: string;
  time: string;
  author?: IAuthor;
  description?: string;
  keywords?: array;
  license?: string;
}

export interface IAuthor {
  name?: string;
  avatar?: string;
  email?: string;
  url?: string;
}
