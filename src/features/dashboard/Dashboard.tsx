import { useTranslation } from 'react-i18next'
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Clock,
  Target
} from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
}

function StatCard({ title, value, icon: Icon, change, changeType = 'neutral' }: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }

  return (
    <div className="card p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary-600" />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {change && (
              <p className={`ml-2 text-sm ${changeColors[changeType]}`}>
                {change}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { t } = useTranslation()

  // Mock data - in a real app, this would come from your data store
  const stats = [
    {
      title: t('navigation.students'),
      value: '156',
      icon: Users,
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: t('navigation.teachers'),
      value: '8',
      icon: GraduationCap,
      change: '+2',
      changeType: 'positive' as const
    },
    {
      title: t('navigation.classes'),
      value: '24',
      icon: Calendar,
      change: '3 new',
      changeType: 'positive' as const
    },
    {
      title: t('navigation.championships'),
      value: '5',
      icon: Trophy,
      change: '2 upcoming',
      changeType: 'neutral' as const
    }
  ]

  const quickActions = [
    {
      title: t('students.addStudent'),
      description: 'Add a new student to the system',
      icon: Users,
      href: '/students'
    },
    {
      title: t('enrollments.addEnrollment'),
      description: 'Enroll a student in a fight plan',
      icon: Target,
      href: '/enrollments'
    },
    {
      title: t('classes.addClass'),
      description: 'Create a new class',
      icon: Calendar,
      href: '/classes'
    },
    {
      title: t('checkin.title'),
      description: 'Manage class check-ins',
      icon: Clock,
      href: '/schedule'
    }
  ]

  return (
    <div className="space-y-8">
      <PageHeader 
        title={t('navigation.dashboard')}
        subtitle="Welcome to your BJJ management system"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <a
                key={index}
                href={action.href}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-primary-700">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrollments</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New student enrolled</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Classes</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Advanced Gi Class</p>
                  <p className="text-xs text-gray-500">Today at 7:00 PM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
