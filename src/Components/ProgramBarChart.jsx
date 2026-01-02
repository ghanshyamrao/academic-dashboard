import { Bar } from "react-chartjs-2"

const ProgramBarChart = ({ programs =[]}) => {
  const data = {
    labels: programs.map((p) => p.program),
    datasets: [
      {
        label: "Application per Program",
        data: programs.map((p) => p.count),
        backgroundColor: "#2563eb"
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div className="h-80 w-full rounded-card bg-surface p-4 shadow-card">
      <Bar data={data} options={options} />
    </div>
  )
}

export default ProgramBarChart
