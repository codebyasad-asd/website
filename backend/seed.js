const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Import Models
const Faculty = require('./models/Faculty');
const Student = require('./models/Student');
const Announcement = require('./models/Announcement');

// Check if MONGODB_URI exists
if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in .env file');
  console.error('');
  console.error('Your .env file should look like:');
  console.error('PORT=5000');
  console.error('MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jamia_islamia');
  console.error('NODE_ENV=development');
  process.exit(1);
}

// Faculty Data
const facultyData = [
  {
    name: 'Maulana Abdul Rahman',
    designation: 'Principal',
    department: 'Administration',
    qualification: 'Fazil, MA Islamic Studies',
    experience: 25,
    email: 'principal@jamiaislamia.edu',
    phone: '+92-300-1234567',
    specialization: 'Islamic Jurisprudence',
    image: '/images/faculty/principal.jpg',
    isActive: true
  },
  {
    name: 'Qari Muhammad Yousuf',
    designation: 'Head of Quran Department',
    department: 'Quran Studies',
    qualification: 'Hafiz-e-Quran, Qari',
    experience: 20,
    email: 'qari.yousuf@jamiaislamia.edu',
    phone: '+92-300-2345678',
    specialization: 'Tajweed & Qiraat',
    image: '/images/faculty/qari.jpg',
    isActive: true
  },
  {
    name: 'Maulana Hafiz Abdullah',
    designation: 'Senior Teacher',
    department: 'Hadith',
    qualification: 'Fazil, MA Arabic',
    experience: 15,
    email: 'hafiz.abdullah@jamiaislamia.edu',
    phone: '+92-300-3456789',
    specialization: 'Hadith Sciences',
    image: '/images/faculty/hadith-teacher.jpg',
    isActive: true
  },
  {
    name: 'Ustaz Muhammad Ali',
    designation: 'Arabic Teacher',
    department: 'Arabic',
    qualification: 'MA Arabic Literature',
    experience: 12,
    email: 'm.ali@jamiaislamia.edu',
    phone: '+92-300-4567890',
    specialization: 'Arabic Grammar & Literature',
    image: '/images/faculty/arabic-teacher.jpg',
    isActive: true
  },
  {
    name: 'Maulana Zubair Ahmad',
    designation: 'Fiqh Teacher',
    department: 'Fiqh',
    qualification: 'Mufti, MA Islamic Law',
    experience: 18,
    email: 'mufti.zubair@jamiaislamia.edu',
    phone: '+92-300-5678901',
    specialization: 'Hanafi Fiqh',
    image: '/images/faculty/fiqh-teacher.jpg',
    isActive: true
  },
  {
    name: 'Hafiz Usman Ghani',
    designation: 'Hifz Teacher',
    department: 'Quran Studies',
    qualification: 'Hafiz-e-Quran',
    experience: 10,
    email: 'usman.ghani@jamiaislamia.edu',
    phone: '+92-300-6789012',
    specialization: 'Hifz ul Quran',
    image: '/images/faculty/hifz-teacher.jpg',
    isActive: true
  }
];

// Student Data
const studentData = [
  {
    registrationNumber: 'JIZ-2024-001',
    name: 'Ahmad Hassan',
    fatherName: 'Muhammad Hassan',
    dateOfBirth: new Date('2010-05-15'),
    gender: 'Male',
    class: 'Hifz',
    section: 'A',
    address: 'House 123, Street 5, Islamabad',
    guardianPhone: '+92-300-1111111',
    bloodGroup: 'A+',
    isActive: true,
    fees: { totalFees: 5000, paidFees: 5000, pendingFees: 0 }
  },
  {
    registrationNumber: 'JIZ-2024-002',
    name: 'Umar Farooq',
    fatherName: 'Abdul Farooq',
    dateOfBirth: new Date('2012-08-20'),
    gender: 'Male',
    class: 'Nazra',
    section: 'B',
    address: 'House 456, Street 10, Rawalpindi',
    guardianPhone: '+92-300-2222222',
    bloodGroup: 'B+',
    isActive: true,
    fees: { totalFees: 3000, paidFees: 3000, pendingFees: 0 }
  },
  {
    registrationNumber: 'JIZ-2024-003',
    name: 'Bilal Ahmed',
    fatherName: 'Ahmed Khan',
    dateOfBirth: new Date('2008-03-10'),
    gender: 'Male',
    class: 'Alim',
    section: 'A',
    address: 'House 789, Street 15, Lahore',
    guardianPhone: '+92-300-3333333',
    bloodGroup: 'O+',
    isActive: true,
    fees: { totalFees: 6000, paidFees: 4000, pendingFees: 2000 }
  },
  {
    registrationNumber: 'JIZ-2024-004',
    name: 'Zainab Fatima',
    fatherName: 'Muhammad Akram',
    dateOfBirth: new Date('2011-11-25'),
    gender: 'Female',
    class: 'Nazra',
    section: 'A',
    address: 'House 321, Street 8, Karachi',
    guardianPhone: '+92-300-4444444',
    bloodGroup: 'AB+',
    isActive: true,
    fees: { totalFees: 3000, paidFees: 3000, pendingFees: 0 }
  },
  {
    registrationNumber: 'JIZ-2024-005',
    name: 'Yusuf Ali',
    fatherName: 'Ali Raza',
    dateOfBirth: new Date('2009-07-12'),
    gender: 'Male',
    class: 'Hifz',
    section: 'B',
    address: 'House 654, Street 20, Peshawar',
    guardianPhone: '+92-300-5555555',
    bloodGroup: 'B-',
    isActive: true,
    fees: { totalFees: 5000, paidFees: 2500, pendingFees: 2500 }
  },
  {
    registrationNumber: 'JIZ-2024-006',
    name: 'Aisha Bibi',
    fatherName: 'Muhammad Saleem',
    dateOfBirth: new Date('2013-03-08'),
    gender: 'Female',
    class: 'Nazra',
    section: 'B',
    address: 'House 987, Street 25, Multan',
    guardianPhone: '+92-300-6666666',
    bloodGroup: 'O+',
    isActive: true,
    fees: { totalFees: 3000, paidFees: 3000, pendingFees: 0 }
  },
  {
    registrationNumber: 'JIZ-2024-007',
    name: 'Ibrahim Khan',
    fatherName: 'Nawaz Khan',
    dateOfBirth: new Date('2007-09-18'),
    gender: 'Male',
    class: 'Alim',
    section: 'B',
    address: 'House 147, Street 30, Quetta',
    guardianPhone: '+92-300-7777777',
    bloodGroup: 'A-',
    isActive: true,
    fees: { totalFees: 6000, paidFees: 6000, pendingFees: 0 }
  },
  {
    registrationNumber: 'JIZ-2024-008',
    name: 'Hamza Malik',
    fatherName: 'Tariq Malik',
    dateOfBirth: new Date('2010-12-01'),
    gender: 'Male',
    class: 'Hifz',
    section: 'A',
    address: 'House 258, Street 35, Faisalabad',
    guardianPhone: '+92-300-8888888',
    bloodGroup: 'B+',
    isActive: true,
    fees: { totalFees: 5000, paidFees: 5000, pendingFees: 0 }
  }
];

// Announcement Data
const announcementData = [
  {
    title: 'Annual Hifz Competition 2024',
    content: 'We are pleased to announce the Annual Hifz Competition. All Hifz students are encouraged to participate. Registration deadline is next Friday. Prizes will be awarded to top performers in different categories.',
    category: 'Event',
    priority: 'High',
    isActive: true
  },
  {
    title: 'Summer Vacation Notice',
    content: 'The institute will remain closed from June 15 to July 31 for summer vacations. Classes will resume from August 1. Students are encouraged to revise their lessons and continue Quran recitation during the break.',
    category: 'Holiday',
    priority: 'High',
    isActive: true
  },
  {
    title: 'New Admission Open for 2024-25',
    content: 'Admissions are now open for the new academic session 2024-25. Interested parents can collect prospectus from the office or download from our website. Limited seats available for Hifz program.',
    category: 'Academic',
    priority: 'Medium',
    isActive: true
  },
  {
    title: 'Parent-Teacher Meeting',
    content: 'A parent-teacher meeting is scheduled for next Saturday at 10:00 AM. All parents are requested to attend to discuss their children\'s progress and address any concerns.',
    category: 'General',
    priority: 'Medium',
    isActive: true
  },
  {
    title: 'Monthly Examination Schedule',
    content: 'Monthly examinations will be held from 20th to 25th of this month. Students should prepare accordingly. Detailed schedule is available at the notice board and will be shared via WhatsApp groups.',
    category: 'Examination',
    priority: 'High',
    isActive: true
  },
  {
    title: 'Jummah Prayer Timings Updated',
    content: 'Due to seasonal changes, Jummah prayer timings have been updated. Khutbah will begin at 1:00 PM followed by prayer. All students and staff must attend.',
    category: 'General',
    priority: 'Low',
    isActive: true
  }
];

// Main Seed Function
const seedDatabase = async () => {
  try {
    console.log('');
    console.log('🗑️  Clearing existing data...');
    
    // Clear existing data
    await Faculty.deleteMany({});
    console.log('   ✓ Faculty collection cleared');
    
    await Student.deleteMany({});
    console.log('   ✓ Student collection cleared');
    
    await Announcement.deleteMany({});
    console.log('   ✓ Announcement collection cleared');

    console.log('');
    console.log('📥 Inserting new data...');
    
    // Insert new data
    const insertedFaculty = await Faculty.insertMany(facultyData);
    console.log(`   ✓ ${insertedFaculty.length} faculty members added`);
    
    const insertedStudents = await Student.insertMany(studentData);
    console.log(`   ✓ ${insertedStudents.length} students added`);
    
    const insertedAnnouncements = await Announcement.insertMany(announcementData);
    console.log(`   ✓ ${insertedAnnouncements.length} announcements added`);

    console.log('');
    console.log('═══════════════════════════════════════════');
    console.log('✅ Database seeded successfully!');
    console.log('═══════════════════════════════════════════');
    console.log('');
    console.log('🚀 Next Steps:');
    console.log('   1. Run the server: npm run dev');
    console.log('   2. Open browser: http://localhost:5000');
    console.log('   3. Start frontend: cd ../frontend && npm start');
    console.log('');
    
    process.exit(0);
  } catch (error) {
    console.error('');
    console.error('❌ Error seeding database:', error.message);
    console.error('');
    process.exit(1);
  }
};

// Connect to MongoDB and Seed
console.log('');
console.log('═══════════════════════════════════════════');
console.log('   Jamia Islamia Zia ul Quran - DB Seeder');
console.log('═══════════════════════════════════════════');
console.log('');
console.log('🔄 Connecting to MongoDB...');

// Hide password in console for security
const sanitizedUri = process.env.MONGODB_URI.replace(/:([^@]+)@/, ':****@');
console.log(`📍 URI: ${sanitizedUri}`);
console.log('');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully!');
  seedDatabase();
})
.catch((error) => {
  console.error('');
  console.error('❌ MongoDB Connection Failed!');
  console.error('');
  console.error('Error:', error.message);
  console.error('');
  console.error('📋 Troubleshooting:');
  console.error('   1. Check your .env file format');
  console.error('   2. Verify username and password');
  console.error('   3. Make sure IP is whitelisted in MongoDB Atlas');
  console.error('   4. Check internet connection');
  console.error('');
  console.error('Your .env should look like:');
  console.error('   PORT=5000');
  console.error('   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/jamia_islamia');
  console.error('   NODE_ENV=development');
  console.error('');
  process.exit(1);
});