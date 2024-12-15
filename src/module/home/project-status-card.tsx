import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, TrendingUp, Clock } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

interface ProjectStatusCardProps {
    totalProjects: number
    completedProjects: number
    onTrackProjects: number
    delayedProjects: number
}

export function ProjectStatusCard({
    totalProjects,
    completedProjects,
    onTrackProjects,
    delayedProjects
}: ProjectStatusCardProps) {
    const inProgressProjects = totalProjects - completedProjects
    const completionPercentage = Math.round((completedProjects / totalProjects) * 100)

    return (
        <Card className="">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl">Project Overview</CardTitle>
                        <CardDescription className="text-[15px]">Current status of all projects</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-[15px]">
                        Updated: {new Date().toLocaleDateString()}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-3xl font-bold">{totalProjects}</p>
                        <p className="text-sm text-muted-foreground">Total Projects</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-semibold text-green-600">{completionPercentage}%</p>
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                            {completedProjects} completed
                        </span>
                        <span className="flex items-center">
                            <Circle className="w-4 h-4 mr-1 text-blue-500" />
                            {inProgressProjects} in progress
                        </span>
                    </div>
                    <Progress value={completionPercentage} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                        <p className="text-xl font-bold">{completedProjects}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                            Completed
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">{onTrackProjects}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1 text-blue-500" />
                            On Track
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">{delayedProjects}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                            Delayed
                        </p>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

