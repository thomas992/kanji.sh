import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import { useRouter } from 'next/router';
import Config from '../src/config/Config';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import pageConfigs from '../src/config/PageConfig.json';
import { pdfjs } from 'react-pdf';

// Loads PDF.js worker for previews
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type PageConfig = {
    priority: number;
    title: string;
    description: string;
};

const KanjiApp: (props: AppProps) => JSX.Element = (props: AppProps) => {
    const { Component, pageProps } = props;
    const { asPath } = useRouter();

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    const pageConfig: PageConfig = (pageConfigs as Record<string, PageConfig>)[asPath];
    const title = pageConfig?.title ?? 'Error';
    const description = pageConfig?.description ?? 'Error';

    return (
        <React.Fragment>
            <DefaultSeo
                {...SEO}
                canonical={`${Config.publicUrl}${asPath}`}
                title={title}
                description={description}
                additionalMetaTags={[
                    {
                        name: 'viewport',
                        content: 'minimum-scale=1, initial-scale=1, width=device-width'
                    }
                ]}
            />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default KanjiApp;
