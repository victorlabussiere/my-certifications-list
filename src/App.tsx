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
    <section
      className='min-[320px]:sm_section sm:md_section md:lg_section lg:xg_section
 flex flex-col gap-3 max-w-screen'
    >
      <header className='flex flex-col min-[320px]:sm_header sm:md_header md:lg_header  bg-white'>
        <h1 className='text-sky-900 font-semibold'>Certificados</h1>
        <span className='min-[365px]:sm_queryArea max-[768px]:md_queryArea max-[1024px]:lg_queryArea flex gap-3 items-center'>
          <QueryInput j={json} setCertifications={j => setCertifications(j)} />
          {displayResetBtn && <ResetButton onClick={resetList} />}
        </span>
      </header>

      <ul className='w-full divide-y border-t-2 lg:xg_cardsList border-t-sky-900/40'>
        {certifications.map((e, i) => {
          return (
            <li
              key={i + 1}
              className='hover:text-teal-600 hover:bg-gray-300/10'
            >
              <CertificationCard element={e} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
