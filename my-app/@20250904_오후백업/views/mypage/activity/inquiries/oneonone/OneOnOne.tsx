'use client';

import React from 'react';
import { ButtonArea, Button, Empty } from '@shared/ui';
import { QnAList } from '@widgets/qna';
import { QnAData } from '@widgets/qna/QnAList';

type OneOnOneProps = {
  data: QnAData[];
  rows?: number;
  onDelete?: (id: string) => void;
  onClickWrite?: () => void;
  showMore?: boolean;
  hideEdit?: boolean;
  toggleable?: boolean;
};

export default function OneOnOne({
  data,
  rows = 3,
  onDelete,
  onClickWrite,
  showMore = true,
  hideEdit = true,
  toggleable = true,
}: OneOnOneProps) {
  // nodata
  if (data.length === 0) {
    return (
      <Empty
        title="문의한 내역이 없어요."
        buttons={<Button variant="primary">1:1 문의하기</Button>}
      />
    );
  }

  return (
    <>
      <ButtonArea vertical margin="3">
        <Button onClick={onClickWrite}>1:1 문의하기</Button>
      </ButtonArea>
      <QnAList
        data={data}
        rows={rows}
        onDelete={onDelete}
        showMore={showMore}
        imageQnADetail
        hideEdit={hideEdit}
        toggleable={toggleable}
        showPendingNotice={true}
        hideActionButtons={true}
      />
    </>
  );
}
