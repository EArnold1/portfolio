import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from './Navbar';

interface LayoutModel {
  title?: string;
  children: JSX.Element;
}

const Layout: NextPage<LayoutModel> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <section className="px-5 md:px-10">{children}</section>
    </div>
  );
};

Layout.defaultProps = {
  title: 'qrArnold',
};

export default Layout;
