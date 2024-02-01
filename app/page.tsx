import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';

export default function HomePage() {
  return (
    <>
      <HeaderMenu/>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
