import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BottomMedia({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) {
  console.log("this is bottom mediass");
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} />
      {isFetchingNextPage && <div>Loading more characters...</div>}
    </>
  );
}
