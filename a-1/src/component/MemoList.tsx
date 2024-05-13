import { FC } from "react";
import { SButton, SContainer, SMemoWrapper } from "../styled/common";
import { Props } from "../types/Props";
export const MemoList: FC<Props> = props => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
    <p>メモ一覧</p>
    <ul>
      {memos.map((memo, index) => (
        <li key={memo}>
          <SMemoWrapper>
            <p>{memo}</p>
            <SButton onClick={() => onClickDelete(index)}>削除</SButton>
          </SMemoWrapper>
        </li>
      ))}
    </ul>
    </SContainer>
  );
};
