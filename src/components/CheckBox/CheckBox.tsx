type CheckBoxProps = {
  prefCode: number;
  prefName: string;
};

export const CheckBox = (checkBoxProps: CheckBoxProps) => {
  const { prefName } = checkBoxProps;

  return (
    <div>
      <input
        type="checkbox"
        id={prefName}
        name="prefectureName"
        value={prefName}
      />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  );
};
