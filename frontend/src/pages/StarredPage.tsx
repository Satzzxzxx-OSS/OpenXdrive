import { Button, Card, Result } from 'antd'
import { StarOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '@/components/drive/PageHeader'
export function StarredPage() {
  const navigate=useNavigate()
  return <>
    <PageHeader title="Starred" description="Keep important files close at hand." />
    <Card><Result icon={<StarOutlined style={{color:'#1677ff'}} />} title="Starred files are not available yet"
      subTitle="Your current storage API does not persist star status. We won't show sample files or pretend your content is pinned."
      extra={<Button type="primary" icon={<FolderOpenOutlined />} onClick={()=>navigate('/all-files')}>Browse files</Button>} /></Card>
  </>
}
