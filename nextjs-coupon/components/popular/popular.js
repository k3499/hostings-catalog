import styles from "./popular.module.css";
import Card from "../card/card";
import useSWRInfinite from "swr/infinite";
import fetcher from "../../lib/api";

export default function Popular({ siteList, siteListMeta, pageSize }) {
  console.log(pageSize);
  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index) =>
        `https://api.hostoncoast.ru/api/sites-lists?sort[0]=order%3Aasc&populate=logo&pagination[page]=${
          index + 1
        }&pagination[pageSize]=${pageSize}&populate=slides`,
      fetcher,
      {
        fallbackData: siteList, // Передача начальных данных
      }
    );

  const sites = data ? [].concat(...data) : []; //Собираем данные в один массив
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize);
  console.log(data);
  return (
    <section className={styles.popular}>
      <div className={styles.wrapper}>
        {sites.map((element, id) => {
          // `sites` — это массив ответов API каждой страницы.
          return (
            <Card
              key={element.id}
              id={id}
              site={element.attributes}
              pageSize={pageSize}
            />
          );
        })}
      </div>
      {isReachingEnd ? (
        siteListMeta.pagination.pageCount > 1 ? (
          //если больше одной страницы и все загружено
          <p className={styles.endText}>Загружены все элементы</p>
        ) : (
          //если всего одна страница то ничего не показывать
          ""
        )
      ) : (
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)} //setSize функция из swr
          className={styles.loadMore}
        >
          {isLoadingMore ? "Загрузка..." : "Загрузить еще"}
        </button>
      )}
    </section>
  );
}
