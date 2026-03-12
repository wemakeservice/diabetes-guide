import { Link } from 'react-router-dom';
import { ShieldAlert, Utensils, HeartPulse } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-blue-50">
        <div className="mx-auto max-w-2xl py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
              당신의 건강한 혈당을 위한 첫걸음
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              당뇨병은 관리가 생명입니다. 위험성과 예방 방법을 숙지하고, 건강한 식단을 통해 혈당을 안정적으로 유지하세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/prevention"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition"
              >
                예방 수칙 알아보기
              </Link>
              <Link to="/diet" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-blue-600 transition">
                식단 가이드 보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">당뇨 관리 필수 가이드</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            체계적인 관리가 필요합니다
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            당뇨병은 침묵의 살인자라고 불립니다. 하지만 올바른 지식과 생활 습관 개선을 통해 충분히 관리하고 극복할 수 있습니다.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <ShieldAlert className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                위험성 인지
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                합병증의 위험성을 명확히 알고, 초기 증상을 놓치지 않도록 주의를 기울이는 것이 중요합니다.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <HeartPulse className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                생활 습관 개선
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                규칙적인 운동과 적절한 수면, 스트레스 관리는 인슐린 저항성을 개선하는 핵심입니다.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Utensils className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                건강한 식단
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                혈당 스파이크를 방지하는 저당지수(GI) 식품 위주의 식단과 규칙적인 식사 시간을 유지하세요.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
