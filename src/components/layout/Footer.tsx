import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">건강한 내일</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              당뇨병 예방과 관리를 위해 검증된 정보를 제공하며, 모든 분들이 건강한 일상을 누리시기를 응원합니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">메뉴</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">홈</Link></li>
              <li><Link to="/prevention" className="hover:text-white transition">위험성 및 예방</Link></li>
              <li><Link to="/diet" className="hover:text-white transition">식단 가이드</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">고객지원 & 법적 고지</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">사이트 소개</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">문의하기</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition font-semibold text-gray-300">개인정보처리방침</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">이용약관</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} 건강한 내일. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] mt-4 leading-relaxed max-w-2xl mx-auto">
            면책 고지: 본 웹사이트에서 제공하는 정보는 일반적인 참고용이며, 의학적 진단이나 치료를 대신할 수 없습니다. 
            혈당 관리 및 질환 치료와 관련해서는 반드시 전문의와 상담하시기 바랍니다. 
            당사는 제공된 정보의 활용으로 발생하는 결과에 대해 법적 책임을 지지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
