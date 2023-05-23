import { GetServerSideProps } from 'next'

interface HomePageProps {
  data: string;
}

export default function HomePage({ data }: HomePageProps) {
  if (!data) {
    return <div>Error: Data could not be fetched.</div>
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <p>{data}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data = null;
  try {
    const res = await fetch('http://backend:8080') // Go APIのURL
    data = await res.text()
  } catch (error) {
    console.error("Failed to fetch data from API:", error)
  }

  return {
    props: {
      data,
    },
  }
}
