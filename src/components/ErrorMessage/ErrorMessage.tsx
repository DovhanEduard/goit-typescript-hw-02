import css from './ErrorMessage.module.css';

type Props = {
  error: string
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <div>
      <h3 className={css.error}>{error}</h3>
    </div>
  );
};

export default ErrorMessage;
