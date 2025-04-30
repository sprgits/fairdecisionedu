import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Statistics = () => {
  // 월별 사건 발생 건수 (2024년 기준)
  const monthlyData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [{
      label: '월별 사건 발생 건수',
      data: [12, 15, 28, 35, 42, 38, 25, 18, 32, 40, 36, 20],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }]
  };

  // 지역별 사건 발생 건수
  const regionalData = {
    labels: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    datasets: [{
      label: '지역별 사건 발생 건수',
      data: [45, 38, 25, 22, 18, 15, 12, 10, 8, 12, 15, 18, 20, 15, 22, 25, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(199, 199, 199, 0.5)',
        'rgba(83, 102, 255, 0.5)',
        'rgba(40, 159, 64, 0.5)',
        'rgba(210, 199, 199, 0.5)',
        'rgba(78, 52, 199, 0.5)',
        'rgba(210, 199, 199, 0.5)',
        'rgba(78, 52, 199, 0.5)',
        'rgba(210, 199, 199, 0.5)',
        'rgba(78, 52, 199, 0.5)',
        'rgba(210, 199, 199, 0.5)',
        'rgba(78, 52, 199, 0.5)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(199, 199, 199)',
        'rgb(83, 102, 255)',
        'rgb(40, 159, 64)',
        'rgb(210, 199, 199)',
        'rgb(78, 52, 199)',
        'rgb(210, 199, 199)',
        'rgb(78, 52, 199)',
        'rgb(210, 199, 199)',
        'rgb(78, 52, 199)',
        'rgb(210, 199, 199)',
        'rgb(78, 52, 199)'
      ],
      borderWidth: 1
    }]
  };

  // 학교급별 사건 발생 건수
  const schoolLevelData = {
    labels: ['초등학교', '중학교', '고등학교'],
    datasets: [{
      label: '학교급별 사건 발생 건수',
      data: [120, 180, 150],
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

  // 사건 유형별 발생 건수
  const incidentTypeData = {
    labels: ['신체폭력', '언어폭력', '금품갈취', '집단따돌림', '성폭력', '사이버폭력'],
    datasets: [{
      label: '사건 유형별 발생 건수',
      data: [150, 120, 80, 100, 60, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">학교폭력 통계 분석 (2024년)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">월별 사건 발생 추이</h2>
          <Line data={monthlyData} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">지역별 사건 발생 현황</h2>
          <Bar data={regionalData} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">학교급별 사건 발생 현황</h2>
          <Pie data={schoolLevelData} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">사건 유형별 발생 현황</h2>
          <Pie data={incidentTypeData} />
        </div>
      </div>
    </div>
  );
};

export default Statistics; 