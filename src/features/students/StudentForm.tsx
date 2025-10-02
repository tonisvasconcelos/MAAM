import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createStudentSchema, CreateStudentData } from '../../lib/validation'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { Student } from '../../types'

interface StudentFormProps {
  student?: Student | null
  onSave: (data: CreateStudentData) => void
  onCancel: () => void
}

export default function StudentForm({ student, onSave, onCancel }: StudentFormProps) {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateStudentData>({
    resolver: zodResolver(createStudentSchema)
  })

  useEffect(() => {
    if (student) {
      reset({
        firstName: student.firstName,
        lastName: student.lastName,
        birthDate: student.birthDate,
        gender: student.gender,
        beltLevel: student.beltLevel,
        email: student.email,
        phone: student.phone,
        branchId: student.branchId
      })
    }
  }, [student, reset])

  const onSubmit = async (data: CreateStudentData) => {
    setIsLoading(true)
    try {
      // In a real app, this would make an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSave(data)
    } catch (error) {
      console.error('Error saving student:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('students.firstName')}
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label={t('students.lastName')}
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('students.birthDate')}
          </label>
          <input
            type="date"
            {...register('birthDate')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.birthDate && (
            <p className="text-sm text-red-600 mt-1">{errors.birthDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('students.gender')}
          </label>
          <select
            {...register('gender')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">{t('common.select')}</option>
            <option value="male">{t('students.male')}</option>
            <option value="female">{t('students.female')}</option>
            <option value="other">{t('students.other')}</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-600 mt-1">{errors.gender.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('students.beltLevel')}
          </label>
          <select
            {...register('beltLevel')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">{t('common.select')}</option>
            <option value="white">{t('students.white')}</option>
            <option value="blue">{t('students.blue')}</option>
            <option value="purple">{t('students.purple')}</option>
            <option value="brown">{t('students.brown')}</option>
            <option value="black">{t('students.black')}</option>
          </select>
          {errors.beltLevel && (
            <p className="text-sm text-red-600 mt-1">{errors.beltLevel.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('students.branch')}
          </label>
          <select
            {...register('branchId')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">{t('common.select')}</option>
            <option value="1">Main Branch</option>
            <option value="2">Downtown Branch</option>
          </select>
          {errors.branchId && (
            <p className="text-sm text-red-600 mt-1">{errors.branchId.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('students.email')}
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label={t('students.phone')}
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          {t('common.cancel')}
        </Button>
        <Button
          type="submit"
          loading={isLoading}
        >
          {t('common.save')}
        </Button>
      </div>
    </form>
  )
}
