export interface Student {
  id: string
  firstName: string
  lastName: string
  birthDate: string
  gender: 'male' | 'female' | 'other'
  beltLevel: 'white' | 'blue' | 'purple' | 'brown' | 'black'
  email: string
  phone: string
  branchId: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Teacher {
  id: string
  name: string
  beltLevel: 'white' | 'blue' | 'purple' | 'brown' | 'black'
  email: string
  phone: string
  branchId: string
  bio?: string
  photo?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Branch {
  id: string
  name: string
  country: string
  city: string
  address: string
  contacts: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface FightPlan {
  id: string
  name: string
  modality: 'gi' | 'nogi' | 'both'
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  monthlyFee: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface StudentFightPlan {
  id: string
  studentId: string
  planId: string
  startDate: string
  endDate?: string
  status: 'enrolled' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface Class {
  id: string
  title: string
  modality: 'gi' | 'nogi' | 'both'
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  teacherId: string
  branchId: string
  capacity: number
  schedule: ClassSchedule[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ClassSchedule {
  dayOfWeek: number // 0 = Sunday, 1 = Monday, etc.
  startTime: string // HH:mm format
  endTime: string // HH:mm format
}

export interface CheckIn {
  id: string
  classId: string
  studentId: string
  date: string
  status: 'scheduled' | 'checkedIn' | 'noShow'
  checkInTime?: string
  checkOutTime?: string
  createdAt: string
  updatedAt: string
}

export interface Championship {
  id: string
  name: string
  location: string
  startDate: string
  endDate: string
  ruleset: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ChampionshipResult {
  id: string
  championshipId: string
  studentId: string
  modality: 'gi' | 'nogi'
  belt: 'white' | 'blue' | 'purple' | 'brown' | 'black'
  position: number
  resultType: 'gold' | 'silver' | 'bronze' | 'participation'
  createdAt: string
  updatedAt: string
}

export interface QualityEvaluation {
  id: string
  studentId: string
  teacherId: string
  date: string
  type: 'technical' | 'physical' | 'mental' | 'overall'
  score: number // 1-10
  comments?: string
  createdAt: string
  updatedAt: string
}

// Extended types with relations
export interface StudentWithRelations extends Student {
  branch?: Branch
  enrollments?: StudentFightPlanWithRelations[]
  results?: ChampionshipResultWithRelations[]
  evaluations?: QualityEvaluationWithRelations[]
}

export interface StudentFightPlanWithRelations extends StudentFightPlan {
  student?: Student
  plan?: FightPlan
}

export interface ClassWithRelations extends Class {
  teacher?: Teacher
  branch?: Branch
  checkIns?: CheckInWithRelations[]
}

export interface CheckInWithRelations extends CheckIn {
  class?: Class
  student?: Student
}

export interface ChampionshipResultWithRelations extends ChampionshipResult {
  championship?: Championship
  student?: Student
}

export interface QualityEvaluationWithRelations extends QualityEvaluation {
  student?: Student
  teacher?: Teacher
}

// Form types
export interface CreateStudentData {
  firstName: string
  lastName: string
  birthDate: string
  gender: 'male' | 'female' | 'other'
  beltLevel: 'white' | 'blue' | 'purple' | 'brown' | 'black'
  email: string
  phone: string
  branchId: string
}

export interface CreateEnrollmentData {
  studentId: string
  planId: string
  startDate: string
  endDate?: string
}

export interface CreateClassData {
  title: string
  modality: 'gi' | 'nogi' | 'both'
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  teacherId: string
  branchId: string
  capacity: number
  schedule: ClassSchedule[]
}

// Filter types
export interface StudentFilters {
  search?: string
  branchId?: string
  beltLevel?: string
  gender?: string
  isActive?: boolean
}

export interface ClassFilters {
  search?: string
  branchId?: string
  teacherId?: string
  modality?: string
  level?: string
  dayOfWeek?: number
}

// API Response types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
