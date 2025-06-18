
import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Copy, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuizManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data - replace with real data from Supabase
  const quizzes = [
    {
      id: 1,
      title: 'Basic Algebra Concepts',
      description: 'Test your understanding of fundamental algebraic principles',
      subject: 'Mathematics',
      difficulty: 3,
      questionCount: 15,
      timeLimit: 30,
      status: 'active',
      submissions: 45,
      averageScore: 82,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Newton\'s Laws of Motion',
      description: 'Comprehensive quiz on the three laws of motion',
      subject: 'Physics',
      difficulty: 4,
      questionCount: 20,
      timeLimit: 45,
      status: 'active',
      submissions: 32,
      averageScore: 78,
      createdAt: '2024-01-12'
    },
    {
      id: 3,
      title: 'Chemical Bonding',
      description: 'Understanding ionic, covalent, and metallic bonds',
      subject: 'Chemistry',
      difficulty: 5,
      questionCount: 25,
      timeLimit: 60,
      status: 'draft',
      submissions: 0,
      averageScore: 0,
      createdAt: '2024-01-10'
    },
    {
      id: 4,
      title: 'Cell Structure and Function',
      description: 'Basic biology quiz on cellular components',
      subject: 'Biology',
      difficulty: 2,
      questionCount: 12,
      timeLimit: 25,
      status: 'active',
      submissions: 67,
      averageScore: 88,
      createdAt: '2024-01-08'
    },
    {
      id: 5,
      title: 'English Grammar Basics',
      description: 'Test your knowledge of parts of speech and sentence structure',
      subject: 'English',
      difficulty: 2,
      questionCount: 18,
      timeLimit: 35,
      status: 'archived',
      submissions: 89,
      averageScore: 85,
      createdAt: '2024-01-05'
    }
  ];

  const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  const statuses = ['all', 'active', 'draft', 'archived'];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || quiz.subject === selectedSubject;
    const matchesStatus = selectedStatus === 'all' || quiz.status === selectedStatus;
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const renderDifficultyStars = (difficulty: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < difficulty ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateQuiz = () => {
    // TODO: Implement quiz creation wizard
    console.log('Create quiz clicked');
  };

  const handleEditQuiz = (quizId: number) => {
    // TODO: Implement quiz editing
    console.log('Edit quiz:', quizId);
  };

  const handleDeleteQuiz = (quizId: number) => {
    // TODO: Implement delete confirmation
    console.log('Delete quiz:', quizId);
  };

  const handleDuplicateQuiz = (quizId: number) => {
    // TODO: Implement quiz duplication
    console.log('Duplicate quiz:', quizId);
  };

  const handleToggleStatus = (quizId: number, currentStatus: string) => {
    // TODO: Implement status toggle
    console.log('Toggle status for quiz:', quizId, 'Current:', currentStatus);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quiz Management</h1>
          <p className="text-gray-600">Create and manage quizzes for your students</p>
        </div>
        <Button onClick={handleCreateQuiz} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Quiz
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search quizzes by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 mb-2">{quiz.subject}</Badge>
                </div>
                <Badge className={getStatusColor(quiz.status)}>
                  {quiz.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{quiz.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Difficulty:</span>
                  {renderDifficultyStars(quiz.difficulty)}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Questions:</span>
                  <span className="font-medium">{quiz.questionCount}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Time Limit:</span>
                  <span className="font-medium">{quiz.timeLimit} min</span>
                </div>
                
                {quiz.status === 'active' && (
                  <>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Submissions:</span>
                      <span className="font-medium">{quiz.submissions}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Avg Score:</span>
                      <span className="font-medium text-green-600">{quiz.averageScore}%</span>
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEditQuiz(quiz.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDuplicateQuiz(quiz.id)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteQuiz(quiz.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button
                  size="sm"
                  variant={quiz.status === 'active' ? 'secondary' : 'default'}
                  onClick={() => handleToggleStatus(quiz.id, quiz.status)}
                  className="flex items-center gap-1"
                >
                  {quiz.status === 'active' ? (
                    <>
                      <Pause className="h-3 w-3" />
                      Deactivate
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3" />
                      Activate
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 mb-4">No quizzes found matching your criteria.</p>
            <Button onClick={handleCreateQuiz} className="flex items-center gap-2 mx-auto">
              <Plus className="h-4 w-4" />
              Create Your First Quiz
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizManagement;
