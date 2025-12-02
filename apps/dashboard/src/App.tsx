import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@mfe-workspace/shared-ui';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

function App() {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up', icon: DollarSign },
    { title: 'Active Users', value: '2,350', change: '+12.5%', trend: 'up', icon: Users },
    { title: 'Conversion Rate', value: '3.24%', change: '-2.4%', trend: 'down', icon: TrendingUp },
    { title: 'Avg. Session', value: '4m 23s', change: '+8.2%', trend: 'up', icon: Activity },
  ];

  const recentActivity = [
    { user: 'Sarah Johnson', action: 'Completed purchase', time: '2 minutes ago', amount: '$129.00' },
    { user: 'Michael Chen', action: 'Started trial', time: '15 minutes ago', amount: '$0.00' },
    { user: 'Emma Davis', action: 'Upgraded plan', time: '1 hour ago', amount: '$299.00' },
    { user: 'James Wilson', action: 'Completed purchase', time: '2 hours ago', amount: '$49.00' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Micro Frontend - Analytics & Insights Module
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className={`flex items-center text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user transactions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{activity.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common dashboard operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Full Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Export Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Revenue Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>📊 This is a standalone dashboard micro-frontend</p>
          <p className="mt-1">Running on port 5002</p>
        </div>
      </div>
    </div>
  );
}

export default App;
