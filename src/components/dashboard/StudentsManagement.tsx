
import { useState } from 'react';
import { Search, Plus, Download, Upload, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StudentsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  // Mock data - replace with real data from Supabase
  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@school.com',
      class: '10A',
      totalPoints: 1250,
      level: 8,
      lastActivity: '2 hours ago',
      avatar: 'JD',
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@school.com',
      class: '10B',
      totalPoints: 1100,
      level: 7,
      lastActivity: '1 day ago',
      avatar: 'JS',
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@school.com',
      class: '10A',
      totalPoints: 980,
      level: 6,
      lastActivity: '3 hours ago',
      avatar: 'MJ',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@school.com',
      class: '10C',
      totalPoints: 1450,
      level: 9,
      lastActivity: '30 minutes ago',
      avatar: 'SW',
      status: 'active'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@school.com',
      class: '10B',
      totalPoints: 750,
      level: 5,
      lastActivity: '2 days ago',
      avatar: 'DB',
      status: 'inactive'
    }
  ];

  const classes = ['all', '10A', '10B', '10C'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleAddStudent = () => {
    // TODO: Implement add student modal
    console.log('Add student clicked');
  };

  const handleImportCSV = () => {
    // TODO: Implement CSV import
    console.log('Import CSV clicked');
  };

  const handleExportData = () => {
    // TODO: Implement data export
    console.log('Export data clicked');
  };

  const handleViewStudent = (studentId: number) => {
    // TODO: Implement student detail view
    console.log('View student:', studentId);
  };

  const handleEditStudent = (studentId: number) => {
    // TODO: Implement edit student modal
    console.log('Edit student:', studentId);
  };

  const handleDeleteStudent = (studentId: number) => {
    // TODO: Implement delete confirmation
    console.log('Delete student:', studentId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students Management</h1>
          <p className="text-gray-600">Manage your students and track their progress</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleImportCSV} variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import CSV
          </Button>
          <Button onClick={handleExportData} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button onClick={handleAddStudent} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search students by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full sm:w-48">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>
                    {cls === 'all' ? 'All Classes' : `Class ${cls}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Student</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Class</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Points</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Level</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Last Activity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{student.avatar}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{student.class}</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900">{student.totalPoints.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <Badge className="bg-purple-100 text-purple-800">Level {student.level}</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{student.lastActivity}</td>
                    <td className="py-4 px-4">
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleViewStudent(student.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditStudent(student.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteStudent(student.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsManagement;
