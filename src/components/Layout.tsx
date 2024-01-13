import { Certification } from '../types/Certification'

export type QueryInputProps = {
  j: Certification[]
  setCertifications: (cert: Certification[]) => void
}

export function QueryInput ({ j, setCertifications }: QueryInputProps) {
  return (
    <input
      id='queryInput'
      className='text-sky-900/90 border rounded border-sky-900 max-[425px]:sm_input'
      type='text'
      onChange={({ target }) => {
        setCertifications(
          j
            .filter(e =>
              e.text
                .trim()
                .toLowerCase()
                .includes(target.value.trim().toLowerCase())
            )
            .sort()
        )
      }}
      placeholder='Pesquise por tech'
    />
  )
}

export function ResetButton ({ onClick }: { onClick: () => void }) {
  return (
    <div
      role='button'
      className='w-fit px-4 py-2 bg-sky-900 text-white rounded font-semibold hover:bg-sky-900/80 duration-150 cursor-pointer'
      onClick={() => onClick()}
    >
      reset
    </div>
  )
}
