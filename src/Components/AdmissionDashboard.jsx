import axios, { HttpStatusCode } from 'axios'
import React from 'react'
import { useEffect, useMemo } from 'react'
import { apiUrls } from '../utils/urls'
import { useState } from 'react'
import CardComponent from './CardComponent'
import ApplicationLineChart from './ApplicationLineChart '
import ProgramBarChart from './ProgramBarChart'

const AdmissionDashboard = () => {
    const [loading, setLoading] = useState(false)
    const [analyticsData, setAnalyticsData] = useState({})
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)

    const fetchAnalyticsData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(apiUrls.GET_ANALYTICS_DATA)
            if (response.status === HttpStatusCode.Ok) {
                setAnalyticsData(response.data.analyticsData)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const filteredTrends = useMemo(() => {
        if (!analyticsData?.applicationsTrends) return []
        const result = analyticsData.applicationsTrends.filter(
            item => {
                const from = !fromDate || item.date >= fromDate
                const to = !toDate || item.date <= toDate
                return from && to
            }
        )
        return result
    }, [analyticsData, fromDate, toDate])

    const resetGraphData = () => {
        setFromDate(null)
        setToDate(null)
    }

    useEffect(() => {
        fetchAnalyticsData()
    }, [])

    if (loading) {
        return <div className="min-h-screen gap-2 flex  items-center justify-center ">
            <div className="bg-amber-400 w-3 p-2 h-10  rounded-2xl animate-bounce delay-75">
            </div>
            <div className="bg-amber-400 p-2 h-20 rounded-2xl animate-bounce delay-100">
            </div>
            <div className="bg-amber-400 p-2 h-28 rounded-2xl animate-bounce delay-150">
            </div>
            <div className="bg-amber-400 p-2 h-40 rounded-2xl animate-bounce delay-200">
            </div>
            <div className="bg-amber-400 p-2 h-28 rounded-2xl animate-bounce delay-150">
            </div>
            <div className="bg-amber-400 p-2 h-20 rounded-2xl animate-bounce delay-100">
            </div>
            <div className="bg-amber-400 p-2 h-10 rounded-2xl animate-bounce delay-75">
            </div>
        </div>
    }

    console.log(analyticsData)

    return (
        <div className="p-4 gap-2">
            <div className="">
                <div className="flex p-4 px-0 justify-between">
                    <div className="text-xl text-black">
                        Admission Analytics Dashboard
                    </div>
                    <button onClick={() => fetchAnalyticsData()} className="cursor-pointer hover:bg-blue-600 bg-blue-500 rounded-xl p-1 px-4 text-white">Refresh Dashboard</button>
                </div>
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <CardComponent label={'Total Applicants'} data={analyticsData.totalApplicants} className={"bg-blue-400"} />
                    <CardComponent label={'Verified Applicants'} data={analyticsData.verifiedApplicants} className={"bg-amber-600"} />
                    <CardComponent label={'Rejected Applicants'} data={analyticsData.rejectedApplicants} className={"bg-red-400"} />
                </div>
            </div>

            <div className="flex justify-end">  
             <div className="flex bg-blue-400 w-full sm:w-fit rounded-xl p-4 flex-col justify-end mt-4 sm:flex-row gap-4 mb-6">
                <div className="rounded-xl p-2 text-white">Filter by Date </div>
                <div className="gap-2 flex">
                    <input
                        type="date"
                        value={fromDate}
                        onChange={e => setFromDate(e.target.value)}
                        className="border-none text-black bg-white rounded-xl px-3 py-2 w-full sm:w-auto"
                    />
                    <input
                        type="date"
                        value={toDate}
                        onChange={e => setToDate(e.target.value)}
                        className="border-none text-black bg-white rounded-xl px-3 py-2 w-full sm:w-auto"
                    />
                </div>
                <button onClick={() => resetGraphData()} className="cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-xl p-1 px-4 text-white">Reset</button>
            </div>
            </div>


            <div className="">
                <div className="xl:flex w-full">
                    {filteredTrends.length === 0 ? (
                        <div className="text-center items-center w-full text-gray-500">
                            No trend data for selected date range
                        </div>
                    ) : (
                        <ApplicationLineChart trends={filteredTrends} />
                    )}
                    <ProgramBarChart programs={analyticsData?.applicationsPerProgram} />

                </div>
            </div>
        </div>
    )
}

export default AdmissionDashboard