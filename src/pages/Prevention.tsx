import { AlertTriangle, CheckCircle2, TrendingUp, HelpCircle, Activity } from 'lucide-react';

export default function Prevention() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            당뇨병의 위험성과 예방: 완벽 가이드
          </h1>
          
          <div className="space-y-16">
            {/* 위험성 섹션 */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900">왜 당뇨가 무서운가?</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="mb-4">
                  당뇨병은 단순히 혈당이 높은 상태를 넘어, 전신의 혈관을 망가뜨리는 <strong>'전신 질환'</strong>입니다. 초기에는 특별한 증상이 없으나, 시간이 지남에 따라 다음과 같은 치명적인 합병증을 유발합니다.
                </p>
                <div className="grid gap-4 mt-6">
                  <div className="flex gap-x-3 p-4 bg-red-50 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900 block">심혈관계 질환 (심근경색, 뇌졸중)</span>
                      <span className="text-sm italic">일반인 대비 발병 위험 2~4배 증가. 높은 혈당이 혈관벽을 손상시켜 혈전 생성을 유도합니다.</span>
                    </div>
                  </div>
                  <div className="flex gap-x-3 p-4 bg-red-50 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900 block">당뇨병성 망막병증 (시력 상실)</span>
                      <span className="text-sm italic">성인 실명 원인 1위. 눈의 미세혈관이 파괴되어 망막에 출혈과 부종을 일으킵니다.</span>
                    </div>
                  </div>
                  <div className="flex gap-x-3 p-4 bg-red-50 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900 block">말초 신경병증 및 족부 궤양</span>
                      <span className="text-sm italic">감각이 무뎌져 상처를 인지하지 못하고, 혈액순환 장애로 인해 상처가 낫지 않아 괴사로 이어질 수 있습니다.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 자가진단 섹션 (추가된 부분) */}
            <section className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">당뇨 위험 신호 자가체크</h2>
              </div>
              <p className="text-gray-600 mb-6 text-sm italic">다음에 해당되는 항목이 3개 이상이라면 정밀 검사가 권장됩니다.</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  '갑작스러운 체중 감소',
                  '심한 갈증과 잦은 소변 (다갈, 다뇨)',
                  '음식을 먹어도 계속되는 허기 (다식)',
                  '만성적인 피로감과 무기력증',
                  '상처가 잘 낫지 않음',
                  '시야가 흐릿해짐',
                  '손발이 저리거나 따끔거림',
                  '피부 가려움증'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-blue-50 text-sm">
                    <Activity className="h-4 w-4 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 예방 수칙 섹션 */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900">예방을 위한 핵심 생활 습관</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 underline decoration-green-200 underline-offset-4">1. 적정 체중과 허리둘레 유지</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    복부 비만은 인슐린 저항성을 높이는 주범입니다. BMI 25 미만, 허리둘레(남성 90cm, 여성 85cm) 미만을 유지하도록 관리하세요.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 underline decoration-green-200 underline-offset-4">2. 근육량을 늘리는 운동</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    근육은 우리 몸에서 혈당을 가장 많이 소비하는 기관입니다. 유산소 운동뿐만 아니라 주 2~3회 허벅지 등 대근육 위주의 근력 운동을 꼭 병행하세요.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 underline decoration-green-200 underline-offset-4">3. 정기적인 혈당 체크</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    '당뇨 전단계'를 잡아내는 것이 핵심입니다. 공복 혈당 100~125mg/dL 혹은 당화혈색소 5.7~6.4%라면 이미 주의가 필요한 단계입니다.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 underline decoration-green-200 underline-offset-4">4. 스트레스 및 수면 관리</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    스트레스 호르몬인 코르티솔은 인슐린 작용을 방해하여 혈당을 올립니다. 충분한 숙면(7~8시간)과 나만의 스트레스 해소법을 찾으세요.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-20 pt-8 border-t text-[10px] text-gray-400">
            참고문헌: 대한당뇨병학회 '2023 당뇨병 진료지침', 질병관리청 국가건강정보포털
          </div>
        </div>
      </div>
    </div>
  );
}
