import { Certification } from '../types/Certification'

export function CertificationCard<T extends Certification> (prop: {
  element: T
}) {
  function resolveCompetenciesText (com: string) {
    let items: string[] = com.split('·')
    return (
      <ul className='divide-y divide-dashed gap-1 list-disc list-inside md:lg_cardComp'>
        {items.map((e, i) => {
          return (
            <li
              className='min-[335px]:sm_cardComps md:lg_cardCompItem text-gray-500 py-1 hover:ml-1 duration-300'
              key={i + 1}
            >
              {e}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <a
      href={prop.element.link}
      target='_blank'
      className='flex flex-col min-[320px]:sm_card sm:md_card md:lg_card'
    >
      <p className='text-sky-900 max-w-[80%] truncate'>{prop.element.text}</p>
      <span className='text-sky-900/80 flex flex-col gap-2'>
        <i className=''>Competências aprendidas: </i>
        {resolveCompetenciesText(prop.element.competences)}
      </span>
    </a>
  )
}
