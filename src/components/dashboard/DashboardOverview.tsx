
import { Users, FileText, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardOverview = () => {
  // Mock data - replace with real data from Supabase
  const stats = [
    {
      title: 'Total Students',
      value: '245',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Quizzes',
      value: '18',
      change: '+3',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Submissions',
      value: '1,247',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Average Score',
      value: '85.2%',
      change: '+2.1%',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const performanceData = [
    { name: 'Mon', submissions: 45, average: 82 },
    { name: 'Tue', submissions: 52, average: 85 },
    { name: 'Wed', submissions: 38, average: 78 },
    { name: 'Thu', submissions: 61, average: 88 },
    { name: 'Fri', submissions: 55, average: 86 },
    { name: 'Sat', submissions: 24, average: 80 },
    { name: 'Sun', submissions: 18, average: 77 }
  ];

  const subjectData = [
    { subject: 'Mathematics', completion: 85, averageScore: 78 },
    { subject: 'Physics', completion: 72, averageScore: 82 },
    { subject: 'Chemistry', completion: 68, averageScore: 75 },
    { subject: 'Biology', completion: 91, averageScore: 88 },
    { subject: 'English', completion: 79, averageScore: 84 }
  ];

  const recentActivities = [
    { student: 'John Doe', action: 'Completed Physics Quiz #3', time: '2 minutes ago', score: 92 },
    { student: 'Jane Smith', action: 'Started Mathematics Quiz #5', time: '5 minutes ago', score: null },
    { student: 'Mike Johnson', action: 'Achieved Level 5 badge', time: '12 minutes ago', score: null },
    { student: 'Sarah Wilson', action: 'Completed Chemistry Quiz #2', time: '18 minutes ago', score: 78 },
    { student: 'David Brown', action: 'Joined class 10A', time: '1 hour ago', score: null }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to your Dashboard</h1>
        <p className="text-gray-600">Here's what's happening with your students today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last week</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="submissions" stroke="#007AFF" strokeWidth={2} name="Submissions" />
                <Line type="monotone" dataKey="average" stroke="#30D158" strokeWidth={2} name="Average Score" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completion" fill="#007AFF" name="Completion Rate %" />
                <Bar dataKey="averageScore" fill="#5856D6" name="Average Score %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {activity.student.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{activity.time}</p>
                  {activity.score && (
                    <p className="text-sm font-medium text-green-600">{activity.score}%</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
