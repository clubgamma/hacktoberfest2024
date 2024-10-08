import React, { useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitPullRequest } from 'lucide-react';
import Global from '@/Global';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'ldrs/infinity'

const userData = {
    name: "Jalay Patel",
    username: "jalayp1",
    avatar: "/api/placeholder/400/400",
    bio: "Open Source Enthusiast | Full Stack Developer",
    stats: {
        pullRequests: 47,
        repositories: 32,
        followers: 128,
        following: 89
    },
    recentPRs: [
        {
            title: "Add dark mode support",
            repo: "shadcn/ui",
            status: "merged"
        },
        {
            title: "Fix responsive layout issues",
            repo: "react-icons/react-icons",
            status: "open"
        },
        {
            title: "Update documentation",
            repo: "vitejs/vite",
            status: "closed"
        }
    ]
};

const StatusBadge = ({ state }) => {
    const colors = {
        merged: "bg-purple-500",
        open: "bg-green-500",
        closed: "bg-red-500"
    };
    console.log(state);

    return (
        <span className={`${colors[state]} text-white px-2 py-1 rounded text-sm`}>
            {state.charAt(0).toUpperCase() + state.slice(1)}
        </span>
    );
};

export default function GitHubProfile() {
    const [userData, setUserData] = React.useState();
    const { username } = useParams();

    useEffect(() => {
        (async () => {
            const { user, stats } = await Global.httpGet(`/users/stats/${username}`);

            setUserData({ ...user, ...stats });
            console.log({ ...user, ...stats });

            document.title = `Profile | ${user.name}`;
        })()
    }, [username])

    if (!userData) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <l-infinity
                    size="55"
                    stroke="4"
                    stroke-length="0.15"
                    bg-opacity="0.1"
                    speed="1.3"
                    color="black"
                ></l-infinity>
            </div>
        )
    } else {
        console.log(userData.prs);
    }
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={userData.avatar} alt={userData.name} />
                        <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-bold">{userData.name}</h1>
                        <div className="text-zinc-400 flex items-center gap-2">
                            <GitPullRequest className="h-4 w-4" />
                            {userData.username}
                        </div>
                        <p className="text-zinc-400 mt-2">{userData.bio}</p>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-4 mb-8">
                    <div className="bg-zinc-900 p-4 rounded-lg">
                        <div className="text-2xl font-bold">{userData.points}</div>
                        <div className="text-zinc-400">Points</div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-lg">
                        <div className="text-2xl font-bold">{userData.mergedPRs}</div>
                        <div className="text-zinc-400">Merged PRs</div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-lg">
                        <div className="text-2xl font-bold">{userData.repositories}</div>
                        <div className="text-zinc-400">Repositories</div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-lg">
                        <div className="text-2xl font-bold">{userData.followers}</div>
                        <div className="text-zinc-400">Followers</div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-lg">
                        <div className="text-2xl font-bold">{userData.following}</div>
                        <div className="text-zinc-400">Following</div>
                    </div>
                </div>

                <h2 className="text-xl font-semibold mb-4">Recent Pull Requests</h2>
                <div className="space-y-2">
                    {userData.prs.map((pr, index) => (
                        <div key={index} className="bg-zinc-900 p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <GitPullRequest className="h-5 w-5 text-zinc-400" />
                                <div>
                                    <div className="font-medium">{pr.title}</div>
                                    <div className="text-sm text-zinc-400">{pr.url}</div>
                                </div>
                            </div>
                            <StatusBadge state={pr.state} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}