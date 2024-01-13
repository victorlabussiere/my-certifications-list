import { CertificationsListProps } from '../types/Certification'
import { CertificationCard } from './CertificationCard'

export function CertificationsList ({
  certifications
}: CertificationsListProps) {
  return (
    certifications.length != 0 && (
      <ul className='w-full divide-y border-t-2 border-t-sky-900/40'>
        {certifications.map((e, i) => {
          return (
            <li
              key={i + 1}
              className='py-3 px-8 hover:text-teal-600 hover:bg-gray-300/10 flex flex-col gap-2 cursor-pointer'
            >
              <CertificationCard element={e} />
            </li>
          )
        })}
      </ul>
    )
  )
}
