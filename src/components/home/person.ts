export interface Person {
  name: string,
  position: string,
  description: string,
  networks: Array<{
    name: string,
    link: string,
  }>,
  image: string,
}

