return_requested: {
  label: (orderCase?: OrderCase) =>
    orderCase === 'voucher' || orderCase === 'ecoupon'
      ? '환불접수'
      : '반품접수',
  color: 'gray3',
},
return_completed: {
  label: (orderCase?: OrderCase) =>
    orderCase === 'voucher' || orderCase === 'ecoupon'
      ? '환불완료'
      : '반품완료',
  color: 'dark2',
},



export interface OrderStatusFlagProps {
  status: OrderStatusCode;
  date?: string;
  extraFlags?: ExtraFlagCode[];
  orderCase?: OrderCase; // 추가
}



const resolvedLabel =
  typeof meta.label === 'function' ? meta.label(orderCase) : meta.label;

const flags = [
  ...(extraFlags?.map((k) => extraFlagMetaMap[k]) ?? []),
  { label: resolvedLabel, color: meta.color },
];


// 컴포넌트 호출
<OrderStatusFlag
  status={orderData.status}
  orderCase={orderData.orderCase}   // 데이터의 orderCase 전달
  date={orderData.date}
/>
