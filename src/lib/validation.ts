import { z } from 'zod'

// Common schemas
export const emailSchema = z.string().email('validation.email')
export const phoneSchema = z.string().min(10, 'validation.phone')
export const dateSchema = z.string().min(1, 'validation.date')
export const positiveNumberSchema = z.number().positive('validation.positiveNumber')

// Student schemas
export const createStudentSchema = z.object({
  firstName: z.string().min(1, 'validation.required').max(50, 'validation.maxLength'),
  lastName: z.string().min(1, 'validation.required').max(50, 'validation.maxLength'),
  birthDate: z.string().min(1, 'validation.required'),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  beltLevel: z.enum(['white', 'blue', 'purple', 'brown', 'black'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  email: emailSchema,
  phone: phoneSchema,
  branchId: z.string().min(1, 'validation.required')
})

export const updateStudentSchema = createStudentSchema.partial()

// Teacher schemas
export const createTeacherSchema = z.object({
  name: z.string().min(1, 'validation.required').max(100, 'validation.maxLength'),
  beltLevel: z.enum(['white', 'blue', 'purple', 'brown', 'black'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  email: emailSchema,
  phone: phoneSchema,
  branchId: z.string().min(1, 'validation.required'),
  bio: z.string().optional(),
  photo: z.string().optional()
})

export const updateTeacherSchema = createTeacherSchema.partial()

// Branch schemas
export const createBranchSchema = z.object({
  name: z.string().min(1, 'validation.required').max(100, 'validation.maxLength'),
  country: z.string().min(1, 'validation.required').max(50, 'validation.maxLength'),
  city: z.string().min(1, 'validation.required').max(50, 'validation.maxLength'),
  address: z.string().min(1, 'validation.required').max(200, 'validation.maxLength'),
  contacts: z.string().optional()
})

export const updateBranchSchema = createBranchSchema.partial()

// Fight Plan schemas
export const createFightPlanSchema = z.object({
  name: z.string().min(1, 'validation.required').max(100, 'validation.maxLength'),
  modality: z.enum(['gi', 'nogi', 'both'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'all'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  monthlyFee: positiveNumberSchema
})

export const updateFightPlanSchema = createFightPlanSchema.partial()

// Enrollment schemas
export const createEnrollmentSchema = z.object({
  studentId: z.string().min(1, 'validation.required'),
  planId: z.string().min(1, 'validation.required'),
  startDate: z.string().min(1, 'validation.required'),
  endDate: z.string().optional()
}).refine((data) => {
  if (data.endDate && data.startDate) {
    return new Date(data.endDate) > new Date(data.startDate)
  }
  return true
}, {
  message: 'End date must be after start date',
  path: ['endDate']
})

export const updateEnrollmentSchema = z.object({
  studentId: z.string().optional(),
  planId: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional()
})

// Class Schedule schema
export const classScheduleSchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
}).refine((data) => {
  return data.endTime > data.startTime
}, {
  message: 'End time must be after start time',
  path: ['endTime']
})

// Class schemas
export const createClassSchema = z.object({
  title: z.string().min(1, 'validation.required').max(100, 'validation.maxLength'),
  modality: z.enum(['gi', 'nogi', 'both'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'all'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  teacherId: z.string().min(1, 'validation.required'),
  branchId: z.string().min(1, 'validation.required'),
  capacity: z.number().int().positive('validation.positiveNumber'),
  schedule: z.array(classScheduleSchema).min(1, 'At least one schedule is required')
})

export const updateClassSchema = createClassSchema.partial()

// Championship schemas
export const createChampionshipSchema = z.object({
  name: z.string().min(1, 'validation.required').max(100, 'validation.maxLength'),
  location: z.string().min(1, 'validation.required').max(200, 'validation.maxLength'),
  startDate: z.string().min(1, 'validation.required'),
  endDate: z.string().min(1, 'validation.required'),
  ruleset: z.string().optional()
}).refine((data) => {
  return new Date(data.endDate) > new Date(data.startDate)
}, {
  message: 'End date must be after start date',
  path: ['endDate']
})

export const updateChampionshipSchema = z.object({
  name: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  ruleset: z.string().optional()
})

// Championship Result schemas
export const createChampionshipResultSchema = z.object({
  championshipId: z.string().min(1, 'validation.required'),
  studentId: z.string().min(1, 'validation.required'),
  modality: z.enum(['gi', 'nogi'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  belt: z.enum(['white', 'blue', 'purple', 'brown', 'black'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  position: z.number().int().positive('validation.positiveNumber'),
  resultType: z.enum(['gold', 'silver', 'bronze', 'participation'], {
    errorMap: () => ({ message: 'validation.required' })
  })
})

export const updateChampionshipResultSchema = createChampionshipResultSchema.partial()

// Quality Evaluation schemas
export const createQualityEvaluationSchema = z.object({
  studentId: z.string().min(1, 'validation.required'),
  teacherId: z.string().min(1, 'validation.required'),
  date: z.string().min(1, 'validation.required'),
  type: z.enum(['technical', 'physical', 'mental', 'overall'], {
    errorMap: () => ({ message: 'validation.required' })
  }),
  score: z.number().min(1).max(10, 'Score must be between 1 and 10'),
  comments: z.string().optional()
})

export const updateQualityEvaluationSchema = createQualityEvaluationSchema.partial()

// Filter schemas
export const studentFiltersSchema = z.object({
  search: z.string().optional(),
  branchId: z.string().optional(),
  beltLevel: z.string().optional(),
  gender: z.string().optional(),
  isActive: z.boolean().optional()
})

export const classFiltersSchema = z.object({
  search: z.string().optional(),
  branchId: z.string().optional(),
  teacherId: z.string().optional(),
  modality: z.string().optional(),
  level: z.string().optional(),
  dayOfWeek: z.number().optional()
})

// Type exports
export type CreateStudentData = z.infer<typeof createStudentSchema>
export type UpdateStudentData = z.infer<typeof updateStudentSchema>
export type CreateTeacherData = z.infer<typeof createTeacherSchema>
export type UpdateTeacherData = z.infer<typeof updateTeacherSchema>
export type CreateBranchData = z.infer<typeof createBranchSchema>
export type UpdateBranchData = z.infer<typeof updateBranchSchema>
export type CreateFightPlanData = z.infer<typeof createFightPlanSchema>
export type UpdateFightPlanData = z.infer<typeof updateFightPlanSchema>
export type CreateEnrollmentData = z.infer<typeof createEnrollmentSchema>
export type UpdateEnrollmentData = z.infer<typeof updateEnrollmentSchema>
export type CreateClassData = z.infer<typeof createClassSchema>
export type UpdateClassData = z.infer<typeof updateClassSchema>
export type CreateChampionshipData = z.infer<typeof createChampionshipSchema>
export type UpdateChampionshipData = z.infer<typeof updateChampionshipSchema>
export type CreateChampionshipResultData = z.infer<typeof createChampionshipResultSchema>
export type UpdateChampionshipResultData = z.infer<typeof updateChampionshipResultSchema>
export type CreateQualityEvaluationData = z.infer<typeof createQualityEvaluationSchema>
export type UpdateQualityEvaluationData = z.infer<typeof updateQualityEvaluationSchema>
export type StudentFilters = z.infer<typeof studentFiltersSchema>
export type ClassFilters = z.infer<typeof classFiltersSchema>
