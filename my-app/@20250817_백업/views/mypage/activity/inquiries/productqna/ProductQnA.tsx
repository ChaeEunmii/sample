'use client';

import React from 'react';
import { Button, Empty } from '@shared/ui';
import { QnAList, QnAData } from '@widgets/qna/QnAList';

type ProductQnAProps = {
  data: QnAData[];
  rows?: number;
  onDelete?: (id: string) => void;
  showMore?: boolean;
  toggleable?: boolean;
};

export default function ProductQnA({
  data,
  rows = 3,
  onDelete,
  showMore = true,
  toggleable = true,
}: ProductQnAProps) {
  // nodata
  if (data.length === 0) {
    return (
      <Empty
        title="문의한 내역이 없어요."
        buttons={<Button variant="primary">샵메인 바로가기</Button>}
      />
    );
  }

  return (
    <QnAList
      data={data}
      rows={rows}
      onDelete={onDelete}
      showMore={showMore}
      imageQnADetail
      toggleable={toggleable}
      revealSecret={true}
      showPendingNotice={true}
      hideActionButtons={true}
    />
  );
}
