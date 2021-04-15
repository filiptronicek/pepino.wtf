import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useState, useEffect} from 'react';

export default function IndexPage() {
    const dark = true;

    const [latestActivity, setLatestActivity] = useState(null);

    useEffect(() => {
      fetch("/api/fetch").then((res) => res.text()).then(res => setLatestActivity(res));
    });

    const loader = ((
        <SkeletonTheme color={
                dark ? "#374151" : "#E8E8E8"
            }
            highlightColor={
                dark ? "#4B5563" : "#CACACA"
        }>
            <Skeleton count={1}
                width={300}/>
        </SkeletonTheme>
    ));

    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
                Hi, welcome to the world's most famous Pepa activity tracker (PAT)!
            </h2>
            <div className="flex flex-col items-center justify-center space-y-12 p-5 border-8">
                <header className="text-2xl">
                    Pepa's latest activity:
                </header>
                <span className="text-4xl">
                    {
                    !latestActivity ? loader : latestActivity
                } </span>
            </div>
        </div>
    );
}
