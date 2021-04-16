import {useState, useEffect} from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function IndexPage() {
    const dark = true;

    const [latestActivity, setLatestActivity] = useState(null);

    useEffect(() => {
      !latestActivity && fetch("/api/fetch").then((res) => res.json()).then(res => setLatestActivity(res));
    });

    const loader = (
        <SkeletonTheme color={
                dark ? "#374151" : "#E8E8E8"
            }
            highlightColor={
                dark ? "#4B5563" : "#CACACA"
        }>
            <Skeleton count={1}
                width={300}/>
        </SkeletonTheme>
    );

    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
                Hi, welcome to the world's most famous Pepa activity tracker (PAT)!
            </h2>
            <div className="flex flex-col items-center justify-center p-5 border-8">
                <header className="text-2xl mb-6">
                    Pepa's latest activity:
                </header>
                <span className="text-4xl mb-4">
                    {
                    !latestActivity ? loader : latestActivity.activity
                } </span>
                <div className="text-xl">
                  <span>{latestActivity ? `📌 ${latestActivity.place}` : ""}</span> <br />
                  <span>{latestActivity ? `⏰ ${dayjs().to(latestActivity.time)}` : ""}</span>
                </div>
            </div>
        </div>
    );
}
