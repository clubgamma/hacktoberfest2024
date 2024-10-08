import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitPullRequest, Users, FolderGit } from 'lucide-react'

const stats = [
    { icon: GitPullRequest, label: 'Pull Requests', value: 220 },
    { icon: Users, label: 'Contributors', value: 50 },
    { icon: FolderGit, label: 'Open-source projects', value: 13 },
]

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime = null
        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            setCount(Math.floor(end * percentage))
            if (percentage < 1) {
                requestAnimationFrame(animateCount)
            }
        }
        requestAnimationFrame(animateCount)
    }, [end, duration])

    return <>{count}</>
}

const Stat = () => {
    return (
        <div className="min-h-[80vh]  flex  justify-center p-4">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-5xl font-dm-sans font-bold text-center text-white mb-12">
                    Club Gamma Hacktoberfest
                    <br /> 2024 Stats
                </h1>
                <div className="grid font-poppins grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-lg shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <stat.icon className="w-12 h-12 text-red-400" />
                                <div className="text-4xl font-bold text-white">
                                    <CountUp end={stat.value} />
                                    <span className="text-red-400">+</span>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold text-white mb-2">{stat.label}</h2>
                            <div className="text-sm text-red-400">Hacktoberfest</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stat;