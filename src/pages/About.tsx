import { Activity, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">사이트 소개</h1>
          <p className="mt-4 text-lg text-gray-600">
            '건강한 내일'은 당뇨병 예방과 관리를 위한 신뢰할 수 있는 정보를 제공합니다.
          </p>
        </div>

        <div className="space-y-12">
          <section className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">우리의 목표</h2>
              <p className="text-gray-600 leading-relaxed">
                우리는 당뇨병이 더 이상 두려운 질병이 아니라, 올바른 지식과 꾸준한 관리를 통해 충분히 이겨낼 수 있는 삶의 한 부분임을 알리고자 합니다. 정확하고 쉬운 가이드를 통해 모든 이용자가 건강한 혈당 수치를 유지하도록 돕는 것이 우리의 사명입니다.
              </p>
            </div>
          </section>

          <section className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">신뢰성 있는 정보</h2>
              <p className="text-gray-600 leading-relaxed">
                제공되는 모든 식단 가이드와 예방 수칙은 공신력 있는 의학 자료와 영양학적 근거를 바탕으로 작성되었습니다. 이용자들이 일상 생활에서 즉시 적용할 수 있는 실질적인 팁을 제공하기 위해 노력하고 있습니다.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-sm text-blue-800 text-center font-medium">
            여러분의 건강한 내일을 위해 '건강한 내일'이 항상 함께하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
