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
      data: [85, 92, 156, 178, 192, 165, 98, 75, 142, 168, 155, 95],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1,
      tension: 0.4
    }]
  };

  // 지역별 사건 발생 건수
  const regionalData = {
    labels: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    datasets: [{
      label: '지역별 사건 발생 건수',
      data: [245, 238, 125, 122, 118, 95, 82, 75, 45, 78, 85, 88, 92, 75, 98, 95, 35],
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

  // 사건 유형별 발생 건수
  const incidentTypeData = {
    labels: ['신체폭력', '언어폭력', '금품갈취', '집단따돌림', '성폭력', '사이버폭력', '기타'],
    datasets: [{
      label: '사건 유형별 발생 건수',
      data: [350, 420, 180, 280, 120, 250, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(199, 199, 199, 0.5)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(199, 199, 199)'
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
          <p className="text-sm text-gray-600 mt-4">
            * 3-6월과 9-11월에 사건 발생이 집중되는 경향을 보입니다.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">지역별 사건 발생 현황</h2>
          <Bar data={regionalData} />
          <p className="text-sm text-gray-600 mt-4">
            * 대도시 지역에서 상대적으로 높은 발생률을 보입니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">학교급별 사건 발생 현황</h2>
          <Pie data={schoolLevelData} />
          <p className="text-sm text-gray-600 mt-4">
            * 중학교에서 가장 높은 발생률을 보입니다.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">사건 유형별 발생 현황</h2>
          <Pie data={incidentTypeData} />
          <p className="text-sm text-gray-600 mt-4">
            * 언어폭력과 신체폭력이 가장 빈번한 유형입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics; 