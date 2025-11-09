import { Metadata } from 'next';
import Home from '@views/main/Home';

export const metadata: Metadata = {
  title: '& Other Stories',
};

export default function Page() {
  return <Home />;
}
