import type { ReactNode } from 'react'
import { Modal, Typography } from 'antd'

export function DummyModal({ open, title, description, children, onClose, className }: {
  open: boolean; title: string; description: string; children: ReactNode; onClose: () => void; className?: string
}) {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      centered
      width={560}
      className={className}
    >
      <Typography.Paragraph type="secondary" style={{ marginTop: 0 }}>{description}</Typography.Paragraph>
      {children}
    </Modal>
  )
}
