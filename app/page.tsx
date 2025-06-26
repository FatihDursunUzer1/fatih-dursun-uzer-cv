"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">Fatih Dursun</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-blue-600 dark:text-blue-400 font-semibold">Ana Sayfa</a>
            <a href="/cv" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">CV</a>
            <a href="/cv#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Projeler</a>
            <a href="/cv#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animations */}
      <main className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated Welcome Text */}
            <div className="mb-16">
              <div className="overflow-hidden">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-fade-in">
                  Hoş Geldiniz!
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                  Modern web teknolojileri ile geliştirilmiş bu projeye hoş geldiniz
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  React, Next.js ve Tailwind CSS kullanarak oluşturuldu
                </p>
              </div>
            </div>

            {/* Animated Profile Card */}
            <div className="mb-20">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                      Merhaba, Ben <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Fatih Dursun</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      .NET Backend developer olarak Azure ekosistemi üzerinde tutkulu bir yazılım geliştiricisiyim. 
                      Mikroservis mimarileri, cloud-native uygulamalar ve enterprise çözümler geliştiriyorum.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: '1.2s'}}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300">.NET Core & ASP.NET Core uzmanı</span>
                      </div>
                      <div className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: '1.4s'}}>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300">Azure Cloud Services & DevOps</span>
                      </div>
                      <div className="flex items-center space-x-3 animate-fade-in-left" style={{animationDelay: '1.6s'}}>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300">Mikroservis mimarileri</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                        <p className="text-blue-100">.NET & Azure Odaklı</p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      ☁️ Azure
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '1.8s'}}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Yüksek Performans</h3>
                <p className="text-gray-600 dark:text-gray-300">.NET Core ile optimize edilmiş, ölçeklenebilir backend uygulamaları</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '2s'}}>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Cloud Native</h3>
                <p className="text-gray-600 dark:text-gray-300">Azure Cloud Services ile modern cloud-native uygulamalar</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: '2.2s'}}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Enterprise Ready</h3>
                <p className="text-gray-600 dark:text-gray-300">Mikroservis mimarileri ve DevOps pratikleri ile kurumsal çözümler</p>
              </div>
            </div>

            {/* Animated Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '2.4s'}}>
              <a href="/cv" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-center relative overflow-hidden">
                <span className="relative z-10">CV'mi Görüntüle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Daha Fazla Bilgi</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-20 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Fatih Dursun. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-sm">Next.js ve Tailwind CSS ile geliştirildi</p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
