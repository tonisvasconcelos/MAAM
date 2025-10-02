import { useTranslation } from 'react-i18next'
import PageHeader from '../../components/common/PageHeader'

export default function Schedule() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('navigation.schedule')}
        subtitle="Manage class schedules and check-ins"
      />
      
      <div className="card p-6">
        <p className="text-gray-600">Schedule and check-in management coming soon...</p>
      </div>
    </div>
  )
}
