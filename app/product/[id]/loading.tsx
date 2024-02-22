import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex min-h-screen w-screen flex-col items-center justify-center px-24">
            <Navbar />
            <div className="flex w-full flex-1  flex-row items-center justify-center gap-2">
                <div className="flex w-full items-start justify-center gap-8">
                    <div className="flex w-1/2 flex-col items-center justify-center">
                        <Skeleton className="h-[32rem] w-full"></Skeleton>
                        <div className="mt-4 flex items-center justify-center gap-2">
                            <Skeleton className="h-12 w-12"></Skeleton>
                            <Skeleton className="h-12 w-12"></Skeleton>
                            <Skeleton className="h-12 w-12"></Skeleton>
                        </div>
                    </div>

                    <div className="flex w-1/2 flex-col items-center justify-center">
                        <Skeleton className="h-48 w-full"></Skeleton>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
