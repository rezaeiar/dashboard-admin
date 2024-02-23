import Button from "./Button"

const DeleteModal = () => {
    return (
        <div className='flex items-center justify-center fixed h-screen w-full top-0 left-0 bg-general-100/50 z-50'>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        Delete Items
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80'>
                    Are you sure you want to delete 4 selected items?
                </span>
                <div className="flex gap-x-6 items-center">
                    <Button size="small" type="destructive" styles="">
                        <>
                            Delete
                        </>
                    </Button>
                    <a href="#" className="text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        Cancel
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal