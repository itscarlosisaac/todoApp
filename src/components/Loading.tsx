import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <div className="flex w-full justify-center py-6">
      <ReactLoading type="spin" color="rgba(59, 130, 246, 0.5)" />
    </div>
  )
}
