import { Suspense } from "react";
import Page from "./page";
import Loading from "./loading";

export default function Layout({ params }: { params: { id: string } }) {
    return (
        <Suspense fallback={<Loading />}>
            <Page params={params} />
            {/* <Loading /> */}
        </Suspense>
    );
}
