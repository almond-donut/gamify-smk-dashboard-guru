
import { Save, Upload, Download, Bell, Shield, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const DashboardSettings = () => {
  const handleSaveSettings = () => {
    // TODO: Implement settings save
    console.log('Save settings clicked');
  };

  const handleBackupData = () => {
    // TODO: Implement data backup
    console.log('Backup data clicked');
  };

  const handleImportData = () => {
    // TODO: Implement data import
    console.log('Import data clicked');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure your dashboard preferences and system settings</p>
      </div>

      {/* School Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            School Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
              <Input placeholder="Enter school name" defaultValue="SMK Technology Center" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School Code</label>
              <Input placeholder="Enter school code" defaultValue="SMK001" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <Textarea placeholder="Enter school address" rows={3} defaultValue="123 Education Street, Learning City, LC 12345" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <Input type="email" placeholder="Enter contact email" defaultValue="admin@smktech.edu" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <Input placeholder="Enter phone number" defaultValue="+1-234-567-8900" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grading System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Grading System Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passing Score (%)</label>
              <Input type="number" placeholder="70" defaultValue="70" min="0" max="100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Quiz Attempts</label>
              <Input type="number" placeholder="3" defaultValue="3" min="1" max="10" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Points per Correct Answer</label>
              <Input type="number" placeholder="10" defaultValue="10" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bonus Points for Perfect Score</label>
              <Input type="number" placeholder="50" defaultValue="50" min="0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive email updates about student activities</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Quiz Submission Alerts</p>
              <p className="text-sm text-gray-600">Get notified when students submit quizzes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Weekly Reports</p>
              <p className="text-sm text-gray-600">Receive weekly performance summaries</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Student Registration Notifications</p>
              <p className="text-sm text-gray-600">Alert when new students join</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={handleBackupData} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Backup All Data
            </Button>
            <Button onClick={handleImportData} variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Import Data
            </Button>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Data backup includes all students, quizzes, submissions, and analytics data. 
              Regular backups are recommended to prevent data loss.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Auto-logout</p>
              <p className="text-sm text-gray-600">Automatically logout after period of inactivity</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
            <Input type="number" placeholder="30" defaultValue="30" min="5" max="180" className="w-32" />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default DashboardSettings;
