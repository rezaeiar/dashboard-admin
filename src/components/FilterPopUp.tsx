import Button from "./Button"

const FilterPopUp = () => {
    return (
        <div className='h-screen w-full bg-general-60/20 backdrop-blur-md fixed top-0 left-0 z-50 flex justify-center items-center'>
            <div className="h-96 bg-white shadow-box rounded-xl py-6 flex flex-col gap-y-10">
                <div className="divide-y w-full flex flex-col gap-y-6">
                    <div className="px-6 flex flex-col gap-6">
                        <h4 className='text-general-100 text-lg font-nunitosans-bold'>
                            Select Order Type
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Health & Medicine
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Book & Stationary
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Services & Industry
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Fashion & Beauty
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Home & Living
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Electronics
                            </div>
                            <div className="bg-white px-4 py-2 rounded-full border border-general-50 text-sm hover:bg-primary-100 transition-colors hover:text-white hover:border-primary-100 cursor-pointer flex justify-center">
                                Mobile & Phone
                            </div>
                        </div>
                    </div>
                    <span className="px-6 text-general-80 text-sm font-nunitosans-regular pt-6">
                        *You can choose multiple Order type
                    </span>
                </div>
                <div className="flex justify-center px-6">
                    <Button type="primary" size="small" styles="">
                        <>
                            Apply Now
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FilterPopUp