import { createHashRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Dashboard from '../features/dashboard/Dashboard'
import StudentsList from '../features/students/StudentsList'
import StudentProfile from '../features/students/StudentProfile'
import TeachersList from '../features/teachers/TeachersList'
import BranchesList from '../features/branches/BranchesList'
import FightPlansList from '../features/plans/FightPlansList'
import EnrollmentsList from '../features/enrollments/EnrollmentsList'
import ClassesList from '../features/classes/ClassesList'
import Schedule from '../features/checkin/Schedule'
import ChampionshipsList from '../features/championships/ChampionshipsList'
import ResultsList from '../features/results/ResultsList'
import QualityList from '../features/quality/QualityList'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'students',
        children: [
          {
            index: true,
            element: <StudentsList />
          },
          {
            path: ':id',
            element: <StudentProfile />
          }
        ]
      },
      {
        path: 'teachers',
        element: <TeachersList />
      },
      {
        path: 'branches',
        element: <BranchesList />
      },
      {
        path: 'fight-plans',
        element: <FightPlansList />
      },
      {
        path: 'enrollments',
        element: <EnrollmentsList />
      },
      {
        path: 'classes',
        element: <ClassesList />
      },
      {
        path: 'schedule',
        element: <Schedule />
      },
      {
        path: 'championships',
        element: <ChampionshipsList />
      },
      {
        path: 'results',
        element: <ResultsList />
      },
      {
        path: 'quality',
        element: <QualityList />
      }
    ]
  }
])
