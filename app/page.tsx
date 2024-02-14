import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { FC } from 'react'

interface pageProps {}

// const page: FC<pageProps> = ({}) => {
//   return (
//     <>
//       <HeaderMenu/>
//       <div>index page</div>
//     </>
//     )
// }

// export default page

import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { Stack } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { Stack } from '@mantine/core';
import '@mantine/carousel/styles.css';
export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <Stack h={300} bg="var(--mantine-color-body)" gap="xl">
        <CardsCarousel carouselTitle="Featured" />
        <CardsCarousel carouselTitle="SAT" />
      </Stack>
    </>
  );
}