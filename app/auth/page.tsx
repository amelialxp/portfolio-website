'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Auth() {
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const validCodes = [
    '2025',
    'lolpassword'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validCodes.includes(accessCode.toUpperCase())) {
      sessionStorage.setItem('portfolioAccess', accessCode.toUpperCase())
      sessionStorage.setItem('accessTime', new Date().toISOString())
      router.push('/')
    } else {
      setError('Invalid access code. Please check with Amelia for the correct code.')
    }
  }

  return (
    <div className="min-h-screen bg-primary-background flex items-center justify-center px-8">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <h1>
          Portfolio Access
        </h1>
        <p className="font-spectral text-text-body mb-6">
          Please enter your access code to view Amelia&apos;s portfolio.
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Enter access code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-spectral mb-4 focus:outline-none focus:border-secondary-navy"
          />
          
          {error && (
            <p className="text-red-600 font-spectral text-sm mb-4">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full bg-primary-yellow text-text-body px-6 py-3 rounded-lg font-spectral hover:bg-yellow-400 transition-colors"
          >
            Access Portfolio
          </button>
        </form>
        
        <p className="font-spectral text-sm text-text-body mt-6 text-center">
          Need an access code? Contact Amelia at your.email@domain.com
        </p>
      </div>
    </div>
  )
}