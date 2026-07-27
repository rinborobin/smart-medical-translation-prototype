import { useState, useEffect } from 'react'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import ScanScreen from './screens/ScanScreen'
import UploadScreen from './screens/UploadScreen'
import ProcessingScreen from './screens/ProcessingScreen'
import SummaryScreen from './screens/SummaryScreen'
import DetailScreen from './screens/DetailScreen'
import HistoryScreen from './screens/HistoryScreen'
import SettingsScreen from './screens/SettingsScreen'
import CaregiverScreen from './screens/CaregiverScreen'
import AddFamilyScreen from './screens/AddFamilyScreen'
import FamilyProfileScreen from './screens/FamilyProfileScreen'
import QRCodeScreen from './screens/QRCodeScreen'
import NotificationsScreen from './screens/NotificationsScreen'

const initialFamilyMembers = [
  {
    id: 1,
    name: 'ម៉ាក់ សុខា',
    nameEn: 'Sokha Mak',
    relation: 'ម្ដាយ',
    relationEn: 'Mother',
    lastReport: '២៣ កក្កដា ២០២៦',
    alerts: 2,
    status: 'warning',
    avatar: 'ស',
    phone: '+855 12 345 678',
  },
  {
    id: 2,
    name: 'ប៉ា វិចិត្រ',
    nameEn: 'Vichet Pa',
    relation: 'ឪពុក',
    relationEn: 'Father',
    lastReport: '១៨ កក្កដា ២០២៦',
    alerts: 0,
    status: 'normal',
    avatar: 'វ',
    phone: '+855 23 456 789',
  },
  {
    id: 3,
    name: 'ជី ម៉ាលី',
    nameEn: 'Maly Chi',
    relation: 'ជីដូន',
    relationEn: 'Grandmother',
    lastReport: '១០ កក្កដា ២០២៦',
    alerts: 1,
    status: 'warning',
    avatar: 'ម',
    phone: '+855 34 567 890',
  },
]

const initialNotifications = [
  {
    id: 1,
    type: 'alert',
    title: 'លទ្ធផលពិសោធន៍ថ្មីបានចូល',
    subtitle: 'New lab result added · ២៣ កក្កដា ២០២៦',
    time: 'មុននេះ ១០ នាទី',
    read: false,
  },
  {
    id: 2,
    type: 'alert',
    title: 'ការជូនដំណឹងពីជាតិស្ករ',
    subtitle: 'Blood glucose high · ២៣ កក្កដា ២០២៦',
    time: 'មុននេះ ៣០ នាទី',
    read: true,
  },
]

const initialHistory = [
  {
    id: 1,
    type: 'លទ្ធផលពិសោធន៍',
    typeEn: 'Lab Result',
    date: '២៣ កក្កដា ២០២៦',
    findings: 4,
    alerts: 2,
    status: 'warning',
  },
  {
    id: 4,
    type: 'លទ្ធផលពិសោធន៍',
    typeEn: 'Lab Result',
    date: '០១ កក្កដា ២០២៦',
    findings: 6,
    alerts: 0,
    status: 'normal',
  },
  {
    id: 5,
    type: 'លទ្ធផលពិសោធន៍',
    typeEn: 'Lab Result',
    date: '០១ កក្កដា ២០២៦',
    findings: 6,
    alerts: 0,
    status: 'normal',
  },
  {
    id: 6,
    type: 'លទ្ធផលពិសោធន៍',
    typeEn: 'Lab Result',
    date: '០១ កក្កដា ២០២៦',
    findings: 6,
    alerts: 0,
    status: 'normal',
  },
]

function App() {
  const [navStack, setNavStack] = useState(['splash'])
  const [darkMode, setDarkMode] = useState(false)
  const [selectedFinding, setSelectedFinding] = useState(null)
  const [familyMembers, setFamilyMembers] = useState(initialFamilyMembers)
  const [notifications, setNotifications] = useState(initialNotifications)
  const [selectedFamilyMemberId, setSelectedFamilyMemberId] = useState(null)
  const [selectedReportId, setSelectedReportId] = useState(null)
  const [history, setHistory] = useState(initialHistory)

  const currentScreen = navStack[navStack.length - 1]

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navigate = (screen, options = {}) => {
    if (options.replace) {
      setNavStack((prev) => [...prev.slice(0, -1), screen])
    } else {
      setNavStack((prev) => [...prev, screen])
    }
  }

  const goBack = () => {
    setNavStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  const navigateToDetail = (finding) => {
    setSelectedFinding(finding)
    navigate('detail')
  }
  const navigateToFamilyProfile = (id) => {
    setSelectedFamilyMemberId(id)
    navigate('familyProfile')
  }
  const navigateToSummary = (id) => {
    setSelectedReportId(id)
    navigate('summary')
  }

  const addFamilyMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now(),
      lastReport: 'មិនទាន់មាន',
      alerts: 0,
      status: 'normal',
    }
    setFamilyMembers((prev) => [newMember, ...prev])
    setNotifications((prev) => [
      {
        id: Date.now() + 1,
        type: 'caregiver',
        title: `${member.name} បានបញ្ចូលជាអ្នកថែទាំ`,
        subtitle: `${member.nameEn} added you as a caregiver`,
        time: 'ឥឡូវនេះ',
        read: false,
      },
      ...prev,
    ])
  }

  const deleteFamilyMember = (id) => {
    setFamilyMembers((prev) => prev.filter((m) => m.id !== id))
  }

  const deleteReport = (id) => {
    setHistory((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="w-full min-h-screen">
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={() => navigate('signIn', { replace: true })} />
      )}
      {currentScreen === 'signIn' && (
        <SignInScreen onNavigate={navigate} />
      )}
      {currentScreen === 'signUp' && (
        <SignUpScreen onNavigate={navigate} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={navigate} notifications={notifications} onSelectReport={navigateToSummary} />
      )}
      {currentScreen === 'scan' && (
        <ScanScreen onNavigate={navigate} onGoBack={goBack} />
      )}
      {currentScreen === 'upload' && (
        <UploadScreen onNavigate={navigate} onGoBack={goBack} />
      )}
      {currentScreen === 'processing' && (
        <ProcessingScreen onNavigate={navigate} />
      )}
      {currentScreen === 'summary' && (
        <SummaryScreen
          onNavigate={navigate}
          onGoBack={goBack}
          onSelectFinding={navigateToDetail}
          history={history}
          selectedReportId={selectedReportId}
          onDeleteReport={deleteReport}
        />
      )}
      {currentScreen === 'detail' && (
        <DetailScreen onNavigate={navigate} onGoBack={goBack} finding={selectedFinding} />
      )}
      {currentScreen === 'history' && (
        <HistoryScreen onNavigate={navigate} onGoBack={goBack} history={history} onSelectReport={navigateToSummary} />
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen onNavigate={navigate} onGoBack={goBack} darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      {currentScreen === 'caregiver' && (
        <CaregiverScreen onNavigate={navigate} familyMembers={familyMembers} onSelectMember={navigateToFamilyProfile} />
      )}
      {currentScreen === 'addFamily' && (
        <AddFamilyScreen onNavigate={navigate} onAdd={addFamilyMember} />
      )}
      {currentScreen === 'familyProfile' && (
        <FamilyProfileScreen
          onNavigate={navigate}
          onGoBack={goBack}
          familyMembers={familyMembers}
          selectedId={selectedFamilyMemberId}
          onDelete={deleteFamilyMember}
        />
      )}
      {currentScreen === 'qrCode' && (
        <QRCodeScreen onNavigate={navigate} onGoBack={goBack} />
      )}
      {currentScreen === 'notifications' && (
        <NotificationsScreen onNavigate={navigate} onGoBack={goBack} notifications={notifications} />
      )}
    </div>
  )
}

export default App
