import { Line } from "react-chartjs-2"

const ApplicationLineChart = ({ trends = [] }) => {

  const getPointColor = (value) => {
    switch (true) {
      case value > 1000:
        return "#b91c1c" 
  
      case value > 500:
        return "#f97316" 
  
      default:
        return "#dc2626"
    }
  }

  const data = {
    labels: trends.map((t) => t.date),
    datasets: [
      {
        label: "Application Trends",
        data: trends.map((t) => t.count),
        borderColor: "#dc2626",
        backgroundColor: "rgba(220,38,38,0.2)",
        tension: 0.4,
        pointBackgroundColor: trends.map(getPointColor),
        pointBorderColor: trends.map(getPointColor),
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div className="h-80 w-full rounded-card bg-surface p-4 shadow-card">
      <Line
        key={JSON.stringify(trends)}
        data={data}
        options={options}
      />
    </div>
  )
}

export default ApplicationLineChart
