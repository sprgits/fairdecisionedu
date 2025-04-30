import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Statistics() {
  const violenceTypeData = {
    labels: ['언어폭력', '신체폭력', '따돌림', '성폭력', '사이버폭력'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(2, 132, 199, 0.5)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(245, 158, 11, 0.5)',
          'rgba(239, 68, 68, 0.5)',
          'rgba(139, 92, 246, 0.5)',
        ],
      },
    ],
  };

  const schoolLevelData = {
    labels: ['초등학교', '중학교', '고등학교'],
    datasets: [
      {
        label: '학교급별 발생 건수',
        data: [40, 35, 25],
        backgroundColor: 'rgba(2, 132, 199, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">폭력 유형별 분포</h3>
          <Pie data={violenceTypeData} options={options} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">학교급별 발생 현황</h3>
          <Bar data={schoolLevelData} options={options} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">조치 수준 분석</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-600">경미한 조치 (1-3호)</p>
            <p className="text-2xl font-bold text-primary-600">35%</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-600">중간 조치 (4-6호)</p>
            <p className="text-2xl font-bold text-primary-600">45%</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-600">중증 조치 (7-9호)</p>
            <p className="text-2xl font-bold text-primary-600">20%</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">이의제기 현황</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">전체 이의제기율</p>
            <p className="font-semibold">12%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">이의제기 성공률</p>
            <p className="font-semibold">25%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">평균 처리 기간</p>
            <p className="font-semibold">14일</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics; 