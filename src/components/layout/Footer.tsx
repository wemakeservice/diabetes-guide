export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 건강한 내일. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            본 웹사이트에서 제공하는 정보는 참고용이며, 의학적 진단이나 치료를 대신할 수 없습니다.
            <br />
            정확한 진단과 치료를 위해서는 전문의와 상담하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
