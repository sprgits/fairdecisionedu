import React, { useState } from 'react';
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

function CaseAnalysis() {
  const [formData, setFormData] = useState({
    violenceType: '',
    schoolLevel: '',
    victimCount: '',
    offenderCount: '',
    hasInjury: false,
    isCyber: false,
    isRepeat: false,
  });

  const [analysisResult, setAnalysisResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 임의의 분석 결과 생성
    const similarCases = [
      {
        id: 1,
        similarity: Math.floor(Math.random() * 20) + 80, // 80-100% 유사도
        violenceType: formData.violenceType || '언어폭력',
        schoolLevel: formData.schoolLevel || '중학교',
        decisionLevel: Math.floor(Math.random() * 3) + 3, // 3-5호
        date: '2023-06-15',
      },
      {
        id: 2,
        similarity: Math.floor(Math.random() * 15) + 70, // 70-85% 유사도
        violenceType: formData.violenceType || '신체폭력',
        schoolLevel: formData.schoolLevel || '고등학교',
        decisionLevel: Math.floor(Math.random() * 3) + 4, // 4-6호
        date: '2023-06-10',
      },
    ];

    const recommendedLevel = Math.floor(Math.random() * 3) + 4; // 4-6호 권고

    setAnalysisResult({
      similarCases,
      recommendedLevel,
      averageLevel: Math.floor(Math.random() * 2) + 4, // 4-5호 평균
    });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">사건 분석</h2>
        <p className="text-gray-600 mb-8">유사한 사건과 비교하여 공정한 조치 수준을 제안합니다.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700">폭력 유형</label>
              <select
                name="violenceType"
                value={formData.violenceType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">선택하세요</option>
                <option value="verbal">언어폭력</option>
                <option value="physical">신체폭력</option>
                <option value="bullying">따돌림</option>
                <option value="sexual">성폭력</option>
                <option value="cyber">사이버폭력</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700">학교급</label>
              <select
                name="schoolLevel"
                value={formData.schoolLevel}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="">선택하세요</option>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700">피해자 수</label>
              <input
                type="number"
                name="victimCount"
                value={formData.victimCount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="피해자 수를 입력하세요"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700">가해자 수</label>
              <input
                type="number"
                name="offenderCount"
                value={formData.offenderCount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="가해자 수를 입력하세요"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="hasInjury"
                checked={formData.hasInjury}
                onChange={handleChange}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label className="text-gray-700">신체 피해 여부</label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isCyber"
                checked={formData.isCyber}
                onChange={handleChange}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label className="text-gray-700">사이버 포함 여부</label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isRepeat"
                checked={formData.isRepeat}
                onChange={handleChange}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label className="text-gray-700">재발 여부</label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
            >
              분석 시작
            </button>
          </div>
        </form>
      </div>

      {analysisResult && (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">분석 결과</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600">권고 조치 수준</p>
                <p className="text-3xl font-bold text-primary-600">{analysisResult.recommendedLevel}호</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600">유사 사건 평균</p>
                <p className="text-3xl font-bold text-primary-600">{analysisResult.averageLevel}호</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600">분석된 사건 수</p>
                <p className="text-3xl font-bold text-primary-600">{analysisResult.similarCases.length}건</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">유사 사건</h4>
            <div className="space-y-4">
              {analysisResult.similarCases.map(caseItem => (
                <div key={caseItem.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-lg">{caseItem.violenceType}</p>
                      <p className="text-sm text-gray-500">{caseItem.schoolLevel} | {caseItem.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-600 font-bold">{caseItem.similarity}% 유사도</p>
                      <p className="text-sm text-gray-600">조치: {caseItem.decisionLevel}호</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">조치 수준 분포</h3>
            <div className="h-64">
              <Bar
                data={{
                  labels: ['1호', '2호', '3호', '4호', '5호', '6호', '7호', '8호', '9호'],
                  datasets: [
                    {
                      label: '사건 수',
                      data: [5, 8, 12, 15, 20, 18, 10, 8, 4],
                      backgroundColor: 'rgba(2, 132, 199, 0.5)',
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseAnalysis; 