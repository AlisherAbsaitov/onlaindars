import Header from './components/Header'
import Footer from './components/Footer'
import VideoSection from './components/VideoSection'
import React from 'react'
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <VideoSection />
      <Footer />
    </div>
  )
}
