import { useState } from 'react'
import json from '../certificados.json'
import { Certification } from './types/Certification'
import { CertificationsList, ResetButton } from './components/HomeComponents'

export default function App () {
  let [certifications, setCertifications] = useState(json.sort())
  let resetList = () => {
    setCertifications(json)
    const q: HTMLInputElement | null =
      document.querySelector('input#queryInput')
    q!.value = ''
  }

  json.forEach(e => e.text.trim())

  return (
    <div className='bg-white shadow-2xl rounded-xl m-5 text-sky-900'>
      <div className='flex items-center w-full justify-start gap-3 px-6 py-4 min-w-[40vw]'>
        <h1 className='text-3xl font-semibold min-w-fit mr-8'>Certificados</h1>
        <QueryInput
          json={json}
          setCertifications={json => setCertifications(json.sort())}
        />
        {certifications.length < json.length && (
          <ResetButton onClick={resetList} />
        )}
      </div>
      <CertificationsList certifications={certifications.sort()} />
    </div>
  )
}

export function QueryInput ({
  json,
  setCertifications
}: {
  json: Certification[]
  setCertifications: (cert: Certification[]) => void
}) {
  return (
    <input
      id='queryInput'
      className='border p-2 rounded h-fit w-full'
      type='text'
      onChange={({ target }) => {
        setCertifications(
          json
            .filter(e =>
              e.text.trim().toLowerCase().includes(target.value.toLowerCase())
            )
            .sort()
        )
      }}
      placeholder='Pesquise por tech'
    />
  )
}
