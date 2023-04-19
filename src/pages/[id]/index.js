import Preview from "@containers/Preview";
import PreviewLayout from "@layouts/Adapter/PreviewLayout";
import showCard from "@repositories/card/showCard";
import indexCard from "@repositories/card/indexCard";

export async function getStaticPaths() {
  const { data } = await indexCard();
  const paths = data.map((str) => ({ params: { id: str } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const { data } = await showCard(id);

    return {
      props: {
        id,
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Pages(props) {
  return <PreviewLayout containers={Preview} {...props} />;
}
