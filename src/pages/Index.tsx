
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, GraduationCap, BarChart, Users, FileText } from 'lucide-react';
import Dashboard from './Dashboard';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    schoolName: ''
  });

  // If authenticated, show the dashboard
  if (isAuthenticated) {
    return <Dashboard />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with Supabase
    console.log('Form submitted:', formData);
    // For demo purposes, just set authenticated to true
    setIsAuthenticated(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Left side - Features showcase */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 flex-col justify-center">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-10 w-10" />
            <h1 className="text-3xl font-bold">SMK Dashboard</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Gamify Your Classroom with Smart Analytics
          </h2>
          
          <p className="text-xl mb-8 text-blue-100">
            Comprehensive gamification dashboard for SMK teachers. Manage students, create engaging quizzes, and track progress with powerful analytics.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Student Management</h3>
                <p className="text-blue-200">Manage classes, track progress, and engage students</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Quiz Creation</h3>
                <p className="text-blue-200">Build interactive quizzes with rich content</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-lg">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Analytics & Reports</h3>
                <p className="text-blue-200">Comprehensive insights and performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Authentication form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile header */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">SMK Dashboard</h1>
            </div>
            <p className="text-gray-600">Gamification dashboard for teachers</p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </CardTitle>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to access your teaching dashboard' 
                  : 'Join the gamification revolution'
                }
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your school name"
                        value={formData.schoolName}
                        onChange={(e) => handleInputChange('schoolName', e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  </>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
                
                <Button type="submit" className="w-full">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <p className="text-center text-xs text-gray-500 mt-6">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
