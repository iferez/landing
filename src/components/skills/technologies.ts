export interface Technologies {
  front: Array<{
    id: number;
    name: string;
  }>;
  back: Array<{
    id: number;
    name: string;
  }>;
  developer: Array<{
    id: number;
    name: string;
  }>;
}

export type Tech = {
  id: number;
  name: string;
};
