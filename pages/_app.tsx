import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Toaster} from 'react-hot-toast';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryCLient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCLient}>
    <GoogleOAuthProvider clientId="775606523718-nd2h2enifinm8f8haiujmabrgn152seo.apps.googleusercontent.com">
      <Component {...pageProps} />
      <Toaster/>
      <ReactQueryDevtools/>
    </GoogleOAuthProvider>
  </QueryClientProvider>
  );
}
