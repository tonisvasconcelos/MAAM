import { useTranslation } from 'react-i18next'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/ui/Button'
import { Plus } from 'lucide-react'

export default function ChampionshipsList() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('navigation.championships')}
        subtitle="Manage championships and competitions"
        actions={
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>{t('championships.addChampionship')}</span>
          </Button>
        }
      />
      
      <div className="card p-6">
        <p className="text-gray-600">Championships management coming soon...</p>
      </div>
    </div>
  )
}
