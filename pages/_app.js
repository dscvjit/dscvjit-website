import '../styles/bootstrap.min.css';
import '../styles/style.scss';
import '../styles/responsive.scss';
import '../styles/animate.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Preloader, Placeholder } from 'react-preloading-screen';
import { GoTop, Loader } from '../components/Shared';
import { NextSeo } from 'next-seo';
import '../fontAwesome';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Developer Student Clubs VJIT"
        description="The Developer Student Clubs website for Vidya Jyothi Institute of Technology"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://dscvjit.com',
          site_name: 'DSC VJIT'
        }}
      />
      <Preloader>
        <Component {...pageProps} />
        <GoTop scrollStepInPx="50" delayInMs="20" />
        <Placeholder>
          <Loader />
        </Placeholder>
      </Preloader>
    </>
  );
}

export default MyApp;
