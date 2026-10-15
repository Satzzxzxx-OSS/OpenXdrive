import {
  CopyOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined,
  FolderOpenOutlined, InfoCircleOutlined, LinkOutlined, UserAddOutlined,
} from '@ant-design/icons'
import type { FileItem } from '@/data/drive-data'
import { CursorMenu } from '@/components/drive/CursorMenu'

type Props = {
  x:number;y:number;file:FileItem|null;onClose:()=>void
  onView:()=>void;onDownload:()=>void;onRename:()=>void;onMove:()=>void;
  onDetails:()=>void;onShare:()=>void;onCopyLink:()=>void;onInvite:()=>void;onDelete:()=>void
}

export function FileContextMenu({x,y,file,onClose,onView,onDownload,onRename,onMove,onDetails,onShare,onCopyLink,onInvite,onDelete}:Props) {
  if (!file) return null
  const actions:Record<string,()=>void> = { view:onView,download:onDownload,rename:onRename,move:onMove,details:onDetails,share:onShare,copy:onCopyLink,invite:onInvite,delete:onDelete }
  return <CursorMenu x={x} y={y} open={Boolean(file)} onClose={onClose}
    onSelect={key=>actions[key]?.()}
    items={[
      {key:'view',label:'Preview',icon:<EyeOutlined/>},
      {key:'download',label:'Download',icon:<DownloadOutlined/>},
      {key:'rename',label:'Rename',icon:<EditOutlined/>},
      {key:'move',label:'Move to folder',icon:<FolderOpenOutlined/>},
      {key:'details',label:'File details',icon:<InfoCircleOutlined/>},
      {type:'divider'},
      {key:'share',label:'Share link',icon:<LinkOutlined/>},
      {key:'copy',label:'Copy link',icon:<CopyOutlined/>},
      {key:'invite',label:'Invite member',icon:<UserAddOutlined/>},
      {type:'divider'},
      {key:'delete',label:'Move to recycle bin',icon:<DeleteOutlined/>,danger:true},
    ]} />
}
