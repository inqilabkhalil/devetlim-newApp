import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import TemplatesGrid from '@/components/TemplatesGrid';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <TemplatesGrid />
      </main>
      <SiteFooter />
    </>
  );
}
