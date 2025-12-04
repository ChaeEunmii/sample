import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Html 컨텐츠',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
