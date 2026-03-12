import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">문의하기</h1>
          <p className="mt-4 text-lg text-gray-600">
            궁금한 점이나 건의사항이 있으시면 언제든 연락주세요.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <Mail className="h-10 w-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">이메일 문의</h2>
            <p className="text-gray-600 text-center mb-4">
              가장 확실하고 빠른 답변을 받을 수 있는 방법입니다.
            </p>
            <a href="mailto:wemakeservices@gmail.com" className="text-blue-600 font-semibold hover:underline">
              wemakeservices@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <MessageSquare className="h-10 w-10 text-green-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">운영 시간</h2>
            <p className="text-gray-600 text-center">
              평일: 09:00 - 18:00
              <br />
              주말/공휴일 휴무
              <br />
              (메일은 상시 접수 중입니다)
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>전송된 문의사항은 영업일 기준 48시간 이내에 답변해 드립니다.</p>
        </div>
      </div>
    </div>
  );
}
