export const Header = () => {
    return (
        <header className='w-full fixed top-0 z-50'>
            <div className='w-full flex justify-between items-center p-4 max-w-[1100px] m-auto'>
                <div className='flex justify-start items-center gap-10 text-sm text-[#505F98] w-full flex-shrink'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
                <h1 className='text-2xl text-[#37447E] font-black leading-10'>Landing</h1>
                <div className='w-full flex-shrink flex justify-end'>
                    <button className='text-xs bg-[#111B47] text-white px-10 py-2 rounded-sm'>Buy Now</button>
                </div>
            </div>
        </header>
  )
}
