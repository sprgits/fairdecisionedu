import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '학교폭력 발생 건수',
        data: [12, 19, 3, 5, 2, 3],
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
      title: {
        display: true,
        text: '월별 학교폭력 발생 현황',
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">전체 사건 수</h3>
          <p className="text-3xl font-bold text-primary-600">44</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">평균 조치 수준</h3>
          <p className="text-3xl font-bold text-primary-600">4.2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">이의제기율</h3>
          <p className="text-3xl font-bold text-primary-600">12%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <Bar options={options} data={data} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">최근 사건</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-medium">언어폭력 사건</p>
              <p className="text-sm text-gray-500">2023-06-15</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-medium">신체폭력 사건</p>
              <p className="text-sm text-gray-500">2023-06-10</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">공지사항</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="font-medium">시스템 업데이트 안내</p>
              <p className="text-sm text-gray-500">2023-06-20</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-medium">새로운 기능 추가</p>
              <p className="text-sm text-gray-500">2023-06-18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 