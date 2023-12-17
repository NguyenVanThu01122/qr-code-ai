import CTA from '@/components/CTA';
import GradientWrapper from '@/components/GradientWrapper';
import Hero from '@/components/Hero';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;

    for (var i = 0; i < ads; i++) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      } catch (e) {}
    }
  }, []);
  return (
    <>
      <Hero />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4007829878593321"
        data-ad-slot="9636478565"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      <GradientWrapper></GradientWrapper>
      <CTA />
    </>
  );
}
