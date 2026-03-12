import { useState, useMemo } from 'react';
import { dietPlans } from '../data/diets';
import { UtensilsCrossed, Flame } from 'lucide-react';

export default function DietGuide() {
  const [selectedType, setSelectedType] = useState<string>('전체');

  const types = ['전체', '아침', '점심', '저녁', '간식'];

  const filteredDiets = useMemo(() => {
    if (selectedType === '전체') return dietPlans;
    return dietPlans.filter(diet => diet.type === selectedType);
  }, [selectedType]);

  return (
    <div className="bg-white py-16 sm:py-24 min-h-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            맞춤형 식단 가이드
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            혈당을 관리하기 위한 시간대별 권장 식단을 확인하세요.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedType === type
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Diet Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDiets.map(diet => (
            <div
              key={diet.id}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {diet.type}
                </span>
                <span className="flex items-center text-sm font-medium text-orange-500">
                  <Flame className="w-4 h-4 mr-1" />
                  {diet.calories} kcal
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-gray-400" />
                {diet.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {diet.description}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">구성</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {diet.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
