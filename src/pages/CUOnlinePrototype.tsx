import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  BarChart2, 
  Calendar, 
  Bell, 
  User, 
  Search, 
  ChevronRight, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  FileText,
  Clock,
  Menu
} from 'lucide-react';

// --- Components ---

// 1. Sidebar Navigation
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'registration', label: 'Course Reg', icon: <BookOpen size={20} /> },
    { id: 'performance', label: 'Performance', icon: <BarChart2 size={20} /> },
    { id: 'attendance', label: 'Attendance', icon: <Calendar size={20} /> },
  ];

  return (
    <div className="w-20 md:w-64 bg-[#003366] text-white flex flex-col h-screen fixed left-0 top-0 shadow-xl z-50 transition-all duration-300">
      <div className="p-6 flex items-center justify-center md:justify-start border-b border-white/10">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-0 md:mr-3">
          <span className="font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl hidden md:block tracking-wide">CUOnline</span>
      </div>

      <nav className="flex-1 mt-6 px-2 md:px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-center md:justify-start px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-white text-[#003366] shadow-lg font-semibold transform scale-105' 
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="mr-0 md:mr-3">{item.icon}</span>
            <span className="hidden md:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-center md:justify-start space-x-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition">
          <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-[#003366] font-bold">
            RG
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Rehman Ghani</p>
            <p className="text-xs text-gray-400">FA22-BSE-099</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Top Header
const Header = ({ title }) => (
  <header className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-2xl font-bold text-[#003366]">{title}</h1>
      <p className="text-gray-500 text-sm">Fall 2025 Semester</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative p-2 bg-white rounded-full shadow-sm hover:shadow-md cursor-pointer transition">
        <Bell size={20} className="text-gray-600" />
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </div>
    </div>
  </header>
);

// --- SCREEN 1: HOME (Dashboard) ---
const HomeScreen = () => {
  return (
    <div className="animate-fade-in">
      <Header title="Dashboard" />
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-medium mb-1">Current CGPA</p>
            <h2 className="text-4xl font-bold">3.42</h2>
            <div className="mt-4 flex items-center text-xs bg-white/20 w-fit px-2 py-1 rounded-md">
              <CheckCircle size={12} className="mr-1" /> Good Standing
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
            <BarChart2 size={100} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Attendance Overview</p>
            <h2 className="text-3xl font-bold text-gray-800">85%</h2>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Above threshold in 5/6 courses</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
           <p className="text-gray-500 text-sm font-medium mb-3">Next Class</p>
           <div className="flex items-start space-x-3">
             <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
               <Clock size={24} />
             </div>
             <div>
               <h3 className="font-bold text-gray-800">Human Computer Interaction</h3>
               <p className="text-sm text-gray-500">11:30 AM - Room C21</p>
               <span className="text-xs text-orange-500 font-medium mt-1 inline-block">Starting in 15 mins</span>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Notice Board */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 text-lg">Recent Notices</h3>
            <button className="text-[#3498DB] text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer border-b border-gray-50 last:border-0">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Final Exam Date Sheet Announced</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">The tentative date sheet for Fall 2025 has been uploaded. Please check for any clashes before Friday.</p>
                  <p className="text-xs text-gray-400 mt-2">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition group">
              <span className="font-medium">Download Transcript</span>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition group">
              <span className="font-medium">Fee Challan</span>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition group">
              <span className="font-medium">Digital Library</span>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SCREEN 2: REGISTRATION ---
const RegistrationScreen = () => {
  const [courses, setCourses] = useState([
    { id: 1, code: 'CSC401', name: 'Human Computer Intercation', cr: 3, section: 'B', status: 'Registered' },
    { id: 2, code: 'HUM110', name: 'Islamic Studies', cr: 3, section: 'A', status: 'Open' },
    { id: 3, code: 'CSC302', name: 'Operation Research', cr: 4, section: 'c', status: 'Conflict' },
    { id: 4, code: 'MTH231', name: 'Formal Methods', cr: 3, section: 'B', status: 'Open' },
  ]);

  const toggleReg = (id) => {
    setCourses(courses.map(c => {
      if (c.id === id && c.status === 'Open') return {...c, status: 'Registered'};
      if (c.id === id && c.status === 'Registered') return {...c, status: 'Open'};
      return c;
    }));
  };

  return (
    <div className="animate-fade-in">
      <Header title="Course Registration" />
      
      {/* Credit Hour Counter */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Registration Summary</h2>
          <p className="text-gray-500 text-sm">Select courses for Fall 2025</p>
        </div>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <div className="text-center">
             <span className="block text-2xl font-bold text-[#003366]">18</span>
             <span className="text-xs text-gray-400 uppercase">Max Credits</span>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
           <div className="text-center">
             <span className="block text-2xl font-bold text-emerald-500">
               {courses.filter(c => c.status === 'Registered').reduce((acc, curr) => acc + curr.cr, 0)}
             </span>
             <span className="text-xs text-gray-400 uppercase">Selected</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input type="text" placeholder="Search by code or name..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <button className="bg-[#003366] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-blue-900 transition">Filter</button>
      </div>

      {/* Course List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider border-b border-gray-100">
                <th className="p-5 font-semibold">Course Details</th>
                <th className="p-5 font-semibold text-center">Cr. Hrs</th>
                <th className="p-5 font-semibold text-center">Section</th>
                <th className="p-5 font-semibold text-center">Status</th>
                <th className="p-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 transition group">
                  <td className="p-5">
                    <p className="font-bold text-gray-800">{course.code}</p>
                    <p className="text-sm text-gray-500">{course.name}</p>
                  </td>
                  <td className="p-5 text-center font-medium text-gray-600">{course.cr}</td>
                  <td className="p-5 text-center">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium">{course.section}</span>
                  </td>
                  <td className="p-5 text-center">
                    {course.status === 'Registered' && <span className="inline-flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold"><CheckCircle size={14} className="mr-1"/> Registered</span>}
                    {course.status === 'Open' && <span className="inline-flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-bold">Open</span>}
                    {course.status === 'Conflict' && <span className="inline-flex items-center text-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-bold"><AlertCircle size={14} className="mr-1"/> Time Clash</span>}
                  </td>
                  <td className="p-5 text-right">
                    {course.status === 'Registered' ? (
                       <button onClick={() => toggleReg(course.id)} className="text-red-500 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition">Drop</button>
                    ) : course.status === 'Conflict' ? (
                       <button disabled className="text-gray-400 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">Unavailable</button>
                    ) : (
                       <button onClick={() => toggleReg(course.id)} className="bg-[#3498DB] text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-blue-600 transition">Add Course</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- SCREEN 3: PERFORMANCE ---
const PerformanceScreen = () => {
  return (
    <div className="animate-fade-in">
      <Header title="Course Performance" />
      
      {/* Course Selector Dropdown - Simulated */}
      <div className="mb-8">
        <button className="bg-white border border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between min-w-[300px] shadow-sm hover:border-blue-500 transition">
          <span className="font-bold text-[#003366]">CSC401 - Human Computer Interaction</span>
          <ChevronRight size={20} className="rotate-90 text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Grade Summary */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total Absolute Marks</h3>
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
               {/* Simple SVG Circle for gauge */}
               <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2ECC71" strokeWidth="3" strokeDasharray="82, 100" />
               </svg>
               <div className="absolute flex flex-col items-center">
                 <span className="text-4xl font-bold text-gray-800">85</span>
                 <span className="text-xs text-gray-400">/ 100</span>
               </div>
            </div>
            <p className="mt-4 font-bold text-lg text-[#003366]">Grade: A-</p>
          </div>

           <div className="bg-[#003366] p-6 rounded-2xl shadow-sm text-white">
             <h3 className="font-bold mb-4">Weightage Breakdown</h3>
             <div className="space-y-3 text-sm">
               <div className="flex justify-between"><span>Sessional 1</span><span>10/15</span></div>
               <div className="flex justify-between"><span>Sessional 2</span><span>12/15</span></div>
               <div className="flex justify-between"><span>Quizzes</span><span>12/15</span></div>
               <div className="flex justify-between"><span>Assignments</span><span>08/10</span></div>
               <div className="flex justify-between border-t border-white/20 pt-2 font-bold"><span>Terminal</span><span>45/50</span></div>
             </div>
           </div>
        </div>

        {/* Right Column: Detailed Assessments */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50">
               <h3 className="font-bold text-gray-800">Assessment History</h3>
             </div>
             <div className="divide-y divide-gray-100">
               {[
                 { title: 'Final Exam', type: 'Exam', date: 'Jan 15, 2025', marks: '40/45', color: 'blue' },
                 { title: 'Assignment 3 (WPF Project)', type: 'Assignment', date: 'Dec 20, 2024', marks: '09/10', color: 'purple' },
                 { title: 'Quiz 4', type: 'Quiz', date: 'Dec 10, 2024', marks: '05/05', color: 'orange' },
                 { title: 'Sessional 2', type: 'Exam', date: 'Nov 15, 2024', marks: '12/15', color: 'blue' },
                 { title: 'Assignment 2', type: 'Assignment', date: 'Oct 28, 2024', marks: '08/10', color: 'purple' },
               ].map((item, idx) => (
                 <div key={idx} className="p-5 hover:bg-gray-50 flex items-center justify-between group transition">
                   <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 font-bold text-xs`}>
                        {item.type[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                   </div>
                   <div className="text-right">
                     <span className="block font-bold text-gray-800">{item.marks}</span>
                     <span className="text-xs text-emerald-500 font-medium">Published</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- SCREEN 4: ATTENDANCE ---
const AttendanceScreen = () => {
  const attendanceData = [
    { date: 'Mon, 12 Jan', status: 'Present', topic: 'Intro to HCI' },
    { date: 'Wed, 14 Jan', status: 'Present', topic: 'Principles Of Design' },
    { date: 'Mon, 19 Jan', status: 'Absent', topic: 'Personas' },
    { date: 'Wed, 21 Jan', status: 'Present', topic: 'Data Gathering Techniques' },
    { date: 'Mon, 26 Jan', status: 'Leave', topic: 'Agile Design' },
  ];

  return (
    <div className="animate-fade-in">
      <Header title="Attendance Record" />

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-xs text-gray-400 uppercase font-bold">Total Classes</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">32</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-xl shadow-sm border border-emerald-100 text-center">
          <p className="text-xs text-emerald-600 uppercase font-bold">Present</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">28</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100 text-center">
          <p className="text-xs text-red-600 uppercase font-bold">Absent</p>
          <p className="text-2xl font-bold text-red-700 mt-1">03</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl shadow-sm border border-orange-100 text-center">
          <p className="text-xs text-orange-600 uppercase font-bold">Leaves</p>
          <p className="text-2xl font-bold text-orange-700 mt-1">01</p>
        </div>
      </div>

      {/* Main Content: Calendar/List View */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800 text-lg">Human Computer Interaction History</h3>
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> <span className="text-xs text-gray-500 mr-2">Present</span>
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> <span className="text-xs text-gray-500 mr-2">Absent</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {attendanceData.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition border border-transparent hover:border-gray-100">
              <div className="flex items-center space-x-4">
                <div className={`
                  w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold text-xs
                  ${record.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 
                    record.status === 'Absent' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}
                `}>
                  <span>{record.date.split(',')[0]}</span>
                  <span className="text-lg">{record.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{record.topic}</h4>
                  <p className="text-xs text-gray-500">{record.date}</p>
                </div>
              </div>
              
              <div className={`
                px-4 py-2 rounded-full text-sm font-bold
                ${record.status === 'Present' ? 'bg-emerald-500 text-white' : 
                  record.status === 'Absent' ? 'bg-red-500 text-white' : 'bg-orange-400 text-white'}
              `}>
                {record.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function AppCuOnline() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex min-h-screen bg-[#F4F6F8] font-sans text-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-20 md:ml-64 p-4 md:p-8 transition-all">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'registration' && <RegistrationScreen />}
        {activeTab === 'performance' && <PerformanceScreen />}
        {activeTab === 'attendance' && <AttendanceScreen />}
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4 {
          font-family: 'Montserrat', sans-serif;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}