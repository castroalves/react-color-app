import type { AppProps } from "next/app";
import { BaukastenProvider } from "@hygraph/baukasten";

import "@fontsource/inter/variable.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <BaukastenProvider global>
            <Component {...pageProps} />
        </BaukastenProvider>
    );
}
