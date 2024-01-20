import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

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
    ];

    return (
        <div className="py-8 px-10 w-full bg-general-30 flex flex-col gap-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-nunitosans-bold text-general-100">
                    Dashboard
                </h2>
            </div>
            <div className="grid grid-cols-4 justify-between gap-x-4">
                <div className="rounded-md shadow-md border-general-50 bg-white p-4 flex flex-col gap-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-general-80">
                                Total User
                            </h4>
                            <span className="text-general-100 text-xl font-nunitosans-extrabold">
                                40,689
                            </span>
                        </div>
                        <img src="./icons/users.svg" alt="" />
                    </div>
                    <div className="flex gap-x-1 text-xs items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <div className="flex gap-x-1">
                            <span className="text-green-101">
                                8.5%
                            </span>
                            Up from yesterday
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow-md border-general-50 bg-white p-4 flex flex-col gap-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-general-80">
                                Total Order
                            </h4>
                            <span className="text-general-100 text-xl font-nunitosans-extrabold">
                                10293
                            </span>
                        </div>
                        <img src="./icons/orders.svg" alt="" />
                    </div>
                    <div className="flex gap-x-1 text-xs items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <div className="flex gap-x-1">
                            <span className="text-green-101">
                                1.3%
                            </span>
                            Up from past week
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow-md border-general-50 bg-white p-4 flex flex-col gap-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-general-80">
                                Total Sales
                            </h4>
                            <span className="text-general-100 text-xl font-nunitosans-extrabold">
                                $89,000
                            </span>
                        </div>
                        <img src="./icons/sales.svg" alt="" />
                    </div>
                    <div className="flex gap-x-1 text-xs items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                        <div className="flex gap-x-1">
                            <span className="text-red-101">
                                4.3%
                            </span>
                            Down from yesterday
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow-md border-general-50 bg-white p-4 flex flex-col gap-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-general-80">
                                Total Pending
                            </h4>
                            <span className="text-general-100 text-xl font-nunitosans-extrabold">
                                2040
                            </span>
                        </div>
                        <img src="./icons/pendings.svg" alt="" />
                    </div>
                    <div className="flex gap-x-1 text-xs items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-101">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                        <div className="flex gap-x-1">
                            <span className="text-green-101">
                                1.8%
                            </span>
                            Up from yesterday
                        </div>
                    </div>
                </div>
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
            {/* <div className="shadow-md rounded-md h-96 bg-white p-8 flex flex-col gap-y-10">

            </div> */}
        </div>
    )
}

export default Dashboard