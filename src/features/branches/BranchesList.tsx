import { useTranslation } from 'react-i18next'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/ui/Button'
import { Plus } from 'lucide-react'

export default function BranchesList() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('navigation.branches')}
        subtitle="Manage your academy branches"
        actions={
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>{t('branches.addBranch')}</span>
          </Button>
        }
      />
      
      <div className="card p-6">
        <p className="text-gray-600">Branches management coming soon...</p>
      </div>
    </div>
  )
}
