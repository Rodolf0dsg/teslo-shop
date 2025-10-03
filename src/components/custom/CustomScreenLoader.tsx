interface Props {
  title?: string
}

export const CustomScreenLoader = ({title = 'Loading...'}:Props) => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent' />
        <p className='text-base font-medium'>{ title }</p>
      </div>
    </div>
  );
};