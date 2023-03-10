import { Technologies } from "./technologies";
import Column from "../Column";

interface Props {
  stack: Array<Technologies>;
  title: string;
  styles?: string;
}
function Card({ stack, title, styles }: Props) {
  return (
    <Column widthMobile={12} widthDestok={4} styles="text-center">
      <div className={`card shadow-sm ${styles}`}>
        <div className="card-body">
          <h3 className="card-title mb-3">{title}</h3>
          <ul className="card-text">
            {stack?.map((el) => (
              <li key={el.id}>
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Column>
  );
}

export default Card;
