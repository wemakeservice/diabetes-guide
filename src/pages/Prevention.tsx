import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Prevention() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            당뇨병의 위험성과 예방
          </h1>
          
          <div className="space-y-16">
            {/* 위험성 섹션 */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900">침묵의 살인자, 당뇨병</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="mb-4">
                  당뇨병 자체보다 무서운 것은 바로 <strong>'합병증'</strong>입니다. 혈액 속에 당분이 높게 유지되면 혈관이 손상되어 신체 곳곳에 치명적인 영향을 미칩니다.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-x-3">
                    <TrendingUp className="h-6 w-6 text-red-400 flex-shrink-0" />
                    <span><strong>심혈관계 질환:</strong> 심근경색, 뇌졸중 등 치명적인 질환의 위험이 일반인에 비해 2~4배 높습니다.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrendingUp className="h-6 w-6 text-red-400 flex-shrink-0" />
                    <span><strong>당뇨병성 망막병증:</strong> 미세혈관 손상으로 시력을 잃을 수 있으며 성인 실명의 가장 흔한 원인 중 하나입니다.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrendingUp className="h-6 w-6 text-red-400 flex-shrink-0" />
                    <span><strong>신장 질환 및 신경병증:</strong> 신장 기능 저하로 투석이 필요할 수 있으며, 발의 감각 저하로 작은 상처가 궤양이나 절단으로 이어질 수 있습니다.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 예방 수칙 섹션 */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900">당뇨 예방을 위한 핵심 수칙</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. 체중 관리</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    비만은 제2형 당뇨병의 가장 큰 위험 인자입니다. 정상 체중을 유지하거나 현재 체중의 5~10%만 감량해도 당뇨병 발병 위험을 크게 낮출 수 있습니다.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. 규칙적인 운동</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    주 3~5회, 하루 30분 이상의 중강도 유산소 운동(빠르게 걷기, 자전거 타기)과 근력 운동을 병행하여 인슐린 민감성을 높이세요.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. 정기적인 건강 검진</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    당뇨병은 초기 증상이 거의 없습니다. 40세 이상이거나 가족력이 있다면 매년 공복 혈당 검사를 통해 당뇨 전단계를 조기에 발견해야 합니다.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. 금연 및 절주</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    흡연은 교감신경을 자극해 혈당을 올리며 합병증 위험을 극대화합니다. 과도한 음주 또한 췌장 기능을 저하시키므로 삼가야 합니다.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
