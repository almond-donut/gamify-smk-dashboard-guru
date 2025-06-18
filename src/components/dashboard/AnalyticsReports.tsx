
import { BarChart, PieChart, TrendingUp, Users, FileText, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart as RechartsBarChart, PieChart as RechartsPieChart, Cell, Pie } from 'recharts';

const AnalyticsReports = () => {
  // Mock data - replace with real data from Supabase
  const monthlyData = [
    { month: 'Jan', submissions: 234, averageScore: 78, activeStudents: 89 },
    { month: 'Feb', submissions: 267, averageScore: 82, activeStudents: 95 },
    { month: 'Mar', submissions: 298, averageScore: 85, activeStudents: 102 },
    { month: 'Apr', submissions: 356, averageScore: 83, activeStudents: 108 },
    { month: 'May', submissions: 401, averageScore: 87, activeStudents: 115 },
    { month: 'Jun', submissions: 445, averageScore: 86, activeStudents: 122 }
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', students: 245, avgScore: 78, completionRate: 85 },
    { subject: 'Physics', students: 198, avgScore: 82, completionRate: 72 },
    { subject: 'Chemistry', students: 167, avgScore: 75, completionRate: 68 },
    { subject: 'Biology', students: 234, avgScore: 88, completionRate: 91 },
    { subject: 'English', students: 256, avgScore: 84, completionRate: 79 }
  ];

  const difficultyDistribution = [
    { name: 'Easy (1-2 stars)', value: 35, color: '#30D158' },
    { name: 'Medium (3 stars)', value: 40, color: '#FF9500' },
    { name: 'Hard (4-5 stars)', value: 25, color: '#FF3B30' }
  ];

  const topPerformers = [
    { rank: 1, name: 'Sarah Wilson', totalPoints: 1450, level: 9, avgScore: 94 },
    { rank: 2, name: 'John Doe', totalPoints: 1250, level: 8, avgScore: 89 },
    { rank: 3, name: 'Jane Smith', totalPoints: 1100, level: 7, avgScore: 86 },
    { rank: 4, name: 'Mike Johnson', totalPoints: 980, level: 6, avgScore: 82 },
    { rank: 5, name: 'David Brown', totalPoints: 750, level: 5, avgScore: 78 }
  ];

  const keyMetrics = [
    {
      title: 'Total Quiz Submissions',
      value: '2,247',
      change: '+15.3%',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Active Students',
      value: '245',
      change: '+8.2%',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Average Score',
      value: '84.2%',
      change: '+2.5%',
      icon: Award,
      color: 'text-purple-600'
    },
    {
      title: 'Completion Rate',
      value: '89.1%',
      change: '+4.1%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const handleExportReport = () => {
    // TODO: Implement report export
    console.log('Export report clicked');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive insights into student performance and engagement</p>
        </div>
        <Button onClick={handleExportReport} className="flex items-center gap-2">
          <BarChart className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-green-600">{metric.change} from last month</p>
                  </div>
                  <Icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="submissions" stroke="#007AFF" strokeWidth={2} name="Submissions" />
                <Line type="monotone" dataKey="averageScore" stroke="#30D158" strokeWidth={2} name="Average Score" />
                <Line type="monotone" dataKey="activeStudents" stroke="#5856D6" strokeWidth={2} name="Active Students" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Difficulty Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz Difficulty Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={difficultyDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {difficultyDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RechartsBarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#007AFF" name="Total Students" />
              <Bar dataKey="avgScore" fill="#30D158" name="Average Score" />
              <Bar dataKey="completionRate" fill="#5856D6" name="Completion Rate %" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((student) => (
              <div key={student.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    student.rank === 1 ? 'bg-yellow-500' :
                    student.rank === 2 ? 'bg-gray-400' :
                    student.rank === 3 ? 'bg-amber-600' : 'bg-gray-300'
                  }`}>
                    {student.rank}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">Level {student.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{student.totalPoints.toLocaleString()} points</p>
                  <p className="text-sm text-green-600">{student.avgScore}% avg score</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsReports;
