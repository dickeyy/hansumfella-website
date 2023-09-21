import Head from "next/head";

export default function SEOHead(props:any) {

    return (
        <Head>
            <title>{props.title || "Hansumfella"}</title>
            <meta name="description" content={props.description || "The most handsome fella on Twitch"} />
            <meta name="keywords" content="hansumfella, handsome, fella, merch, merchandise, shirt, socks, hoodie, flag, website, twitch, content, creator, hansum, dickey, youtube, youtuber, streamer, socks" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="image" content={props.image || null} />

            <meta property="og:title" content={props.title || "Hansumfella"} />
            <meta property="og:description" content={props.description || "The most handsome fella on Twitch"} />
            <meta property="og:url" content={'hansumfella.com'} />
            <meta property="og:image" content={props.image || null} />
            <meta property="og:site_name" content={'Hansumfella'} />

            {/* theme color */}
            <meta name="theme-color" content="#e778c0" />

            {/* favicon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/images/hansum-circle.png" />
            <link rel="icon" href="/images/hansum-circle.png" />

        </Head>
    )

}