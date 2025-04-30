import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // 최근 6개월 사건 발생 추이
  const recentData = {
    labels: ['7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [{
      label: '월별 사건 발생 건수',
      data: [98, 75, 142, 168, 155, 95],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }]
  };

  // 학교급별 사건 발생 현황
  const schoolLevelData = {
    labels: ['초등학교', '중학교', '고등학교'],
    datasets: [{
      label: '학교급별 사건 발생 건수',
      data: [420, 580, 450],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">대시보드</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">전체 사건 수</h3>
          <p className="text-3xl font-bold text-blue-600">1,450건</p>
          <p className="text-sm text-gray-500 mt-2">2024년 기준</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">평균 처리 기간</h3>
          <p className="text-3xl font-bold text-green-600">14일</p>
          <p className="text-sm text-gray-500 mt-2">최근 6개월 기준</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">이의제기율</h3>
          <p className="text-3xl font-bold text-red-600">12%</p>
          <p className="text-sm text-gray-500 mt-2">최근 6개월 기준</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">최근 6개월 사건 발생 추이</h2>
          <Bar data={recentData} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">학교급별 사건 발생 현황</h2>
          <Bar data={schoolLevelData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 