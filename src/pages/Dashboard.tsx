import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Label, PieChart, Pie } from 'recharts';
import { useTranslation } from 'react-i18next';
import DashboardDetailCard from '../components/DashboardDetailCard';
import Button from '../components/Button';
import { statusStyleGenerator } from '../utils/helpers';
const Dashboard = () => {
    const data = [
        {
            name: '1',
            uv: 4000,
            pv: 3543,
            amt: 2400,
        },
        {
            name: '2',
            uv: 3000,
            pv: 1398,
            amt: 7335,
        },
        {
            name: '3',
            uv: 4345,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '5',
            uv: 232,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '7',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }
    ];

    const SalesGoal = [
        {
            name: "Group A",
            value: 12,
        },
        // {
        //   name: "Group B",
        //   value: 4567,
        // },
        // {
        //   name: "Group C",
        //   value: 1398,
        // },
        // {
        //   name: "Group D",
        //   value: 9800,
        // },
        // {
        //   name: "Group E",
        //   value: 3908,
        // },
        // {
        //   name: "Group F",
        //   value: 4800,
        // },
    ];


    const { t } = useTranslation()

    const calcPieChart = (percent: number) => {

        const pie = -((percent * 360) / 100) + 90;
        return pie
    }

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100">
                    {t("dashboard")}
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between rounded-md overflow-hidden lg:divide-x rtl:lg:divide-x-reverse gap-3 lg:gap-0">
                <DashboardDetailCard title={t("total user")} value={2356} status={{ type: false, value: 4.3 }} icon={'users.svg'} />
                <DashboardDetailCard title={t("total order")} value={534} status={{ type: true, value: 1.3 }} icon={'orders-icon.svg'} />
                <DashboardDetailCard title={t("total sales")} value={345} status={{ type: false, value: 4.3 }} icon={'sales.svg'} />
                <DashboardDetailCard title={t("total pending")} value={44} status={{ type: true, value: 8.3 }} icon={'pendings.svg'} />
            </div>
            <div className="shadow-md rounded-md h-96 bg-white p-8 hidden sm:flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h3 className="text-general-100 ltr:font-nunitosans-bold rtl:font-iransans-bold">
                        {t("Sales Details")}
                    </h3>
                    <Button type="primary" size="small" link="/panel/orders">
                        <>
                            {t("Go to orders")}
                        </>
                    </Button>
                </div>
                <div className="h-96 w-full text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} style={{ direction: 'ltr' }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4379EE" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#4379EE" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#4379EE" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="uv" stroke="#5A607F" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="rounded-md gap-4 grid grid-cols-4">
                <div className="bg-primary-100 h-96 p-6 rounded-md col-span-4 sm:col-span-2 2xl:col-span-1 shadow-md flex flex-col justify-between">
                    <div className="flex flex-col h-full">
                        <h4 className='text-white ltr:font-nunitosans-bold rtl:font-iransans-semiBold'>
                            {t("Completed Orders")}
                        </h4>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={SalesGoal}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={65}
                                    outerRadius={80}
                                    fill="#fff"
                                    startAngle={90}
                                    endAngle={calcPieChart(70)}
                                    width={20}
                                >
                                    <Label
                                        className="text-3xl font-bold rtl:font-iransans-700"
                                        value={"70%"}
                                        position={"center"}
                                        fill='#fff'
                                    ></Label>
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <ul className="flex flex-col gap-y-2">
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Value of orders:")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                333,000
                            </span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Number of orders:")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                333,000
                            </span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Status")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                Normal
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="bg-primary-100 h-96 p-6 rounded-md col-span-4 sm:col-span-2 2xl:col-span-1 shadow-md flex flex-col justify-between">
                    <div className="flex flex-col h-full">
                        <h4 className='text-white ltr:font-nunitosans-bold rtl:font-iransans-semiBold'>
                            {t("Pending Orders")}
                        </h4>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={SalesGoal}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={65}
                                    outerRadius={80}
                                    fill="#fff"
                                    startAngle={90}
                                    endAngle={calcPieChart(25)}
                                >
                                    <Label
                                        className="text-3xl font-bold rtl:font-iransans-700"
                                        value={"25%"}
                                        position={"center"}
                                        fill='#fff'
                                    ></Label>
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <ul className="flex flex-col gap-y-2">
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Value of orders:")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                333,000
                            </span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Number of orders:")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                333,000
                            </span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-white text-sm'>
                                {t("Status")}
                            </span>
                            <span className='text-white ltr:font-nunitosans-bold rtl:font-iransans-bold'>
                                Normal
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white h-96 rounded-md p-3 xl:p-4 col-span-4 2xl:col-span-2 flex flex-col gap-y-4 xl:gap-y-6">
                    <h5 className="text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold">
                        {t("Latest orders")}
                    </h5>
                    <table className='divide-y bg-white rounded-md w-full flex flex-col overflow-x-auto'>
                        <thead>
                            <tr className='p-3 md:p-4 bg-general-40 grid grid-cols-4 sm:text-sm text-xs ltr:font-nunitosans-regular rtl:font-iransans-regular text-general-100 child:text-start min-w-max gap-x-2 *:text-start'>
                                <th className="w-28 sm:w-32">{t("Order")}</th>
                                <th className="w-28 sm:w-32">{t("Date")}</th>
                                <th className="w-32 sm:w-36">{t("Order Status")}</th>
                                <th className="w-28 sm:w-32">{t("Price")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='even:bg-general-30/30 border-b p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    17 June
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator("PENDING")}`}>
                                        {t("PENDING")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    $177,543
                                </td>
                            </tr>
                            <tr className='even:bg-general-30/30 border-b p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    17 June
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator("PENDING")}`}>
                                        {t("PENDING")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    $177,543
                                </td>
                            </tr>
                            <tr className='even:bg-general-30/30 border-b p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    17 June
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator("PENDING")}`}>
                                        {t("PENDING")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    $177,543
                                </td>
                            </tr>
                            <tr className='even:bg-general-30/30 border-b p-3 md:p-4 bg-white grid grid-cols-4 sm:text-sm text-xs text-general-90 child:line-clamp-1 child:h-min items-center child:text-start min-w-max gap-x-2'>
                                <td className='w-28 sm:w-32 shrink-0 overflow-hidden items-center gap-x-2'>
                                    #23534D
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    17 June
                                </td>
                                <td className="w-32 sm:w-36 shrink-0">
                                    <button className={`w-4/5 flex justify-center text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors ltr:font-nunitosans-regular rtl:font-iransans-regular ${statusStyleGenerator("PENDING")}`}>
                                        {t("PENDING")}
                                    </button>
                                </td>
                                <td className="w-28 sm:w-32 shrink-0">
                                    $177,543
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard