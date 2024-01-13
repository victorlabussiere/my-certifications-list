import json from '../certificados.json'
import { useState } from 'react'
import { CertificationsList } from './components/CertificationsList'
import { QueryInput, ResetButton } from './components/Layout'

export default function App () {
  let [certifications, setCertifications] = useState(json.sort())
  let resetList = () => {
    setCertifications(json)
    const q: HTMLInputElement | null =
      document.querySelector('input#queryInput')
    q!.value = ''
  }

  return (
    <div className='bg-white shadow-2xl rounded-xl m-5 text-sky-900 py-3 pb-6'>
      <header className='flex items-center w-full justify-start gap-3 px-6 py-4 min-w-[40vw]'>
        <h1 className='text-3xl font-semibold min-w-fit mr-8'>Certificados</h1>
        <QueryInput
          json={json}
          setCertifications={json => setCertifications(json.sort())}
        />
        {certifications.length < json.length && (
          <ResetButton onClick={resetList} />
        )}
      </header>
      <CertificationsList certifications={certifications.sort()} />
    </div>
  )
}
