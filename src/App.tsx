import json from '../certificados.json'
import { useState } from 'react'
import { QueryInput, ResetButton } from './components/Layout'
import { CertificationCard } from './components/CertificationCard'

export default function App () {
  let [certifications, setCertifications] = useState(json.sort())
  let resetList = () => {
    setCertifications(json)
    const q: HTMLInputElement | null =
      document.querySelector('input#queryInput')
    q!.value = ''
  }

  let displayResetBtn = certifications.length < json.length

  return (
    <section className='max-[425px]:sm_section max-[768px]:md_section flex flex-col gap-3'>
      <header className='max-[425px]:sm_header max-[768px]:md_header bg-white'>
        <h1 className='text-sky-900 font-semibold'>Certificados</h1>
        <span className='max-[425px]:sm_queryArea max-[768px]:md_queryArea flex gap-3 items-center'>
          <QueryInput j={json} setCertifications={j => setCertifications(j)} />
          {displayResetBtn && <ResetButton onClick={resetList} />}
        </span>
      </header>

      <ul className='w-full divide-y border-t-2 border-t-sky-900/40'>
        {certifications.map((e, i) => {
          return (
            <li
              key={i + 1}
              className='hover:text-teal-600 hover:bg-teal-300/10'
            >
              <CertificationCard element={e} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
