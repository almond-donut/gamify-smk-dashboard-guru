
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const TeacherProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock teacher data - replace with real data from Supabase
  const [teacherData, setTeacherData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@smktech.edu',
    phone: '+1-234-567-8900',
    address: '123 Education Street, Learning City, LC 12345',
    bio: 'Experienced educator with over 10 years of teaching experience in mathematics and science. Passionate about integrating technology in education to enhance student learning outcomes.',
    subjects: ['Mathematics', 'Physics', 'Computer Science'],
    joinDate: '2020-01-15',
    totalStudents: 245,
    totalQuizzes: 127,
    averageRating: 4.8
  });

  const handleSaveProfile = () => {
    // TODO: Implement profile save to Supabase
    console.log('Save profile:', teacherData);
    setIsEditing(false);
  };

  const handleImageUpload = () => {
    // TODO: Implement image upload
    console.log('Upload image clicked');
  };

  const handleInputChange = (field: string, value: string) => {
    setTeacherData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Profile</h1>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <User className="h-16 w-16 text-white" />
              </div>
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={handleImageUpload}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{teacherData.name}</h2>
            <p className="text-gray-600 mb-4">{teacherData.email}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Joined {new Date(teacherData.joinDate).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{teacherData.totalStudents}</p>
                <p className="text-xs text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{teacherData.totalQuizzes}</p>
                <p className="text-xs text-gray-600">Quizzes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{teacherData.averageRating}</p>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                {isEditing ? (
                  <Input
                    value={teacherData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md">{teacherData.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                {isEditing ? (
                  <Input
                    type="email"
                    value={teacherData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    {teacherData.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                {isEditing ? (
                  <Input
                    value={teacherData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    {teacherData.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Join Date</label>
                <p className="p-2 bg-gray-50 rounded-md">
                  {new Date(teacherData.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              {isEditing ? (
                <Input
                  value={teacherData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  {teacherData.address}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              {isEditing ? (
                <Textarea
                  rows={4}
                  value={teacherData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{teacherData.bio}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Subjects</label>
              <div className="flex flex-wrap gap-2">
                {teacherData.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Change Password Section */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
          </div>
          <Button variant="outline">Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherProfile;
