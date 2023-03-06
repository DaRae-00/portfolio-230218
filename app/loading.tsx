import {SkeletonCard} from "../components/SkeletonCard";

export default function Loading() {
    return (
        <div className="space-y-4">
            <h1 className="font-large text-center text-xl text-gray-400/80">Monitoring page is Loading...</h1>
            <div className="space-y-4">
                <SkeletonCard isLoading={true} loadingStyle={'h-[200px]'} />
            </div>
        </div>
    );
}
