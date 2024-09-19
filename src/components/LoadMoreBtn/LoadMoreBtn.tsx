type Props = {
  onLoadMore: () => void,
};

const LoadMoreBtn = ({ onLoadMore }: Props) => {
  return (
    <button type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
