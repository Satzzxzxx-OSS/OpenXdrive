import { Button, Card, Result } from 'antd'
import { InboxOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '@/components/drive/PageHeader'
export function ArchivedPage() {
  const navigate=useNavigate()
  return <>
    <PageHeader title="Archived" description="Separately organized historical files." />
    <Card><Result icon={<InboxOutlined style={{color:'#1677ff'}} />} title="Archive view is not configured"
      subTitle="The existing backend supports active and trashed files, but not a separate archived status. No files were altered."
      extra={<Button type="primary" icon={<FolderOpenOutlined />} onClick={()=>navigate('/all-files')}>Return to files</Button>} /></Card>
  </>
}
