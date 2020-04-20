import '../assets/css/bootstrap.min.css';
import '../assets/css/icofont.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/animate.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import Loader from '../components/Shared/Loader'; 

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <>
                    <DefaultSeo
                        title="Developer Student Clubs VJIT"
                        description="Developer Student Clubs VJIT"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://dscvjit.com',
                            site_name: 'DSC VJIT',
                        }}
                    />
                    <Preloader>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>
                        <GoTop scrollStepInPx="50" delayInMs="16.66" />
                        <Placeholder>
                            <Loader />
                        </Placeholder>
                    </Preloader>
                </>
            );
        }
    }
)