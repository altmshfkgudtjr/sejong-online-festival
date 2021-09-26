import Head from 'next/head';
// Head
import Polyfill from 'head/Polyfill';
// Store
import storeWrapper from 'slices';
// hooks
import useToast from 'hooks/common/useToast';
import useModal from 'hooks/common/useModal';
// styles
import 'public/fonts.css';

const App = ({ Component, pageProps }) => {
  const { Toast } = useToast();
  const { Modal } = useModal();
  const isProd = process.env.NODE_ENV === 'production';

  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>세종대학교 축제 - ONLINE</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes, minimal-ui, viewport-fit=cover"
        />
      </Head>
      <Polyfill />
      {/* ---------------------------------------- Main --------------------------------------- */}
      {getLayout(<Component {...pageProps} />)}
      <Modal />
      <Toast />
    </>
  );
};

export default storeWrapper.withRedux(App);
