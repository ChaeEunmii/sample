interface CO_SP_01Props {
  spacing: number;
}

export const CO_SP_01 = ({ spacing }: CO_SP_01Props) => {
  return <div style={{ marginTop: `${spacing}px` }} />;
};

CO_SP_01.displayName = 'CO_SP_01';
