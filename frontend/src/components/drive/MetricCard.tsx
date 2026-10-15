import type { LucideIcon } from 'lucide-react'
import { Card, Statistic } from 'antd'

export function MetricCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <Card className="ox-metric-card">
      <div className="ox-metric-inner">
        <Statistic title={label} value={value} />
        <span className="ox-metric-icon"><Icon size={20} /></span>
      </div>
    </Card>
  )
}
