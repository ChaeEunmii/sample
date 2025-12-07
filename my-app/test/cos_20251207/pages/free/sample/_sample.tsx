import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '샘플',
};

export default function Page() {
  return (
    <FreeHtml>
      <div>
        <h1 className="heading3">Free html 구조 샘플</h1>
      </div>
    </FreeHtml>
  );
}
