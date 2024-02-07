import "@/styles/globals.css";

import { ArticleProvider } from "../components/layout/Context";
import { Header, Footer } from "../components/Index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header> </Header>
      <ArticleProvider>
        <Component {...pageProps} />
      </ArticleProvider>
      <Footer></Footer>
    </>
  );
}
