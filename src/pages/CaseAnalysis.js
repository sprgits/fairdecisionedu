import React, { useState } from 'react';
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

const CaseAnalysis = () => {
  const [formData, setFormData] = useState({
    schoolLevel: '',
    incidentType: '',
    incidentDate: '',
    description: ''
  });
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 통계 데이터와 일치하는 랜덤 분석 결과 생성
    const similarCases = [
      {
        id: 1,
        date: '2024-03-15',
        school: '서울시 A중학교',
        type: '언어폭력',
        similarity: Math.floor(Math.random() * 20) + 80, // 80-100% 유사도
        decision: '제8호 조치'
      },
      {
        id: 2,
        date: '2024-04-22',
        school: '경기도 B중학교',
        type: '신체폭력',
        similarity: Math.floor(Math.random() * 20) + 60, // 60-80% 유사도
        decision: '제6호 조치'
      },
      {
        id: 3,
        date: '2024-05-10',
        school: '인천시 C중학교',
        type: '집단따돌림',
        similarity: Math.floor(Math.random() * 20) + 40, // 40-60% 유사도
        decision: '제7호 조치'
      }
    ];

    // 유사 사례의 조치 수준 분포
    const decisionDistribution = {
      labels: ['제1-3호', '제4-6호', '제7-9호'],
      datasets: [{
        label: '유사 사례 조치 수준 분포',
        data: [25, 45, 30],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }]
    };

    setAnalysisResult({
      similarCases,
      decisionDistribution,
      recommendedDecision: '제7호 조치',
      confidence: Math.floor(Math.random() * 20) + 80 // 80-100% 신뢰도
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">사건 분석</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">사건 정보 입력</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">학교급</label>
              <select
                name="schoolLevel"
                value={formData.schoolLevel}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">선택하세요</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">사건 유형</label>
              <select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">선택하세요</option>
                <option value="physical">신체폭력</option>
                <option value="verbal">언어폭력</option>
                <option value="extortion">금품갈취</option>
                <option value="bullying">집단따돌림</option>
                <option value="sexual">성폭력</option>
                <option value="cyber">사이버폭력</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">발생 일자</label>
              <input
                type="date"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">사건 내용</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-md h-32"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              분석 시작
            </button>
          </form>
        </div>
        
        {analysisResult && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">분석 결과</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">유사 사례</h3>
              <div className="space-y-4">
                {analysisResult.similarCases.map(case_ => (
                  <div key={case_.id} className="border-b pb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{case_.school}</span>
                      <span className="text-sm text-gray-500">{case_.date}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-600">{case_.type}</span>
                      <span className="text-sm font-medium">유사도: {case_.similarity}%</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sm text-gray-600">조치: {case_.decision}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">유사 사례 조치 수준 분포</h3>
              <Bar data={analysisResult.decisionDistribution} />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">권장 조치</h3>
              <p className="text-xl font-bold text-blue-600">{analysisResult.recommendedDecision}</p>
              <p className="text-sm text-gray-600 mt-1">신뢰도: {analysisResult.confidence}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseAnalysis; 