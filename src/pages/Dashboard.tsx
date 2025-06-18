
import { useState } from 'react';
import { Users, FileText, BarChart, Settings, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import StudentsManagement from '@/components/dashboard/StudentsManagement';
import QuizManagement from '@/components/dashboard/QuizManagement';
import AnalyticsReports from '@/components/dashboard/AnalyticsReports';
import DashboardSettings from '@/components/dashboard/DashboardSettings';
import TeacherProfile from '@/components/dashboard/TeacherProfile';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'overview', label: 'Dashboard', icon: BarChart },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'quizzes', label: 'Quiz Management', icon: FileText },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'students':
        return <StudentsManagement />;
      case 'quizzes':
        return <QuizManagement />;
      case 'analytics':
        return <AnalyticsReports />;
      case 'settings':
        return <DashboardSettings />;
      case 'profile':
        return <TeacherProfile />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">SMK Dashboard</h1>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-6">
          <div className="px-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg mb-1 transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden mr-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {navigationItems.find(item => item.id === activeTab)?.label}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Welcome back, Teacher!
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
