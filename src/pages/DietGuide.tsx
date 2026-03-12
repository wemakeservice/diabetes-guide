import { useState, useMemo } from 'react';
import { dietPlans } from '../data/diets';
import { UtensilsCrossed, Flame, Info } from 'lucide-react';

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
            당뇨 관리를 위한 스마트 식단
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            혈당 스파이크를 방지하고 영양 균형을 맞춘 최적의 식단 가이드입니다.
          </p>
        </div>

        {/* 안내 문구 추가 (AdSense 대응용 텍스트 보강) */}
        <div className="mb-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4 items-start">
          <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <strong>당뇨 식단의 기본 원칙:</strong> 규칙적인 시간에 알맞은 양을 골고루 먹는 것이 중요합니다. 
            단순 당(설탕, 흰 밀가루 등) 섭취를 줄이고, 식이섬유가 풍부한 채소류와 복합 탄수화물(현미, 잡곡), 
            양질의 단백질을 매 끼니 적절히 배분하는 것이 혈당 안정의 핵심입니다.
          </div>
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
                <h4 className="text-sm font-semibold text-gray-900 mb-2">권장 구성</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                  {diet.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-3 rounded-lg text-[11px] text-gray-500 leading-normal italic">
                  * 위 식단은 일반적인 가이드이며, 개별적인 건강 상태와 활동량에 따라 필요 열량 및 영양소 비율이 달라질 수 있습니다.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
