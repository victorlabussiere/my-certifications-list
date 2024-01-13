import { CertificationsListProps } from '../types/Certification'

export function ResetButton ({ onClick }: { onClick: () => void }) {
  return (
    <div
      role='button'
      className='text-white bg-slate-700 text-center rounded py-2 w-[20%] font-semibold'
      onClick={() => onClick()}
    >
      reset
    </div>
  )
}

export function CertificationsList ({
  certifications
}: CertificationsListProps) {
  function displayList () {
    return certifications.map((e, i) => {
      return (
        <li
          key={i + 1}
          className='py-3 px-8 hover:underline hover:text-teal-600 hover:bg-gray-300/10 flex flex-col gap-2 cursor-pointer'
        >
          <a className='font-semibold text-lg' href={e.link} target='_blank'>
            {e.text}
          </a>
          <p className='text-sky-900/80'>
            <i className='font-semibold'>Competências: </i>
            {e.competences}
          </p>
        </li>
      )
    })
  }

  return (
    certifications.length != 0 && (
      <ul className='w-full divide-y divide-dashed border-t-2 border-t-sky-900/40'>
        {displayList()}
      </ul>
    )
  )
}
