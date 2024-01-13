import { Certification } from '../types/Certification'

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
