import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';

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

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
