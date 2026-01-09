import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Toaster} from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="775606523718-nd2h2enifinm8f8haiujmabrgn152seo.apps.googleusercontent.com">
      <Component {...pageProps} />
      <Toaster/>
    </GoogleOAuthProvider>
  );
}
