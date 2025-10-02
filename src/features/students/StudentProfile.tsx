import { useTranslation } from 'react-i18next'
import { ArrowLeft, Edit, Mail, Phone, Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/ui/Button'

// Mock data - in a real app, this would come from your data store
const mockStudent = {
  id: '1',
  firstName: 'João',
  lastName: 'Silva',
  birthDate: '1990-05-15',
  gender: 'male',
  beltLevel: 'blue',
  email: 'joao.silva@email.com',
  phone: '+55 11 99999-9999',
  branchId: '1',
  isActive: true,
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
  branch: {
    id: '1',
    name: 'Main Branch',
    city: 'São Paulo',
    country: 'Brazil'
  }
}

export default function StudentProfile() {
  const { t } = useTranslation()
  const student = mockStudent // In a real app, fetch by id

  const getBeltColor = (belt: string) => {
    const colors = {
      white: 'bg-gray-100 text-gray-800',
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      brown: 'bg-amber-100 text-amber-800',
      black: 'bg-gray-800 text-white'
    }
    return colors[belt as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`${student.firstName} ${student.lastName}`}
        subtitle="Student Profile"
        actions={
          <div className="flex items-center space-x-3">
            <Link to="/students">
              <Button variant="secondary" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>{t('common.back')}</span>
              </Button>
            </Link>
            <Button className="flex items-center space-x-2">
              <Edit className="w-4 h-4" />
              <span>{t('common.edit')}</span>
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Info */}
        <div className="lg:col-span-1">
          <div className="card p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">
                  {student.firstName[0]}{student.lastName[0]}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {student.firstName} {student.lastName}
              </h2>
              <p className="text-gray-600 mb-4">
                {calculateAge(student.birthDate)} years old
              </p>
              <span className={`badge ${getBeltColor(student.beltLevel)}`}>
                {t(`students.${student.beltLevel}`)} Belt
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{student.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{student.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Born {new Date(student.birthDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {student.branch?.name}, {student.branch?.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Enrollments */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Enrollments</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Advanced Gi Training</h4>
                    <p className="text-sm text-gray-600">Started: Jan 15, 2024</p>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">No-Gi Fundamentals</h4>
                    <p className="text-sm text-gray-600">Started: Feb 1, 2024</p>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Results */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Competition Results</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">São Paulo Open 2024</h4>
                    <p className="text-sm text-gray-600">Blue Belt - Gi</p>
                  </div>
                  <span className="badge badge-warning">Silver</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Brazilian Nationals 2024</h4>
                    <p className="text-sm text-gray-600">Blue Belt - No-Gi</p>
                  </div>
                  <span className="badge badge-primary">Gold</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Evaluations */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Evaluations</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Technical Assessment</h4>
                    <p className="text-sm text-gray-600">March 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-gray-900">8.5/10</span>
                    <p className="text-sm text-gray-600">Excellent progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Physical Assessment</h4>
                    <p className="text-sm text-gray-600">February 28, 2024</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-gray-900">7.8/10</span>
                    <p className="text-sm text-gray-600">Good conditioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
