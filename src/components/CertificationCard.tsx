import { Certification } from '../types/Certification'

export function CertificationCard<T extends Certification> (prop: {
  element: T
}) {
  function resolveCompetenciesText (com: string) {
    let items: string[] = com.split('·')
    return (
      <ul className='divide-y divide-dashed gap-1'>
        {items.map((e, i) => {
          return (
            <li className='py-1 hover:ml-1 duration-300' key={i + 1}>
              {e}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <a href={prop.element.link} target='_blank' className='flex flex-col gap-3'>
      <p className='text-xl text-ellipsis max-w-[80%] truncate font-semibold hover:underline duration-200'>
        {prop.element.text}
      </p>
      <span className='text-sky-900/80 w-fit px-5'>
        <i className='font-semibold'>Competências aprendidas: </i>
        {resolveCompetenciesText(prop.element.competences)}
      </span>
    </a>
  )
}
