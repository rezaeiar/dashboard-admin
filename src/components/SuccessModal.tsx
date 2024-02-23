import Button from "./Button"

const SuccessModal = () => {
    return (
        <div className='flex items-center justify-center fixed h-screen w-full top-0 left-0 bg-general-100/50 z-50'>
            <div className="flex items-center flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex self-end items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="h-12 w-12 bg-primary-40 rounded-full flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        Import Successfull
                    </h3>
                    <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80'>
                        Are you sure you want to delete 4 selected items?
                    </span>
                </div>
                <Button size="small" type="primary" styles="">
                    <>
                        Continue
                    </>
                </Button>
            </div>
        </div>
    )
}

export default SuccessModal