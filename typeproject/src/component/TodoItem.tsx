import { Todo } from "../types";

interface Props extends Todo {
  onclickDelete: (id: number) => void;
}
export default function TodoItem(props: Props) {

  const onClickButton = () => {
    props.onclickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
