import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  Target,
  UserCheck,
  Calendar,
  Clock,
  Trophy,
  Award,
  Star,
  Menu
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'navigation.dashboard', href: '/', icon: LayoutDashboard },
  { name: 'navigation.students', href: '/students', icon: Users },
  { name: 'navigation.teachers', href: '/teachers', icon: GraduationCap },
  { name: 'navigation.branches', href: '/branches', icon: Building2 },
  { name: 'navigation.fightPlans', href: '/fight-plans', icon: Target },
  { name: 'navigation.enrollments', href: '/enrollments', icon: UserCheck },
  { name: 'navigation.classes', href: '/classes', icon: Calendar },
  { name: 'navigation.schedule', href: '/schedule', icon: Clock },
  { name: 'navigation.championships', href: '/championships', icon: Trophy },
  { name: 'navigation.results', href: '/results', icon: Award },
  { name: 'navigation.quality', href: '/quality', icon: Star },
]

export default function Sidebar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-gray-600 bg-opacity-75"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-16 lg:pt-0">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {t(item.name)}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
