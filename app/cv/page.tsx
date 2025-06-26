import Image from "next/image";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">Fatih Dursun Uzer</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Ana Sayfa</a>
              <a href="/cv" className="text-blue-600 dark:text-blue-400 font-semibold">CV</a>
              <a href="/cv#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Projeler</a>
              <a href="/cv#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">İletişim</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* CV Document */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {/* CV Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Fatih Dursun Uzer</h1>
                <p className="text-xl mb-1">Software Developer</p>
                <p className="text-blue-100">Backend Developer & Cloud Specialist</p>
              </div>
            </div>

            {/* CV Content */}
            <div className="p-8">
              {/* Contact & Summary Row */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Contact Info */}
                <div className="md:col-span-1">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                    İletişim
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">İstanbul, Türkiye</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+905374199621" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        +90 537 419 9621
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:fatihdursunuzer@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        fatihdursunuzer@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <a href="https://github.com/FatihDursunUzer1" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        github.com/FatihDursunUzer1
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href="https://linkedin.com/in/fatihdursunuzer" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        linkedin.com/in/fatihdursunuzer
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="md:col-span-2">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                    Profesyonel Özet
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Yaklaşık dört yıllık deneyimle <strong>.NET framework</strong> ve <strong>Azure ekosistemi</strong> üzerinde çalışıyorum. 
                    <strong>Azure App Service</strong>, <strong>Azure Functions</strong>, <strong>Azure Redis</strong>, 
                    <strong>Azure Blob Storage</strong> ve <strong>Azure OpenAI</strong> kullanarak bulut tabanlı uygulamaların 
                    tasarımını, geliştirmesini ve bakımını yaptım. 
                    <strong>Mikroservis mimarileri</strong>, <strong>performans optimizasyonu</strong> ve 
                    <strong>Azure DevOps</strong> ile <strong>CI/CD süreçlerinde</strong> uzmanım; 
                    iş değeri yaratan ölçeklenebilir çözümler üretmeye odaklıyım.
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                  İş Deneyimi
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Yazılım Uzmanı</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Albayrak Grubu</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">2021 - Devam Ediyor</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li>RESTful ve gRPC servislerini ASP.NET Core ile tasarlayıp Azure PostgreSQL ile ölçeklenebilir veri depolama sağladım.</li>
                      <li>Redis tabanlı önbellekleme ve rate limiting mekanizmaları planlayarak giriş denemelerinde veri tabanı yükünü azalttım.</li>
                      <li>Application Insights ile performans analizi, telemetri toplama ve IP adresi loglama işlemlerini gerçekleştirdim.</li>
                      <li>Firebase Admin SDK ile JWT/Bearer token tabanlı kimlik doğrulama ve Azure Active Directory ile SSO entegrasyonu sağladım.</li>
                      <li>Azure Functions ve SendGrid entegrasyonuyla e-posta gönderim mikroservisi oluşturup trigger tabanlı hale getirerek kaynak kullanımını optimize ettim.</li>
                      <li>Azure App Service Plan'lerini gereksinim analizi, oluşturma, ölçekleme ve migrasyon süreçleriyle yönettim.</li>
                      <li>Azure DevOps Pipelines ile CI/CD süreçlerini otomatikleştirerek derleme, test ve dağıtım süreçlerini hızlandırdım.</li>
                      <li>Stajyerlerin onboarding, kod inceleme ve eğitim süreçlerinde mentorluk yaptım.</li>
                      <li>.NET projelerini .NET 5'ten .NET 6/7'ye yükselterek uyumluluk ve performans iyileştirmeleri sağladım.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                  Teknik Yetenekler
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Programlama Dilleri</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">C#</span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">Java</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Framework'ler</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">.NET 5/6/7</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">NHibernate</span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">EF Core</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Veritabanları</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs">Azure PostgreSQL</span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs">AWS RDS (MSSQL)</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Azure Hizmetleri</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">App Service</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">Functions</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">Redis</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">Blob Storage</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">OpenAI</span>
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs">DevOps</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Projects */}
              <div id="projects" className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">
                  Kişisel Projeler
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white">EMarketBridge</h3>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Aktif</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">E-ticaret pazaryeri API entegrasyonu için .NET Core tabanlı backend platformu.</p>
                    <a href="https://github.com/FatihDursunUzer1/EMarketBridge" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">GitHub'da Görüntüle</a>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white">mobuni_backend</h3>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Aktif</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mobil uygulamalar için JWT kimlik doğrulamalı ASP.NET Core RESTful API servisi.</p>
                    <a href="https://github.com/FatihDursunUzer1/mobuni_backend" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">GitHub'da Görüntüle</a>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white">SignalRTest</h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Demo</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">ASP.NET Core SignalR ile gerçek zamanlı iletişim demosu.</p>
                    <a href="https://github.com/FatihDursunUzer1/SignalRTest" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">GitHub'da Görüntüle</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV'yi İndir (PDF)
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Fatih Dursun Uzer. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
} 