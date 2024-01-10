export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen md:flex-col md:overflow-hidden'>
      <div></div>
      <div className='flex flex-row h-screen md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'></div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
          {children}
        </div>
      </div>
    </div>
  );
}
