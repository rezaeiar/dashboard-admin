import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useProducts } from "../hooks/api/useProducts"
import { useCategories } from '../hooks/api/useCategories'
import { useSetting } from "../hooks/api/useSetting"
import { useDeleteProduct } from "../hooks/api/useProducts"
import { ProductType } from "../types/api/Products.types"
import { useState, useEffect } from "react"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import Loading from "../components/Loading"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import Pagination from "../components/Pagination"
import EmptyEntity from "../components/EmptyEntity"

const Products = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isLoading, dataUpdatedAt } = useProducts()
    const { data: categoryData } = useCategories()
    const { data: dataSetting, isSuccess: isSuccessSetting } = useSetting()
    const { mutate: removeProduct } = useDeleteProduct()

    const [allProducts, setAllProducts] = useState<null | ProductType[]>(null)

    const [selectedCategory, setSelectedCategory] = useState("-1")
    const [filterBy, setFilterBy] = useState("-1")
    const [searchedValue, setSearchedValue] = useState("")
    const [shown, setShown] = useState(10)
    const [page, setPage] = useState(1);

    let updatedTime = new Date(dataUpdatedAt);

    useEffect(() => {
        if (isSuccessSetting) setShown(dataSetting.numberDispaly)
    }, [isSuccessSetting, dataSetting])

    useEffect(() => {
        updatedTime = new Date(dataUpdatedAt);
    }, [dataUpdatedAt])

    useEffect(() => {
        if (data) setAllProducts([...data])
        else setAllProducts([])
    }, [data])

    useEffect(() => {
        setSearchedValue("")
        if (selectedCategory !== "-1") {
            const filteredData = data?.filter((product: ProductType) => product.category?.id === selectedCategory)
            setAllProducts(filteredData)
        } else {
            setAllProducts(data)
        }
    }, [selectedCategory, filterBy])

    useEffect(() => {
        if (!searchedValue) setAllProducts(data ? [...data] : [])
    }, [searchedValue])

    const changePage = (page: number) => setPage(page)
    const searchHandler = () => {
        const searchedData = data.filter((product: ProductType) => product.name.toLocaleLowerCase().includes(searchedValue) || (product.unique_id as string).includes(searchedValue.toLocaleLowerCase()))
        setAllProducts(searchedData ? searchedData : null)
    }

    const showDeleteConfirmModal = (id: string) => {
        dispatch(showConfirmModal({ visibility: true, payload: { title: t("Delete Product"), description: t("You are deleting a product. are you sure?") }, button: "Delete", handler: () => removeProduct(id as string) }))
    }

    if (isLoading) return <Loading />
    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("Products")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small">
                        <>
                            {t("Export")}
                        </>
                    </Button>
                    <Button type="primary" size="small" link="/panel/products/add">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {t("Add Product")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex gap-2 flex-col md:flex-row">
                    <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                        <div className="flex items-center relative md:w-44 shrink-0 font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                <option value="-1">
                                    {t('Select Category')}
                                </option>
                                {
                                    categoryData && categoryData.map((category: any) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))
                                }
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                        <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                            <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
                                <option value='-1'>
                                    {t('Filter by')}
                                </option>
                                <option value="PRICE">{t("Price")}</option>
                                <option value="COUNT">{t("Count")}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                        </div>
                    </div>
                    <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer" onClick={searchHandler}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                        <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 font-iransans-regular placeholder:ltr:font-nunitosans-regular placeholder:rtl:font-iransans-regular" placeholder={t("Search by name or ID")} value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)} />
                    </div>
                </div>
                {
                    allProducts && !!allProducts.length &&
                    <>
                        <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                            <thead>
                                <tr className='p-3 md:p-4 bg-general-30 grid grid-cols-6 sm:text-sm text-xs font-nunitosans-extrabold rtl:font-iransans-bold text-general-100 child:text-start min-w-max gap-x-2 *:text-start capitalize'>
                                    <th className="w-36 sm:w-44">{t("product")}</th>
                                    <th className="w-28 sm:w-32">{t("category")}</th>
                                    <th className="w-28 sm:w-32">{t("price")}</th>
                                    <th className="w-28 sm:w-32">{t("inventory")}</th>
                                    <th className="w-28 sm:w-32">{t("rating")}</th>
                                    <th className="w-28 sm:w-32">{t("actions")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterBy === "PRICE" && [...allProducts]?.sort((a, b) => b.price - a.price).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((product: any) => (
                                        <tr className='even:bg-general-30/30 first:border-none border-t p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={product.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex gap-x-2 items-center">
                                                    {
                                                        product.images ?
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50">
                                                                <img src={product.images[0]} className='object-cover h-full' alt="" />
                                                            </div> :
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50 bg-general-40 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-general-60">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                                                </svg>
                                                            </div>
                                                    }
                                                    <div className="flex flex-col">
                                                        <h3 className="line-clamp-1">
                                                            {product.name}
                                                        </h3>
                                                        <span className="text-[10px] text-general-60 line-clamp-1">
                                                            #{product.unique_id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {
                                                    product.category ? product.category.name : t("Uncategorized")
                                                }
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.price.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                (Votes {product.score}) 5.0
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/products/edit/${product.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(product.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-101 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    filterBy === "COUNT" && [...allProducts]?.sort((a, b) => b.count - a.count).slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((product: any) => (
                                        <tr className='even:bg-general-30/30 first:border-none border-t p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={product.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex gap-x-2 items-center">
                                                    {
                                                        product.images ?
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50">
                                                                <img src={product.images[0]} className='object-cover h-full' alt="" />
                                                            </div> :
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50 bg-general-40 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-general-60">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                                                </svg>
                                                            </div>
                                                    }
                                                    <div className="flex flex-col">
                                                        <h3 className="line-clamp-1">
                                                            {product.name}
                                                        </h3>
                                                        <span className="text-[10px] text-general-60 line-clamp-1">
                                                            #{product.unique_id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {
                                                    product.category ? product.category.name : t("Uncategorized")
                                                }
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.price.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                (Votes {product.score}) 5.0
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/products/edit/${product.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(product.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-101 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    filterBy === "-1" && [...allProducts].slice(((page - 1) * shown), ((page - 1) * shown) + shown).map((product: any) => (
                                        <tr className='even:bg-general-30/30 first:border-none border-t p-3 md:p-4 bg-white grid grid-cols-6 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2' key={product.id}>
                                            <td className='w-36 sm:w-44 shrink-0 overflow-hidden items-center gap-x-2'>
                                                <div className="flex gap-x-2 items-center">
                                                    {
                                                        product.images ?
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50">
                                                                <img src={product.images[0]} className='object-cover h-full' alt="" />
                                                            </div> :
                                                            <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-general-50 bg-general-40 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-general-60">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                                                </svg>
                                                            </div>
                                                    }
                                                    <div className="flex flex-col">
                                                        <h3 className="line-clamp-1">
                                                            {product.name}
                                                        </h3>
                                                        <span className="text-[10px] text-general-60 line-clamp-1">
                                                            #{product.unique_id}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                {
                                                    product.category ? product.category.name : t("Uncategorized")
                                                }
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.price.toLocaleString()}</td>
                                            <td className="w-28 sm:w-32 shrink-0">{product.count}</td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                (Votes {product.score}) 5.0
                                            </td>
                                            <td className="w-28 sm:w-32 shrink-0">
                                                <div className="flex border border-general-50 divide-x rtl:divide-x-reverse rounded-md overflow-hidden">
                                                    <Link to={`/panel/products/edit/${product.id}`} className="p-2 w-1/2 hover:w-3/4 col-span-2 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-primary-100 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-100 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <div className="p-2 w-1/2 hover:w-3/4 cursor-pointer bg-general-30 flex items-center justify-center group hover:bg-red-101 transition-all" onClick={() => showDeleteConfirmModal(product.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-101 group-hover:text-white group-hover:scale-125 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <Pagination page={page} numberOfItems={allProducts.length} shown={shown} updatedTime={updatedTime} changePage={changePage} />
                    </>
                }
            </div>
            {
                allProducts && !allProducts.length &&
                <EmptyEntity title={t("Create First Product")} type={"products"} link="/panel/products/add" button="Add Product">
                    <>
                        {t("Start making sales by adding your products.")} <br className="hidden sm:block" />
                        {t("You can import and manage your products at any time.")}
                    </>
                </EmptyEntity>
            }
        </div>
    )
}

export default Products