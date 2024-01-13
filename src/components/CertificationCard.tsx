import { Certification } from '../types/Certification'

export function CertificationCard<T extends Certification> (prop: {
  element: T
}) {
  function resolveCompetenciesText (com: string) {
    let items: string[] = com.split('·')
    return (
      <ul className='divide-y divide-dashed gap-1 list-disc list-inside'>
        {items.map((e, i) => {
          return (
            <li
              className='max-[425px]:sm_cardComps text-gray-500 py-1 hover:ml-1 duration-300'
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
      // className='flex flex-col gap-3 w-full'
      className='flex flex-col max-[425px]:sm_card max-[768px]:md_card'
    >
      <p className='max-[425px]:sm_cardTitle text-sky-900 max-w-[80%] truncate'>
        {prop.element.text}
      </p>
      <span className='max-[425px]:sm_cartCompetencesList text-sky-900/80 flex flex-col gap-2'>
        <i className=''>Competências aprendidas: </i>
        {resolveCompetenciesText(prop.element.competences)}
      </span>
    </a>
  )
}
