import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useTranslation } from 'react-i18next';
import DashboardDetailCard from '../components/DashboardDetailCard';
const Dashboard = () => {
    const data = [
        {
            name: '1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '3',
            uv: 2000,
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
            uv: 1890,
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
        },
        {
            name: '8',
            uv: 7000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '9',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '10',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '11',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '12',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        }
    ];
    const { t } = useTranslation()

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100">
                    {t("dashboard")}
                </h2>
            </div>
            <div className="shadow-md rounded-md h-96 bg-white p-8 flex flex-col gap-y-10">
                <div className="flex justify-between items-center">
                    <h3 className="text-general-100 font-nunitosans-bold">
                        Sales Details
                    </h3>
                    <button className="bg-general-30 flex border border-general-40 text-xs text-general-60 px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                        October
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-sm text-general-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 xl:gap-4">
                <DashboardDetailCard title={t("total user")} value={2356} status={{ type: false, value: 4.3 }} icon={'users.svg'} />
                <DashboardDetailCard title={t("total order")} value={534} status={{ type: true, value: 1.3 }} icon={'orders.svg'} />
                <DashboardDetailCard title={t("total sales")} value={345} status={{ type: false, value: 4.3 }} icon={'sales.svg'} />
                <DashboardDetailCard title={t("total pending")} value={44} status={{ type: true, value: 8.3 }} icon={'pendings.svg'} />
            </div>
            {/* <div className="shadow-md rounded-md h-96 bg-white p-8 flex flex-col gap-y-10">

            </div> */}
        </div>
    )
}

export default Dashboard